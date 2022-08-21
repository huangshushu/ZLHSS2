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
 but WITHOUT ANY WARRANTY; w"ithout even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package scripting;

import client.MapleCharacter;
import constants.ServerConfig;
import database.DBConPool;
import handling.channel.ChannelServer;
import handling.world.MapleParty;
import handling.world.World;
import server.MapleSquad;
import server.Randomizer;
import server.Timer.EventTimer;
import server.events.MapleEvent;
import server.events.MapleEventType;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import server.life.OverrideMonsterStats;
import server.maps.MapleMap;
import server.maps.MapleMapFactory;
import server.maps.MapleMapObject;
import tools.FilePrinter;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

import javax.script.Invocable;
import javax.script.ScriptException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;
import java.util.concurrent.ScheduledFuture;

public class EventManager {

    private static final int[] eventChannel = new int[4];
    private final Invocable iv;
    private final int channel;
    private final Map<String, EventInstanceManager> instances = new WeakHashMap<>();
    private final Properties props = new Properties();
    private final String name;

    public EventManager(ChannelServer cserv, Invocable iv, String name) {
        this.iv = iv;
        this.channel = cserv.getChannel();
        this.name = name;
    }

    public void cancel() {
        try {
            iv.invokeFunction("cancelSchedule", (Object) null);
        } catch (ScriptException | NoSuchMethodException ex) {
            System.err.println("Event name : " + name + ", method Name : cancelSchedule:\n" + ex);
            FilePrinter.printError("EventManager.txt",
                    "Event name : " + name + ", method Name : cancelSchedule:\n" + ex);
        }
    }

    public ScheduledFuture<?> schedule(final String methodName, long delay) {
        return EventTimer.getInstance().schedule(new Runnable() {

            @Override
            public void run() {
                try {
                    iv.invokeFunction(methodName, (Object) null);
                } catch (ScriptException | NoSuchMethodException ex) {
                    System.err.println("Event name : " + name + ", method Name : " + methodName + ":\n" + ex);
                    FilePrinter.printError("EventManager.txt",
                            "Event name : " + name + ", method Name : " + methodName + ":\n" + ex);

                }
            }
        }, delay);
    }

    public ScheduledFuture<?> schedule(final String methodName, long delay, final EventInstanceManager eim) {
        return EventTimer.getInstance().schedule(new Runnable() {

            @Override
            public void run() {
                try {
                    iv.invokeFunction(methodName, eim);
                } catch (ScriptException | NoSuchMethodException ex) {
                    System.err.println("Event name : " + name + ", method Name : " + methodName + ":\n" + ex);
                    FilePrinter.printError("EventManager.txt",
                            "Event name : " + name + ", method Name : " + methodName + ":\n" + ex);
                    FileoutputUtil.log(FileoutputUtil.ScriptEx_Log,
                            "Event name : " + name + ", method Name : " + methodName + ":\n" + ex);

                }
            }
        }, delay);
    }

    public ScheduledFuture<?> scheduleAtTimestamp(final String methodName, long timestamp) {
        return EventTimer.getInstance().scheduleAtTimestamp(new Runnable() {

            @Override
            public void run() {
                try {
                    iv.invokeFunction(methodName, (Object) null);
                } catch (ScriptException | NoSuchMethodException ex) {
                    System.err.println("Event name : " + name + ", method Name : " + methodName + ":\n" + ex);
                    FilePrinter.printError("EventManager.txt",
                            "Event name : " + name + ", method Name : " + methodName + ":\n" + ex);
                    FileoutputUtil.log(FileoutputUtil.ScriptEx_Log,
                            "Event name : " + name + ", method Name : " + methodName + ":\n" + ex);
                }
            }
        }, timestamp);
    }

    public int getChannel() {
        return channel;
    }

    public ChannelServer getChannelServer() {
        return ChannelServer.getInstance(channel);
    }

    public EventInstanceManager getInstance(String name) {
        return instances.get(name);
    }

    public Collection<EventInstanceManager> getInstances() {
        return Collections.unmodifiableCollection(instances.values());
    }

    public EventInstanceManager newInstance(String name) {
        EventInstanceManager ret = new EventInstanceManager(this, name, channel);
        instances.put(name, ret);
        return ret;
    }

    public void disposeInstance(String name) {
        instances.remove(name);
        if (getProperty("state") != null && instances.isEmpty()) {
            setProperty("state", "0");
        }
        if (getProperty("leader") != null && instances.isEmpty() && getProperty("leader").equals("false")) {
            setProperty("leader", "true");
        }
        if (this.name.equals("CWKPQ")) { // hard code it because i said so
            final MapleSquad squad = ChannelServer.getInstance(channel).getMapleSquad("CWKPQ");// so fkin hacky
            if (squad != null) {
                squad.clear();
            }
        }
    }

    public Invocable getIv() {
        return iv;
    }

    public void setProperty(String key, String value) {
        props.setProperty(key, value);
    }

    public String getProperty(String key) {
        return props.getProperty(key);
    }

    public final Properties getProperties() {
        return props;
    }

    public String getName() {
        return name;
    }

    public void startInstance() {
        try {
            iv.invokeFunction("setup", (Object) null);
        } catch (ScriptException | NoSuchMethodException ex) {
            System.err.println("Event name : " + name + ", method Name : setup:\n" + ex);
            FilePrinter.printError("EventManager.txt", "Event name : " + name + ", method Name : setup:\n" + ex);
        }
    }

    public void startInstance(String mapid, MapleCharacter chr) {
        try {
            EventInstanceManager eim = (EventInstanceManager) iv.invokeFunction("setup", mapid);
            eim.registerCarnivalParty(chr, chr.getMap(), (byte) 0);
        } catch (ScriptException | NoSuchMethodException ex) {
            System.err.println("Event name : " + name + ", method Name : setup:\n" + ex);
            FilePrinter.printError("EventManager.txt", "Event name : " + name + ", method Name : setup:\n" + ex);
        }
    }

    public void startInstance_Party(String mapid, MapleCharacter chr) {
        try {
            EventInstanceManager eim = (EventInstanceManager) iv.invokeFunction("setup", mapid);
            eim.registerParty(chr.getParty(), chr.getMap());
        } catch (ScriptException | NoSuchMethodException ex) {
            System.err.println("Event name : " + name + ", method Name : setup:\n" + ex);
            FilePrinter.printError("EventManager.txt", "Event name : " + name + ", method Name : setup:\n" + ex);
        }
    }

    // GPQ
    public void startInstance(MapleCharacter character, String leader) {
        try {
            EventInstanceManager eim = (EventInstanceManager) (iv.invokeFunction("setup", (Object) null));
            eim.registerPlayer(character);
            eim.setProperty("leader", leader);
            eim.setProperty("guildid", String.valueOf(character.getGuildId()));
            setProperty("guildid", String.valueOf(character.getGuildId()));
        } catch (ScriptException | NoSuchMethodException ex) {
            System.err.println("Event name : " + name + ", method Name : setup-Guild:\n" + ex);
            FilePrinter.printError("EventManager.txt", "Event name : " + name + ", method Name : setup-Guild:\n" + ex);
        }
    }

    public void startInstance_CharID(MapleCharacter character) {
        try {
            EventInstanceManager eim = (EventInstanceManager) (iv.invokeFunction("setup", character.getId()));
            eim.registerPlayer(character);
        } catch (ScriptException | NoSuchMethodException ex) {
            System.err.println("Event name : " + name + ", method Name : setup-CharID:\n" + ex);
            FilePrinter.printError("EventManager.txt", "Event name : " + name + ", method Name : setup-CharID:\n" + ex);
        }
    }

    public void startInstance(MapleCharacter character) {
        try {
            EventInstanceManager eim = (EventInstanceManager) (iv.invokeFunction("setup", (Object) null));
            eim.registerPlayer(character);
        } catch (ScriptException | NoSuchMethodException ex) {
            System.err.println("Event name : " + name + ", method Name : setup-character:\n" + ex);
            FilePrinter.printError("EventManager.txt",
                    "Event name : " + name + ", method Name : setup-character:\n" + ex);
        }
    }

    // PQ method: starts a PQ
    public void startInstance(MapleParty party, MapleMap map) {
        try {
            EventInstanceManager eim = (EventInstanceManager) (iv.invokeFunction("setup", party.getId()));
            eim.registerParty(party, map);
        } catch (ScriptException ex) {
            System.err.println("Event name : " + name + ", method Name : setup-partyid:\n" + ex);
            FilePrinter.printError("EventManager.txt",
                    "Event name : " + name + ", method Name : setup-partyid:\n" + ex);
        } catch (NoSuchMethodException ex) {
            // ignore
            startInstance_NoID(party, map, ex);
        }
    }

    public void startInstance_NoID(MapleParty party, MapleMap map) {
        startInstance_NoID(party, map, null);
    }

    public void startInstance_NoID(MapleParty party, MapleMap map, final Exception old) {
        try {
            EventInstanceManager eim = (EventInstanceManager) (iv.invokeFunction("setup", (Object) null));
            eim.registerParty(party, map);
        } catch (ScriptException | NoSuchMethodException ex) {
            System.err.println("Event name : " + name + ", method Name : setup-party:\n" + ex);
            FilePrinter.printError("EventManager.txt", "Event name : " + name + ", method Name : setup-party:\n" + ex
                    + "\n" + (old == null ? "no old exception" : old));
        }
    }

    // non-PQ method for starting instance
    public void startInstance(EventInstanceManager eim, String leader) {
        try {
            iv.invokeFunction("setup", eim);
            eim.setProperty("leader", leader);
        } catch (ScriptException | NoSuchMethodException ex) {
            System.err.println("Event name : " + name + ", method Name : setup-leader:\n" + ex);
            FilePrinter.printError("EventManager.txt", "Event name : " + name + ", method Name : setup-leader:\n" + ex);
        }
    }

    public void startInstance(MapleSquad squad, MapleMap map) {
        startInstance(squad, map, -1);
    }

    public void startInstance(MapleSquad squad, MapleMap map, int questID) {
        if (squad.getStatus() == 0) {
            return; // we dont like cleared squads
        }
        if (!squad.getLeader().isGM()) {
            if (squad.getMembers().size() < squad.getType().i) { // less than 3
                squad.getLeader().dropMessage(5, "这个远征队至少要有 " + squad.getType().i + " 人以上才可以开战.");
                return;
            }
            if (name.equals("CWKPQ") && squad.getJobs().size() < 5) {
                squad.getLeader().dropMessage(5, "The squad requires members from every type of job.");
                return;
            }
        }
        try {
            EventInstanceManager eim = (EventInstanceManager) (iv.invokeFunction("setup", squad.getLeaderName()));
            eim.registerSquad(squad, map, questID);
        } catch (ScriptException | NoSuchMethodException ex) {
            System.err.println("Event name : " + name + ", method Name : setup-squad:\n" + ex);
            FilePrinter.printError("EventManager.txt", "Event name : " + name + ", method Name : setup-squad:\n" + ex);
        }
    }

    public void warpAllPlayer(int from, int to) {
        // if (ChannelServer.getInstance(1).isShutdown()) {
        // System.out.println("warpAllPlayer - 关闭服务器中无法调用");
        // return;
        // }
        final MapleMap tomap = getMapFactory().getMap(to);
        final MapleMap frommap = getMapFactory().getMap(from);
        List<MapleCharacter> list = frommap.getCharactersThreadsafe();
        if (tomap != null && list != null && frommap.getCharactersSize() > 0) {
            for (MapleMapObject mmo : list) {
                ((MapleCharacter) mmo).changeMap(tomap, tomap.getPortal(0));
            }
        }
    }

    public MapleMapFactory getMapFactory() {
        return getChannelServer().getMapFactory();
    }

    public OverrideMonsterStats newMonsterStats() {
        return new OverrideMonsterStats();
    }

    public List<MapleCharacter> newCharList() {
        return new ArrayList<>();
    }

    public MapleMonster getMonster(final int id) {

        return MapleLifeFactory.getMonster(id);
    }

    public void broadcastYellowMsg(final String msg) {
        getChannelServer().broadcastPacket(MaplePacketCreator.yellowChat(msg));
    }

    public void broadcastServerMsg(final int type, final String msg, final boolean weather) {
        if (!weather) {
            getChannelServer().broadcastPacket(MaplePacketCreator.serverNotice(type, msg));
        } else {
            for (MapleMap load : getMapFactory().getAllMaps()) {
                if (load.getCharactersSize() > 0) {
                    load.startMapEffect(msg, type);
                }
            }
        }
    }

    public boolean scheduleRandomEvent() {
        boolean omg = false;
        for (int i = 0; i < eventChannel.length; i++) {
            omg |= scheduleRandomEventInChannel(eventChannel[i]);
        }
        return omg;
    }

    public boolean scheduleRandomEventInChannel(int chz) {
        final ChannelServer cs = ChannelServer.getInstance(chz);
        if (cs == null || cs.getEvent() > -1) {
            return false;
        }
        MapleEventType t = null;
        while (t == null) {
            for (MapleEventType x : MapleEventType.values()) {
                if (Randomizer.nextInt(MapleEventType.values().length) == 0 && x != MapleEventType.爬绳子) {
                    t = x;
                    break;
                }
            }
        }
        final String msg = MapleEvent.scheduleEvent(t, cs);
        if (msg.length() > 0) {
            broadcastYellowMsg(msg);
            return false;
        }
        EventTimer.getInstance().schedule(new Runnable() {

            @Override
            public void run() {
                if (cs.getEvent() >= 0) {
                    MapleEvent.setEvent(cs, true);
                }
            }
        }, 600000);
        return true;
    }

    /*
     * public boolean scheduleRandomEventInChannel(int chz) {
     * final ChannelServer cs = ChannelServer.getInstance(chz);
     * if (cs == null || cs.getEvent() > -1) {
     * return false;
     * }
     * MapleEventType t = null;
     * while (t == null) {
     * for (MapleEventType x : MapleEventType.values()) {
     * t = (cs.getChannel() == 2 || cs.getChannel() == 3) ? MapleEventType.终极忍耐 :
     * (cs.getChannel() == 4 || cs.getChannel() == 5) ? MapleEventType.滚雪球 :
     * (cs.getChannel() == 6 || cs.getChannel() == 7) ? MapleEventType.爬绳子 :
     * MapleEventType.寻宝;
     * break;
     * //}
     * }
     * }
     * final String msg = MapleEvent.scheduleEvent(t, cs);
     * if (msg.length() > 0) {
     * broadcastYellowMsg(msg);
     * return false;
     * }
     * EventTimer.getInstance().schedule(new Runnable() {
     * 
     * @Override
     * public void run() {
     * if (cs.getEvent() >= 0) {
     * MapleEvent.setEvent(cs, true);
     * }
     * }
     * }, 600000);
     * return true;
     * }
     */
    public void setWorldEvent() {
        for (int i = 0; i < eventChannel.length; i++) {
            // eventChannel[i] = 1; //2-8
            eventChannel[i] = Randomizer.nextInt(ChannelServer.getAllInstances().size()) + i; // 2-13
            // eventChannel[i] = i + 2;
        }
    }

    public final void invokeFunctionMethod(final String methodName) {
        try {
            this.iv.invokeFunction(methodName, this);
        } catch (ScriptException | NoSuchMethodException ex) {
            System.out.println("Event name" + this.getName() + ", Instance name : " + name + ", method Name : "
                    + methodName + ":\n" + ex);
            FilePrinter.printError("EventManager.txt", "Event name : " + name + ", method Name : setup-squad:\n" + ex);
        }
    }

    public final void worldMessage(final int type, final String message) {
        World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(type, message));
    }

    public void deleteBossLog(int type) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("DELETE FROM bosslog_copy WHERE type = ?");
            ps.setInt(1, type);
            ps.executeUpdate();
            ps.close();
        } catch (Exception Ex) {
            System.err.println("Error while set bosslog." + Ex);
        }
    }

    public int 获取当前星期() {
        return Calendar.getInstance().get(Calendar.DAY_OF_WEEK);
    }

    public static String 获取最高金币玩家名字() {
        String name = "";
        String level = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement(
                    "SELECT `name`, `meso` FROM characters WHERE gm = 0 ORDER BY `meso` DESC LIMIT 1");
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    name = rs.getString("name");
                    level = rs.getString("meso");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("获取家族名称出错 - 数据库查询失败：" + Ex);
        }

        return String.format("%s", name);
    }

    public static int 获取最高玩家等级() {
        int data = 0;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT MAX(level) as DATA FROM characters WHERE gm = 0");
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getInt("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("获取最高玩家等级出错 - 数据库查询失败：" + Ex);
        }

        return data;
    }

    public static String 获取最高等级玩家名字() {
        String name = "";
        String level = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement(
                    "SELECT `name`, `level` FROM characters WHERE gm = 0 ORDER BY `level` DESC LIMIT 1");
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    name = rs.getString("name");
                    level = rs.getString("level");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("获取家族名称出错 - 数据库查询失败：" + Ex);
        }

        return String.format("%s", name);
    }

    public static int 获取最高玩家人气() {
        int data = 0;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT MAX(fame) as DATA FROM characters WHERE gm = 0");
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getInt("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("获取最高玩家等级出错 - 数据库查询失败：" + Ex);
        }

        return data;
    }

    public static String 获取最高人气玩家名字() {
        String name = "";
        String level = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement(
                    "SELECT `name`, `fame` FROM characters WHERE gm = 0 ORDER BY `fame` DESC LIMIT 1");
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    name = rs.getString("name");
                    level = rs.getString("fame");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("获取家族名称出错 - 数据库查询失败：" + Ex);
        }

        return String.format("%s", name);
    }

    public static int 获取最高玩家金币() {
        int data = 0;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT MAX(meso) as DATA FROM characters WHERE gm = 0");
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getInt("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("获取最高玩家等级出错 - 数据库查询失败：" + Ex);
        }

        return data;
    }

    public String getServerName() {
        return ServerConfig.SERVER_NAME;
    }
}
