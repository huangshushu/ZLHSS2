package server;

import client.MapleCharacter;
import handling.channel.ChannelServer;
import java.util.LinkedList;
import java.util.List;
import java.lang.ref.WeakReference;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import server.maps.MapleMap;
import tools.MaplePacketCreator;

/**
 * Note for this class : MapleCharacter reference must be removed immediately
 * after cpq or upon dc.
 *
 * @author Rob
 */
public class MapleCarnivalParty {

    private final List<Integer> members = new LinkedList<>();
    private final WeakReference<MapleCharacter> leader;
    private final byte team;
    private final int channel;
    private short availableCP = 0, totalCP = 0;
    private boolean winner = false;
    private final ReentrantReadWriteLock memebersLock = new ReentrantReadWriteLock();

    public MapleCarnivalParty(MapleCharacter owner, final List<MapleCharacter> members, final byte team1) {
        leader = new WeakReference<>(owner);
        for (MapleCharacter mem : members) {
            this.addMember(mem.getId());
        }
        team = team1;
        channel = owner.getClient().getChannel();
    }

    public final MapleCharacter getLeader() {
        return leader.get();
    }

    public void addCP(MapleCharacter player, int ammount) {
        totalCP += ammount;
        availableCP += ammount;
        player.addCP(ammount);
    }

    public int getTotalCP() {
        return totalCP;
    }

    public int getAvailableCP() {
        return availableCP;
    }

    public void useCP(MapleCharacter player, int ammount) {
        if (availableCP >= ammount) {
            availableCP -= ammount;
        } else {
            availableCP = 0;
        }
        player.useCP(ammount);
    }

    public List<Integer> getMembers() {
        return members;
    }

    public int getTeam() {
        return team;
    }

    public void warp(final MapleMap map, final String portalname) {
        memebersLock.readLock().lock();
        try {
            for (int chr : members) {
                final MapleCharacter c = ChannelServer.getInstance(channel).getPlayerStorage().getCharacterById(chr);
                if (c != null) {
                    c.changeMap(map, map.getPortal(portalname));
                }
            }
        } finally {
            memebersLock.readLock().unlock();

        }
    }

    public void warp(final MapleMap map, final int portalid) {
        memebersLock.readLock().lock();
        try {
            for (int chr : members) {
                final MapleCharacter c = ChannelServer.getInstance(channel).getPlayerStorage().getCharacterById(chr);
                if (c != null) {
                    c.changeMap(map, map.getPortal(portalid));
                }
            }
        } finally {
            memebersLock.readLock().unlock();

        }
    }

    public boolean allInMap(MapleMap map) {
        try {
            memebersLock.readLock().lock();

            for (int chr : members) {
                if (map.getCharacterById(chr) == null) {
                    return false;
                }
            }
        } finally {
            memebersLock.readLock().unlock();

        }
        return true;
    }

    public void removeMember(MapleCharacter chr) {
        try {
            memebersLock.writeLock().lock();
            int index = -1;
            for (int i = 0; i < members.size(); i++) {
                if (members.get(i) == chr.getId()) {
                    index = i;
                }
            }

            if (index != -1) {
                chr.setCarnivalParty(null);
                members.remove(index);
            }

        } finally {
            memebersLock.writeLock().unlock();

        }
    }

    public boolean isWinner() {
        return winner;
    }

    public void setWinner(boolean status) {
        winner = status;
    }

    public void displayMatchResult() {
        final String effect = winner ? "quest/carnival/win" : "quest/carnival/lose";
        final String sound = winner ? "MobCarnival/Win" : "MobCarnival/Lose";
        boolean done = false;
        for (int chr : members) {
            final MapleCharacter c = ChannelServer.getInstance(channel).getPlayerStorage().getCharacterById(chr);
            if (c != null) {
                c.getClient().sendPacket(MaplePacketCreator.showEffect(effect));
                c.getClient().sendPacket(MaplePacketCreator.playSound(sound));
                if (!done) {
                    done = true;
                    c.getMap().killAllMonsters(true);
                    c.getMap().setSpawns(false); //resetFully will take care of this
                }
            }
        }

    }

    private void addMember(int charId) {
        try {
            memebersLock.writeLock().lock();
            members.add(charId);
        } finally {
            memebersLock.writeLock().unlock();
        }
    }
}
