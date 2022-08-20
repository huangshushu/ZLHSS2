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
package handling.channel;

import java.io.Serializable;
import java.util.Collection;
import java.util.Collections;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.locks.ReentrantReadWriteLock;

import client.MapleCharacter;
import client.MapleClient;
import constants.ServerConfig;
import constants.WorldConstants;
import handling.cashshop.CashShopServer;
import handling.login.LoginServer;
import handling.mina.ServerConnection;
import handling.world.CheaterData;
import scripting.EventScriptManager;
import server.MapleSquad;
import server.MapleSquad.MapleSquadType;
import server.ServerProperties;
import server.events.MapleEvent;
import server.events.MapleEventType;
import server.events.MapleFitness;
import server.events.MapleJewel;
import server.events.MapleOla;
import server.events.MapleOxQuiz;
import server.events.MapleSnowball;
import server.life.PlayerNPC;
import server.maps.MapleMapFactory;
import server.maps.MapleMapObject;
import server.shops.HiredMerchant;
import server.shops.MaplePlayerShop;
import tools.CollectionUtil;
import tools.ConcurrentEnumMap;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

public class ChannelServer implements Serializable {

    public static long serverStartTime;
    private short port = 7575;
    private static final short DEFAULT_PORT = 7575;
    private final int channel;
    private int running_MerchantID = 0;
    private int running_PlayerShopID = 0;
    private String socket;
    private boolean shutdown = false, finishedShutdown = false, MegaphoneMuteState = false;
    private PlayerStorage players;
    private ServerConnection acceptor;
    private final MapleMapFactory mapFactory;
    private EventScriptManager eventSM;
    private static final Map<Integer, ChannelServer> instances = new HashMap<>();
    private final Map<MapleSquadType, MapleSquad> mapleSquads = new ConcurrentEnumMap<>(MapleSquadType.class);
    private final Map<Integer, HiredMerchant> merchants = new HashMap<>();
    private final Map<Integer, MaplePlayerShop> playershops = new HashMap<>();
    private final Map<Integer, PlayerNPC> playerNPCs = new HashMap<>();
    private final ReentrantReadWriteLock merchLock = new ReentrantReadWriteLock(); // merchant
    private final ReentrantReadWriteLock squadLock = new ReentrantReadWriteLock(); // squad
    private int eventmap = -1;
    private final Map<MapleEventType, MapleEvent> events = new EnumMap<>(MapleEventType.class);

    private ChannelServer(final int channel) {
        this.channel = channel;
        mapFactory = new MapleMapFactory();
        mapFactory.setChannel(channel);
    }

    public static Set<Integer> getAllChannels() {
        return new HashSet<>(instances.keySet());
    }

    public final void loadEvents() {
        if (!events.isEmpty()) {
            return;
        }
        // events.put(MapleEventType.打瓶盖, new MapleCoconut(channel,
        // MapleEventType.打瓶盖.mapids));
        // events.put(MapleEventType.打果子, new MapleCoconut(channel,
        // MapleEventType.打果子.mapids));
        events.put(MapleEventType.终极忍耐, new MapleFitness(channel, MapleEventType.终极忍耐.mapids));
        events.put(MapleEventType.爬绳子, new MapleOla(channel, MapleEventType.爬绳子.mapids));
        events.put(MapleEventType.是非题大考验, new MapleOxQuiz(channel, MapleEventType.是非题大考验.mapids));
        events.put(MapleEventType.滚雪球, new MapleSnowball(channel, MapleEventType.滚雪球.mapids));
        events.put(MapleEventType.寻宝, new MapleJewel(channel, MapleEventType.寻宝.mapids));
    }

    public final void setup() {
        setChannel(channel); // instances.put
        try {
            eventSM = new EventScriptManager(this, ServerProperties.getProperty("server.settings.events").split(","));
            port = (short) ((ServerProperties.getProperty("server.settings.channel.port", DEFAULT_PORT) + channel) - 1);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        socket = ServerConfig.IP + ":" + port;

        players = new PlayerStorage(channel);
        loadEvents();
        acceptor = new ServerConnection(port, 0, channel);
        acceptor.run();
        System.out.println("【频道" + getChannel() + "】  - 监听端口: " + port + "");
        eventSM.init();
    }

    public final void shutdown() {
        if (finishedShutdown) {
            return;
        }
        broadcastPacket(MaplePacketCreator.serverNotice(0, "【频道" + getChannel() + "】 这个频道正在关闭中."));
        shutdown = true;

        // System.out.println("【频道" + getChannel() + "】 储存商人资料...");
        //
        // closeAllMerchant();
        System.out.println("【频道" + getChannel() + "】 储存角色资料...");

        // getPlayerStorage().disconnectAll();
        System.out.println("【频道" + getChannel() + "】 解除端口绑定中...");

        try {
            if (acceptor != null) {
                acceptor.close();
                System.out.println("【频道" + getChannel() + "】 解除端口成功");
            }
        } catch (Exception e) {
            System.out.println("【频道" + getChannel() + "】 解除端口失败");
        }

        instances.remove(channel);
        LoginServer.removeChannel(channel);
        setFinishShutdown();

    }

    public final boolean hasFinishedShutdown() {
        return finishedShutdown;
    }

    public final MapleMapFactory getMapFactory() {
        return mapFactory;
    }

    public final void addPlayer(final MapleCharacter chr) {
        getPlayerStorage().registerPlayer(chr);
        chr.getClient().sendPacket(MaplePacketCreator.serverMessage(getServerMessage()));
    }

    public final PlayerStorage getPlayerStorage() {
        if (players == null) { // wth
            players = new PlayerStorage(channel); // wthhhh
        }
        return players;
    }

    public final void removePlayer(final MapleCharacter chr) {
        getPlayerStorage().deregisterPlayer(chr);
    }

    public final void removePlayer(final int idz, final String namez) {
        getPlayerStorage().deregisterPlayer(idz, namez);

    }

    public final String getServerMessage() {
        return WorldConstants.SCROLL_MESSAGE;
    }

    public final void setServerMessage(final String newMessage) {
        WorldConstants.SCROLL_MESSAGE = newMessage;
    }

    public final void broadcastPacket(final byte[] data) {
        getPlayerStorage().broadcastPacket(data);
    }

    public final void broadcastSmegaPacket(final byte[] data) {
        getPlayerStorage().broadcastSmegaPacket(data);
    }

    public final void broadcastGashponmegaPacket(final byte[] data) {
        getPlayerStorage().broadcastGashponmegaPacket(data);
    }

    public final void broadcastGMPacket(final byte[] data) {
        getPlayerStorage().broadcastGMPacket(data);
    }

    public final void broadcastGMPacket(final byte[] data, boolean 吸怪) {
        getPlayerStorage().broadcastGMPacket(data, 吸怪);
    }

    public final int getExpRate() {
        return WorldConstants.EXP_RATE;
    }

    public final void setExpRate(final int expRate) {
        WorldConstants.EXP_RATE = expRate;
    }

    public final int getMesoRate() {
        return WorldConstants.MESO_RATE;
    }

    public final void setMesoRate(final int mesoRate) {
        WorldConstants.MESO_RATE = mesoRate;
    }

    public final int getDropRate() {
        return WorldConstants.DROP_RATE;
    }

    public final void setDropRate(final int dropRate) {
        WorldConstants.DROP_RATE = dropRate;
    }

    // public final String getIP() {
    // return ServerConfig.IP;
    // }
    public final int getChannel() {
        return channel;
    }

    public final void setChannel(final int channel) {
        instances.put(channel, this);
        LoginServer.addChannel(channel);
    }

    public static final Collection<ChannelServer> getAllInstances() {
        return Collections.unmodifiableCollection(instances.values());
    }

    public final String getSocket() {
        return socket;
    }

    public final boolean isShutdown() {
        return shutdown;
    }

    public final int getLoadedMaps() {
        return mapFactory.getLoadedMaps();
    }

    public final EventScriptManager getEventSM() {
        return eventSM;
    }

    public final void reloadEvents() {
        eventSM.cancel();
        eventSM = new EventScriptManager(this, ServerProperties.getProperty("server.settings.events").split(","));
        eventSM.init();
    }

    public Map<MapleSquadType, MapleSquad> getAllSquads() {
        return Collections.unmodifiableMap(mapleSquads);
    }

    public final MapleSquad getMapleSquad(final String type) {
        return getMapleSquad(MapleSquadType.valueOf(type.toLowerCase()));
    }

    public final MapleSquad getMapleSquad(final MapleSquadType type) {
        return mapleSquads.get(type);
    }

    public final boolean addMapleSquad(final MapleSquad squad, final String type) {
        final MapleSquadType types = MapleSquadType.valueOf(type.toLowerCase());
        if (types != null && !mapleSquads.containsKey(types)) {
            mapleSquads.put(types, squad);
            squad.scheduleRemoval();
            return true;
        }
        return false;
    }

    public final boolean removeMapleSquad(final MapleSquadType types) {
        if (types != null && mapleSquads.containsKey(types)) {
            mapleSquads.remove(types);
            return true;
        }
        return false;
    }

    public final int closeAllPlayerShop() {
        int ret = 0;
        merchLock.writeLock().lock();
        try {
            final Iterator<Map.Entry<Integer, MaplePlayerShop>> playershops_ = playershops.entrySet().iterator();
            while (playershops_.hasNext()) {
                MaplePlayerShop hm = playershops_.next().getValue();
                hm.closeShop(true, false);
                hm.getMap().removeMapObject(hm);
                playershops_.remove();
                ret++;
            }
        } finally {
            merchLock.writeLock().unlock();
        }
        return ret;
    }

    public final int closeAllMerchant() {
        int ret = 0;
        merchLock.writeLock().lock();
        try {
            final Iterator<Map.Entry<Integer, HiredMerchant>> merchants_ = merchants.entrySet().iterator();
            while (merchants_.hasNext()) {
                HiredMerchant hm = merchants_.next().getValue();
                hm.closeShop(true, false);
                // HiredMerchantSave.QueueShopForSave(hm);
                hm.getMap().removeMapObject(hm);
                merchants_.remove();
                ret++;
            }
        } finally {
            merchLock.writeLock().unlock();
        }
        // hacky
        for (int i = 910000001; i <= 910000022; i++) {
            for (MapleMapObject mmo : mapFactory.getMap(i).getAllHiredMerchantsThreadsafe()) {
                // HiredMerchantSave.QueueShopForSave((HiredMerchant) mmo);
                ((HiredMerchant) mmo).closeShop(true, false);
                ret++;
            }
        }
        return ret;
    }

    public final int addPlayerShop(final MaplePlayerShop PlayerShop) {
        merchLock.writeLock().lock();

        int runningmer = 0;
        try {
            runningmer = running_PlayerShopID;
            playershops.put(running_PlayerShopID, PlayerShop);
            running_PlayerShopID++;
        } finally {
            merchLock.writeLock().unlock();
        }
        return runningmer;
    }

    public final int addMerchant(final HiredMerchant hMerchant) {
        merchLock.writeLock().lock();

        int runningmer = 0;
        try {
            runningmer = running_MerchantID;
            merchants.put(running_MerchantID, hMerchant);
            running_MerchantID++;
        } finally {
            merchLock.writeLock().unlock();
        }
        return runningmer;
    }

    public final void removeMerchant(final HiredMerchant hMerchant) {
        merchLock.writeLock().lock();

        try {
            merchants.remove(hMerchant.getStoreId());
        } finally {
            merchLock.writeLock().unlock();
        }
    }

    public final boolean containsMerchant(final int accid) {
        boolean contains = false;

        merchLock.readLock().lock();
        try {
            final Iterator itr = merchants.values().iterator();

            while (itr.hasNext()) {
                if (((HiredMerchant) itr.next()).getOwnerAccId() == accid) {
                    contains = true;
                    break;
                }
            }
        } finally {
            merchLock.readLock().unlock();
        }
        return contains;
    }

    public final List<HiredMerchant> searchMerchant(final int itemSearch) {
        final List<HiredMerchant> list = new LinkedList<>();
        merchLock.readLock().lock();
        try {
            final Iterator itr = merchants.values().iterator();

            while (itr.hasNext()) {
                HiredMerchant hm = (HiredMerchant) itr.next();
                if (hm.searchItem(itemSearch).size() > 0) {
                    list.add(hm);
                }
            }
        } finally {
            merchLock.readLock().unlock();
        }
        return list;
    }

    public final void toggleMegaphoneMuteState() {
        this.MegaphoneMuteState = !this.MegaphoneMuteState;
    }

    public final boolean getMegaphoneMuteState() {
        return MegaphoneMuteState;
    }

    public int getEvent() {
        return eventmap;
    }

    public final void setEvent(final int ze) {
        this.eventmap = ze;
    }

    public MapleEvent getEvent(final MapleEventType t) {
        return events.get(t);
    }

    public final Collection<PlayerNPC> getAllPlayerNPC() {
        return playerNPCs.values();
    }

    public final PlayerNPC getPlayerNPC(final int id) {
        return playerNPCs.get(id);
    }

    public final void addPlayerNPC(final PlayerNPC npc) {
        if (playerNPCs.containsKey(npc.getId())) {
            removePlayerNPC(npc);
        }
        playerNPCs.put(npc.getId(), npc);
        getMapFactory().getMap(npc.getMapId()).addMapObject(npc);
    }

    public final void removePlayerNPC(final PlayerNPC npc) {
        if (playerNPCs.containsKey(npc.getId())) {
            playerNPCs.remove(npc.getId());
            getMapFactory().getMap(npc.getMapId()).removeMapObject(npc);
        }
    }

    public final String getServerName() {
        return ServerConfig.SERVER_NAME;
    }

    public final void setServerName(final String sn) {
        ServerConfig.SERVER_NAME = sn;
    }

    public final int getPort() {
        return port;
    }

    public final void setPrepareShutdown() {
        this.shutdown = true;
        System.out.println("【频道" + getChannel() + "】 准备关闭.");
    }

    public final void setFinishShutdown() {
        this.finishedShutdown = true;
        System.out.println("【频道" + getChannel() + "】 已经关闭完成.");
    }

    public final boolean isAdminOnly() {
        return WorldConstants.ADMIN_ONLY;
    }

    public static Map<Integer, Integer> getChannelLoad() {
        Map<Integer, Integer> ret = new HashMap<>();
        for (ChannelServer cs : instances.values()) {
            ret.put(cs.getChannel(), cs.getConnectedClients());
        }
        return ret;
    }

    public int getConnectedClients() {
        double bfb = LoginServer.getRSGS() / 100.0d * getPlayerStorage().getConnectedClients();
        return getPlayerStorage().getConnectedClients() + ((int) Math.ceil(bfb));
    }

    public List<CheaterData> getCheaters() {
        List<CheaterData> cheaters = getPlayerStorage().getCheaters();

        Collections.sort(cheaters);
        return CollectionUtil.copyFirst(cheaters, 20);
    }

    public void broadcastMessage(byte[] message) {
        broadcastPacket(message);
    }

    public void broadcastSmega(byte[] message) {
        broadcastSmegaPacket(message);
    }

    public void broadcastGashponmega(byte[] message) {
        broadcastGashponmegaPacket(message);
    }

    public void broadcastGMMessage(byte[] message, boolean 吸怪) {
        broadcastGMPacket(message, 吸怪);
    }

    public void broadcastGMMessage(byte[] message) {
        broadcastGMPacket(message);
    }

    public void saveAll() {
        int ppl = 0;
        List<MapleCharacter> all = this.players.getAllCharactersThreadSafe();
        for (MapleCharacter chr : all) {
            try {
                int res = chr.saveToDB(false, false);
                if (res == 1) {
                    ++ppl;
                } else {
                    System.out.println("[自动存档] 角色:" + chr.getName() + " 储存失败.");
                }

            } catch (Exception e) {
                FileoutputUtil.logToFile("logs/saveAll存档保存数据异常.txt",
                        "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                + chr.getClient().getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                                + chr.getClient().getAccountName() + " 帐号ID " + chr.getClient().getAccID() + " 角色名 "
                                + chr.getName() + " 角色ID " + chr.getId());
                FileoutputUtil.outError("logs/saveAll存档保存数据异常.txt", e);

            }
        }

    }

    public boolean CanGMItem() {
        return WorldConstants.GMITEMS;
    }

    public final int getMerchantMap(MapleCharacter chr) {
        int ret = -1;
        for (int i = 910000001; i <= 910000022; i++) {
            for (MapleMapObject mmo : mapFactory.getMap(i).getAllHiredMerchantsThreadsafe()) {
                if (((HiredMerchant) mmo).getOwnerId() == chr.getId()) {
                    return mapFactory.getMap(i).getId();
                }
            }
        }
        return ret;
    }

    public final static int getChannelCount() {
        return instances.size();
    }

    public static void forceRemovePlayerByAccId(MapleClient client, int accid) {
        for (ChannelServer ch : ChannelServer.getAllInstances()) {
            Collection<MapleCharacter> chrs = ch.getPlayerStorage().getAllCharactersThreadSafe();
            for (MapleCharacter c : chrs) {
                if (c.getAccountID() == accid) {
                    try {
                        if (c.getClient() != null) {
                            if (c.getClient() != client) {
                                c.getClient().unLockDisconnect();
                            }
                        }
                    } catch (Exception ex) {
                    }
                    chrs = ch.getPlayerStorage().getAllCharactersThreadSafe();
                    if (chrs.contains(c)) {
                        ch.removePlayer(c);
                    }
                }
            }
        }
        try {
            Collection<MapleCharacter> chrs = CashShopServer.getPlayerStorage().getAllCharactersThreadSafe();
            for (MapleCharacter c : chrs) {
                if (c.getAccountID() == accid) {
                    try {
                        // FileoutputUtil.logToFile("logs/Hack/洗道具.txt", "\r\n" +
                        // FileoutputUtil.NowTime() + " MAC: " + client.getMacs() + " IP: " +
                        // client.getSessionIPAddress() + " 帐号: " + accid + " 角色: " + c.getName(),
                        // false, false);
                        if (c.getClient() != null) {
                            if (c.getClient() != client) {
                                c.getClient().unLockDisconnect();
                            }
                        }
                    } catch (Exception ex) {
                    }
                }
            }
        } catch (Exception ex) {

        }
    }

    /*
     * public static void forceRemovePlayerByCharName(MapleClient client, String
     * Name) {
     * for (ChannelServer ch : ChannelServer.getAllInstances()) {
     * Collection<MapleCharacter> chrs =
     * ch.getPlayerStorage().getAllCharactersThreadSafe();
     * for (MapleCharacter c : chrs) {
     * if (c.getName().equalsIgnoreCase(Name)) {
     * try {
     * if (c.getClient() != null) {
     * if (c.getClient() != client) {
     * c.getClient().unLockDisconnect();
     * }
     * }
     * } catch (Exception ex) {
     * }
     * chrs = ch.getPlayerStorage().getAllCharactersThreadSafe();
     * if (chrs.contains(c)) {
     * ch.removePlayer(c);
     * }
     * c.getMap().removePlayer(c);
     * }
     * }
     * }
     * }
     */

    /*
     * public static void forceRemovePlayerByCharId(MapleClient client, int charId)
     * {
     * for (ChannelServer ch : ChannelServer.getAllInstances()) {
     * Collection<MapleCharacter> chrs =
     * ch.getPlayerStorage().getAllCharactersThreadSafe();
     * for (MapleCharacter c : chrs) {
     * if (c.getId() == charId) {
     * try {
     * if (c.getClient() != null) {
     * if (c.getClient() != client) {
     * c.getClient().unLockDisconnect();
     * }
     * }
     * } catch (Exception ex) {
     * }
     * chrs = ch.getPlayerStorage().getAllCharactersThreadSafe();
     * if (chrs.contains(c)) {
     * ch.removePlayer(c);
     * }
     * }
     * }
     * }
     * }
     */
    public static final Set<Integer> getChannels() {
        return new HashSet<>(instances.keySet());
    }

    public static final ChannelServer newInstance(final int channel) {
        return new ChannelServer(channel);
    }

    public static final ChannelServer getInstance(final int channel) {
        return instances.get(channel);
    }

    public static final void startAllChannels() {
        serverStartTime = System.currentTimeMillis();

        int channelCount = WorldConstants.CHANNEL_COUNT;
        for (int i = 1; i <= Math.min(20, channelCount > 0 ? channelCount : 1); i++) {
            newInstance(i).setup();
        }
    }

    public static final void startChannel(final int channel) {
        serverStartTime = System.currentTimeMillis();
        if (channel <= WorldConstants.CHANNEL_COUNT) {
            newInstance(channel).setup();
        }
    }

    public static void forceRemovePlayerByCharName(MapleClient client, String Name) {
        for (ChannelServer ch : ChannelServer.getAllInstances()) {
            Collection<MapleCharacter> chrs = ch.getPlayerStorage().getAllCharactersThreadSafe();
            for (MapleCharacter c : chrs) {
                if (c.getName().equalsIgnoreCase(Name)) {
                    try {
                        if (c.getClient() != null) {
                            if (c.getClient() != client) {
                                c.getClient().unLockDisconnect();
                            }
                        }
                    } catch (Exception ex) {
                    }
                    chrs = ch.getPlayerStorage().getAllCharactersThreadSafe();
                    if (chrs.contains(c)) {
                        ch.removePlayer(c);
                    }
                    c.getMap().removePlayer(c);
                }
            }
        }
    }

    public static void forceRemovePlayerByCharNameFromDataBase(MapleClient client, List<String> Name) {
        for (ChannelServer ch : ChannelServer.getAllInstances()) {
            for (final String name : Name) {
                if (ch.getPlayerStorage().getCharacterByName(name) != null) {
                    MapleCharacter c = ch.getPlayerStorage().getCharacterByName(name);
                    try {
                        if (c.getClient() != null) {
                            if (c.getClient() != client) {
                                c.getClient().unLockDisconnect();
                            }
                        }
                    } catch (Exception ex) {
                    }
                    if (ch.getPlayerStorage().getAllCharactersThreadSafe().contains(c)) {
                        ch.removePlayer(c);
                    }
                    c.getMap().removePlayer(c);
                }
            }
        }

        for (final String name : Name) {
            if (CashShopServer.getPlayerStorage().getCharacterByName(name) != null) {
                MapleCharacter c = CashShopServer.getPlayerStorage().getCharacterByName(name);
                try {
                    if (c.getClient() != null) {
                        if (c.getClient() != client) {
                            c.getClient().unLockDisconnect();
                        }
                    }
                } catch (Exception ex) {
                }
            }
        }

    }


    public void closeAllMerchants() {
        int ret = 0;
        final long Start = System.currentTimeMillis();
        this.merchLock.writeLock().lock();
        try {
            final Iterator<Map.Entry<Integer, HiredMerchant>> hmit = this.merchants.entrySet().iterator();
            while (hmit.hasNext()) {
                ((HiredMerchant) (hmit.next()).getValue()).closeShop(true, false);
                hmit.remove();
                ++ret;
            }
        } catch (Exception e) {
            System.out.println("关闭雇佣商店出现错误" + (Object) e);
        } finally {
            this.merchLock.writeLock().unlock();
        }
        System.out.println("频道 " + this.channel + " 共保存雇佣商店: " + ret + " | 耗时: " + (System.currentTimeMillis() - Start) + " 毫秒");
    }
}
