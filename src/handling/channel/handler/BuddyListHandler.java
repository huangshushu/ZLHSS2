/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package handling.channel.handler;

import static client.BuddyList.BuddyOperation.ADDED;
import static client.BuddyList.BuddyOperation.DELETED;

import client.BuddyList;
import client.BuddyEntry;
import client.MapleCharacter;
import client.MapleClient;
import client.BuddyList.BuddyAddResult;
import client.BuddyList.BuddyOperation;
import handling.channel.ChannelServer;
import handling.world.World;
import tools.FilePrinter;
import tools.MaplePacketCreator;
import tools.data.LittleEndianAccessor;

public class BuddyListHandler {

    private static void nextPendingRequest(final MapleClient c) {
        BuddyEntry pendingBuddyRequest = c.getPlayer().getBuddylist().pollPendingRequest();
        if (pendingBuddyRequest != null) {
            c.sendPacket(MaplePacketCreator.requestBuddylistAdd(pendingBuddyRequest.getCharacterId(), pendingBuddyRequest.getName(), pendingBuddyRequest.getLevel(), pendingBuddyRequest.getJob()));
        }
    }

    public static final void BuddyOperationHandler(final LittleEndianAccessor slea, final MapleClient client) {

        MapleCharacter player = client.getPlayer();

        final int mode = slea.readByte();

        final BuddyList buddyList = player.getBuddylist();

        switch (mode) {
            case 0: {
                final int unknow1 = slea.readInt();
                final int unknow2 = slea.readInt();
                client.sendPacket(MaplePacketCreator.updateBuddylist(player.getBuddylist().getBuddies()));
                break;
            }
            case 1: {
                final String buddyName = slea.readMapleAsciiString();
                final String buddyGroup = slea.readMapleAsciiString();
                final BuddyEntry oldBuddy = buddyList.get(buddyName);

                if (buddyName.length() > 13 || buddyGroup.length() > 16) {
                    nextPendingRequest(client);

                    return;
                }

                /* 检查好友是否存在 */
                if (oldBuddy != null && oldBuddy.getGroup().equals(buddyGroup)) {
                    client.sendPacket(MaplePacketCreator.buddylistMessage((byte) 11));
                    nextPendingRequest(client);

                    return;
                }

                /* 如果存在，群组不一样则改群组*/
                if (oldBuddy != null) {
                    oldBuddy.setGroup(buddyGroup);
                    client.sendPacket(MaplePacketCreator.updateBuddylist(buddyList.getBuddies()));
                    nextPendingRequest(client);

                    return;
                }
                /* 检查好友是否满了 */
                if (buddyList.isFull()) {
                    client.sendPacket(MaplePacketCreator.buddylistMessage((byte) 11));
                    return;
                }
                /* 从整个游戏找这个名字的角色所在的频道 */
                int buddyChannel = World.Find.findChannel(buddyName);
                MapleCharacter buddyChar;
                BuddyEntry buddy = null;
                BuddyAddResult reqRes = null;

                if (buddyChannel > 0) {
                    buddyChar = ChannelServer.getInstance(buddyChannel).getPlayerStorage().getCharacterByName(buddyName);
                    /* 如果是GM则无法被普通玩家加入 */
                    if (!buddyChar.isGM() || player.isGM()) {
                        buddy = new BuddyEntry(buddyChar.getName(),
                                buddyChar.getId(),
                                buddyGroup,
                                buddyChannel,
                                false,
                                buddyChar.getLevel(),
                                buddyChar.getJob());
                    }
                } else {
                    buddy = BuddyEntry.getByNameFromDB(buddyName);
                }

                /* 无此角色*/
                if (buddy == null) {
                    client.sendPacket(MaplePacketCreator.buddylistMessage((byte) 15));
                    nextPendingRequest(client);
                    return;
                }

                /* 如果好友在线上 直接传封包过去囉*/
                if (buddyChannel > 0) {
                    reqRes = World.Buddy.requestBuddyAdd(buddyName, client.getChannel(), client.getPlayer().getId(), client.getPlayer().getName(), client.getPlayer().getLevel(), client.getPlayer().getJob());
                } else {

                    final int buddyCount = BuddyList.getBuddyCount(buddy.getCharacterId(), 0);

                    if (buddyCount == -1) {
                        throw new RuntimeException("Result set expected");
                    } else if (buddyCount >= BuddyList.getBuddyCapacity(buddy.getCharacterId())) {
                        reqRes = BuddyAddResult.BUDDYLIST_FULL;
                    }
                    int pending = BuddyList.getBuddyPending(buddy.getCharacterId(), player.getId());
                    if (pending > -1) {
                        reqRes = BuddyAddResult.ALREADY_ON_LIST;
                    }
                }

                if (reqRes == BuddyAddResult.BUDDYLIST_FULL) {

                    client.sendPacket(MaplePacketCreator.buddylistMessage((byte) 12));

                    break;

                } else {
                    if (reqRes == BuddyAddResult.ALREADY_ON_LIST && buddyChannel > 0) {
                        MapleCharacter buddyChara;
                        buddyChara = ChannelServer.getInstance(buddyChannel).getPlayerStorage().getCharacterByName(buddyName);
                        notifyRemoteChannel(client, buddyChannel, buddy.getCharacterId(), buddyGroup, ADDED);
                        buddyList.put(new BuddyEntry(buddyName, buddyChara.getId(), buddyGroup, buddyChannel, true, buddyChara.getLevel(), buddyChara.getJob()));
                        client.sendPacket(MaplePacketCreator.updateBuddylist(buddyList.getBuddies()));
                        client.sendPacket(MaplePacketCreator.updateBuddyChannel(buddyChara.getId(), buddyChannel - 1));
                        break;
                    } else {
                        BuddyList.addBuddyToDB(player, buddy);
                    }
                    buddyList.put(buddy);
                    client.sendPacket(MaplePacketCreator.updateBuddylist(buddyList.getBuddies()));
                }

                nextPendingRequest(client);
                break;
            }

            case 2: {
                final int buddyCharId = slea.readInt();

                if (buddyList.isFull()) {
                    client.sendPacket(MaplePacketCreator.buddylistMessage((byte) 11));
                    nextPendingRequest(client);
                    return;
                }

                final int buddyChannel = World.Find.findChannel(buddyCharId);
                BuddyEntry buddy;

                if (buddyChannel < 0) {
                    buddy = BuddyEntry.getByIdfFromDB(buddyCharId);
                } else {
                    final MapleCharacter buddyChar = ChannelServer.getInstance(buddyChannel).getPlayerStorage().getCharacterById(buddyCharId);
                    buddy = new BuddyEntry(
                            buddyChar.getName(),
                            buddyChar.getId(),
                            BuddyList.DEFAULT_GROUP,
                            buddyChannel,
                            true,
                            buddyChar.getLevel(),
                            buddyChar.getJob()
                    );

                }

                if (buddy == null) {
                    client.sendPacket(MaplePacketCreator.buddylistMessage((byte) 11));
                } else {
                    buddyList.put(buddy);
                    client.sendPacket(MaplePacketCreator.updateBuddylist(buddyList.getBuddies()));
                    notifyRemoteChannel(client, buddyChannel, buddyCharId, "其他", ADDED);
                }
                nextPendingRequest(client);
                break;
            }

            case 3: {
                final int buddyCharId = slea.readInt();
                final BuddyEntry buddy = buddyList.get(buddyCharId);
                if (buddy != null && buddy.isVisible()) {
                    notifyRemoteChannel(client, World.Find.findChannel(buddyCharId), buddyCharId, buddy.getGroup(), DELETED);

                }
                buddyList.remove(buddyCharId);
                client.sendPacket(MaplePacketCreator.updateBuddylist(player.getBuddylist().getBuddies()));
                nextPendingRequest(client);
                break;
            }
            case 82: {
                final int unknow1 = slea.readShort();
                final int unknow2 = slea.readByte();
                client.sendPacket(MaplePacketCreator.updateBuddylist(player.getBuddylist().getBuddies()));
                break;
            }
            case 125: {// TODO
                //5A 05 00 00 00 00 00 C6 01 CB FD 02 00 C2 01 CB FD 83 FF 00 00 47 00 03 21 00 00 86 01 CB FD 83 FF 00 00 4C 00 03 DD 01 00 86 01 CB FD C6 01 CB FD
                break;
            }
            default: {
                FilePrinter.printError("BuddyListHandler.txt", "Unknown Buddylist Operation " + String.valueOf(mode) + " " + slea.toString());
                break;
            }
        }

    }

    private static void notifyRemoteChannel(final MapleClient c, final int remoteChannel, final int otherCid, final String group, final BuddyOperation operation) {
        final MapleCharacter player = c.getPlayer();

        if (remoteChannel > 0) {
            World.Buddy.buddyChanged(otherCid, player.getId(), player.getName(), c.getChannel(), operation, player.getLevel(), player.getJob(), group);
        }
    }
}
