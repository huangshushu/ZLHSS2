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

import client.inventory.IItem;
import client.MapleCharacter;
import client.MapleClient;
import client.MapleLieDetector;
import client.inventory.MapleInventoryType;
import client.MapleStat;
import client.inventory.ItemFlag;
import constants.GameConstants;
import handling.world.MapleParty;
import handling.world.MaplePartyCharacter;
import handling.world.World;
import java.io.UnsupportedEncodingException;
import scripting.ReactorScriptManager;
import server.events.MapleCoconut;
import server.events.MapleCoconut.MapleCoconuts;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.events.MapleEventType;
import server.maps.FieldLimitType;
import server.maps.MapleDoor;
import server.maps.MapleMap;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.maps.MapleReactor;
import server.quest.MapleQuest;
import tools.ArrayMap;
import tools.FilePrinter;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.StringUtil;
import tools.data.LittleEndianAccessor;

public class PlayersHandler {

    public static void Note(final LittleEndianAccessor slea, final MapleCharacter chr) {
        final byte type = slea.readByte();

        switch (type) {
            case 0:
                String name = slea.readMapleAsciiString();
                String msg = slea.readMapleAsciiString();
                boolean fame = slea.readByte() > 0;
                slea.readInt(); //0?
                IItem itemz = chr.getCashInventory().findByCashId((int) slea.readLong());
                if (itemz == null || !itemz.getGiftFrom().equalsIgnoreCase(name) || !chr.getCashInventory().canSendNote(itemz.getUniqueId())) {
                    return;
                }
                try {
                    chr.sendNote(name, msg, fame ? 1 : 0);
                    chr.getCashInventory().sendedNote(itemz.getUniqueId());
                } catch (Exception e) {

                }
                break;
            case 1:
                final byte num = slea.readByte();
                slea.skip(2);

                for (int i = 0; i < num; i++) {
                    final int id = slea.readInt();
                    chr.deleteNote(id, 0);
                }
                break;
            default:
                System.out.println("Unhandled note action, " + type + "");
        }
    }

    public static void GiveFame(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        final int who = slea.readInt();
        final int mode = slea.readByte();

        final int famechange = mode == 0 ? -1 : 1;
        final MapleCharacter target = (MapleCharacter) chr.getMap().getMapObject(who, MapleMapObjectType.PLAYER);

        if (target != null) {
            if (target.getId() == chr.getId()) { // faming self
                FileoutputUtil.logToFile("logs/Hack/Ban/修改封包.txt", "\r\n " + FileoutputUtil.NowTime() + " 玩家：" + chr.getName() + "(" + chr.getId() + ") 修改名声封包，使用时封锁。加自己名声");
                World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, "[封锁系统] " + chr.getName() + " 因为修改封包而被管理员永久停权。"));
                World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语]  " + chr.getName() + "(" + chr.getId() + ") 修改名声封包，使用时封锁。加自己名声"));
                chr.ban("修改封包", true, true, false);
                chr.getClient().getSession().close();
                return;
            } else if (chr.getLevel() < 15) {
                FileoutputUtil.logToFile("logs/Hack/Ban/修改封包.txt", "\r\n " + FileoutputUtil.NowTime() + " 玩家：" + chr.getName() + "(" + chr.getId() + ")(等级:" + chr.getLevel() + ") 修改名声封包，使用时封锁。十五等以下加名声");
                World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, "[封锁系统] " + chr.getName() + " 因为修改封包而被管理员永久停权。"));
                World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语]  " + chr.getName() + "(" + chr.getId() + ")(等级:" + chr.getLevel() + ") 修改名声封包，使用时封锁。十五等以下加名声"));
                chr.ban("修改封包", true, true, false);
                chr.getClient().getSession().close();
                return;
            }
            switch (chr.canGiveFame(target)) {
                case OK:
                    if (Math.abs(target.getFame() + famechange) <= 30000) {
                        target.addFame(famechange);
                        target.updateSingleStat(MapleStat.FAME, target.getFame());
                    }
                    if (!chr.isGM()) {
                        chr.hasGivenFame(target);
                    }
                    c.sendPacket(MaplePacketCreator.giveFameResponse(mode, target.getName(), target.getFame()));
                    target.getClient().sendPacket(MaplePacketCreator.receiveFame(mode, chr.getName()));
                    break;
                case NOT_TODAY:
                    c.sendPacket(MaplePacketCreator.giveFameErrorResponse(3));
                    break;
                case NOT_THIS_MONTH:
                    c.sendPacket(MaplePacketCreator.giveFameErrorResponse(4));
                    break;
            }
        }
    }

    public static void UseDoor(final LittleEndianAccessor slea, final MapleCharacter chr) {
        final int oid = slea.readInt();
        final boolean mode = slea.readByte() == 0; // specifies if backwarp or not, 1 town to target, 0 target to town
        //同队的都可以进时空门
        MapleParty party = chr.getParty();
        for (MapleMapObject obj : chr.getMap().getAllDoorsThreadsafe()) {
            final MapleDoor door = (MapleDoor) obj;
            if (door.getOwnerId() == oid) {
                door.warp(chr, mode);
                break;
            }
            if (party != null && party.getMemberById(door.getOwnerId()) != null) {
                door.warp(chr, mode);
                break;
            }
        }
    }

    public static void TransformPlayer(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        // D9 A4 FD 00
        // 11 00
        // A0 C0 21 00
        // 07 00 64 66 62 64 66 62 64
        chr.updateTick(slea.readInt());
        final byte slot = (byte) slea.readShort();
        final int itemId = slea.readInt();
        final String target = slea.readMapleAsciiString().toLowerCase();

        final MapleInventoryType type = GameConstants.getInventoryType(itemId);
        IItem toUse = null;
        if (type != null && chr.getInventory(type) != null) {
            toUse = chr.getInventory(type).findById(itemId);
        }
        if (toUse == null || toUse.getQuantity() < 1 || toUse.getItemId() != itemId) {
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }
        switch (itemId) {
            case 2212000:
                for (final MapleCharacter search_chr : c.getPlayer().getMap().getCharactersThreadsafe()) {
                    if (search_chr.getName().toLowerCase().equals(target)) {
                        MapleItemInformationProvider.getInstance().getItemEffect(2210023).applyTo(search_chr);
                        search_chr.dropMessage(6, chr.getName() + " has played a prank on you!");
                        MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
                    }
                }
                break;
        }
    }

    public static void HitReactor(final LittleEndianAccessor slea, final MapleClient c) {
        final int oid = slea.readInt();
        final int charPos = slea.readInt();
        final short stance = slea.readShort();
        final MapleReactor reactor = c.getPlayer().getMap().getReactorByOid(oid);

        if (reactor == null || !reactor.isAlive()) {
            return;
        }
        if (c.getPlayer().isGM()) {
            c.getPlayer().dropMessage("[系统提示]你已攻击反应物" + reactor.getReactorId());
        }
        reactor.hitReactor(charPos, stance, c);
    }

    public static void TouchReactor(final LittleEndianAccessor slea, final MapleClient c) {
        final int oid = slea.readInt();
        final boolean touched = slea.readByte() > 0;
        final MapleReactor reactor = c.getPlayer().getMap().getReactorByOid(oid);
        if (!touched || reactor == null || !reactor.isAlive() || reactor.getReactorId() < 6109013 || reactor.getReactorId() > 6109027) {
            return;
        }
        
        if (c.getPlayer().isAdmin()) {
            c.getPlayer().dropMessage(5, new StringBuilder().append("反应堆信息 - oid: ").append(oid).append(" 是否定时出现: ").append(reactor.isTimerActive()).append(" 反应堆类型: ").append(reactor.getReactorType()).toString());
        }
        
        ReactorScriptManager.getInstance().act(c, reactor); //not sure how touched boolean comes into play
    }

    public static void hitCoconut(LittleEndianAccessor slea, MapleClient c) {
        /*CB 00 A6 00 06 01
         * A6 00 = coconut id
         * 06 01 = ?
         */
        int id = slea.readShort();
        String co = "农夫的乐趣";
        MapleCoconut map = null;
        //map = (MapleCoconut) c.getChannelServer().getEvent(MapleEventType.打果子);
        if (map == null || !map.isRunning()) {
            //map = (MapleCoconut) c.getChannelServer().getEvent(MapleEventType.打瓶盖);
            co = "可乐熊";
            if (map == null || !map.isRunning()) {
                return;
            }
        }
        //System.out.println("Coconut1");
        MapleCoconuts nut = map.getCoconut(id);
        if (nut == null || !nut.isHittable()) {
            return;
        }
        if (System.currentTimeMillis() < nut.getHitTime()) {
            return;
        }
        //System.out.println("Coconut2");
        if (nut.getHits() > 2 && Math.random() < 0.4 && !nut.isStopped()) {
            //System.out.println("Coconut3-1");
            nut.setHittable(false);
            if (Math.random() < 0.01 && map.getStopped() > 0) {
                nut.setStopped(true);
                map.stopCoconut();
                c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.hitCoconut(false, id, 1));
                return;
            }
            nut.resetHits(); // For next event (without restarts)
            //System.out.println("Coconut4");
            if (Math.random() < 0.05 && map.getBombings() > 0) {
                //System.out.println("Coconut5-1");
                c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.hitCoconut(false, id, 2));
                map.bombCoconut();
            } else if (map.getFalling() > 0) {
                //System.out.println("Coconut5-2");
                c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.hitCoconut(false, id, 3));
                map.fallCoconut();
                if (c.getPlayer().getTeam() == 0) {
                    map.addMapleScore();
                    //c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(5, c.getPlayer().getName() + " of Team Maple knocks down a " + co + "."));
                } else {
                    map.addStoryScore();
                    //c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(5, c.getPlayer().getName() + " of Team Story knocks down a " + co + "."));
                }
                c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.coconutScore(map.getCoconutScore()));
            }
        } else {
            //System.out.println("Coconut3-2");
            nut.hit();
            c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.hitCoconut(false, id, 1));
        }
    }

    public static void FollowRequest(final LittleEndianAccessor slea, final MapleClient c) {
        MapleCharacter tt = c.getPlayer().getMap().getCharacterById(slea.readInt());
        if (slea.readByte() > 0) {
            //1 when changing map
            tt = c.getPlayer().getMap().getCharacterById(c.getPlayer().getFollowId());
            if (tt != null && tt.getFollowId() == c.getPlayer().getId()) {
                tt.setFollowOn(true);
                c.getPlayer().setFollowOn(true);
            } else {
                c.getPlayer().checkFollow();
            }
            return;
        }
        if (slea.readByte() > 0) { //cancelling follow
            tt = c.getPlayer().getMap().getCharacterById(c.getPlayer().getFollowId());
            if (tt != null && tt.getFollowId() == c.getPlayer().getId() && c.getPlayer().isFollowOn()) {
                c.getPlayer().checkFollow();
            }
            return;
        }
        if (tt != null && tt.getPosition().distanceSq(c.getPlayer().getPosition()) < 10000 && tt.getFollowId() == 0 && c.getPlayer().getFollowId() == 0 && tt.getId() != c.getPlayer().getId()) { //estimate, should less
            tt.setFollowId(c.getPlayer().getId());
            tt.setFollowOn(false);
            tt.setFollowInitiator(false);
            c.getPlayer().setFollowOn(false);
            c.getPlayer().setFollowInitiator(false);
            tt.getClient().sendPacket(MaplePacketCreator.followRequest(c.getPlayer().getId()));
        } else {
            c.sendPacket(MaplePacketCreator.serverNotice(1, "You are too far away."));
        }
    }

    public static void FollowReply(final LittleEndianAccessor slea, final MapleClient c) {
        if (c.getPlayer().getFollowId() > 0 && c.getPlayer().getFollowId() == slea.readInt()) {
            MapleCharacter tt = c.getPlayer().getMap().getCharacterById(c.getPlayer().getFollowId());
            if (tt != null && tt.getPosition().distanceSq(c.getPlayer().getPosition()) < 10000 && tt.getFollowId() == 0 && tt.getId() != c.getPlayer().getId()) { //estimate, should less
                boolean accepted = slea.readByte() > 0;
                if (accepted) {
                    tt.setFollowId(c.getPlayer().getId());
                    tt.setFollowOn(true);
                    tt.setFollowInitiator(true);
                    c.getPlayer().setFollowOn(true);
                    c.getPlayer().setFollowInitiator(false);
                    c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.followEffect(tt.getId(), c.getPlayer().getId(), null));
                } else {
                    c.getPlayer().setFollowId(0);
                    tt.setFollowId(0);
                    tt.getClient().sendPacket(MaplePacketCreator.getFollowMsg(5));
                }
            } else {
                if (tt != null) {
                    tt.setFollowId(0);
                    c.getPlayer().setFollowId(0);
                }
                c.sendPacket(MaplePacketCreator.serverNotice(1, "You are too far away."));
            }
        } else {
            c.getPlayer().setFollowId(0);
        }
    }

    public static void UnlockItem(final LittleEndianAccessor slea, final MapleClient c) { //封印之锁解除钥匙 ID:2051000
        // c.getPlayer().dropMessage(1, "要解锁物品找GM。");
        // c.sendPacket(MaplePacketCreator.enableActions());
        //95 00 | 01 00 | 02 00 | 02 00
        short Itemsize = slea.readShort();
        short _type = slea.readShort();
        short slot = slea.readShort();

        final MapleInventoryType type = MapleInventoryType.getByType((byte) _type);
        final IItem item = c.getPlayer().getInventory(type).getItem(slot);
        if (item == null) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        boolean add = false;
        final int UnlockItem = 2051000;
        java.util.Map<IItem, MapleInventoryType> eqs = new ArrayMap<>();
        if (ItemFlag.LOCK.check(item.getFlag())) {
            item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
            add = true;
            c.getPlayer().reloadC();
            c.getPlayer().dropMessage(1, "已经解锁！");
        } else if (ItemFlag.UNTRADEABLE.check(item.getFlag())) {
            item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADEABLE.getValue()));
            add = true;
            c.getPlayer().reloadC();
            c.getPlayer().dropMessage(1, "已经解锁！");
        }
        if (add) {
            eqs.put(item, type);
            MapleInventoryManipulator.removeById(c.getPlayer().getClient(), MapleInventoryType.USE, UnlockItem, 1, false, false);
        }
        add = false;
    }

    public static void Solomon(final LittleEndianAccessor slea, final MapleClient c) {
        c.sendPacket(MaplePacketCreator.enableActions());
        c.getPlayer().updateTick(slea.readInt());
        IItem item = c.getPlayer().getInventory(MapleInventoryType.USE).getItem(slea.readShort());
        if (item == null || item.getItemId() != slea.readInt() || item.getQuantity() <= 0 || c.getPlayer().getGachExp() > 0 || c.getPlayer().getLevel() > 50 || MapleItemInformationProvider.getInstance().getItemEffect(item.getItemId()).getEXP() <= 0) {
            return;
        }
        c.getPlayer().setGachExp(c.getPlayer().getGachExp() + MapleItemInformationProvider.getInstance().getItemEffect(item.getItemId()).getEXP());
        MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, item.getPosition(), (short) 1, false);
        c.getPlayer().updateSingleStat(MapleStat.GACHAPONEXP, c.getPlayer().getGachExp());
    }

    public static void GachExp(final LittleEndianAccessor slea, final MapleClient c) {
        c.sendPacket(MaplePacketCreator.enableActions());
        c.getPlayer().updateTick(slea.readInt());
        if (c.getPlayer().getGachExp() <= 0) {
            return;
        }
        c.getPlayer().gainExp(c.getPlayer().getGachExp() * GameConstants.getExpRate_Quest(c.getPlayer().getLevel()), true, true, false);
        c.getPlayer().setGachExp(0);
        c.getPlayer().updateSingleStat(MapleStat.GACHAPONEXP, 0);
    }

    public static void RingAction(final LittleEndianAccessor slea, final MapleClient c) {
        final byte mode = slea.readByte();
        if (mode == 0) {
            final String name = slea.readMapleAsciiString();
            final int itemid = slea.readInt();
            final int newItemId = 1112300 + (itemid - 2240004);
            final MapleCharacter chr = c.getChannelServer().getPlayerStorage().getCharacterByName(name);
            int errcode = 0;
            if (c.getPlayer().getMarriageId() > 0) {
                errcode = 0x17;
            } else if (c.getPlayer().haveItem(newItemId)) {
                c.getPlayer().dropMessage("请先将身上的戒指丢弃唷。");
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            } else if (chr == null) {
                errcode = 0x12;
            } else if (chr.getMapId() != c.getPlayer().getMapId()) {
                errcode = 0x13;
            } else if (!c.getPlayer().haveItem(itemid, 1) || itemid < 2240004 || itemid > 2240015) {
                errcode = 0x0D;
            } else if (chr.getMarriageId() > 0 || chr.getMarriageItemId() > 0) {
                errcode = 0x18;
            } else if (!MapleInventoryManipulator.checkSpace(c, newItemId, 1, "")) {
                errcode = 0x14;
            } else if (!MapleInventoryManipulator.checkSpace(chr.getClient(), newItemId, 1, "")) {
                errcode = 0x15;
            }
            if (errcode > 0) {
                c.sendPacket(MaplePacketCreator.sendEngagement((byte) errcode, 0, null, null));
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }
            c.getPlayer().setMarriageItemId(itemid);
            if (chr != null) {
                chr.getClient().sendPacket(MaplePacketCreator.sendEngagementRequest(c.getPlayer().getName(), c.getPlayer().getId()));
            }
            //1112300 + (itemid - 2240004)
        } else if (mode == 1) {
            c.getPlayer().setMarriageItemId(0);
        } else if (mode == 2) { //accept/deny proposal
            final boolean accepted = slea.readByte() > 0;
            final String name = slea.readMapleAsciiString();
            final int id = slea.readInt();
            final MapleCharacter chr = c.getChannelServer().getPlayerStorage().getCharacterByName(name);
            if (c.getPlayer().getMarriageId() > 0 || chr == null || chr.getId() != id || chr.getMarriageItemId() <= 0 || !chr.haveItem(chr.getMarriageItemId(), 1) || chr.getMarriageId() > 0) {
                c.sendPacket(MaplePacketCreator.sendEngagement((byte) 0x1D, 0, null, null));
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }
            if (accepted) {
                final int newItemId = 1112300 + (chr.getMarriageItemId() - 2240004);
                if (!MapleInventoryManipulator.checkSpace(c, newItemId, 1, "") || !MapleInventoryManipulator.checkSpace(chr.getClient(), newItemId, 1, "")) {
                    c.sendPacket(MaplePacketCreator.sendEngagement((byte) 0x15, 0, null, null));
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                MapleInventoryManipulator.addById(c, newItemId, (short) 1);
                MapleInventoryManipulator.removeById(chr.getClient(), MapleInventoryType.USE, chr.getMarriageItemId(), 1, false, false);
                MapleInventoryManipulator.addById(chr.getClient(), newItemId, (short) 1);
                chr.getClient().sendPacket(MaplePacketCreator.sendEngagement((byte) 0x10, newItemId, chr, c.getPlayer()));
                chr.setMarriageId(c.getPlayer().getId());
                c.getPlayer().setMarriageId(chr.getId());
            } else {
                chr.getClient().sendPacket(MaplePacketCreator.sendEngagement((byte) 0x1E, 0, null, null));
            }
            c.sendPacket(MaplePacketCreator.enableActions());
            chr.setMarriageItemId(0);
        } else if (mode == 3) { //drop, only works for ETC
            final int itemId = slea.readInt();
            final MapleInventoryType type = GameConstants.getInventoryType(itemId);
            final IItem item = c.getPlayer().getInventory(type).findById(itemId);
            if (item != null && type == MapleInventoryType.ETC && itemId / 10000 == 421) {
                MapleInventoryManipulator.drop(c, type, item.getPosition(), item.getQuantity());
            }
        }
    }

    public static void UpdateCharInfo(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        if (slea.available() == 0) {
            //TODO
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        int type = slea.readByte();
        if (type == 0) { // 角色讯息
            //String charmessage = StringUtil.removeFourChar(slea.readMapleAsciiString());
            String charmessage = slea.readMapleAsciiString();
            c.getPlayer().setcharmessage(charmessage);
            //System.err.println("SetCharMessage");
        } else if (type == 1) { // 表情
            int expression = slea.readByte();
            c.getPlayer().setexpression(expression);
            //System.err.println("Expression"+ expression);
        } else if (type == 2) { // 生日及星座
            int blood = slea.readByte();
            int month = slea.readByte();
            int day = slea.readByte();
            int constellation = slea.readByte();
            c.getPlayer().setblood(blood);
            c.getPlayer().setmonth(month);
            c.getPlayer().setday(day);
            c.getPlayer().setconstellation(constellation);
            //System.err.println("Constellation");
        }
    }

    public static void LieDetector(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr, boolean isItem) {
        if ((chr == null) || (chr.getMap() == null)) {
            return;
        }
        String target = slea.readMapleAsciiString();
        byte slot = 0;
        if (isItem) {
            if (!chr.getCheatTracker().canLieDetector()) {
                chr.dropMessage(1, "您已使用过一次测谎仪。暂时无法使用测谎仪道具。");
                c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
                return;
            }
            slot = (byte) slea.readShort();
            int itemId = slea.readInt();
            IItem toUse = chr.getInventory(MapleInventoryType.USE).getItem((short) slot);
            if ((toUse == null) || (toUse.getQuantity() <= 0) || (toUse.getItemId() != itemId) || (itemId != 2190000)) {
                c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
                return;
            }
        } else if (!chr.isGM()) {
            c.getSession().close();
            return;
        }
        if (((FieldLimitType.PotionUse.check(chr.getMap().getFieldLimit())) && (isItem)) || (chr.getMap().getReturnMapId() == chr.getMapId())) {
            chr.dropMessage(5, "当前地图无法使用测谎仪。");
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }
        MapleCharacter search_chr = chr.getMap().getCharacterByName(target);
        if ((search_chr == null) || (search_chr.getId() == chr.getId()) || ((search_chr.isGM()) && (!chr.isGM()))) {
            chr.dropMessage(1, "未找到角色。");
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }
        if ((search_chr.getEventInstance() != null) || (search_chr.getMapId() == 180000001)) {
            chr.dropMessage(5, "当前地图无法使用测谎仪。");
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }
        if (search_chr.getAntiMacro().inProgress()) {
            c.getSession().writeAndFlush(MaplePacketCreator.LieDetectorResponse((byte) 3));
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }

        if (search_chr.getAntiMacro().isPassed()) {
            search_chr.getAntiMacro().setPassed(false);
        }

        if (((search_chr.getAntiMacro().isPassed()) && (isItem)) || (search_chr.getAntiMacro().canDetector(System.currentTimeMillis()))) {
            //if (((search_chr.getAntiMacro().canDetector(System.currentTimeMillis())) && (isItem))) {
            c.getSession().writeAndFlush(MaplePacketCreator.LieDetectorResponse((byte) 2));//已经使用过测谎仪
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }

        if (!search_chr.getAntiMacro().startLieDetector(chr.getName(), isItem, false)) {
            chr.dropMessage(5, "使用测谎仪失败。");
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }
        if (isItem) {
            MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, (short) slot, (short) 1, false);
        }
        search_chr.dropMessage(5, new StringBuilder().append(chr.getName()).append(" 对你使用测谎仪").toString());
    }

    public static void LieDetectorResponse(LittleEndianAccessor slea, MapleClient c) {
        if ((c.getPlayer() == null) || (c.getPlayer().getMap() == null)) {
            return;
        }
        String answer = slea.readMapleAsciiString();
        MapleLieDetector ld = c.getPlayer().getAntiMacro();
        if ((!ld.inProgress()) || ((ld.isPassed()) && (ld.getLastType() == 0)) || (ld.getAnswer() == null) || (answer.length() <= 0)) {
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }
        if (answer.equalsIgnoreCase(ld.getAnswer())) {
            MapleCharacter search_chr = c.getPlayer().getMap().getCharacterByName(ld.getTester());
            if ((search_chr != null) && (search_chr.getId() != c.getPlayer().getId())) {
                search_chr.dropMessage(1, new StringBuilder().append(c.getPlayer().getName()).append(" 通过测谎仪的检测。").toString());
            }
            ld.end();
            c.getSession().writeAndFlush(MaplePacketCreator.LieDetectorResponse((byte) 9, (byte) 0));
            //c.getPlayer().gainMeso(5000, true);
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, new StringBuilder().append("[GM密语] 玩家: ").append(c.getPlayer().getName()).append(" (等级 ").append(c.getPlayer().getLevel()).append(") 通过了测谎仪检测。").toString()));
        } else if (ld.getAttempt() < 2) {
            ld.startLieDetector(ld.getTester(), ld.getLastType() == 0, true);
        } else {
            MapleCharacter search_chr = c.getPlayer().getMap().getCharacterByName(ld.getTester());
            if ((search_chr != null) && (search_chr.getId() != c.getPlayer().getId())) {
                search_chr.dropMessage(1, new StringBuilder().append(c.getPlayer().getName()).append(" 没有通过测谎仪检测。").toString());
                //FileoutputUtil.logToFile("logs/Data/测谎失败.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 没有通过测谎仪。");
                //search_chr.gainMeso(7000, true);
            }
            ld.end();
            c.getPlayer().getClient().getSession().writeAndFlush(MaplePacketCreator.LieDetectorResponse((byte) 7, (byte) 0));
            //MapleMap map = c.getChannelServer().getMapFactory().getMap(180000001);
            //c.getPlayer().getQuestNAdd(MapleQuest.getInstance(123456)).setCustomData(String.valueOf(1800));
            //c.getPlayer().changeMap(map, map.getPortal(0));
            MapleMap map = c.getPlayer().getMap().getReturnMap();
            c.getPlayer().changeMap(map, map.getPortal(0));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, new StringBuilder().append("[GM密语] 玩家: ").append(c.getPlayer().getName()).append(" (等级 ").append(c.getPlayer().getLevel()).append(") 未通过测谎仪检测，疑似使用脚本外挂！").toString()));
        }
    }

    /*public static void LieDetectorRefresh(LittleEndianAccessor slea, MapleClient c) {
        if ((c.getPlayer() == null) || (c.getPlayer().getMap() == null)) {
            return;
        }
        MapleLieDetector ld = c.getPlayer().getAntiMacro();
        if (ld.getAttempt() < 3) {
            ld.startLieDetector(ld.getTester(), ld.getLastType() == 0, true);
        } else {
            ld.end();
            c.getPlayer().getClient().getSession().writeAndFlush(MaplePacketCreator.LieDetectorResponse((byte) 7, (byte) 0));
            MapleMap map = c.getPlayer().getMap().getReturnMap();
            c.getPlayer().changeMap(map, map.getPortal(0));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, new StringBuilder().append("[GM密语] 玩家: ").append(c.getPlayer().getName()).append(" (等级 ").append(c.getPlayer().getLevel()).append(") 未通过测谎仪检测，疑似使用脚本外挂！").toString()));
        }
    }*/
}
