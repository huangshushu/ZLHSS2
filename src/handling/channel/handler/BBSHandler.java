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

import client.MapleClient;
import handling.world.World;
import handling.world.guild.MapleBBSThread;
import java.util.List;
import tools.MaplePacketCreator;
import tools.data.LittleEndianAccessor;

public class BBSHandler {

    enum BBSOperation {

        ADD_THREAD((byte) 0),
        DELETE_THREAD((byte) 1),
        LIST_THREAD((byte) 2),
        DISPLAY_THREAD((byte) 3),
        ADD_REPLY((byte) 4),
        DELETE_REPLY((byte) 5);

        byte value = -1;

        private BBSOperation(byte value) {
            this.value = value;
        }

        public int getValue() {
            return value;
        }

        public static BBSOperation getByValue(byte value) {
            for (BBSOperation o : BBSOperation.values()) {
                if (o.getValue() == value) {
                    return o;
                }
            }
            return null;
        }
    }

    private static String correctLength(final String in, final int maxSize) {
        if (in.length() > maxSize) {
            return in.substring(0, maxSize);
        }
        return in;
    }

    public static final void HandleBBS(final LittleEndianAccessor slea, final MapleClient c) {
        if (c.getPlayer().getGuildId() <= 0) {
            return;
        }
        /*
         ------------------------ 2016-02-22 18:56:15 ------------------------
         java.lang.ArrayIndexOutOfBoundsException

         ------------------------ 2016-02-22 18:56:15 ------------------------
         Packet: 148
         All: 
         94 00 
         02 
         00 00 00 00
         Now: 
        
         */
        try {

            int localThreadId = 0;
            int read = slea.readByte();
            final BBSOperation action = BBSOperation.getByValue((byte) read);
            if (action != null) {
                switch (action) {
                    case ADD_THREAD: {
                        final boolean isEdit = slea.readByte() > 0;
                        if (isEdit) {
                            localThreadId = slea.readInt();
                        }
                        final boolean isNotice = slea.readByte() > 0;
                        final String title = correctLength(slea.readMapleAsciiString(), 25);
                        final String content = correctLength(slea.readMapleAsciiString(), 600);
                        final int icon = slea.readInt();

                        if (icon >= 0x64 && icon <= 0x6a) {
                            if (!c.getPlayer().haveItem(5290000 + icon - 0x64, 1, false, true)) {
                                return; // hax, using an nx icon that s/he doesn't have
                            }
                        } else if (icon < 0 || icon > 2) {
                            return; // hax, using an invalid icon
                        }
                        if (!isEdit) {
                            addNewBBSThread(c, title, content, icon, isNotice);
                        } else {
                            editBBSThread(c, title, content, icon, localThreadId);
                        }
                    }
                    case DELETE_THREAD: {
                        localThreadId = slea.readInt();
                        deleteBBSThread(c, localThreadId);
                    }
                    case LIST_THREAD: {
                        try {
                            final int start = slea.readInt();
                            listBBSThreads(c, start * 10);
                        } catch (ArrayIndexOutOfBoundsException ex) {

                        }
                    }
                    case DISPLAY_THREAD: {
                        try {
                            localThreadId = slea.readInt();
                            displayThread(c, localThreadId);
                        } catch (ArrayIndexOutOfBoundsException ex) {

                        }
                    }
                    case ADD_REPLY: {

                        localThreadId = slea.readInt();
                        final String text = correctLength(slea.readMapleAsciiString(), 25);
                        newBBSReply(c, localThreadId, text);
                    }
                    case DELETE_REPLY: // delete reply
                        localThreadId = slea.readInt();
                        int replyid = slea.readInt();
                        deleteBBSReply(c, localThreadId, replyid);
                        break;
                    default:
                        System.err.println("未处理的BBS动作: " + read);
                        break;
                }
            } else {
                System.err.println("未处理的BBS动作: " + read);
            }
        } catch (ArrayIndexOutOfBoundsException ex) {

        }
    }

    private static void listBBSThreads(MapleClient c, int start) {
        c.sendPacket(MaplePacketCreator.BBSThreadList(World.Guild.getBBS(c.getPlayer().getGuildId()), start));
    }

    private static void newBBSReply(final MapleClient c, final int localthreadid, final String text) {
        World.Guild.addBBSReply(c.getPlayer().getGuildId(), localthreadid, text, c.getPlayer().getId());
        displayThread(c, localthreadid);
    }

    private static void editBBSThread(final MapleClient c, final String title, final String text, final int icon, final int localthreadid) {
        World.Guild.editBBSThread(c.getPlayer().getGuildId(), localthreadid, title, text, icon, c.getPlayer().getId(), c.getPlayer().getGuildRank());
        displayThread(c, localthreadid);
    }

    private static void addNewBBSThread(final MapleClient c, final String title, final String text, final int icon, final boolean bNotice) {
        displayThread(c, World.Guild.addBBSThread(c.getPlayer().getGuildId(), title, text, icon, bNotice, c.getPlayer().getId()));
    }

    private static void deleteBBSThread(final MapleClient c, final int localthreadid) {
        World.Guild.deleteBBSThread(c.getPlayer().getGuildId(), localthreadid, c.getPlayer().getId(), (int) c.getPlayer().getGuildRank());
    }

    private static void deleteBBSReply(final MapleClient c, final int localthreadid, final int replyid) {
        World.Guild.deleteBBSReply(c.getPlayer().getGuildId(), localthreadid, replyid, c.getPlayer().getId(), (int) c.getPlayer().getGuildRank());
        displayThread(c, localthreadid);
    }

    private static void displayThread(final MapleClient c, final int localthreadid) {
        final List<MapleBBSThread> bbsList = World.Guild.getBBS(c.getPlayer().getGuildId());
        if (bbsList != null) {
            for (MapleBBSThread t : bbsList) {
                if (t != null && t.localthreadID == localthreadid) {
                    c.sendPacket(MaplePacketCreator.showThread(t));
                }
            }
        }
    }
}
