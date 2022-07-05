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

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.concurrent.locks.Lock;
import java.util.Collections;
import java.util.Collection;
import client.MapleCharacterUtil;
import client.MapleCharacter;
import client.MapleClient;
import handling.world.CharacterTransfer;
import handling.world.CheaterData;
import handling.world.World;
import java.util.ConcurrentModificationException;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import server.Timer.PingTimer;

public class PlayerStorage {

    private final ReentrantReadWriteLock mutex = new ReentrantReadWriteLock();
    private final Lock readLock = mutex.readLock(), writeLock = mutex.writeLock();
    private final ReentrantReadWriteLock mutex2 = new ReentrantReadWriteLock();
    private final Lock readLock2 = mutex2.readLock(), writeLock2 = mutex2.writeLock();
    private final ReentrantReadWriteLock mutex3 = new ReentrantReadWriteLock();
    private final Lock readLock3 = mutex3.readLock(), writeLock3 = mutex3.writeLock();
    private final Map<Integer, MapleCharacter> idToChar = new HashMap<>();
    private final Map<Integer, CharacterTransfer> PendingCharacter = new HashMap<>();
    private final Map<Integer, MapleClient> PendingClient = new HashMap<>();
    private final int channel;

    public PlayerStorage(int channel) {
        this.channel = channel;
        //PingTimer.getInstance().schedule(new PersistingTask(), 900000);
        PingTimer.getInstance().register(new PersistingTask(), 60000);
    }

    public final Collection<MapleClient> getAllPendingClients() {
        readLock.lock();
        try {
            return PendingClient.values();
        } finally {
            readLock.unlock();
        }
    }

    public final Collection<MapleCharacter> getAllCharacters() {
        readLock.lock();
        try {
            return Collections.unmodifiableCollection(idToChar.values());
        } finally {
            readLock.unlock();
        }
    }

    public final List<MapleCharacter> getAllCharactersThreadSafe() {
        List<MapleCharacter> ret = new ArrayList<>();
        try {
            ret.addAll(getAllCharacters());
        } catch (ConcurrentModificationException ex) {

        }
        return ret;
    }

    public final void registerPlayer(final MapleCharacter chr) {
        writeLock.lock();
        try {
            idToChar.put(chr.getId(), chr);
        } finally {
            writeLock.unlock();
        }
        World.Find.register(chr.getId(), chr.getName(), channel);
    }

    public final void registerPendingPlayer(final CharacterTransfer chr, final int playerid) {
        writeLock2.lock();
        try {
            PendingCharacter.put(playerid, chr);//new Pair(System.currentTimeMillis(), chr));
        } finally {
            writeLock2.unlock();
        }
    }

    public final void deregisterPlayer(final MapleCharacter chr) {
        writeLock.lock();
        try {
            idToChar.remove(chr.getId());
//            if (chr != null && chr.getMap() != null) {
//                idToChar.get(chr.getId()).getMap().removePlayer(chr);
//                idToChar.remove(chr.getId());
//            }
        } finally {
            writeLock.unlock();
        }
        World.Find.forceDeregister(chr.getId(), chr.getName());
    }

    public final int pendingCharacterSize(int world) {
        Map<Integer, MapleCharacter> chars = new HashMap<>();
        for (MapleCharacter chr : idToChar.values()) {
            if (chr.getWorld() == world) {
                chars.put(chr.getId(), chr);
            }
        }
        return chars.size();
    }

    public final int pendingCharacterSize() {
        return PendingCharacter.size();
    }

    public final void deregisterPlayer(final int idz, final String namez) {
        writeLock.lock();
        try {
            idToChar.remove(idz);
        } finally {
            writeLock.unlock();
        }
        World.Find.forceDeregister(idz, namez);
    }

    public final void deregisterPendingPlayer(final int charid) {
        writeLock2.lock();
        try {
            PendingCharacter.remove(charid);
        } finally {
            writeLock2.unlock();
        }
    }

    public final CharacterTransfer getPendingCharacter(final int charid) {
        final CharacterTransfer toreturn;
        readLock2.lock();
        try {
            toreturn = PendingCharacter.get(charid);//.right;
        } finally {
            readLock2.unlock();
        }
        if (toreturn != null) {
            deregisterPendingPlayer(charid);
        }
        return toreturn;
        /*readLock2.lock();
        try {
            return PendingCharacter.remove(charid);
        } finally {
            readLock2.unlock();
        }*/
    }

    public final MapleCharacter getCharacterByName(final String name) {
        MapleCharacter rchr = null;
        readLock.lock();
        try {
            for (MapleCharacter chr : idToChar.values()) {
                if (chr.getName().equalsIgnoreCase(name)) {
                    rchr = chr;
                }
            }
        } finally {
            readLock.unlock();
        }
        return rchr;
    }

    /*
     public MapleCharacter getPendingCharacter(int id) {
     for (MapleCharacter chr : pendingCharacter) {
     if (chr.getId() == id) {
     return chr;
     }
     }
     return null;
     }*/
    public final MapleCharacter getCharacterById(final int id) {
        readLock.lock();
        try {
            return idToChar.get(id);
        } finally {
            readLock.unlock();
        }
    }

    public final int getConnectedClients() {
        return idToChar.size();
    }

    public final List<CheaterData> getCheaters() {
        final List<CheaterData> cheaters = new ArrayList<>();

        readLock.lock();
        try {
            final Iterator<MapleCharacter> itr = this.idToChar.values().iterator();
            MapleCharacter chr;
            while (itr.hasNext()) {
                chr = itr.next();

                if (chr.getCheatTracker().getPoints() > 0) {
                    cheaters.add(new CheaterData(chr.getCheatTracker().getPoints(), MapleCharacterUtil.makeMapleReadable(chr.getName()) + "(编号:" + chr.getId() + ") 检测次数(" + chr.getCheatTracker().getPoints() + ") " + chr.getCheatTracker().getSummary() + " 地图:" + chr.getMap().getMapName()));
                }
            }
        } finally {
            readLock.unlock();
        }
        return cheaters;
    }

    public final void disconnectAll() {
        disconnectAll(false);
    }

    public final void disconnectAll(final boolean checkGM) {
        writeLock.lock();
        try {
            final Iterator<MapleCharacter> itr = idToChar.values().iterator();
            MapleCharacter chr;
            while (itr.hasNext()) {
                chr = itr.next();
                if (!chr.isGM() || !checkGM) {
                    chr.getClient().disconnect(false, false, true);
                    chr.getClient().getSession().close();
                    World.Find.forceDeregister(chr.getId(), chr.getName());
                    itr.remove();
                }
            }
        } finally {
            writeLock.unlock();
        }
    }

    public final void disconnectAll(MapleCharacter ch) {
        writeLock.lock();
        try {
            final Iterator<MapleCharacter> itr = idToChar.values().iterator();
            MapleCharacter chr;
            while (itr.hasNext()) {
                chr = itr.next();
                if (chr.getGMLevel() < ch.getGMLevel()) {
                    chr.getClient().disconnect(false, false, true);
                    chr.getClient().getSession().close();
                    World.Find.forceDeregister(chr.getId(), chr.getName());
                    itr.remove();
                }
            }
        } finally {
            writeLock.unlock();
        }
    }

    public final String getOnlinePlayers(final boolean byGM) {
        final StringBuilder sb = new StringBuilder();

        if (byGM) {
            readLock.lock();
            try {
                final Iterator<MapleCharacter> itr = idToChar.values().iterator();
                while (itr.hasNext()) {
                    sb.append(MapleCharacterUtil.makeMapleReadable(itr.next().getName()));
                    sb.append(", ");
                }
            } finally {
                readLock.unlock();
            }
        } else {
            readLock.lock();
            try {
                final Iterator<MapleCharacter> itr = idToChar.values().iterator();
                MapleCharacter chr;
                while (itr.hasNext()) {
                    chr = itr.next();

                    if (!chr.isGM()) {
                        sb.append(MapleCharacterUtil.makeMapleReadable(chr.getName()));
                        sb.append(", ");
                    }
                }
            } finally {
                readLock.unlock();
            }
        }
        return sb.toString();
    }

    public final void broadcastPacket(final byte[] data) {
        readLock.lock();
        try {
            final Iterator<MapleCharacter> itr = idToChar.values().iterator();
            while (itr.hasNext()) {
                itr.next().getClient().sendPacket(data);
            }
        } finally {
            readLock.unlock();
        }
    }

    public final void broadcastSmegaPacket(final byte[] data) {
        readLock.lock();
        try {
            final Iterator<MapleCharacter> itr = idToChar.values().iterator();
            MapleCharacter chr;
            while (itr.hasNext()) {
                chr = itr.next();

                if (chr.getClient().isLoggedIn() && chr.getSmega()) {
                        chr.getClient().sendPacket(data);
                }
            }
        } finally {
            readLock.unlock();
        }
    }
    
    public final void broadcastGashponmegaPacket(final byte[] data) {
        readLock.lock();
        try {
            final Iterator<MapleCharacter> itr = idToChar.values().iterator();
            MapleCharacter chr;
            while (itr.hasNext()) {
                chr = itr.next();

                if (chr.getClient().isLoggedIn() && chr.getGashponmega()) {
                        chr.getClient().sendPacket(data);
                }
            }
        } finally {
            readLock.unlock();
        }
    }

    public final void broadcastGMPacket(final byte[] data) {
        readLock.lock();
        try {
            final Iterator<MapleCharacter> itr = idToChar.values().iterator();
            MapleCharacter chr;
            while (itr.hasNext()) {
                chr = itr.next();

                if (chr.getClient().isLoggedIn() && chr.isGM()) {
                    chr.getClient().sendPacket(data);
                }
            }
        } finally {
            readLock.unlock();
        }
    }

    public final void broadcastGMPacket(final byte[] data, boolean 吸怪) {
        readLock.lock();
        try {
            final Iterator<MapleCharacter> itr = idToChar.values().iterator();
            MapleCharacter chr;
            while (itr.hasNext()) {
                chr = itr.next();
                if (chr.getClient().isLoggedIn() && chr.isGM() && chr.get_control_吸怪讯息()) {
                    chr.getClient().sendPacket(data);
                }
            }
        } finally {
            readLock.unlock();
        }
    }

    public class PersistingTask implements Runnable {

        @Override
        public void run() {
            writeLock2.lock();
            try {
                final long currenttime = System.currentTimeMillis();
                final Iterator<Map.Entry<Integer, CharacterTransfer>> itr = PendingCharacter.entrySet().iterator();

                while (itr.hasNext()) {
                    if (currenttime - itr.next().getValue().TranferTime > 40000) { // 40 sec
                        itr.remove();
                    }
                }
            } finally {
                writeLock2.unlock();
            }
        }
    }

    public final MapleClient getPendingClient(final int charid) {
        final MapleClient toreturn;
        readLock3.lock();
        try {
            toreturn = PendingClient.get(charid);//.right;
        } finally {
            readLock3.unlock();
        }
        if (toreturn != null) {
            deregisterPendingClient(charid);
        }
        return toreturn;
    }

    public final void registerPendingClient(final MapleClient c, final int playerid) {
        writeLock3.lock();
        try {
            PendingClient.put(playerid, c);//new Pair(System.currentTimeMillis(), chr));
        } finally {
            writeLock3.unlock();
        }
    }

    public final void deregisterPendingClient(final int charid) {
        writeLock3.lock();
        try {
            PendingClient.remove(charid);
        } finally {
            writeLock3.unlock();
        }
    }

    public final void deregisterPendingPlayerByAccountId(final int accountId) {
        writeLock2.lock();
        try {
            for (CharacterTransfer transfer : PendingCharacter.values()) {
                if (transfer.accountid == accountId) {
                    PendingCharacter.remove(transfer.characterid);
                }
            }
        } finally {
            writeLock2.unlock();
        }
    }
}
