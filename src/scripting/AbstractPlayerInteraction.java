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
package scripting;

import client.*;
import client.inventory.*;
import client.messages.CommandProcessor;
import constants.GameConstants;
import constants.ItemConstants;
import constants.ItemConstants.类型;
import constants.ServerConfig;
import constants.ServerConstants;
import database.DBConPool;
import handling.channel.ChannelServer;
import handling.channel.handler.InterServerHandler;
import handling.world.MapleParty;
import handling.world.MaplePartyCharacter;
import handling.world.World;
import handling.world.guild.MapleGuild;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.RandomRewards;
import server.Randomizer;
import server.custom.bossrank.BossRankInfo;
import server.custom.bossrank.BossRankManager;
import server.customer.BossLogCopy.BossLogCopyManager;
import server.events.MapleEvent;
import server.events.MapleEventType;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import server.life.OverrideMonsterStats;
import server.maps.*;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.packet.PetPacket;
import tools.packet.UIPacket;

import java.awt.*;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.sql.*;
import java.util.List;
import java.util.*;

public abstract class AbstractPlayerInteraction {

    private final MapleClient c;
    protected int id;
    protected int id2;

    public AbstractPlayerInteraction(final MapleClient c) {
        this.c = c;
    }

    public final MapleClient getClient() {
        return c;
    }

    public final MapleClient getC() {
        return c;
    }

    public MapleCharacter getChar() {
        return getClient().getPlayer();
    }

    public int getOneTimeLog(String bossid) {
        return getPlayer().getOneTimeLog(bossid);
    }

    public void setOneTimeLog(String bossid) {
        getPlayer().setOneTimeLog(bossid);
    }

    public void deleteOneTimeLog(String bossid) {
        getPlayer().deleteOneTimeLog(bossid);
    }

    public int getAcLog(String bossid) {
        return getPlayer().getAcLog(bossid);
    }

    public int getAcLogS(String bossid) {
        return getPlayer().getAcLogS(bossid);
    }

    public void setAcLog(String bossid) {
        getPlayer().setAcLog(bossid);
    }

    public int getBossLog(String bossid) {
        return getPlayer().getBossLog(bossid);
    }

    public void setBossLog(String bossid) {
        getPlayer().setBossLog(bossid);
    }

    public int getBossLogC(String bossid) {
        return getPlayer().getBossLogC(bossid);
    }

    public Map<String, Object> randomItemFromDrop() {
        Map<String, Object> map = new HashMap<>();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps;
            ps = con.prepareStatement("SELECT * FROM paoshang ORDER BY RAND() LIMIT 1");
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    map.put("chance", rs.getInt("chance"));
                    map.put("itemid", rs.getInt("itemid"));
                } else {
                    map = null;
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            FileoutputUtil.outError("logs/資料庫異常.txt", Ex);
            map = null;
        }
        return map;
    }

    public final ChannelServer getChannelServer() {
        return getClient().getChannelServer();
    }

    public final MapleCharacter getPlayer() {
        return getClient().getPlayer();
    }

    public final EventManager getEventManager(final String event) {
        return getClient().getChannelServer().getEventSM().getEventManager(event);
    }

    public final EventInstanceManager getEventInstance() {
        return getClient().getPlayer().getEventInstance();
    }

    public final void warp(final int map) {
        final MapleMap mapz = getWarpMap(map);
        try {
            getClient().getPlayer().changeMap(mapz, mapz.getPortal(Randomizer.nextInt(mapz.getPortals().size())));
        } catch (Exception e) {
            getClient().getPlayer().changeMap(mapz, mapz.getPortal(0));
        }
    }

    public final void warp_Instanced(final int map) {
        final MapleMap mapz = getMap_Instanced(map);
        try {
            getClient().getPlayer().changeMap(mapz, mapz.getPortal(Randomizer.nextInt(mapz.getPortals().size())));
        } catch (Exception e) {
            getClient().getPlayer().changeMap(mapz, mapz.getPortal(0));
        }
    }

    public final void instantMapWarp(final int map, final int portal) {
        final MapleMap mapz = getWarpMap(map);
        if (portal != 0 && map == c.getPlayer().getMapId()) { // test
            final Point portalPos = new Point(c.getPlayer().getMap().getPortal(portal).getPosition());
            c.getSession().writeAndFlush(MaplePacketCreator.instantMapWarp((byte) portal)); // until we get packet for
            // far movement, this will
            // do
            c.getPlayer().checkFollow();
            c.getPlayer().getMap().movePlayer(c.getPlayer(), portalPos);

        } else {
            c.getPlayer().changeMap(mapz, mapz.getPortal(portal));
        }
    }

    public final void warp(final int map, final int portal) {
        final MapleMap mapz = getWarpMap(map);
        if (portal != 0 && map == getClient().getPlayer().getMapId()) { // test
            final Point portalPos = new Point(c.getPlayer().getMap().getPortal(portal).getPosition());
            if (portalPos.distanceSq(getPlayer().getPosition()) < 90000.0) { // estimation
                getClient().sendPacket(MaplePacketCreator.instantMapWarp((byte) portal)); // until we get packet for far
                // movement, this will do
                getClient().getPlayer().checkFollow();
                getClient().getPlayer().getMap().movePlayer(c.getPlayer(), portalPos);
            } else {
                getClient().getPlayer().changeMap(mapz, mapz.getPortal(portal));
            }
        } else {
            getClient().getPlayer().changeMap(mapz, mapz.getPortal(portal));
        }
    }

    public final void warpS(final int map, final int portal) {
        final MapleMap mapz = getWarpMap(map);
        getClient().getPlayer().changeMap(mapz, mapz.getPortal(portal));
    }

    public final void warp(final int map, String portal) {
        final MapleMap mapz = getWarpMap(map);
        if (map == 109060000 || map == 109060002 || map == 109060004) {
            portal = mapz.getSnowballPortal();
        }
        if (map == getClient().getPlayer().getMapId()) { // test
            final Point portalPos = new Point(c.getPlayer().getMap().getPortal(portal).getPosition());
            if (portalPos.distanceSq(getPlayer().getPosition()) < 90000.0) { // estimation
                getClient().getPlayer().checkFollow();
                getClient().sendPacket(MaplePacketCreator
                        .instantMapWarp((byte) getClient().getPlayer().getMap().getPortal(portal).getId()));
                getClient().getPlayer().getMap().movePlayer(c.getPlayer(),
                        new Point(c.getPlayer().getMap().getPortal(portal).getPosition()));
            } else {
                getClient().getPlayer().changeMap(mapz, mapz.getPortal(portal));
            }
        } else {
            getClient().getPlayer().changeMap(mapz, mapz.getPortal(portal));
        }
    }

    public final void warpS(final int map, String portal) {
        final MapleMap mapz = getWarpMap(map);
        if (map == 109060000 || map == 109060002 || map == 109060004) {
            portal = mapz.getSnowballPortal();
        }
        getClient().getPlayer().changeMap(mapz, mapz.getPortal(portal));
    }

    public final void warpMap(final int mapid, final String portal) {
        final MapleMap map = getMap(mapid);
        for (MapleCharacter chr : getClient().getPlayer().getMap().getCharactersThreadsafe()) {
            chr.changeMap(map, map.getPortal(portal));
        }
    }

    public final void warpMap(final int mapid, final int portal) {
        final MapleMap map = getMap(mapid);
        for (MapleCharacter chr : getClient().getPlayer().getMap().getCharactersThreadsafe()) {
            chr.changeMap(map, map.getPortal(portal));
        }
    }

    public final void playPortalSE() {
        getClient().sendPacket(MaplePacketCreator.showOwnBuffEffect(0, 8));
    }

    private final MapleMap getWarpMap(final int map) {
        return ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(map);
    }

    public final MapleMap getMap() {
        return getClient().getPlayer().getMap();
    }

    public final MapleMap getMap(final int map) {
        return getWarpMap(map);
    }

    public final MapleMap getMap_Instanced(final int map) {
        return getClient().getPlayer().getEventInstance() == null ? getMap(map)
                : getClient().getPlayer().getEventInstance().getMapInstance(map);
    }

    public void spawnMonster(final int id, final int qty) {
        spawnMob(id, qty, new Point(c.getPlayer().getPosition()));
    }

    public final void spawnMobOnMap(final int id, final int qty, final int x, final int y, final int map) {
        for (int i = 0; i < qty; i++) {
            getMap(map).spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(id), new Point(x, y));
        }
    }

    public final void spawnMob(final int id, final int qty, final int x, final int y) {
        spawnMob(id, qty, new Point(x, y));
    }

    public final void spawnMob(final int id, final int x, final int y) {
        spawnMob(id, 1, new Point(x, y));
    }

    private void spawnMob(final int id, final int qty, final Point pos) {
        for (int i = 0; i < qty; i++) {
            getClient().getPlayer().getMap().spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(id), pos);
        }
    }

    public final void killMob(int ids) {
        getClient().getPlayer().getMap().killMonster(ids);
    }

    public final void killAllMob() {
        getClient().getPlayer().getMap().killAllMonsters(true);
    }

    public final void addHP(final int delta) {
        getClient().getPlayer().addHP(delta);
    }

    public final int getPlayerStat(final String type) {
        if (type.equals("LVL")) {
            return getClient().getPlayer().getLevel();
        } else if (type.equals("STR")) {
            return getClient().getPlayer().getStat().getStr();
        } else if (type.equals("DEX")) {
            return getClient().getPlayer().getStat().getDex();
        } else if (type.equals("INT")) {
            return getClient().getPlayer().getStat().getInt();
        } else if (type.equals("LUK")) {
            return getClient().getPlayer().getStat().getLuk();
        } else if (type.equals("HP")) {
            return getClient().getPlayer().getStat().getHp();
        } else if (type.equals("MP")) {
            return getClient().getPlayer().getStat().getMp();
        } else if (type.equals("MAXHP")) {
            return getClient().getPlayer().getStat().getMaxHp();
        } else if (type.equals("MAXMP")) {
            return getClient().getPlayer().getStat().getMaxMp();
        } else if (type.equals("RAP")) {
            return getClient().getPlayer().getRemainingAp();
        } else if (type.equals("RSP")) {
            return getClient().getPlayer().getRemainingSp();
        } else if (type.equals("GID")) {
            return getClient().getPlayer().getGuildId();
        } else if (type.equals("GRANK")) {
            return getClient().getPlayer().getGuildRank();
        } else if (type.equals("ARANK")) {
            return getClient().getPlayer().getAllianceRank();
        } else if (type.equals("GM")) {
            return getClient().getPlayer().isGM() ? 1 : 0;
        } else if (type.equals("ADMIN")) {
            return getClient().getPlayer().hasGmLevel(5) ? 1 : 0;
        } else if (type.equals("GENDER")) {
            return getClient().getPlayer().getGender();
        } else if (type.equals("FACE")) {
            return getClient().getPlayer().getFace();
        } else if (type.equals("HAIR")) {
            return getClient().getPlayer().getHair();
        }
        return -1;
    }

    public final String getName() {
        return getClient().getPlayer().getName();
    }

    // 获取没有时间限制的道具
    public final boolean haveItemTime(final int itemid) {
        if (haveItem(itemid)) {
            final MapleInventoryType type = GameConstants.getInventoryType(itemid);
            for (IItem item : getChar().getInventory(type)) { // omfg;
                if (item.getItemId() == itemid) {
                    return item.getExpiration() == -1;
                }
            }
            return false;
        } else {
            return false;
        }
    }

    // 获取没有时间限制的道具
    public final boolean haveItemTimeNo(final int itemid) {
        if (haveItem(itemid)) {
            final MapleInventoryType type = GameConstants.getInventoryType(itemid);
            for (IItem item : getChar().getInventory(type)) { // omfg;
                if (item.getItemId() == itemid) {
                    return item.getExpiration() > 0;
                }
            }
            return false;
        } else {
            return false;
        }
    }

    public final boolean haveItem(final int itemid) {
        return haveItem(itemid, 1);
    }

    public final boolean haveItem(final int itemid, final int quantity) {
        return haveItem(itemid, quantity, false, true);
    }

    public final boolean haveItem(final int itemid, final int quantity, final boolean checkEquipped,
                                  final boolean greaterOrEquals) {
        return getClient().getPlayer().haveItem(itemid, quantity, checkEquipped, greaterOrEquals);
    }

    public final boolean canHold() {
        for (int i = 1; i <= 5; i++) {
            if (c.getPlayer().getInventory(MapleInventoryType.getByType((byte) i)).getNextFreeSlot() <= -1) {
                return false;
            }
        }
        return true;
    }

    public final boolean canHoldByType(byte bytype, int num) {
        return (c.getPlayer().getInventory(MapleInventoryType.getByType(bytype)).getSlotLimit()
                - (c.getPlayer().getInventory(MapleInventoryType.getByType(bytype)).getNumSlotLimit() + 1)) > num;
    }

    public final boolean canHoldByTypea(byte bytype, int num) {
        return c.getPlayer().getInventory(MapleInventoryType.getByType(bytype)).getSlotLimit()
                - (c.getPlayer().getInventory(MapleInventoryType.getByType(bytype)).getNextFreeSlot() - 1) > num;
    }

    public final boolean canHold(final int itemid) {
        return getClient().getPlayer().getInventory(GameConstants.getInventoryType(itemid)).getNextFreeSlot() > -1;
    }

    public final boolean canHold(final int itemid, final int quantity) {
        return MapleInventoryManipulator.checkSpace(c, itemid, quantity, "");
    }

    public final MapleQuestStatus getQuestRecord(final int id) {
        return getClient().getPlayer().getQuestNAdd(MapleQuest.getInstance(id));
    }

    public final byte getQuestStatus(final int id) {
        return getClient().getPlayer().getQuestStatus(id);
    }

    public final boolean isQuestActive(final int id) {
        return getQuestStatus(id) == 1;
    }

    public final boolean isQuestFinished(final int id) {
        return getQuestStatus(id) == 2;
    }

    public final void showQuestMsg(final String msg) {
        getClient().sendPacket(MaplePacketCreator.showQuestMsg(msg));
    }

    public final void forceStartQuest(final int id, final String data) {
        MapleQuest.getInstance(id).forceStart(c.getPlayer(), 0, data);
    }

    public final void forceStartQuest(final int id, final int data, final boolean filler) {
        MapleQuest.getInstance(id).forceStart(c.getPlayer(), 0, filler ? String.valueOf(data) : null);
    }

    public void forceStartQuest(final int id) {
        MapleQuest.getInstance(id).forceStart(c.getPlayer(), 0, null);
    }

    public void forceCompleteQuest(int id) {
        MapleQuest.getInstance(id).forceComplete(getPlayer(), 0);
    }

    public void spawnNpc(final int npcId) {
        getClient().getPlayer().getMap().spawnNpc(npcId, getClient().getPlayer().getPosition());
    }

    public final void spawnNpc(final int npcId, final int x, final int y) {
        getClient().getPlayer().getMap().spawnNpc(npcId, new Point(x, y));
    }

    public final void spawnNpc(final int npcId, final Point pos) {
        getClient().getPlayer().getMap().spawnNpc(npcId, pos);
    }

    public final void removeNpc(final int mapid, final int npcId) {
        getClient().getChannelServer().getMapFactory().getMap(mapid).removeNpc(npcId);
    }

    public final void forceStartReactor(final int mapid, final int id) {
        MapleMap map = getClient().getChannelServer().getMapFactory().getMap(mapid);
        MapleReactor react;

        for (final MapleMapObject remo : map.getAllReactorsThreadsafe()) {
            react = (MapleReactor) remo;
            if (react.getReactorId() == id) {
                react.forceStartReactor(c);
                break;
            }
        }
    }

    public final void destroyReactor(final int mapid, final int id) {
        MapleMap map = getClient().getChannelServer().getMapFactory().getMap(mapid);
        MapleReactor react;

        for (final MapleMapObject remo : map.getAllReactorsThreadsafe()) {
            react = (MapleReactor) remo;
            if (react.getReactorId() == id) {
                react.hitReactor(c);
                break;
            }
        }
    }

    public final void hitReactor(final int mapid, final int id) {
        MapleMap map = getClient().getChannelServer().getMapFactory().getMap(mapid);
        MapleReactor react;

        for (final MapleMapObject remo : map.getAllReactorsThreadsafe()) {
            react = (MapleReactor) remo;
            if (react.getReactorId() == id) {
                react.hitReactor(c);
                break;
            }
        }
    }

    public final int getJob() {
        return getClient().getPlayer().getJob();
    }

    public final void gainPotion(final int type, final int amount) {
        getClient().getPlayer().modifyCSPoints(type, amount, true);
    }

    public final int getPotion(final int type) {
        return getClient().getPlayer().getCSPoints(type);
    }

    public final void gainNX(final int amount) {
        gainPotion(1, amount);
    }

    public final int getNX() {
        return getPotion(1);
    }

    public final void gainMaplePoint(final int amount) {
        gainPotion(2, amount);
    }

    public final int getMaplePoint() {
        return getPotion(2);
    }

    public final void gainItemPeriod(final int id, final short quantity, final int period) { // period is in days
        gainItem(id, quantity, false, period, -1, "");
    }

    public final void gainItemPeriod(final int id, final short quantity, final long period, final String owner) { // period
        // is
        // in
        // days
        gainItem(id, quantity, false, period, -1, owner);
    }

    public final void gainItem(final int id, final short quantity) {

        gainItem(id, quantity, false, 0, -1, "");
    }

    public final void gainItem(final int id, final short quantity, final boolean randomStats) {
        gainItem(id, quantity, randomStats, 0, -1, "");
    }

    public final void gainItem(final int id, final short quantity, final boolean randomStats, final int slots) {
        gainItem(id, quantity, randomStats, 0, slots, "");
    }

    public final void gainItem(final int id, final short quantity, final long period) {
        gainItem(id, quantity, false, period, -1, "");
    }

    public final void gainItemTime(final int id, final short quantity, final long period) {
        if (MapleItemInformationProvider.getInstance().isCash(id)) {
            gainItem(id, quantity, false, period, -1, "");
        } else {
            gainItem(id, quantity, false, 0, -1, "");
        }
    }

    public final void gainItem(final int id, final short quantity, final boolean randomStats, final long period,
                               final int slots) {
        gainItem(id, quantity, randomStats, period, slots, "");
    }

    public final void gainItem(final int id, final short quantity, final boolean randomStats, final long period,
                               final int slots, final String owner) {
        gainItem(id, quantity, randomStats, period, slots, owner, c);
    }

    public final void gainItem(final int id, final short quantity, final boolean randomStats, final long period,
                               final int slots, final String owner, final MapleClient cg, byte Flag) {
        if (id == 2070018) {
            return;
        }

        if (quantity >= 0) {
            final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            final MapleInventoryType type = GameConstants.getInventoryType(id);

            if (!MapleInventoryManipulator.checkSpace(cg, id, quantity, "")) {
                return;
            }
            if (type.equals(MapleInventoryType.EQUIP) && !GameConstants.isThrowingStar(id)
                    && !GameConstants.isBullet(id)) {
                final Equip item = (Equip) (randomStats ? ii.randomizeStats((Equip) ii.getEquipById(id))
                        : ii.getEquipById(id));
                if (period > 0) {
                    item.setExpiration(System.currentTimeMillis() + (period * 24 * 60 * 60 * 1000));
                }
                if (slots > 0) {
                    item.setUpgradeSlots((byte) (item.getUpgradeSlots() + slots));
                }
                if (owner != null) {
                    item.setOwner(owner);
                }
                final String name = ii.getName(id);
                if (id / 10000 == 114 && name != null && name.length() > 0) { // medal
                    final String msg = "你已获得称号 <" + name + ">";
                    cg.getPlayer().dropMessage(5, msg);
                    // cg.getPlayer().dropMessage(5, msg);
                }
                MapleInventoryManipulator.addbyItem(cg, item.copy());
            } else {
                MapleInventoryManipulator.addById(cg, id, quantity, owner == null ? "" : owner, null, period);
            }
        } else {
            MapleInventoryManipulator.removeById(cg, GameConstants.getInventoryType(id), id, -quantity, true, false);
        }
        cg.sendPacket(MaplePacketCreator.getShowItemGain(id, quantity, true));
    }

    public final void gainItem(final int id, final short quantity, final long period, byte Flag) {
        gainItem(id, quantity, false, period, -1, "", Flag);
    }

    public final void gainItem(final int id, final short quantity, final boolean randomStats, final long period,
                               final int slots, final String owner, byte Flag) {
        gainItem(id, quantity, randomStats, period, slots, owner, c, Flag);
    }

    public final void gainItem(final int id, final short quantity, final boolean randomStats, final long period,
                               final int slots, final String owner, final MapleClient cg) {
        if (quantity >= 0) {
            final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            final MapleInventoryType type = GameConstants.getInventoryType(id);

            if (!MapleInventoryManipulator.checkSpace(cg, id, quantity, "")) {
                return;
            }
            if (type.equals(MapleInventoryType.EQUIP) && !GameConstants.isThrowingStar(id)
                    && !GameConstants.isBullet(id)) {
                final Equip item = (Equip) (randomStats ? ii.randomizeStats((Equip) ii.getEquipById(id))
                        : ii.getEquipById(id));
                if (period > 0) {
                    item.setExpiration(System.currentTimeMillis() + (period * 24 * 60 * 60 * 1000));
                }
                if (slots > 0) {
                    item.setUpgradeSlots((byte) (item.getUpgradeSlots() + slots));
                }
                if (owner != null) {
                    item.setOwner(owner);
                }
                final String name = ii.getName(id);
                if (id / 10000 == 114 && name != null && name.length() > 0) { // medal
                    final String msg = "你已获得称号 <" + name + ">";
                    cg.getPlayer().dropMessage(-1, msg);
                    cg.getPlayer().dropMessage(5, msg);
                }
                MapleInventoryManipulator.addbyItem(cg, item.copy());
            } else {
                final MaplePet pet;
                if (ItemConstants.类型.宠物(id)) {
                    pet = MaplePet.createPet(id, MapleInventoryIdentifier.getInstance());
                } else {
                    pet = null;
                }
                MapleInventoryManipulator.addById(cg, id, quantity, owner == null ? "" : owner, pet, period);
            }
        } else {
            MapleInventoryManipulator.removeById(cg, GameConstants.getInventoryType(id), id, -quantity, true, false);
        }
        cg.sendPacket(MaplePacketCreator.getShowItemGain(id, quantity, true));
    }

    public final void gainItemStatus(final int id, final short quantity) {
        gainItemStatus(id, quantity, false, 0, -1, "");
    }

    public final void gainItemStatus(final int id, final short quantity, final boolean randomStats, final long period,
                                     final int slots, final String owner) {
        gainItemStatus(id, quantity, randomStats, period, slots, owner, c);
    }

    public final void gainItemStatus(final int id, final short quantity, final boolean randomStats, final long period,
                                     final int slots, final String owner, final MapleClient cg) {
        if (quantity >= 0) {
            final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            final MapleInventoryType type = GameConstants.getInventoryType(id);

            if (!MapleInventoryManipulator.checkSpace(cg, id, quantity, "")) {

                return;
            }
            if (type.equals(MapleInventoryType.EQUIP) && !GameConstants.isThrowingStar(id)
                    && !GameConstants.isBullet(id)) {
                final Equip item = (Equip) (randomStats ? ii.randomizeStats((Equip) ii.getEquipById(id))
                        : ii.getEquipById(id));
                if (period > 0) {
                    item.setExpiration(System.currentTimeMillis() + (period * 24 * 60 * 60 * 1000));
                }
                if (slots > 0) {
                    item.setUpgradeSlots((byte) (item.getUpgradeSlots() + slots));
                }
                if (owner != null) {
                    item.setOwner(owner);
                }
                item.setStr((short) 1);
                item.setDex((short) 1);
                item.setInt((short) 1);
                item.setLuk((short) 1);
                final String name = ii.getName(id);
                if (id / 10000 == 114 && name != null && name.length() > 0) { // medal
                    final String msg = "你已获得称号 <" + name + ">";
                    cg.getPlayer().dropMessage(-1, msg);
                    cg.getPlayer().dropMessage(5, msg);
                }
                MapleInventoryManipulator.addbyItem(cg, item.copy());
            } else {
                final MaplePet pet;
                if (ItemConstants.类型.宠物(id)) {
                    pet = MaplePet.createPet(id, MapleInventoryIdentifier.getInstance());
                } else {
                    pet = null;
                }
                MapleInventoryManipulator.addById(cg, id, quantity, owner == null ? "" : owner, pet, period);
            }
        } else {
            MapleInventoryManipulator.removeById(cg, GameConstants.getInventoryType(id), id, -quantity, true, false);
        }
        cg.sendPacket(MaplePacketCreator.getShowItemGain(id, quantity, true));
    }

    public final void changeMusic(final String songName) {
        getPlayer().getMap().broadcastMessage(MaplePacketCreator.musicChange(songName));
    }

    public final void worldMessage(final int type, final String message) {
        World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(type, message));
    }

    // default playerMessage and mapMessage to use type 5
    public final void playerMessage(final String message) {
        playerMessage(5, message);
    }

    public final void mapMessage(final String message) {
        mapMessage(5, message);
    }

    public final void guildMessage(final String message) {
        guildMessage(5, message);
    }

    public final void playerMessage(final int type, final String message) {
        getClient().sendPacket(MaplePacketCreator.serverNotice(type, message));
    }

    public final void mapMessage(final int type, final String message) {
        getClient().getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(type, message));
    }

    public final void guildMessage(final int type, final String message) {
        if (getPlayer().getGuildId() > 0) {
            World.Guild.guildPacket(getPlayer().getGuildId(), MaplePacketCreator.serverNotice(type, message));
        }
    }

    public final MapleGuild getGuild() {
        return getGuild(getPlayer().getGuildId());
    }

    public final MapleGuild getGuild(int guildid) {
        return World.Guild.getGuild(guildid);
    }

    public final MapleParty getParty() {
        return getClient().getPlayer().getParty();
    }

    public final int getCurrentPartyId(int mapid) {
        return getMap(mapid).getCurrentPartyId();
    }

    public final boolean isLeader() {
        if (getParty() == null) {
            return false;
        }
        return getParty().getLeader().getId() == getClient().getPlayer().getId();
    }

    public final boolean isAllPartyMembersAllowedJob(final int job) {
        if (c.getPlayer().getParty() == null) {
            return false;
        }
        for (final MaplePartyCharacter mem : getClient().getPlayer().getParty().getMembers()) {
            if (mem.getJobId() / 100 != job) {
                return false;
            }
        }
        return true;
    }

    public final boolean allMembersHere() {
        if (c.getPlayer().getParty() == null) {
            return false;
        }
        for (final MaplePartyCharacter mem : getClient().getPlayer().getParty().getMembers()) {
            final MapleCharacter chr = getClient().getPlayer().getMap().getCharacterById(mem.getId());
            if (chr == null) {
                return false;
            }
        }
        return true;
    }

    public final void warpParty(final int mapId) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            warp(mapId, 0);
            return;
        }
        final MapleMap target = getMap(mapId);
        final int cMap = getPlayer().getMapId();

        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if (curChar != null
                    && (curChar.getMapId() == cMap || curChar.getEventInstance() == getPlayer().getEventInstance())) {
                curChar.changeMap(target, target.getPortal(0));
            }
        }
    }

    public final void warpParty(final int mapId, final int portal) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            if (portal < 0) {
                warp(mapId);
            } else {
                warp(mapId, portal);
            }
            return;
        }
        final boolean rand = portal < 0;
        final MapleMap target = getMap(mapId);
        final int cMap = getPlayer().getMapId();

        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if (curChar != null
                    && (curChar.getMapId() == cMap || curChar.getEventInstance() == getPlayer().getEventInstance())) {
                if (rand) {
                    try {
                        curChar.changeMap(target, target.getPortal(Randomizer.nextInt(target.getPortals().size())));
                    } catch (Exception e) {
                        curChar.changeMap(target, target.getPortal(0));
                    }
                } else {
                    curChar.changeMap(target, target.getPortal(portal));
                }
            }
        }
    }

    public final void warpParty_Instanced(final int mapId) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            warp_Instanced(mapId);
            return;
        }
        final MapleMap target = getMap_Instanced(mapId);

        final int cMap = getPlayer().getMapId();
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if (curChar != null
                    && (curChar.getMapId() == cMap || curChar.getEventInstance() == getPlayer().getEventInstance())) {
                curChar.changeMap(target, target.getPortal(0));
            }
        }
    }

    public void gainMeso(int gain) {
        getClient().getPlayer().gainMeso(gain, true, false, true);
    }

    public void gainExp(int gain) {
        getClient().getPlayer().gainExp(gain, true, true, true);
    }

    public void gainExpR(int gain) {
        getClient().getPlayer().gainExp(gain * getClient().getChannelServer().getExpRate(), true, true, true);
    }

    public final void givePartyItems(final int id, final short quantity, final List<MapleCharacter> party) {
        for (MapleCharacter chr : party) {
            if (quantity >= 0) {
                MapleInventoryManipulator.addById(chr.getClient(), id, quantity);
            } else {
                MapleInventoryManipulator.removeById(chr.getClient(), GameConstants.getInventoryType(id), id, -quantity,
                        true, false);
            }
            chr.getClient().sendPacket(MaplePacketCreator.getShowItemGain(id, quantity, true));
        }
    }

    public final void givePartyItems(final int id, final short quantity) {
        givePartyItems(id, quantity, false);
    }

    public final boolean canPartyHold() {
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                for (int i = 1; i <= 5; i++) {
                    if (curChar.getInventory(MapleInventoryType.getByType((byte) i)).getNextFreeSlot() <= -1) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }

    public final void givePartyItems(final int id, final short quantity, final boolean removeAll) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            gainItem(id, (short) (removeAll ? -getPlayer().itemQuantity(id) : quantity));
            return;
        }

        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                gainItem(id, (short) (removeAll ? -curChar.itemQuantity(id) : quantity), false, 0, 0, "",
                        curChar.getClient());
            }
        }
    }

    public final void givePartyExp(final int amount, final List<MapleCharacter> party) {
        for (final MapleCharacter chr : party) {
            chr.gainExp(amount * getClient().getChannelServer().getExpRate(), true, true, true);
        }
    }

    public final void givePartyExp(final int amount) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            gainExp(amount * getClient().getChannelServer().getExpRate());
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                curChar.gainExp(amount * getClient().getChannelServer().getExpRate(), true, true, true);
            }
        }
    }

    public final void givePartyNX(final int amount, final List<MapleCharacter> party) {
        for (final MapleCharacter chr : party) {
            chr.modifyCSPoints(1, amount, true);
        }
    }

    public final void givePartyNX(final int amount) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            gainNX(amount);
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                curChar.modifyCSPoints(1, amount, true);
            }
        }
    }

    public final void endPartyQuest(final int amount, final List<MapleCharacter> party) {
        for (final MapleCharacter chr : party) {
            chr.endPartyQuest(amount);
        }
    }

    public final void endPartyQuest(final int amount) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            getPlayer().endPartyQuest(amount);
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                curChar.endPartyQuest(amount);
            }
        }
    }

    public final void removeFromParty(final int id, final List<MapleCharacter> party) {
        for (final MapleCharacter chr : party) {
            final int possesed = chr.getInventory(GameConstants.getInventoryType(id)).countById(id);
            if (possesed > 0) {
                MapleInventoryManipulator.removeById(c, GameConstants.getInventoryType(id), id, possesed, true, false);
                chr.getClient().sendPacket(MaplePacketCreator.getShowItemGain(id, (short) -possesed, true));
            }
        }
    }

    public final void removeFromParty(final int id) {
        givePartyItems(id, (short) 0, true);
    }

    public final void useSkill(final int skill, final int level) {
        if (level <= 0) {
            return;
        }
        SkillFactory.getSkill(skill).getEffect(level).applyTo(c.getPlayer());
    }

    public final void useItem(final int id) {
        MapleItemInformationProvider.getInstance().getItemEffect(id).applyTo(c.getPlayer());
        getClient().sendPacket(UIPacket.getStatusMsg(id));
    }

    public final void useItemEffect(final int id) {
        MapleItemInformationProvider.getInstance().getItemEffect(id).applyTo(c.getPlayer());
        getClient().sendPacket(MaplePacketCreator.enableActions());
    }

    public final void cancelItem(final int id) {
        getClient().getPlayer().cancelEffect(MapleItemInformationProvider.getInstance().getItemEffect(id), false, -1);
    }

    public final int getMorphState() {
        return getClient().getPlayer().getMorphState();
    }

    public final void removeAll(final int id) {
        getClient().getPlayer().removeAll(id, true);
    }

    public final void gainCloseness(final int closeness, final int index) {
        final MaplePet pet = getPlayer().getPet(index);
        if (pet != null) {
            pet.setCloseness(pet.getCloseness() + closeness);
            getClient().sendPacket(PetPacket.updatePet(pet,
                    getPlayer().getInventory(MapleInventoryType.CASH).getItem((byte) pet.getInventoryPosition())));
        }
    }

    public final void gainClosenessAll(final int closeness) {
        for (final MaplePet pet : getPlayer().getPets()) {
            if (pet != null) {
                pet.setCloseness(pet.getCloseness() + closeness);
                getClient().sendPacket(PetPacket.updatePet(pet,
                        getPlayer().getInventory(MapleInventoryType.CASH).getItem((byte) pet.getInventoryPosition())));
            }
        }
    }

    public final void resetMap(final int mapid) {
        getMap(mapid).resetFully();
    }

    public final void openNpc(final int id) {
        openNpc(id, null);
    }

    public final void openNpc(final int id, final int mode) {
        openNpc(getClient(), id, mode, null);
    }

    public final void openNpc(final MapleClient cg, final int id) {
        openNpc(cg, id, 0, null);
    }

    public final void openNpc(final int id, final String script) {
        openNpc(getClient(), id,0, script);
    }

    public final void openNpc(final MapleClient cg, final int id, final String script) {
        openNpc(getClient(), id, 0, script);
    }

    public final void openNpc(final MapleClient cg, final int id, final int mode, final String script) {
        cg.removeClickedNPC();
        NPCScriptManager.getInstance().dispose(cg);
        ItemScriptManager.getInstance().dispose(cg);
        NPCScriptManager.getInstance().start(cg, id, mode, script);
    }

    public final int getMapId() {
        return getClient().getPlayer().getMapId();
    }

    public final boolean haveMonster(final int mobid) {
        for (MapleMapObject obj : getClient().getPlayer().getMap().getAllMonstersThreadsafe()) {
            final MapleMonster mob = (MapleMonster) obj;
            if (mob.getId() == mobid) {
                return true;
            }
        }
        return false;
    }

    public final int getChannelNumber() {
        return getClient().getChannel();
    }

    public final int getMonsterCount(final int mapid) {
        return getClient().getChannelServer().getMapFactory().getMap(mapid).getNumMonsters();
    }

    public final int getMonsterCountByMonsterId(final int mobid) {
        int a = 0;
        for (MapleMapObject obj : c.getPlayer().getMap().getAllMonstersThreadsafe()) {
            final MapleMonster mob = (MapleMonster) obj;
            if (mob.getId() == mobid) {
                a += 1;
            }
        }
        return a;
    }

    public final int getMonsterCount(final int mapid, final int mobid) {
        int a = 0;
        for (MapleMapObject obj : c.getChannelServer().getMapFactory().getMap(mapid).getAllMonstersThreadsafe()) {
            final MapleMonster mob = (MapleMonster) obj;
            if (mob.getId() == mobid) {
                a += 1;
            }
        }
        return a;
    }

    public final void teachSkill(final int id, final byte level, final byte masterlevel) {
        getPlayer().changeSkillLevel(SkillFactory.getSkill(id), level, masterlevel);
    }

    public final void teachSkill(final int id, byte level) {
        final ISkill skil = SkillFactory.getSkill(id);
        if (getPlayer().getSkillLevel(skil) > level) {
            level = getPlayer().getSkillLevel(skil);
        }
        getPlayer().changeSkillLevel(skil, level, skil.getMaxLevel());
    }

    public final int getPlayerCount(final int mapid) {
        return getClient().getChannelServer().getMapFactory().getMap(mapid).getCharactersSize();
    }

    public final void dojo_getUp() {
        getClient().sendPacket(MaplePacketCreator.updateInfoQuest(1207, "pt=1;min=4;belt=1;tuto=1")); // todo
        getClient().sendPacket(MaplePacketCreator.Mulung_DojoUp2());
        getClient().sendPacket(MaplePacketCreator.instantMapWarp((byte) 6));
    }

    public final boolean dojoAgent_NextMap(final boolean dojo, final boolean fromresting) {
        if (dojo) {
            return Event_DojoAgent.warpNextMap(c.getPlayer(), fromresting);
        }
        return Event_DojoAgent.warpNextMap_Agent(c.getPlayer(), fromresting);
    }

    public final int dojo_getPts() {
        return getClient().getPlayer().getDojo();
    }

    public final MapleEvent getEvent(final String loc) {
        return getClient().getChannelServer().getEvent(MapleEventType.valueOf(loc));
    }

    public final int getSavedLocation(final String loc) {
        final Integer ret = getClient().getPlayer().getSavedLocation(SavedLocationType.fromString(loc));
        if (ret == null || ret == -1) {
            return 100000000;
        }
        return ret;
    }

    public final void saveLocation(final String loc) {
        getClient().getPlayer().saveLocation(SavedLocationType.fromString(loc));
    }

    public final void saveReturnLocation(final String loc) {
        getClient().getPlayer().saveLocation(SavedLocationType.fromString(loc),
                getClient().getPlayer().getMap().getReturnMap().getId());
    }

    public final void clearSavedLocation(final String loc) {
        getClient().getPlayer().clearSavedLocation(SavedLocationType.fromString(loc));
    }

    public final void summonMsg(final String msg) {
        if (!c.getPlayer().hasSummon()) {
            playerSummonHint(true);
        }
        getClient().sendPacket(UIPacket.summonMessage(msg));
    }

    public final void summonMsg(final int type) {
        if (!c.getPlayer().hasSummon()) {
            playerSummonHint(true);
        }
        getClient().sendPacket(UIPacket.summonMessage(type));
    }

    public final void showInstruction(final String msg, final int width, final int height) {
        getClient().sendPacket(MaplePacketCreator.sendHint(msg, width, height));
    }

    public final void playerSummonHint(final boolean summon) {
        getClient().getPlayer().setHasSummon(summon);
        getClient().sendPacket(UIPacket.summonHelper(summon));
    }

    public final String getInfoQuest(final int id) {
        return getClient().getPlayer().getInfoQuest(id);
    }

    public final void updateInfoQuest(final int id, final String data) {
        getClient().getPlayer().updateInfoQuest(id, data);
    }

    public final boolean getEvanIntroState(final String data) {
        return getInfoQuest(22013).equals(data);
    }

    public final void updateEvanIntroState(final String data) {
        updateInfoQuest(22013, data);
    }

    public final void Aran_Start() {
        getClient().sendPacket(UIPacket.Aran_Start());
    }

    public final void evanTutorial(final String data, final int v1) {
        getClient().sendPacket(MaplePacketCreator.getEvanTutorial(data));
    }

    public final void AranTutInstructionalBubble(final String data) {
        getClient().sendPacket(UIPacket.AranTutInstructionalBalloon(data));
    }

    public final void ShowWZEffect(final String data) {
        getClient().sendPacket(UIPacket.AranTutInstructionalBalloon(data));
    }

    public final void showWZEffect(final String data) {
        getClient().sendPacket(UIPacket.ShowWZEffect(data));
    }

    public final void EarnTitleMsg(final String data) {
        getClient().sendPacket(UIPacket.EarnTitleMsg(data));
    }

    public final void MovieClipIntroUI(final boolean enabled) {
        getClient().sendPacket(UIPacket.IntroDisableUI(enabled));
        getClient().sendPacket(UIPacket.IntroLock(enabled));
    }

    public MapleInventoryType getInvType(int i) {
        return MapleInventoryType.getByType((byte) i);
    }

    public String getItemName(final int id) {
        return MapleItemInformationProvider.getInstance().getName(id);
    }

    public void gainPet(int id, String name, int level, int closeness, int fullness) {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        gainPet(id, name, level, closeness, fullness, ii.getPetLife(id), ii.getPetFlagInfo(id));
    }

    public void gainPet(int id, String name, int level, int closeness, int fullness, int period) {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        gainPet(id, name, level, closeness, fullness, period, ii.getPetFlagInfo(id));
    }

    public void gainPet(int id, String name, int level, int closeness, int fullness, long period, short flags) {
        if (id > 5010000 || id < 5000000) {
            id = 5000000;
        }
        if (level > 30) {
            level = 30;
        }
        if (closeness > 30000) {
            closeness = 30000;
        }
        if (fullness > 100) {
            fullness = 100;
        }
        try {
            MapleInventoryManipulator.addById(c, id, (short) 1, "", MaplePet.createPet(id, name, level, closeness,
                    fullness, MapleInventoryIdentifier.getInstance(), id == 5000054 ? (int) period : 0, flags), 45);
        } catch (NullPointerException ex) {
            ex.printStackTrace();
        }
    }

    public void removeSlot(int invType, byte slot, short quantity) {
        MapleInventoryManipulator.removeFromSlot(c, getInvType(invType), slot, quantity, true);
    }

    public void gainGP(final int gp) {
        if (getPlayer().getGuildId() <= 0) {
            return;
        }
        World.Guild.gainGP(getPlayer().getGuildId(), gp); // 1 for
    }

    public int getGP() {
        if (getPlayer().getGuildId() <= 0) {
            return 0;
        }
        return World.Guild.getGP(getPlayer().getGuildId()); // 1 for
    }

    public void showMapEffect(String path) {
        getClient().sendPacket(UIPacket.MapEff(path));
    }

    public int itemQuantity(int itemid) {
        return getPlayer().itemQuantity(itemid);
    }

    public EventInstanceManager getDisconnected(String event) {
        EventManager em = getEventManager(event);
        if (em == null) {
            return null;
        }
        for (EventInstanceManager eim : em.getInstances()) {
            if (eim.isDisconnected(c.getPlayer()) && eim.getPlayerCount() > 0) {
                return eim;
            }
        }
        return null;
    }

    public boolean isAllReactorState(final int reactorId, final int state) {
        boolean ret = false;
        for (MapleReactor r : getMap().getAllReactorsThreadsafe()) {
            if (r.getReactorId() == reactorId) {
                ret = r.getState() == state;
            }
        }
        return ret;
    }

    public long getCurrentTime() {
        return System.currentTimeMillis();
    }

    public void spawnMonster(int id) {
        spawnMonster(id, 1, new Point(getPlayer().getPosition()));
    }

    // summon one monster, remote location
    public void spawnMonster(int id, int x, int y) {
        spawnMonster(id, 1, new Point(x, y));
    }

    // multiple monsters, remote location
    public void spawnMonster(int id, int qty, int x, int y) {
        spawnMonster(id, qty, new Point(x, y));
    }

    // handler for all spawnMonster
    public void spawnMonster(int id, int qty, Point pos) {
        for (int i = 0; i < qty; i++) {
            getMap().spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(id), pos);
        }
    }

    public void sendNPCText(final String text, final int npc) {
        getMap().broadcastMessage(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 00", (byte) 0));
    }

    public void warpAllPlayer(int from, int to) {

        final MapleMap tomap = getMapFactory().getMap(to);
        final MapleMap frommap = getMapFactory().getMap(from);
        List<MapleCharacter> list = frommap.getCharactersThreadsafe();
        if (tomap != null && frommap != null && list != null && frommap.getCharactersSize() > 0) {
            for (MapleMapObject mmo : list) {
                ((MapleCharacter) mmo).changeMap(tomap, tomap.getPortal(0));
            }
        }
    }

    public MapleMapFactory getMapFactory() {
        return getChannelServer().getMapFactory();
    }

    public void enterMTS() {
        // 原进入拍卖
        InterServerHandler.EnterCashShop(c, c.getPlayer(), true);
    }

    public int getChannelOnline() {
        return getClient().getChannelServer().getConnectedClients();
    }

    public int getTotalOnline() {
        return ChannelServer.getAllInstances().stream().map((cserv) -> cserv.getConnectedClients()).reduce(0,
                Integer::sum);
    }

    public int getMP() {
        return getPlayer().getMP();
    }

    public void setMP(int x) {
        getPlayer().setMP(x);
    }

    public int save(boolean dc, boolean fromcs) {
        try {
            return getPlayer().saveToDB(dc, fromcs);
        } catch (UnsupportedOperationException ex) {
        }
        return 0;
    }

    public void save() {
        save(false, false);
    }

    public boolean hasSquadByMap() {
        return getPlayer().getMap().getSquadByMap() != null;
    }

    public boolean hasEventInstance() {
        return getPlayer().getEventInstance() != null;
    }

    public boolean hasEMByMap() {
        return getPlayer().getMap().getEMByMap() != null;
    }

    public void processCommand(String line) {
        CommandProcessor.processCommand(getClient(), line, ServerConstants.CommandType.NORMAL);
    }

    public void warpPlayer(int from, int to) {
        final MapleMap mapto = c.getChannelServer().getMapFactory().getMap(to);
        final MapleMap mapfrom = c.getChannelServer().getMapFactory().getMap(from);
        for (MapleCharacter chr : mapfrom.getCharactersThreadsafe()) {
            chr.changeMap(mapto, mapto.getPortal(0));
        }
    }

    public void isVipMedalName() {
        if (getOneTimeLog("关闭VIP星星数显示") < 1) {
            setOneTimeLog("关闭VIP星星数显示");
            c.getPlayer().dropMessage(5, "关闭VIP星星数显示。");
        } else {
            deleteOneTimeLog("关闭VIP星星数显示");
            c.getPlayer().dropMessage(5, "开启VIP星星数显示。");
        }
    }

    public int getVip() {
        return getPlayer().getVip();
    }

    public void getItemLog(String mob, String itemmob) {
        FileoutputUtil.logToFile("logs/Data/" + mob + ".txt",
                "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0]
                        + " 帐号 " + c.getAccountName() + " 帐号ID " + c.getAccID() + " 角色名 " + c.getPlayer().getName()
                        + " 角色ID " + c.getPlayer().getId() + " " + itemmob);
    }

    public int getAccNewTime(String time) {
        return getPlayer().getAccNewTime(time);
    }

    public int getQianDaoTime(String time) {
        return getPlayer().getQianDaoTime(time);
    }

    public int getQianDaoAcLog(String time) {
        return getPlayer().getQianDaoAcLog(time);
    }

    public void giveEventPrize() {
        final int reward = RandomRewards.getInstance().getEventReward();
        if (reward == 0) {
            getPlayer().gainMeso(66666, true, false, false);
            getPlayer().dropMessage(5, "你获得 66666 金币");
        } else if (reward == 1) {
            getPlayer().gainMeso(399999, true, false, false);
            getPlayer().dropMessage(5, "你获得 399999 金币");
        } else if (reward == 2) {
            getPlayer().gainMeso(666666, true, false, false);
            getPlayer().dropMessage(5, "你获得 666666 金币");
        } else if (reward == 3) {
            getPlayer().addFame(10);
            getPlayer().dropMessage(5, "你获得 10 名声");
        } else {
            int max_quantity = 1;
            switch (reward) {
                case 5062000:
                    max_quantity = 3;
                    break;
                case 5220000:
                    max_quantity = 25;
                    break;
                case 4031307:
                case 5050000:
                    max_quantity = 5;
                    break;
                case 2022121:
                    max_quantity = 10;
                    break;
            }
            final int quantity = (max_quantity > 1 ? Randomizer.nextInt(max_quantity) : 0) + 1;
            if (MapleInventoryManipulator.checkSpace(getPlayer().getClient(), reward, quantity, "")) {
                MapleInventoryManipulator.addById(getPlayer().getClient(), reward, (short) quantity);
                getPlayer().dropMessage(5, "恭喜获得" + MapleItemInformationProvider.getInstance().getName(reward));
            } else {
                getPlayer().gainMeso(100000, true, false, false);
                getPlayer().dropMessage(5, "参加奖 100000 金币");
            }

        }
    }

    public List<IItem> getMonsterRidinglist() {
        // MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        MapleInventory Equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP);
        List<IItem> ret = new ArrayList();
        for (IItem tep : Equip) {
            // Map stats = ii.getEquipStats(tep.getItemId());
            // if (stats.containsKey("cash")) {
            if (tep.getItemId() >= 1930000 && tep.getItemId() <= 1992050) {
                ret.add(tep);
            }
            // }
        }
        return ret;
    }

    public String getCharacterNameById(int id) {
        String name = MapleCharacter.getCharacterNameById(id);
        return name;
    }

    public final int getCharacterIdByName(String name) {
        int id = MapleCharacter.getCharacterIdByName(name);
        return id;
    }

    public int getCharacterByNameLevel(String name) {
        int level = MapleCharacter.getCharacterByName(name).getLevel();
        return level;
    }

    public List<IItem> getCsEquipList() {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        MapleInventory Equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP);
        List<IItem> ret = new ArrayList();
        for (IItem tep : Equip) {
            if (ii.isCash(tep.getItemId())) {
                ret.add(tep);
            }
        }
        return ret;
    }

    public Equip getEquipStat(byte slot) {
        Equip sel = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(slot);

        return sel;
    }

    public void dropCs(byte type, final short src, final short quantity) {
        MapleInventoryManipulator.dropCs(c, MapleInventoryType.getByType(type), src, quantity);
    }

    public final boolean canwncs() {
        for (int i : GameConstants.blockedMaps) {
            if (c.getPlayer().getMapId() == i) {
                c.getPlayer().dropMessage(5, "当前地图无法使用.");
                return false;
            }
        }

        if (c.getPlayer().getMapId() == 749060605 || c.getPlayer().getMapId() == 229010000
                || c.getPlayer().getMapId() == 910000000) {
            c.getPlayer().dropMessage(5, "当前地图无法使用.");
            return false;
        }

        if (c.getPlayer().getLevel() < 10 && c.getPlayer().getJob() != 200) {
            c.getPlayer().dropMessage(5, "你的等级不足10级无法使用.");
            return false;
        }
        if (c.getPlayer().hasBlockedInventory(true) || c.getPlayer().getMap().getSquadByMap() != null
                || c.getPlayer().getEventInstance() != null || c.getPlayer().getMap().getEMByMap() != null
                || c.getPlayer().getMapId() >= 990000000/*
         * || FieldLimitType.VipRock.check(c.getPlayer().getMap().
         * getFieldLimit())
         */) {
            c.getPlayer().dropMessage(5, "请稍后再试");
            return false;
        }
        if ((c.getPlayer().getMapId() >= 680000210 && c.getPlayer().getMapId() <= 680000502)
                || (c.getPlayer().getMapId() / 1000 == 980000 && c.getPlayer().getMapId() != 980000000)
                || (c.getPlayer().getMapId() / 100 == 1030008) || (c.getPlayer().getMapId() / 100 == 922010)
                || (c.getPlayer().getMapId() / 10 == 13003000)) {
            c.getPlayer().dropMessage(5, "请稍后再试.");
            return false;
        }
        return true;
    }

    public int getEquipItemType(int itemid) {
        if (类型.帽子(itemid)) {
            return 1;
        }
        if (类型.脸饰(itemid)) {
            return 2;
        }
        if (类型.眼饰(itemid)) {
            return 3;
        }
        if (类型.耳环(itemid)) {
            return 4;
        }
        if (类型.上衣(itemid)) {
            return 5;
        }
        if (类型.套服(itemid)) {
            return 6;
        }
        if (类型.裤裙(itemid)) {
            return 7;
        }
        if (类型.鞋子(itemid)) {
            return 8;
        }
        if (类型.手套(itemid)) {
            return 9;
        }
        if (类型.盾牌(itemid)) {
            return 9;
        }
        if (类型.披风(itemid)) {
            return 10;
        }
        if (类型.戒指(itemid)) {
            return 11;
        }
        if (类型.坠饰(itemid)) {
            return 12;
        }
        if (类型.腰带(itemid)) {
            return 13;
        }
        if (类型.勋章(itemid)) {
            return 15;
        }
        if (类型.武器(itemid)) {
            return 16;
        }
        if (类型.副手(itemid)) {
            return 17;
        }

        return 0;
    }

    public void forceReAddItem(Item item, byte type) {
        // c.getPlayer().forceReAddItem(item, MapleInventoryType.getByType(type));
        c.getPlayer().forceReAddItem_Flag(item, MapleInventoryType.getByType(type));
        c.getPlayer().equipChanged();
    }

    public void StatsZs() {
        Map<MapleStat, Integer> statups = new EnumMap<>(MapleStat.class);

        c.getPlayer().setLevel((short) 1);
        // c.getPlayer().levelUp();
        if (c.getPlayer().getExp() < 0) {
            c.getPlayer().gainExp(-c.getPlayer().getExp(), false, false, true);
        }
        c.getPlayer().getStat().str = (short) 4;
        c.getPlayer().getStat().dex = (short) 4;
        c.getPlayer().getStat().int_ = (short) 4;
        c.getPlayer().getStat().luk = (short) 4;
        c.getPlayer().setHpMpApUsed((short) 0);
        c.getPlayer().setRemainingAp((short) (13));
        c.getPlayer().setRemainingSp(0);

        c.getSession().write(MaplePacketCreator.updateSp(c.getPlayer(), false));

        // c.getPlayer().getStat().maxhp = 50;
        // c.getPlayer().getStat().maxmp = 50;
        // c.getPlayer().getStat().setHp(50);
        // c.getPlayer().getStat().setMp(50);
        statups.put(MapleStat.STR, Integer.valueOf(c.getPlayer().getStat().getStr()));
        statups.put(MapleStat.DEX, Integer.valueOf(c.getPlayer().getStat().getDex()));
        statups.put(MapleStat.LUK, Integer.valueOf(c.getPlayer().getStat().getLuk()));
        statups.put(MapleStat.INT, Integer.valueOf(c.getPlayer().getStat().getInt()));
        statups.put(MapleStat.HP, (int) c.getPlayer().getStat().getHp());
        statups.put(MapleStat.MAXHP, (int) c.getPlayer().getStat().getMaxHp());
        statups.put(MapleStat.MP, (int) c.getPlayer().getStat().getMp());
        statups.put(MapleStat.MAXMP, (int) c.getPlayer().getStat().getMaxMp());
        statups.put(MapleStat.AVAILABLEAP, (int) c.getPlayer().getRemainingAp());
        c.getPlayer().getStat().recalcLocalStats();
        c.getSession().write(MaplePacketCreator.updatePlayerStats(statups, c.getPlayer()));
        setBossRankCount("转生次数");
        c.getPlayer().fakeRelog();
    }

    public void maxSkillsByJob() {
        c.getPlayer().maxSkillsByJob();
    }

    public BossLogCopyManager getBosslogManager() {
        return BossLogCopyManager.getInstance();
    }

    // bossrank

    /**
     * 积分排行
     *
     * @param bossname
     * @return
     */
    public List<BossRankInfo> getBossRankPointsTop(String bossname) {
        return BossRankManager.getInstance().getRank(bossname, 1);
    }

    /**
     * *
     * 次数排行
     *
     * @param bossname
     * @return
     */
    public List<BossRankInfo> getBossRankCountTop(String bossname) {
        return BossRankManager.getInstance().getRank(bossname, 2);
    }

    /**
     * 得到种类为type的排行，1为积分 2次数
     *
     * @param bossname
     * @param type
     * @return
     */
    public List<BossRankInfo> getBossRankTop(String bossname, byte type) {
        return BossRankManager.getInstance().getRank(bossname, type);
    }

    /**
     * 增加1点积分
     *
     * @param bossname
     * @return
     */
    public int setBossRankPoints(String bossname) {
        return setBossRank(getPlayer().getId(), getPlayer().getName(), bossname, (byte) 1, 1);
    }

    /**
     * 增加1点次数
     *
     * @param bossname
     * @return
     */
    public int setBossRankCount(String bossname) {
        return setBossRank(getPlayer().getId(), getPlayer().getName(), bossname, (byte) 2, 1);
    }

    /**
     * 增加指定数量积分
     *
     * @param bossname
     * @param add
     * @return
     */
    public int setBossRankPoints(String bossname, int add) {
        return setBossRank(getPlayer().getId(), getPlayer().getName(), bossname, (byte) 1, add);
    }

    /**
     * 增加指定数量次数
     *
     * @param bossname
     * @param add
     * @return
     */
    public int setBossRankCount(String bossname, int add) {
        return setBossRank(getPlayer().getId(), getPlayer().getName(), bossname, (byte) 2, add);
    }

    /**
     * 增加指定type类型add数量 (type 1:积分 2:次数 )
     *
     * @param bossname
     * @param type     1:积分 2:次数
     * @param add
     * @return
     */
    public int setBossRank(String bossname, byte type, int add) {
        return setBossRank(getPlayer().getId(), getPlayer().getName(), bossname, type, add);
    }

    /**
     * 增加指定玩家指定type的数量
     *
     * @param cid      玩家ID
     * @param cname    玩家名
     * @param bossname
     * @param type     1:积分 2:次数
     * @param add      数量
     * @return
     */
    public int setBossRank(int cid, String cname, String bossname, byte type, int add) {
        return BossRankManager.getInstance().setLog(cid, cname, bossname, type, add);
    }

    public int setBossRank(int id, String name, String bossname, int points, int count) {
        return BossRankManager.getInstance().setBossRank(id, name, bossname, points, count);
    }

    public boolean getBossRank(int points, int count, String bossname) {
        return BossRankManager.getInstance().getInfo(points, count, bossname);
    }

    public int getBossRankPoints(String bossname) {
        return getBossRank(bossname, (byte) 1);
    }

    public int getBossRankCount(String bossname) {
        return getBossRank(bossname, (byte) 2);
    }

    public int getBossRank(String bossname, byte type) {
        return getBossRank(getPlayer().getId(), bossname, type);
    }

    public int getBossRank(int cid, String bossname, byte type) {
        int ret = -1;
        BossRankInfo info = BossRankManager.getInstance().getInfo(cid, bossname);
        if (null == info) {
            return ret;
        }
        switch (type) {
            case 1:// 积分
                ret = info.getPoints();
                break;
            case 2:// 次数
                ret = info.getCount();
                break;
        }
        return ret;
    }

    public Map<String, Integer> getBossRanks() {
        return BossRankManager.getInstance().getBossRanks(getPlayer().getId());
    }

    public int[] printHairs(String node) {
        List<Integer> list = MapleItemInformationProvider.getInstance().printHairs(node);
        int[] ii = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            ii[i] = list.get(i);
        }
        return ii;
    }

    public void sql_Update(String sql, Object... objects) {
        PreparedStatement ps = null;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            ps = con.prepareStatement(sql);
            if (objects.length > 0) {
                for (int i = 0; i < objects.length; i++) {
                    ps.setObject(i + 1, objects[i]);
                }
            }
            ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }

    public List<Map<String, Object>> sql_Select(String sql, Object... objects) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        List<Map<String, Object>> list = new ArrayList<>();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            ps = con.prepareStatement(sql);
            if (objects.length > 0) {
                for (int i = 0; i < objects.length; i++) {
                    ps.setObject(i + 1, objects[i]);
                }
            }
            rs = ps.executeQuery();
            while (rs.next()) {
                Map<String, Object> map = new HashMap<>();
                ResultSetMetaData metaData = rs.getMetaData();
                // 获取列的数量
                int columnCount = metaData.getColumnCount();
                // 循环列
                for (int i = 0; i < columnCount; i++) {
                    String key = metaData.getColumnName(i + 1);
                    map.put(key, rs.getObject(key));
                }
                list.add(map);

            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
        return list;
    }

    public final void gainItem2(int userId, int itemId, int mapId) {
        for (MapleCharacter player : ChannelServer.getInstance(1).getMapFactory().getMap(mapId).getCharacters()) {
            if (userId == player.getId()) {
                final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
                final Equip item = (Equip) (ii.getEquipById(itemId));
                MapleInventoryManipulator.addbyItem(player.getClient(), item);
            }
        }
    }

    public void makeRing(int itemID, String Name) {
        int itemId = itemID;
        if (!GameConstants.isEffectRing(itemId)) {
            c.getPlayer().dropMessage(6, "Invalid itemID.");
        } else {
            MapleCharacter fff = c.getChannelServer().getPlayerStorage().getCharacterByName(Name);
            if (fff == null) {
                c.getPlayer().dropMessage(6, "Player must be online");
            } else {
                int[] ringID = {MapleInventoryIdentifier.getInstance(), MapleInventoryIdentifier.getInstance()};
                try {
                    MapleCharacter[] chrz = {fff, c.getPlayer()};
                    for (int i = 0; i < chrz.length; i++) {
                        Equip eq = (Equip) MapleItemInformationProvider.getInstance().getEquipById(itemId, ringID[i]);
                        if (eq == null) {
                            c.getPlayer().dropMessage(6, "Invalid itemID.");
                            return;
                        }
                        MapleInventoryManipulator.addbyItem(chrz[i].getClient(), eq.copy());
                        chrz[i].dropMessage(6, "Successfully married with " + chrz[i == 0 ? 1 : 0].getName());
                    }
                    MapleRing.addToDB(itemId, c.getPlayer(), fff.getName(), fff.getId(), ringID);
                } catch (SQLException e) {
                }
            }
        }
    }

    public int MarrageChecking() {
        if (getPlayer().getParty() == null) {
            return -1;
        }
        if (getPlayer().getMarriageId() > 0) {
            return 0;
        }
        if (getPlayer().getParty().getMembers().size() != 2) {
            return 1;
        }
        if ((getPlayer().getGender() == 0) && (!getPlayer().haveItem(1050121)) && (!getPlayer().haveItem(1050122))
                && (!getPlayer().haveItem(1050113))) {
            return 5;
        }
        if ((getPlayer().getGender() == 1) && (!getPlayer().haveItem(1051129)) && (!getPlayer().haveItem(1051130))
                && (!getPlayer().haveItem(1051114))) {
            return 5;
        }
        if (!getPlayer().haveItem(1112001) && (!getPlayer().haveItem(1112012)) && (!getPlayer().haveItem(1112002))
                && (!getPlayer().haveItem(1112007))) {
            return 6;
        }
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            if (chr.getId() == getPlayer().getId()) {
                continue;
            }
            MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if (curChar == null) {
                return 2;
            }
            if (curChar.getMarriageId() > 0) {
                return 3;
            }
            if (curChar.getGender() == getPlayer().getGender()) {
                return 4;
            }
            if ((curChar.getGender() == 0) && (!curChar.haveItem(1050121)) && (!curChar.haveItem(1050122))
                    && (!curChar.haveItem(1050113))) {
                return 5;
            }
            if ((curChar.getGender() == 1) && (!curChar.haveItem(1051129)) && (!curChar.haveItem(1051130))
                    && (!curChar.haveItem(1051114))) {
                return 5;
            }
            if (!curChar.haveItem(1112001) && (!curChar.haveItem(1112012)) && (!curChar.haveItem(1112002))
                    && (!curChar.haveItem(1112007))) {
                return 6;
            }
        }
        return 9;
    }

    private static final void addMedalString(final MapleCharacter c, final StringBuilder sb) {
        final IItem medal = c.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -26);
        if (medal != null) { // Medal
            sb.append("<");
            sb.append(MapleItemInformationProvider.getInstance().getName(medal.getItemId()));
            sb.append("> ");
        }
    }

    public void 喇叭公告(int itemId, String message, Item item) {
        switch (itemId) {
            case 5070000: { // Megaphone
                if (c.getPlayer().getLevel() < 10) {
                    c.getPlayer().dropMessage(5, "必須等級10級以上才可以使用.");
                    break;
                }
                if (!c.getPlayer().getCheatTracker().canAvatarSmega2()) {
                    c.getPlayer().dropMessage(6, "很抱歉為了防止刷廣,所以你每10秒只能用一次.");
                    break;
                }
                if (!c.getChannelServer().getMegaphoneMuteState()) {

                    if (message.length() > 65) {
                        break;
                    }
                    final StringBuilder sb = new StringBuilder();
                    addMedalString(c.getPlayer(), sb);
                    sb.append(c.getPlayer().getName());
                    sb.append(" : ");
                    sb.append(message);
                    if (c.getPlayer().isPlayer() && message.indexOf("幹") != -1 || message.indexOf("豬") != -1
                            || message.indexOf("笨") != -1 || message.indexOf("靠") != -1 || message.indexOf("腦包") != -1
                            || message.indexOf("腦") != -1 || message.indexOf("智障") != -1 || message.indexOf("白目") != -1
                            || message.indexOf("白吃") != -1) {
                        c.getPlayer().dropMessage("說髒話是不禮貌的，請勿說髒話。");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (c.getPlayer().isPlayer()) {
                        c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(1, sb.toString()));
                        System.out.println("[玩家廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    } else if (c.getPlayer().isGM()) {
                        c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(1, sb.toString()));
                        System.out.println("[ＧＭ廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    }
                } else {
                    c.getPlayer().dropMessage(5, "目前喇叭停止使用.");
                }
                break;
            }
            case 5071000: { // Megaphone
                if (c.getPlayer().getLevel() < 10) {
                    c.getPlayer().dropMessage(5, "必須等級10級以上才可以使用.");
                    break;
                }
                if (!c.getPlayer().getCheatTracker().canAvatarSmega2()) {
                    c.getPlayer().dropMessage(6, "很抱歉為了防止刷廣,所以你每10秒只能用一次.");
                    break;
                }
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    if (message.length() > 65) {
                        break;
                    }
                    if (c.getPlayer().isPlayer() && message.indexOf("幹") != -1 || message.indexOf("豬") != -1
                            || message.indexOf("笨") != -1 || message.indexOf("靠") != -1 || message.indexOf("腦包") != -1
                            || message.indexOf("腦") != -1 || message.indexOf("智障") != -1 || message.indexOf("白目") != -1
                            || message.indexOf("白吃") != -1) {
                        c.getPlayer().dropMessage("說髒話是不禮貌的，請勿說髒話。");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    final StringBuilder sb = new StringBuilder();
                    addMedalString(c.getPlayer(), sb);
                    sb.append(c.getPlayer().getName());
                    sb.append(" : ");
                    sb.append(message);

                    if (c.getPlayer().isPlayer()) {
                        c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(2, sb.toString()));
                        System.out.println("[玩家廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    } else if (c.getPlayer().isGM()) {
                        c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(2, sb.toString()));
                        System.out.println("[ＧＭ廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    }
                } else {
                    c.getPlayer().dropMessage(5, "目前喇叭停止使用.");
                }
                break;
            }
            case 5077000: { // 3 line Megaphone
                if (c.getPlayer().getLevel() < 10) {
                    c.getPlayer().dropMessage(5, "必須等級10級以上才可以使用.");
                    break;
                }
                if (!c.getPlayer().getCheatTracker().canAvatarSmega2()) {
                    c.getPlayer().dropMessage(6, "很抱歉為了防止刷廣,所以你每10秒只能用一次.");
                    break;
                }
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    final List<String> messages = new LinkedList<String>();
                    messages.add(c.getPlayer().getName());
                    messages.addAll(Arrays.asList(message.split("\r\n")));
                    for (String s : messages) {
                        if (s.length() > 65) {
                            break;
                        }
                    }
                    final boolean ear = true;
                    if (c.getPlayer().isPlayer() && messages.contains("幹") || messages.contains("豬")
                            || messages.contains("笨") || messages.contains("靠")
                            || messages.contains("腦包") || messages.contains("腦")
                            || messages.contains("智障") || messages.contains("白目")
                            || messages.contains("白吃")) {
                        c.getPlayer().dropMessage("說髒話是不禮貌的，請勿說髒話。");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (c.getPlayer().isPlayer()) {
                        World.Broadcast.broadcastSmega(MaplePacketCreator.tripleSmega(messages, ear, c.getChannel()));
                        System.out.println("[玩家廣播頻道 " + c.getPlayer().getName() + "] : " + messages);
                    } else if (c.getPlayer().isGM()) {
                        World.Broadcast.broadcastSmega(MaplePacketCreator.tripleSmega(messages, ear, c.getChannel()));
                        System.out.println("[ＧＭ廣播頻道 " + c.getPlayer().getName() + "] : " + messages);
                    }
                } else {
                    c.getPlayer().dropMessage(5, "目前喇叭停止使用.");
                }
                break;
            }
            case 5073000: { // 心脏喇叭
                if (c.getPlayer().getLevel() < 10) {
                    c.getPlayer().dropMessage(5, "必須等級10級以上才可以使用.");
                    break;
                }
                if (!c.getPlayer().getCheatTracker().canAvatarSmega2()) {
                    c.getPlayer().dropMessage(6, "很抱歉為了防止刷廣,所以你每10秒只能用一次.");
                    break;
                }
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    if (message.length() > 65) {
                        break;
                    }
                    final boolean ear = true;
                    if (c.getPlayer().isPlayer() && message.indexOf("幹") != -1 || message.indexOf("豬") != -1
                            || message.indexOf("笨") != -1 || message.indexOf("靠") != -1 || message.indexOf("腦包") != -1
                            || message.indexOf("腦") != -1 || message.indexOf("智障") != -1 || message.indexOf("白目") != -1
                            || message.indexOf("白吃") != -1) {
                        c.getPlayer().dropMessage("說髒話是不禮貌的，請勿說髒話。");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (c.getPlayer().isPlayer()) {
                        World.Broadcast
                                .broadcastSmega(MaplePacketCreator.serverNotice(0x0B, c.getChannel(), message, ear));
                        System.out.println("[玩家廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    } else if (c.getPlayer().isGM()) {
                        World.Broadcast
                                .broadcastSmega(MaplePacketCreator.serverNotice(0x0B, c.getChannel(), message, ear));
                        System.out.println("[ＧＭ廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    }
                } else {
                    c.getPlayer().dropMessage(5, "目前喇叭停止使用.");
                }
                break;
            }
            case 5074000: { // Skull Megaphone
                if (c.getPlayer().getLevel() < 10) {
                    c.getPlayer().dropMessage(5, "必須等級10級以上才可以使用.");
                    break;
                }
                if (!c.getPlayer().getCheatTracker().canAvatarSmega2()) {
                    c.getPlayer().dropMessage(6, "很抱歉為了防止刷廣,所以你每10秒只能用一次.");
                    break;
                }
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    if (message.length() > 65) {
                        break;
                    }
                    final StringBuilder sb = new StringBuilder();
                    addMedalString(c.getPlayer(), sb);
                    sb.append(c.getPlayer().getName());
                    sb.append(" : ");
                    sb.append(message);

                    final boolean ear = true;
                    if (c.getPlayer().isPlayer() && message.indexOf("幹") != -1 || message.indexOf("豬") != -1
                            || message.indexOf("笨") != -1 || message.indexOf("靠") != -1 || message.indexOf("腦包") != -1
                            || message.indexOf("腦") != -1 || message.indexOf("智障") != -1 || message.indexOf("白目") != -1
                            || message.indexOf("白吃") != -1) {
                        c.getPlayer().dropMessage("說髒話是不禮貌的，請勿說髒話。");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (c.getPlayer().isPlayer()) {
                        World.Broadcast.broadcastSmega(
                                MaplePacketCreator.serverNotice(12, c.getChannel(), sb.toString(), ear));
                        System.out.println("[玩家廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    } else if (c.getPlayer().isGM()) {
                        World.Broadcast.broadcastSmega(
                                MaplePacketCreator.serverNotice(12, c.getChannel(), sb.toString(), ear));
                        System.out.println("[ＧＭ廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    }
                } else {
                    c.getPlayer().dropMessage(5, "目前喇叭停止使用.");
                }
                break;
            }
            case 5072000: { // Super Megaphone
                if (c.getPlayer().getLevel() < 10) {
                    c.getPlayer().dropMessage(5, "必須要10等以上才能使用.");
                    break;
                }
                if (!c.getPlayer().getCheatTracker().canAvatarSmega2()) {
                    c.getPlayer().dropMessage(6, "很抱歉為了防止刷廣,所以你每10秒只能用一次.");
                    break;
                }
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    if (message.length() > 65) {
                        break;
                    }
                    final StringBuilder sb = new StringBuilder();
                    addMedalString(c.getPlayer(), sb);
                    sb.append(c.getPlayer().getName());
                    sb.append(" : ");
                    sb.append(message);

                    final boolean ear = true;
                    if (c.getPlayer().isPlayer() && message.indexOf("幹") != -1 || message.indexOf("豬") != -1
                            || message.indexOf("笨") != -1 || message.indexOf("靠") != -1 || message.indexOf("腦包") != -1
                            || message.indexOf("腦") != -1 || message.indexOf("智障") != -1 || message.indexOf("白目") != -1
                            || message.indexOf("白吃") != -1) {
                        c.getPlayer().dropMessage("說髒話是不禮貌的，請勿說髒話。");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (c.getPlayer().isPlayer()) {
                        World.Broadcast
                                .broadcastSmega(MaplePacketCreator.serverNotice(3, c.getChannel(), sb.toString(), ear));
                        System.out.println("[玩家廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    } else if (c.getPlayer().isGM()) {
                        World.Broadcast
                                .broadcastSmega(MaplePacketCreator.serverNotice(3, c.getChannel(), sb.toString(), ear));
                        System.out.println("[ＧＭ廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    }
                } else {
                    c.getPlayer().dropMessage(5, "目前喇叭停止使用.");
                }
                break;
            }
            case 5076000: { // Item Megaphone
                if (c.getPlayer().getLevel() < 10) {
                    c.getPlayer().dropMessage(5, "必須等級10級以上才可以使用.");
                    break;
                }
                if (!c.getPlayer().getCheatTracker().canAvatarSmega2()) {
                    c.getPlayer().dropMessage(6, "很抱歉為了防止刷廣,所以你每10秒只能用一次.");
                    break;
                }
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    if (message.length() > 65) {
                        break;
                    }
                    final StringBuilder sb = new StringBuilder();
                    addMedalString(c.getPlayer(), sb);
                    sb.append(c.getPlayer().getName());
                    sb.append(" : ");
                    sb.append(message);

                    final boolean ear = true;
                    if (c.getPlayer().isPlayer() && message.indexOf("幹") != -1 || message.indexOf("豬") != -1
                            || message.indexOf("笨") != -1 || message.indexOf("靠") != -1 || message.indexOf("腦包") != -1
                            || message.indexOf("腦") != -1 || message.indexOf("智障") != -1 || message.indexOf("白目") != -1
                            || message.indexOf("白吃") != -1) {
                        c.getPlayer().dropMessage("說髒話是不禮貌的，請勿說髒話。");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (c.getPlayer().isPlayer()) {
                        World.Broadcast.broadcastSmega(
                                MaplePacketCreator.itemMegaphone(sb.toString(), ear, c.getChannel(), item));
                        System.out.println("[玩家廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    } else if (c.getPlayer().isGM()) {
                        World.Broadcast.broadcastSmega(
                                MaplePacketCreator.itemMegaphone(sb.toString(), ear, c.getChannel(), item));
                        System.out.println("[ＧＭ廣播頻道 " + c.getPlayer().getName() + "] : " + message);
                    }
                } else {
                    c.getPlayer().dropMessage(5, "目前喇叭停止使用.");
                }
                break;
            }
            case 5390000: // 炽热情景喇叭 - 使用它可以把你的形象显示在所有频道，伴随你的穿着显示在所有人的屏幕上，并有燃烧背景哦
            case 5390001: // 绚烂情景喇叭 - 使用它可以把你的形象显示在所有频道，伴随你的穿着显示在所有人的屏幕上，并有明亮背景哦
            case 5390002: // 爱心情景喇叭 - 使用它可以把你的形象显示在所有频道，伴随你的穿着显示在所有人的屏幕上，并有爱心背景哦
            case 5390003: // 新年庆祝喇叭1 - 使用它可以把你的形象显示在所有频道，伴随你的穿着显示在所有人的屏幕上，并有新年庆祝背景哦
            case 5390004: // 新年庆祝喇叭2 - 使用它可以把你的形象显示在所有频道，伴随你的穿着显示在所有人的屏幕上，并有新年庆祝背景哦
            case 5390005: // 小老虎情景喇叭 - 使用该道具,会出现小老虎背景,全服务器的人都可以看得见的可爱的情景喇叭哦!
            case 5390006: { // 咆哮老虎情景喇叭 - 虎年专用情景喇叭,有老虎咆哮效果.全服务器的人都可以看得见的帅气的情景喇叭哦!
                if (c.getPlayer().getLevel() < 10) {
                    c.getPlayer().dropMessage(5, "必须等级10级以上才可以使用.");
                    break;
                }
                if (!c.getPlayer().getCheatTracker().canAvatarSmega2()) {
                    c.getPlayer().dropMessage(6, "很抱歉為了防止刷廣,所以你每10秒只能用一次.");
                    break;
                }
                if (!c.getChannelServer().getMegaphoneMuteState()) {
                    final String text = message;
                    if (text.length() > 55) {
                        break;
                    }
                    final boolean ear = true;
                    if (c.getPlayer().isPlayer() && text.indexOf("幹") != -1 || text.indexOf("豬") != -1
                            || text.indexOf("笨") != -1 || text.indexOf("靠") != -1 || text.indexOf("腦包") != -1
                            || text.indexOf("腦") != -1 || text.indexOf("智障") != -1 || text.indexOf("白目") != -1
                            || text.indexOf("白吃") != -1) {
                        c.getPlayer().dropMessage("說髒話是不禮貌的，請勿說髒話。");
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (c.getPlayer().isPlayer()) {
                        World.Broadcast.broadcastSmega(
                                MaplePacketCreator.getAvatarMega(c.getPlayer(), c.getChannel(), itemId, text, ear));
                        System.out.println("[玩家廣播頻道 " + c.getPlayer().getName() + "] : " + text);
                    } else if (c.getPlayer().isGM()) {
                        World.Broadcast.broadcastSmega(
                                MaplePacketCreator.getAvatarMega(c.getPlayer(), c.getChannel(), itemId, text, ear));
                        System.out.println("[ＧＭ廣播頻道 " + c.getPlayer().getName() + "] : " + text);
                    }
                } else {
                    c.getPlayer().dropMessage(5, "目前喇叭停止使用.");
                }
                break;
            }
        }
        c.getSession().write(MaplePacketCreator.enableActions());
    }

    // min 新手玩家最小等级 max 新手玩家最大等级 Members 新手玩家数量 itemID 奖励物品 quantity 奖励数量
    // Members 新手玩家数量 意思是。不包含带人的玩家。 比如说我要求 高等级带新手必须要2人以上。我就写 2 就行。最多写5.
    public final void givePartyLevelItems(final int min, final int max, final int Members, final int itemID,
                                          final int quantity) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1
                || getPlayer().getParty().getMembers().size() <= Members) {
            return;
        }
        int A = 0;
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getPlayer().getClient().getChannelServer().getPlayerStorage()
                    .getCharacterById(chr.getId());
            if (curChar.getLevel() >= min && curChar.getLevel() <= max) {
                A++;
            }
        }
        if (Members > A) {
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getPlayer().getClient().getChannelServer().getPlayerStorage()
                    .getCharacterById(chr.getId());
            if (curChar != null && isLeader() && curChar.getLevel() >= 120) {
                gainItem(itemID, (short) (quantity));
                break;
            }
        }
    }

    /*
     * 保存队伍里所有玩家所在的地图
     */
    public final void savePartyLocation(final String loc) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            c.getPlayer().saveLocation(SavedLocationType.fromString(loc));
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getPlayer().getClient().getChannelServer().getPlayerStorage()
                    .getCharacterById(chr.getId());
            if (curChar != null) {
                curChar.saveLocation(SavedLocationType.fromString(loc));
            }
        }
    }

    /*
     * 检测组队BOSSLOG
     */
    public int checkPartyBossLog(String bossid, int b) {
        int a = 0;
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                if (curChar.getBossLog(bossid) >= b) {
                    a = 1;
                    break;
                }
            }
        }
        return a;
    }

    /*
     * 给组队BOSSLOG
     */
    public final void givePartyBossLog(String bossid) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            setBossLog(bossid);
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                curChar.setBossLog(bossid);
            }
        }
    }

    /*
     * 设置或增加组队成员的挑战BOSS次数
     * bossid 挑战BOSS任务的名称
     * type 0 = 0点重置 大于0不重置
     * count 设置的次数
     * checkMap 是否检测在同一地图
     */
    public void setPartyBossLog(String bossid) {
        setPartyBossLog(bossid, 0);
    }

    public void setPartyBossLog(String bossid, int type) {
        setPartyBossLog(bossid, type, 1);
    }

    public void setPartyBossLog(String bossid, int type, int count) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            getClient().getPlayer().setBossLog(bossid, type, count);
            return;
        }
        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getPlayer().getMap().getCharacterById(chr.getId());
            if (curChar != null && curChar.getMapId() == cMap) {
                curChar.setBossLog(bossid, type, count);
            }
        }
    }

    public void resetBossLog(String bossid) {
        getPlayer().resetBossLog(bossid);
    }

    /*
     * Vip 会员变量参数
     */
    public void setVip(int vip, long period) {
        getClient().getPlayer().setVip(vip);
        /*
         * if (period > 0) {
         * getClient().getPlayer().setViptime(period);
         * }
         */
    }

    public boolean isVip() {
        return getClient().getPlayer().getVip() > 0;
    }

    public void setVip(int vip) {
        setVip(vip, 7);
    }

    /*
     * public void setViptime(long period) {
     * if (period != 0) {
     * getClient().getPlayer().setViptime(period);
     * }
     * }
     */

    /*
     * 删除角色
     */
    public int deleteCharacter(int cid) {
        return getClient().deleteCharacter(cid);
    }

    /**
     * 获取FullPoint点数
     *
     * @return
     */
    public int GetPiot(String Name, int Channale) {
        int ret = -1;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM FullPoint WHERE channel = ? and Name = ?");
            ps.setInt(1, Channale);
            ps.setString(2, Name);
            ResultSet rs = ps.executeQuery();
            rs.next();
            ret = rs.getInt("Point");
            rs.close();
            ps.close();
        } catch (SQLException ex) {
        }
        return ret;
    }

    /***
     * 增加FullPoint点数
     *
     * @param Name
     * @param Channale
     * @param Piot
     */
    public void GainPiot(String Name, int Channale, int Piot) {
        try {
            int ret = GetPiot(Name, Channale);
            if (ret == -1) {
                ret = 0;
                PreparedStatement ps = null;
                try {
                    ps = DBConPool.getInstance().getDataSource().getConnection()
                            .prepareStatement("INSERT INTO FullPoint (channel, Name,Point) VALUES (?, ?, ?)");
                    ps.setInt(1, Channale);
                    ps.setString(2, Name);
                    ps.setInt(3, ret);

                    ps.execute();
                } catch (SQLException e) {
                    System.out.println("xxxxxxxx:" + e);
                } finally {
                    try {
                        if (ps != null) {
                            ps.close();
                        }
                    } catch (SQLException e) {
                        System.out.println("xxxxxxxxzzzzzzz:" + e);
                    }
                }
            }
            ret += Piot;
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con
                    .prepareStatement("UPDATE FullPoint SET `Point` = ? WHERE Name = ? and channel = ?");
            ps.setInt(1, ret);
            ps.setString(2, Name);
            ps.setInt(3, Channale);
            ps.execute();
            ps.close();
        } catch (SQLException sql) {
            System.err.println("獲取錯誤!!55" + sql);
        }
    }

    /**
     * 获取背包种类道具集合
     *
     * @param type
     * @return
     */
    public List<Item> getItemsByType(byte type) {
        List<Item> items = new ArrayList<>();
        final MapleInventoryType itemtype = MapleInventoryType.getByType(type);
        final MapleInventory mi = getPlayer().getInventory(itemtype);
        if (mi != null) {
            for (IItem item : mi.list()) {
                items.add((Item) item);
            }
        }
        return items;
    }

    // 获取师徒记录
    public int getMentorLog(String bossid) {
        return getPlayer().getMentorLog(bossid);
    }

    // 获取弟子列表
    public List<Integer> getMentorLog2(int i) {
        return getPlayer().getMentorLog2(i);
    }

    // 给师徒记录
    public void setMentorLog(String bossid) {
        getPlayer().setMentorLog(bossid);
    }

    // 逐出师门
    public void dropMentorLog(String boyid) {
        getPlayer().leftMentorLog(boyid);
    }

    public void resetAp() {
        boolean beginner = getPlayer().getJob() == 0 || getPlayer().getJob() == 1000 || getPlayer().getJob() == 2001;
        getPlayer().resetStatsByJob(beginner);
    }

    public int 获取当前星期() {
        return Calendar.getInstance().get(Calendar.DAY_OF_WEEK);
    }

    public void equipqh(byte slot, boolean 攻击) {
        Equip sel = (Equip) this.c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot);
        if (攻击) {
            int Watk = 30 + -Randomizer.nextInt(60);
            int Matk = 30 + -Randomizer.nextInt(60);
            if (sel.getWatk() > 0) {
                if (sel.getWatk() + Watk < 0) {
                    sel.setWatk((short) (0));
                } else {
                    sel.setWatk((short) (sel.getWatk() + Watk));
                }
            }
            if (sel.getMatk() > 0) {
                if (sel.getMatk() + Matk < 0) {
                    sel.setMatk((short) (0));
                } else {
                    sel.setMatk((short) (sel.getMatk() + Matk));
                }
            }
        } else {
            int Str = 20 + -Randomizer.nextInt(40);
            int Dex = 20 + -Randomizer.nextInt(40);
            int Int = 20 + -Randomizer.nextInt(40);
            int Luk = 20 + -Randomizer.nextInt(40);
            if (sel.getStr() > 0) {
                if (sel.getStr() + Str < 0) {
                    sel.setStr((short) (0));
                } else {
                    sel.setStr((short) (sel.getStr() + Str));
                }
            }
            if (sel.getDex() > 0) {
                if (sel.getDex() + Dex < 0) {
                    sel.setDex((short) (0));
                } else {
                    sel.setDex((short) (sel.getDex() + Dex));
                }
            }
            if (sel.getInt() > 0) {
                if (sel.getInt() + Int < 0) {
                    sel.setInt((short) (0));
                } else {
                    sel.setInt((short) (sel.getInt() + Int));
                }
            }
            if (sel.getLuk() > 0) {
                if (sel.getLuk() + Luk < 0) {
                    sel.setLuk((short) (0));
                } else {
                    sel.setLuk((short) (sel.getLuk() + Luk));
                }
            }
        }
        this.c.getPlayer().equipChanged();
        fakeRelog();
    }

    public void fakeRelog() {
        if ((!this.c.getPlayer().isAlive()) || (this.c.getPlayer().getEventInstance() != null)) {
            this.c.getPlayer().dropMessage(1, "刷新人物数据失败.");
            return;
        }
        this.c.getPlayer().dropMessage(5, "正在刷新人数据.请等待...");
        this.c.getPlayer().fakeRelog();
    }

    /**
     * 制作道具
     *
     * @param id     道具ID
     * @param str    力量
     * @param dex    敏捷
     * @param ints   智力
     * @param luk    运气
     * @param watk   物攻
     * @param matk   魔攻
     * @param period 时间
     * @param owner  道具签名
     */
    public void makeitem(int id, short str, short dex, short ints, short luk, short watk, short matk, long period,
                         String owner) {
        if (!canHold(id) || !GameConstants.isEquip(id)) {
            playerMessage("装备栏空间不足或添加的道具不是装备isEquip");
            return;
        }

        Equip equip = (Equip) MapleItemInformationProvider.getInstance().getEquipById(id);
        equip.setStr(str);
        equip.setDex(dex);
        equip.setInt(ints);
        equip.setLuk(luk);
        equip.setWatk(watk);
        equip.setMatk(matk);
        equip.setExpiration(period);
        if (!owner.isEmpty()) {
            equip.setOwner(owner);
        }
        equip.setGMLog("脚本获得 " + this.id + " (" + this.id2 + ") 地图: " + getPlayer().getMapId());
        MapleInventoryManipulator.addbyItem(getC(), equip.copy());
    }

    /**
     * 获取怪物状态
     *
     * @param hp  最大HP
     * @param mp  最大MP
     * @param exp 经验值
     * @return 重载后的怪物状态对象
     */
    public final OverrideMonsterStats getOverrideMonsterStats(final long hp, final int mp, final int exp) {
        return new OverrideMonsterStats((int) hp, mp, exp);
    }

    public int getDaysPQLog(String pqName, int days) {
        return getPlayer().getDaysPQLog(pqName, 0, days);
    }

    public int getPQLog(String pqName) {
        return getPlayer().getPQLog(pqName);
    }

    public int getPQLog(String pqName, int type) {
        return getPlayer().getPQLog(pqName, type);
    }

    public int getPQLog(String pqName, int type, int days) {
        return getPlayer().getDaysPQLog(pqName, type, days);
    }

    public void setPQLog(String pqName) {
        getPlayer().setPQLog(pqName);
    }

    public void setPQLog(String pqName, int type) {
        getPlayer().setPQLog(pqName, type);
    }

    public void setPQLog(String pqName, int type, int count) {
        getPlayer().setPQLog(pqName, type, count);
    }

    public void resetPQLog(String pqName) {
        getPlayer().resetPQLog(pqName);
    }

    public void resetPQLog(String pqName, int type) {
        getPlayer().resetPQLog(pqName, type);
    }

    public void setPartyPQLog(String pqName) {
        this.setPartyPQLog(pqName, 0);
    }

    public void setPartyPQLog(String pqName, int type) {
        this.setPartyPQLog(pqName, type, 1);
    }

    public void setPartyPQLog(String pqName, int type, int count) {
        if (this.getPlayer().getParty() == null || this.getPlayer().getParty().getMembers().size() == 1) {
            getPlayer().setPQLog(pqName, type, count);
            return;
        }
        int n4 = this.getPlayer().getMapId();
        for (MaplePartyCharacter partyCharacter : this.getPlayer().getParty().getMembers()) {
            MapleCharacter player = this.getPlayer().getMap().getCharacterById(partyCharacter.getId());
            if (player == null || player.getMapId() != n4)
                continue;
            player.setPQLog(pqName, type, count);
        }
    }

    /**
     * 获取角色武器的攻击突破上限
     */
    public int getLimitBreak() {
        int limitBreak = 999999; // 默认的上限
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        Equip weapon = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -11);
        if (weapon != null) {
            // 武器自带的突破上限数字 + 武器附加的上限数字
            limitBreak = ii.getLimitBreak(weapon.getItemId()) + weapon.getLimitBreak();
        }
        return limitBreak;
    }

    /**
     * 修改角色武器的攻击上限 如果角色武器为空 或者不是武器 返回 假 如果角色武器新的攻击上限属性小于0 或者大于1亿也返回 假
     */
    public boolean changeLimitBreak(int amount) {
        // 获取角色的武器信息 检查是否为空或者是否为武器
        Equip equip = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -11);
        if (equip == null || !ItemConstants.isWeapon(equip.getItemId())) {
            return false;
        }
        // 检查新属性是否小于0或者超过设置的上限
        int newLimitBreak = equip.getLimitBreak() + amount;
        if (newLimitBreak < 0 || newLimitBreak > 2100000000) {
            return false;
        }
        // 设置道具的新攻击上限
        equip.setLimitBreak(newLimitBreak);
        // 更新道具状态信息
        c.getPlayer().forceUpdateItem(equip);
        return true;
    }

    private int getDot(String data) {
        int gbk = data.getBytes(Charset.forName("GBK")).length, utf_8 = data.getBytes(StandardCharsets.UTF_8).length;
        for (int i = 0; i < 50; i++) {
            for (int j = 0; j < 50; j++) {
                if (i + j * 2 == gbk) {
                    if (i + j * 3 == utf_8) {
                        return i + j * 2;
                    }
                }
            }
        }
        return 0;
    }

    public final void gainMembersPQ(String pqName, int num) {
        if (getParty() == null) {
            return;
        }
        for (MaplePartyCharacter partyCharacter : getParty().getMembers()) {
            MapleCharacter player = getChannelServer().getPlayerStorage().getCharacterById(partyCharacter.getId());
            if (player == null) {
                continue;
            }
            player.setPQLog(pqName, 0, num);
        }
    }

    public MapleItemInformationProvider getItemInfo() {
        return MapleItemInformationProvider.getInstance();
    }

    public Equip getNewEquip(int equipid) {
        Equip equip = (Equip) getItemInfo().getEquipById(equipid);
        return getItemInfo().randomizeStats(equip);
    }

    public void addFromDrop(MapleClient c, Item item, boolean show) {
        MapleInventoryManipulator.addFromDrop(getClient(), item, show);
    }

    public String getServerName() {
        return ServerConfig.SERVER_NAME;
    }

    public final int 判断职业() {
        return c.getPlayer().getJob();
    }

    public final void 判断组队() {
        c.getPlayer().getParty();
    }

    public final void 判断频道() {
        getClient().getChannel();
    }

    public final int getNX(int 类型) {
        return c.getPlayer().getCSPoints(类型);
    }

    public final void gainD(final int amount) {
        c.getPlayer().modifyCSPoints(2, amount, true);
    }

    public final void 给抵用券(final int amount) {
        c.getPlayer().modifyCSPoints(2, amount, true);
    }

    public final void 收抵用券(final int amount) {
        c.getPlayer().modifyCSPoints(2, -amount, true);
    }

    public final void 给点券(final int amount) {
        c.getPlayer().modifyCSPoints(1, amount, true);
    }

    public final void 收点券(final int amount) {
        c.getPlayer().modifyCSPoints(1, -amount, true);
    }

    public final void 物品兑换1(final int id1, final short shuliang1, final int id2, final int shuliang2) {

        if (!haveItem(id1, shuliang1, true, true)) {
            c.getPlayer().dropMessage(1, "你没有足够的兑换物品。");
            return;
        }
        gainItem(id1, (short) -shuliang1, false, 0, -1, "", (byte) 0);
        gainItem(id2, (short) shuliang2, false, 0, -1, "", (byte) 0);
        c.getPlayer().dropMessage(1, "兑换成功。");
    }

    public final void 概率给物品(final int id, final short quantity, double 概率2, String a) {
        概率给物品(id, quantity, 概率2);
    }

    public final void 概率给物品(final int id, final short quantity, double 概率2) {
        if (概率2 > 100) {
            概率2 = 100;
        }
        if (概率2 <= 0) {
            概率2 = 0;
        }
        final double 概率 = Math.ceil(Math.random() * 100);
        if (概率2 > 0) {
            if (概率 <= 概率2) {
                gainItem(id, quantity, false, 0, -1, "", (byte) 0);
            }
        }
    }

    public final void 概率给物品2(final int id, final short quantity, double 概率2, String a) {
        概率给物品2(id, quantity, 概率2);
    }

    public final void 概率给物品2(final int id, final short quantity, double 概率2) {
        if (概率2 > 100) {
            概率2 = 100;
        }
        if (概率2 <= 0) {
            概率2 = 0;
        }
        final double 概率 = Math.ceil(Math.random() * 100);
        if (概率2 > 0) {
            if (概率 <= 概率2) {
                short 数量 = (short) Math.ceil(Math.random() * quantity);
                if (数量 == 0) {
                    数量 = 1;
                }
                gainItem(id, 数量, false, 0, -1, "", (byte) 0);
            }
        }
    }

    public final void 收物品(final int id, final short quantity) {
        gainItem(id, (short) -quantity, false, 0, -1, "", (byte) 0);
    }

    public int getHour() {
        return Calendar.getInstance().get(Calendar.HOUR_OF_DAY);
    }

    public int 判断日() {
        return Calendar.getInstance().get(Calendar.DATE);
    }

    public int 判断时() {
        return Calendar.getInstance().get(Calendar.HOUR_OF_DAY);
    }

    public int getMin() {
        return Calendar.getInstance().get(Calendar.MINUTE);
    }

    public int 判断分() {
        return Calendar.getInstance().get(Calendar.MINUTE);
    }

    public int getSec() {
        return Calendar.getInstance().get(Calendar.SECOND);
    }

    public final void worldMessage(final int type, int channel, final String message, boolean smegaEar) {
        World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(type, channel, message, smegaEar));
    }

    public final void worldMessage2(final int type, final String message) {// 喇叭
        switch (type) {
            case 1: // 弹窗
            case 2: // 粉蓝色底蓝色字
            case 3: // 粉紫色底紫色字(带频道标记)
            case 5: // 无底色粉红字
            case 6: // 无底色粉蓝字
            case 9: // 无底色粉蓝字
            case 11:// 带爱心的白色底粉红字
            case 12:// 带电话的粉蓝底素字
            case 13:// 带电话的粉蓝底素字
            case 14:// 带电话的粉蓝底素字
            case 15:// 带电话的粉蓝底素字
            case 16:// 带电话的粉蓝底素字
            case 17:// 带电话的粉蓝底素字
            case 18:// 带电话的粉蓝底素字
                World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(type, c.getChannel(), message));
                break;
            default:
                World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(6, c.getChannel(), message));
                break;
        }
    }

    public final void 个人公告(final String message) {
        playerMessage(6, message);
    }

    public final void 全服道具公告(final String title, final String message, final int id) {
        final IItem item = MapleInventoryManipulator.addbyId_Gachapon(c, id, (short) 1);
        final byte rareness = GameConstants.gachaponRareItem(item.getItemId());

        World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(title, message, item, rareness));
    }

    public final void 地图公告(final String message) {
        mapMessage(6, message);
    }

    public final boolean 是否队长() {
        if (getParty() == null) {
            return false;
        }
        return getParty().getLeader().getId() == c.getPlayer().getId();
    }

    public final void 团队传送地图(final int mapId, final int portal) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            if (portal < 0) {
                warp(mapId);
            } else {
                warp(mapId, portal);
            }
            return;
        }
        final boolean rand = portal < 0;
        final MapleMap target = getMap(mapId);
        final int cMap = getPlayer().getMapId();

        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getChannelServer().getPlayerStorage().getCharacterById(chr.getId());
            if (curChar != null
                    && (curChar.getMapId() == cMap || curChar.getEventInstance() == getPlayer().getEventInstance())) {
                if (rand) {
                    try {
                        curChar.changeMap(target, target.getPortal(Randomizer.nextInt(target.getPortals().size())));
                    } catch (Exception e) {
                        curChar.changeMap(target, target.getPortal(0));
                    }
                } else {
                    curChar.changeMap(target, target.getPortal(portal));
                }
            }
        }
    }

    public void 给金币(int gain) {
        c.getPlayer().gainMeso(gain, true, false, true);
    }

    public void 收金币(int gain) {
        c.getPlayer().gainMeso(-gain, true, false, true);
    }

    public void 给经验(int gain) {
        c.getPlayer().gainExp(gain, true, true, true);
    }

    public void 收经验(int gain) {
        c.getPlayer().gainExp(-gain, true, true, true);
    }

    public final void 给团队道具(final int id, final short quantity) {
        givePartyItems(id, quantity, false);
    }

    public final void 收团队道具(final int id, final short quantity) {
        givePartyItems2(id, quantity, false);
    }

    public final void givePartyItems2(final int id, final short quantity, final boolean removeAll) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            gainItem(id, (short) (removeAll ? -getPlayer().itemQuantity(id) : -quantity));
            return;
        }

        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                gainItem(id, (short) (removeAll ? -curChar.itemQuantity(id) : -quantity), false, 0, 0, "",
                        curChar.getClient(), (byte) 0);
            }
        }
    }

    public final void 给团队经验(final int amount) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            gainExp(amount);
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                curChar.gainExp(amount, true, true, true);
            }
        }
    }

    public final void 给团队点券(final int amount, final List<MapleCharacter> party) {
        for (final MapleCharacter chr : party) {
            chr.modifyCSPoints(1, amount, true);
        }
    }

    public final void 给团队抵用券(final int amount, final List<MapleCharacter> party) {
        for (final MapleCharacter chr : party) {
            chr.modifyCSPoints(2, amount, true);
        }
    }

    public void gainDY(int gain) {
        c.getPlayer().modifyCSPoints(2, gain, true);
    }

    public final void givePartyDY(final int amount) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            gainDY(amount);
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                curChar.modifyCSPoints(2, amount, true);
            }
        }
    }

    public final void givePartyMeso(final int amount) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            gainMeso(amount);
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                curChar.gainMeso(amount, true);
            }
        }
    }

    public final void 给团队金币(final int amount) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            gainMeso(amount);
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                curChar.gainMeso(amount, true);
            }
        }
    }

    public final void 销毁物品(final int id) {
        c.getPlayer().removeAll(id);
    }

    public final int 判断地图() {
        return c.getPlayer().getMap().getId();
    }

    public final int 判断地图指定怪物数量(final int mobid) {
        int a = 0;
        for (MapleMapObject obj : c.getPlayer().getMap().getAllMonstersThreadsafe()) {
            final MapleMonster mob = (MapleMonster) obj;
            if (mob.getId() == mobid) {
                a += 1;
            }
        }
        return a;
    }

    public final boolean 判断当前地图指定怪物是否存在(final int mobid) {
        for (MapleMapObject obj : c.getPlayer().getMap().getAllMonstersThreadsafe()) {
            final MapleMonster mob = (MapleMonster) obj;
            if (mob.getId() == mobid) {
                return true;
            }
        }
        return false;
    }

    public int getSkillLevel(int id) {
        return getPlayer().getSkillLevel(id);
    }

    public int 判断技能等级(int id) {
        return getPlayer().getSkillLevel(id);
    }

    public int 判断每日值(String bossid) {
        return getPlayer().getBossLog(bossid);
    }

    public int 判断每日(String bossid) {
        return getPlayer().getBossLog(bossid);
    }

    public void 增加每日值(String bossid) {
        getPlayer().setBossLog(bossid);
    }

    public void 增加每日(String bossid) {
        getPlayer().setBossLog(bossid);
    }

    public void 给个人每日(String bossid) {
        getPlayer().setBossLog(bossid);
    }

    public final void 给团队每日(String bossid) {// 给团队BOOSLOG？
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            setBossLog(bossid);
            return;
        }
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                curChar.setBossLog(bossid);
            }
        }
    }

    public int 判断团队每日(String bossid) {
        int a = 0;
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                a += curChar.getBossLog(bossid);
            }
        }
        return a;
    }

    public int 判断队友是否在场(String bossid) {
        int a = 0;
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                a += curChar.getBossLog(bossid);
            }
        }
        return a;
    }

    public final boolean 判断物品数量(final int itemid, final int quantity) {
        return haveItem(itemid, quantity, false, true);
    }

    public int 取数组随机数(int... args_all) {
        int args = args_all[Randomizer.nextInt(args_all.length)];
        return args;
    }

    public void getKeymapNull() {
        c.getSession().write(MaplePacketCreator.getKeymapNull());
    }

    public void updateChr() {
        c.getPlayer().changeChannel(c.getChannel() == ChannelServer.getChannelCount() ? 1 : (c.getChannel() + 1));
    }

    public boolean 是否主城() {
        int a = getPlayer().getMapId();
        switch (a) {
            // 彩虹村
            case 1000000:
                // 彩虹村武器店
            case 1000001:
                // 彩虹村村民家
            case 1000002:
                // 彩虹村杂货店
            case 1000003:
                // 南港
            case 2000000:
                // 射手村
            case 100000000:
                // 射手村民宅
            case 100000001:
                // 射手村集市
            case 100000100:
                // 射手村武器店
            case 100000101:
                // 射手村杂货店
            case 100000102:
                // 射手村整容院
            case 100000103:
                // 射手村美发店
            case 100000104:
                // 射手村护肤中心
            case 100000105:
                // 射手村公园
            case 100000200:
                // 宠物公园
            case 100000202:
                // 射手村游戏中心
            case 100000203:
                // 弓箭手的殿堂
            case 100000204:
                // 魔法密林
            case 101000000:
                // 魔法密林武器店
            case 101000001:
                // 魔法密林杂货店
            case 101000002:
                // 魔法密林图书馆
            case 101000003:
                // 魔法师的殿堂
            case 101000004:
                // 生命之林
            case 101000200:
                // 魔法密林码头
            case 101000300:
                // 候船室
            case 101000301:
                // 勇士部落
            case 102000000:
            case 102000001:
            case 102000002:
            case 102000003:
            case 102000004:
            case 103000000:
            case 103000001:
            case 103000002:
            case 103000003:
            case 103000004:
            case 103000005:
            case 103000006:
            case 103000008:
            case 103000100:
            case 104000000:
            case 104000001:
            case 104000002:
            case 104000003:
            case 104000004:
            case 105040400:
            case 105040401:
            case 105040402:
            case 105040300:
            case 106020000:
            case 140000000:
            case 140000001:
            case 140000010:
            case 140000011:
            case 140000012:
            case 140010110:
            case 200000000:
            case 200000001:
            case 200000002:
            case 200000100:
            case 200000110:
            case 200000111:
            case 200000112:
            case 200000120:
            case 200000121:
            case 200000122:
            case 200000130:
            case 200000131:
            case 200000132:
            case 200000140:
            case 200000141:
            case 200000150:
            case 200000151:
            case 200000152:
            case 200000160:
            case 200000161:
            case 200000200:
            case 200000201:
            case 200000202:
            case 200000203:
            case 200000300:
            case 200000301:
            case 209000000:
            case 211000001:
            case 209080000:
            case 209080100:
            case 211000000:
            case 211000100:
            case 211000101:
            case 211000102:
            case 220000000:
            case 220000001:
            case 220000002:
            case 220000003:
            case 220000004:
            case 220000005:
            case 220000006:
            case 220000100:
            case 220000110:
            case 220000111:
            case 220000300:
            case 220000301:
            case 220000302:
            case 220000303:
            case 220000304:
            case 220000305:
            case 220000306:
            case 220000307:
            case 220000400:
            case 220000500:
            case 221000000:
            case 221000001:
            case 221000100:
            case 221000200:
            case 221000300:
            case 222000000:
            case 222020000:
            case 230000000:
            case 230000001:
            case 230000002:
            case 230000003:
            case 240000000:
            case 240000001:
            case 240000002:
            case 240000003:
            case 240000004:
            case 240000005:
            case 240000006:
            case 240000100:
            case 240000110:
            case 240000111:
            case 250000000:
            case 250000001:
            case 250000002:
            case 250000003:
            case 250000100:
            case 251000000:
            case 260000000:
            case 260000100:
            case 260000110:
            case 260000200:
            case 260000201:
            case 260000202:
            case 260000203:
            case 260000204:
            case 260000205:
            case 260000206:
            case 260000207:
            case 260000300:
            case 260000301:
            case 260000302:
            case 260000303:
            case 261000000:
            case 261000001:
            case 261000002:
            case 261000010:
            case 261000011:
            case 261000020:
            case 261000021:
            case 270010000:
            case 270000000:
            case 300000000:
            case 300000001:
            case 300000002:
            case 300000010:
            case 300000011:
            case 300000012:
            case 500000000:
            case 540000000:
            case 541000000:
            case 550000000:
            case 551000000:
            case 600000000:
            case 600000001:
            case 701000000:
            case 700000000:
            case 700000100:
            case 700000101:
            case 700000200:
            case 701000100:
            case 701000200:
            case 701000201:
            case 701000202:
            case 701000203:
            case 701000210:
            case 702000000:
            case 702050000:
            case 702090102:
            case 741000200:
            case 741000201:
            case 741000202:
            case 741000203:
            case 741000204:
            case 741000205:
            case 741000206:
            case 741000207:
            case 741000208:
            case 800000000:
            case 801000000:
            case 801000001:
            case 801000002:
            case 801000100:
            case 801000110:
            case 801000200:
            case 801000210:
            case 801000300:
            case 810000000:
            case 910000000:
            case 910110000:
            case 930000700:
                return true;
            default:
                return false;
        }
    }

    public String 角色ID取名字1(int id) {
        String data = "";
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT name as DATA FROM characters WHERE id = ?");
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getString("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("获取角色ID取名字出错 - 数据库查询失败：" + Ex);
        }
        if (data == null) {
            data = "匿名人士";
        }
        return data;
    }

    public int getBossLog每日(String boss, int id) {
        int count = 0;
        Calendar c = Calendar.getInstance();
        int year = c.get(Calendar.YEAR);
        int month = c.get(Calendar.MONTH) + 1;
        int days = c.get(Calendar.DAY_OF_MONTH);
        String day = "" + year + "-" + month + "-" + days + "";
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement(
                    "SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ? AND lastattempt >= ?");
            ps.setInt(1, id);
            ps.setString(2, boss);
            ps.setString(3, day);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                count = rs.getInt(1);
            } else {
                count = -1;
            }
            rs.close();
            ps.close();
        } catch (SQLException sql) {
        }
        return count;
    }

    public void setOneTimeLog每日(String bossid, int id, String mod) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con
                    .prepareStatement("insert into onetimelo" + mod + " (characterid, log) values (?,?)");
            ps.setInt(1, id);
            ps.setString(2, bossid);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException sql) {
        }
    }

    public void changeOneTimeLog每日(String bossid, int id, String mod) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con
                    .prepareStatement("update onetimelo" + mod + " set log = ? where characterid = ?");
            ps.setString(1, bossid);
            ps.setInt(2, id);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException sql) {
        }
    }

    public String getOneTimeLog每日(int id, String mod) {
        String count = "0";
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT log FROM onetimelo" + mod + " WHERE characterid = ?");
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                count = rs.getString("log");
            } else {
                count = "-1";
            }
            rs.close();
            ps.close();
        } catch (SQLException sql) {
        }
        return count;
    }

    /*
     * 充值函数 1 = 当前充值金额 2 = 已经消费金额 3 = 总计消费金额
     */
    public int getHyPay(int type) {
        return getPlayer().getHyPay(type);
    }

    public int addHyPay(int hypay) {
        return getPlayer().addHyPay(hypay);
    }

    public int delPayReward(int pay) {
        return getPlayer().delPayReward(pay);
    }

    /*
     * public void changeDamageSkin(int id) {
     * getPlayer().changeDamageSkin(id);
     * }
     */

    public void 打开NPC(int id, int wh) {
        NPCScriptManager.getInstance().dispose(c);
        NPCScriptManager.getInstance().start(getClient(), id, wh);
    }

    public void gainNX(int type, int amount) {
        if (type <= 0 || type > 2) {
            type = 2;
        }
        c.getPlayer().modifyCSPoints(type, amount, true);
    }

    public void worldSpouseMessage(int type, String message) {
        if (type == 0x00 || type == 0x01 || (type >= 0x06 && type <= 0x20)) {
            World.Broadcast.broadcastMessage(MaplePacketCreator.spouseMessage(type, message));
        } else {
            World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, message));
        }
    }

    public final boolean checkNumSpace(final int type, final int space) {
        if (type <= 5 && type > 0) {
            return this.c.getPlayer().getInventory(MapleInventoryType.getByType((byte) type)).getNumFreeSlot() >= space;
        }
        for (int i = 1; i <= 5; ++i) {
            if (this.c.getPlayer().getInventory(MapleInventoryType.getByType((byte) i)).getNumFreeSlot() < space) {
                return false;
            }
        }
        return true;
    }

    public int 判断团队每日(String bossid, int b) {
        int a = 0;
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                if (curChar.getBossLog(bossid) >= b) {
                    a = 1;
                }
            }
        }
        return a;
    }
    
    public int getzb() {
        int money = 0;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            int cid = getPlayer().getAccountID();
            ResultSet rs;
            try (PreparedStatement limitCheck = con.prepareStatement("SELECT * FROM accounts WHERE id=" + cid + "")) {
                rs = limitCheck.executeQuery();
                if (rs.next()) {
                    money = rs.getInt("money");
                }
            }
            rs.close();
        } catch (SQLException ex) {
            System.err.println("getzb" + ex);
            FileoutputUtil.outputFileError("logs/数据库异常.txt", ex);
            ex.getStackTrace();
        }
        return money;
    }

    public void setzb(int slot) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            int cid = getPlayer().getAccountID();
            try (PreparedStatement ps = con.prepareStatement("UPDATE accounts SET money =money+ " + slot + " WHERE id = " + cid + "")) {
                ps.executeUpdate();
            }
        } catch (SQLException ex) {
            System.err.println("setzb" + ex);
            FileoutputUtil.outputFileError("logs/数据库异常.txt", ex);
            ex.getStackTrace();
        }
    }
    
        public int getmoneyb() {
        int moneyb = 0;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            int cid = getPlayer().getAccountID();
            ResultSet rs;
            try (PreparedStatement limitCheck = con.prepareStatement("SELECT * FROM accounts WHERE id=" + cid + "")) {
                rs = limitCheck.executeQuery();
                if (rs.next()) {
                    moneyb = rs.getInt("moneyb");
                }
            }
            rs.close();
        } catch (SQLException ex) {
            System.err.println("getmoneyb" + ex);
            FileoutputUtil.outputFileError("logs/数据库异常.txt", ex);
            ex.getStackTrace();
        }
        return moneyb;
    }

    public void setmoneyb(int slot) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            int cid = getPlayer().getAccountID();
            try (PreparedStatement ps = con.prepareStatement("UPDATE accounts SET moneyb =moneyb+ " + slot + " WHERE id = " + cid + "")) {
                ps.executeUpdate();
            }
        } catch (SQLException ex) {
            System.err.println("setmoneyb" + ex);
            FileoutputUtil.outputFileError("logs/数据库异常.txt", ex);
            ex.getStackTrace();
        }
    }
    
    public final void 给属性装备(final int id, final int sj, final int Flag, final int str, final int dex, final int luk, final int Int, final int hp, int mp, int watk, int matk, int wdef, int mdef, int hb, int mz, int ty, int yd) {
        给属性装备(id, sj, Flag, str, dex, luk, Int, hp, mp, watk, matk, wdef, mdef, hb, mz, ty, yd, 0, c);
    }

    public final void 给属性装备(final int id, final int sj, final int Flag, final int str, final int dex, final int luk, final int Int, final int hp, int mp, int watk, int matk, int wdef, int mdef, int hb, int mz, int ty, int yd, int 给予时间) {
        给属性装备(id, sj, Flag, str, dex, luk, Int, hp, mp, watk, matk, wdef, mdef, hb, mz, ty, yd, 给予时间, c);
    }

    public final void 给属性装备(final int id, final int sj, final int Flag, final int str, final int dex, final int luk, final int Int, final int hp, int mp, int watk, int matk, int wdef, int mdef, int hb, int mz, int ty, int yd, long 给予时间, final MapleClient cg) {
        if (1 >= 0) {
            final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            final MapleInventoryType type = GameConstants.getInventoryType(id);

            if (!MapleInventoryManipulator.checkSpace(cg, id, 1, "")) {
                return;
            }
            if (type.equals(MapleInventoryType.EQUIP) && !GameConstants.isThrowingStar(id) && !GameConstants.isBullet(id)) {
                final Equip item = (Equip) (ii.getEquipById(id));

                final String name = ii.getName(id);
                if (id / 10000 == 114 && name != null && name.length() > 0) { //medal
                    final String msg = "你已获得称号 <" + name + ">";
                    cg.getPlayer().dropMessage(5, msg);
                    //cg.getPlayer().dropMessage(5, msg);
                }
                if (sj > 0) {
                    item.setUpgradeSlots((byte) (short) sj);
                }
                if (Flag > 0) {
                    item.setFlag((byte) (short) Flag);
                }
                if (str > 0) {
                    item.setStr((short) str);
                }
                if (dex > 0) {
                    item.setDex((short) dex);
                }
                if (luk > 0) {
                    item.setLuk((short) luk);
                }
                if (Int > 0) {
                    item.setInt((short) Int);
                }
                if (hp > 0) {
                    item.setHp((short) hp);
                }
                if (mp > 0) {
                    item.setMp((short) mp);
                }
                if (watk > 0) {
                    item.setWatk((short) watk);
                }
                if (matk > 0) {
                    item.setMatk((short) matk);
                }
                if (wdef > 0) {
                    item.setWdef((short) wdef);
                }
                if (mdef > 0) {
                    item.setMdef((short) mdef);
                }
                if (hb > 0) {
                    item.setAvoid((short) hb);
                }
                if (mz > 0) {
                    item.setAcc((short) mz);
                }
                if (ty > 0) {
                    item.setJump((short) ty);
                }
                if (yd > 0) {
                    item.setSpeed((short) yd);
                }
                if (给予时间 > 0) {
                    item.setExpiration(System.currentTimeMillis() + (给予时间 * 60 * 60 * 1000));
                }
                MapleInventoryManipulator.addbyItem(cg, item.copy());
            } else {
                MapleInventoryManipulator.addById(cg, id, (short) 1, "", null);
            }
        } else {
            MapleInventoryManipulator.removeById(cg, GameConstants.getInventoryType(id), id, -1, true, false);
        }
        cg.sendPacket(MaplePacketCreator.getShowItemGain(id, (short) 1, true));
    }
            
            


}
