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
package server.life;

import constants.GameConstants;
import constants.MoonlightRevamp;
import constants.ServerConfig;
import java.awt.Point;
import java.util.concurrent.atomic.AtomicInteger;

import server.MapleCarnivalFactory;
import server.MapleCarnivalFactory.MCSkill;
import server.maps.MapleMap;
import server.maps.MapleReactor;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

public class SpawnPoint extends Spawns {

    private MapleMonster monster;
    private final Point pos;
    private long nextPossibleSpawn;
    private final int mobTime;
    private int carnival = -1;
    private final AtomicInteger spawnedMonsters = new AtomicInteger(0);
    private final boolean immobile;
    private final String msg;
    private final byte carnivalTeam;

    public SpawnPoint(final MapleMonster monster, final Point pos, final int mobTime, final byte carnivalTeam, final String msg) {
        this.monster = monster;
        this.pos = pos;
        this.mobTime = (mobTime < 0 ? -1 : (mobTime * 1000));
        this.carnivalTeam = carnivalTeam;
        this.msg = msg;
        this.immobile = !monster.getStats().getMobile();
        this.nextPossibleSpawn = System.currentTimeMillis();
    }

    public final void setCarnival(int c) {
        this.carnival = c;
    }

    @Override
    public final Point getPosition() {
        return pos;
    }

    @Override
    public final MapleMonster getMonster() {
        return monster;
    }

    @Override
    public final byte getCarnivalTeam() {
        return carnivalTeam;
    }

    @Override
    public final int getCarnivalId() {
        return carnival;
    }

    @Override
    public final boolean shouldSpawn() {
        if (mobTime < 0) {
            return false;
        }

        if (((mobTime != 0 || immobile) && spawnedMonsters.get() > 0) || spawnedMonsters.get() > 1) {
            return false;
        }
        long time = System.currentTimeMillis();
        return nextPossibleSpawn <= time;
    }

    @Override
    public final boolean shouldSpawn2() {
        if (mobTime < 0) {
            return false;
        }

        return true;
    }

    @Override
    public final MapleMonster spawnMonster(final MapleMap map) {
        monster = new MapleMonster(monster);
        monster.setPosition(pos);
        monster.setCarnivalTeam(carnivalTeam);
        spawnedMonsters.incrementAndGet();
        monster.setListener(new MonsterListener() {
            @Override
            public void monsterKilled() {
                nextPossibleSpawn = System.currentTimeMillis();
                if (mobTime > 0) {
                    nextPossibleSpawn += mobTime;
                }
                spawnedMonsters.decrementAndGet();
            }
        });
        map.spawnMonster(monster, -2);

        if (carnivalTeam > -1) {
            for (MapleReactor r : map.getAllReactorsThreadsafe()) { //parsing through everytime a monster is spawned? not good idea
                if (r.getName().startsWith(String.valueOf(carnivalTeam)) && r.getReactorId() == (9980000 + carnivalTeam) && r.getState() < 5) {
                    final int num = Integer.parseInt(r.getName().substring(1, 2)); //00, 01, etc
                    final MCSkill skil = MapleCarnivalFactory.getInstance().getGuardian(num);
                    //if (skil == null) {
                    //    FileoutputUtil.logToFile("logs/怪物技能错误/怪物技能错误.txt", "\r\n " + "spawnMonster mobSkill ==null");
                    //}
                    if (skil != null && skil.getMobSkill() != null && monster != null) {
                        skil.getMobSkill().applyEffect(null, monster, false);
                    }
                }
            }
        }
        if (msg != null) {
            map.broadcastMessage(MaplePacketCreator.serverNotice(6, msg));
        }
        return monster;
    }

    @Override
    public final int getMobTime() {
        return mobTime;
    }
}
