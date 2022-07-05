/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package handling.login;

import client.MapleClient;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

/**
 *
 * @author pungin
 */
public class AccountStorage {

    private final ReentrantReadWriteLock mutex = new ReentrantReadWriteLock();
    private final Lock readLock = mutex.readLock(), writeLock = mutex.writeLock();
    private final Map<Integer, MapleClient> idToClient = new HashMap<>();

    public final Collection<MapleClient> getAllClients() {
        readLock.lock();
        try {
            return Collections.unmodifiableCollection(idToClient.values());
        } finally {
            readLock.unlock();
        }
    }

    public final List<MapleClient> getAllClientsThreadSafe() {
        List<MapleClient> ret = new ArrayList<>();
        ret.addAll(getAllClients());

        return ret;
    }

    public final void registerAccount(final MapleClient c) {
        writeLock.lock();
        try {
            idToClient.put(c.getAccID(), c);
        } finally {
            writeLock.unlock();
        }
    }

    public final void deregisterAccount(final MapleClient c) {
        writeLock.lock();
        try {
            List<Integer> clients = new ArrayList();
            for (Map.Entry<Integer, MapleClient> entry : idToClient.entrySet()) {
                if (entry.getValue() == c) {
                    clients.add(entry.getKey());
                }
            }
            for (int id : clients) {
                idToClient.remove(id);
            }
        } finally {
            writeLock.unlock();
        }
    }

    public final void deregisterAccountById(final int id) {
        writeLock.lock();
        try {
            idToClient.remove(id);
        } finally {
            writeLock.unlock();
        }
    }

    public final int pendingClientSize(int world) {
        Map<Integer, MapleClient> clients = new HashMap<>();
        for (MapleClient c : idToClient.values()) {
            if (c.getWorld() == world) {
                clients.put(c.getAccID(), c);
            }
        }
        return clients.size();
    }

    public final MapleClient getClientByName(final String name) {
        MapleClient client = null;
        readLock.lock();
        try {
            for (MapleClient c : idToClient.values()) {
                if (c.getAccountName().equalsIgnoreCase(name)) {
                    client = c;
                }
            }
        } finally {
            readLock.unlock();
        }
        return client;
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
    public final MapleClient getCharacterById(final int id) {
        readLock.lock();
        try {
            return idToClient.get(id);
        } finally {
            readLock.unlock();
        }
    }

    public final int getConnectedClients() {
        return idToClient.size();
    }

    public final void disconnectAll() {
        disconnectAll(false);
    }

    public final void disconnectAll(final boolean checkGM) {
        writeLock.lock();
        try {
            final Iterator<MapleClient> itr = idToClient.values().iterator();
            MapleClient c;
            while (itr.hasNext()) {
                c = itr.next();
                if (!c.isGm() || !checkGM) {
                    c.disconnect(false, false, true);
                    c.getSession().close();
                    itr.remove();
                }
            }
        } finally {
            writeLock.unlock();
        }
    }

    public final void disconnectAll(MapleClient cl) {
        writeLock.lock();
        try {
            final Iterator<MapleClient> itr = idToClient.values().iterator();
            MapleClient c;
            while (itr.hasNext()) {
                c = itr.next();
                if (c.getGmLevel() < cl.getGmLevel()) {
                    c.disconnect(false, false, true);
                    c.getSession().close();
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
                final Iterator<MapleClient> itr = idToClient.values().iterator();
                while (itr.hasNext()) {
                    sb.append(itr.next().getAccountName());
                    sb.append(", ");
                }
            } finally {
                readLock.unlock();
            }
        } else {
            readLock.lock();
            try {
                final Iterator<MapleClient> itr = idToClient.values().iterator();
                MapleClient c;
                while (itr.hasNext()) {
                    c = itr.next();

                    if (!c.isGm()) {
                        sb.append(c.getAccountName());
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
            final Iterator<MapleClient> itr = idToClient.values().iterator();
            while (itr.hasNext()) {
                itr.next().sendPacket(data);
            }
        } finally {
            readLock.unlock();
        }
    }

    public final void broadcastGMPacket(final byte[] data) {
        readLock.lock();
        try {
            final Iterator<MapleClient> itr = idToClient.values().iterator();
            MapleClient c;
            while (itr.hasNext()) {
                c = itr.next();

                if (c.isLoggedIn() && c.isGm()) {
                    c.sendPacket(data);
                }
            }
        } finally {
            readLock.unlock();
        }
    }
}
