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

import server.Randomizer;
import server.maps.MapleMap;
import tools.MaplePacketCreator;

import java.awt.*;
import java.util.concurrent.atomic.AtomicBoolean;

public class SpawnPointAreaBoss extends Spawns {

    private MapleMonster monster;
    private final Point pos1;
    private final Point pos2;
    private final Point pos3;
    private long nextPossibleSpawn;
    private final int mobTime;
    private final AtomicBoolean spawned = new AtomicBoolean(false);
    private final String msg;

    public SpawnPointAreaBoss(final MapleMonster monster, final Point pos1, final Point pos2, final Point pos3, final int mobTime, final String msg) {
        this.monster = monster;
        this.pos1 = pos1;
        this.pos2 = pos2;
        this.pos3 = pos3;
        this.mobTime = (mobTime < 0 ? -1 : (mobTime * 1000));
        this.msg = msg;
        this.nextPossibleSpawn = System.currentTimeMillis();
    }

    @Override
    public final MapleMonster getMonster() {
        return monster;
    }

    @Override
    public final byte getCarnivalTeam() {
        return -1;
    }

    @Override
    public final int getCarnivalId() {
        return -1;
    }

    @Override
    public final boolean shouldSpawn() {
        if (mobTime < 0) {
            return false;
        }
        if (spawned.get()) {
            return false;
        }
        return nextPossibleSpawn <= System.currentTimeMillis();
    }

    @Override
    public final boolean shouldSpawn2() {
        return mobTime >= 0;
    }

    @Override
    public final Point getPosition() {
        final int rand = Randomizer.nextInt(3);
        return rand == 0 ? pos1 : rand == 1 ? pos2 : pos3;
    }

    @Override
    public final MapleMonster spawnMonster(final MapleMap map) {
        monster = new MapleMonster(monster);
        monster.setPosition(getPosition());
        spawned.set(true);
        monster.setListener(new MonsterListener() {

            @Override
            public void monsterKilled() {
                nextPossibleSpawn = System.currentTimeMillis();

                if (mobTime > 0) {
                    nextPossibleSpawn += mobTime;
                }
                spawned.set(false);
            }
        });
        map.spawnMonster(monster, -2);

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
