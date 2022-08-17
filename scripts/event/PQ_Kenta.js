/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：组队任务:陷入危机的坎特
 *  
 *  @Author Jackson 
 */

/* global em, java */

var minPlayers = 2;
var task;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("PQ_Kenta");
    var map = eim.setInstanceMap(923040100); //阶段一
    eim.setProperty("KentaSave", "0");
    eim.setProperty("HP", "0");
    eim.setProperty("leader", "true");
    map.resetFully();
    map.resetSpawnLevel(level);
    map.killAllMonsters(false);

    map.spawnNPC(9020004, 201, 1800);

    map = eim.setInstanceMap(923040200);//阶段二
    map.resetFully();
    map.resetSpawnLevel(level);
    map.setSpawns(false);
    map.killAllMonsters(false);
    eim.setProperty("cave1", "0");
    eim.setProperty("cave2", "0");
    eim.setProperty("cave3", "0");
    eim.setProperty("cave4", "0");

    map = eim.setInstanceMap(923040300);//阶段三
    map.resetFully();
    map.resetSpawnLevel(level);
    map.setPublicShareStateValue(3, "cave1", "0");
    eim.setProperty("caveBreak", "0");
    eim.setProperty("timing", "0");
    eim.setProperty("waterLevel", "0");
    eim.setProperty("air", "0");
    eim.setProperty("kenta_batAttack", "0");
    //map.spawnNpc(9020004, new java.awt.Point(147, 168));
    map = eim.setInstanceMap(923040400);//阶段四
    map.resetFully();
    map.spawnNPC(9020004, -161, 123);

    var mob1 = em.getMonster(9300461);
    mob1.setForcedMobStat(level);
    eim.registerMonster(mob1);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(576, 138));

    var mob2 = em.getMonster(9300468);
    mob2.setForcedMobStat(level);
    eim.registerMonster(mob2);
    map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-1116, 138));
    eim.setProperty("boss", "");
    eim.startEventTimer(1200000); //30 mins
    eim.setProperty("entryTimestamp", "" + java.lang.System.currentTimeMillis());
    eim.schedule("checkDone", 100);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid < 923040100 || mapid > 923040400) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    if (mobId == 9300460) {
        end(eim);
    }
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 923040000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    end(eim);
}
function disbandParty(eim) {
    end(eim);
}

function playerDead(eim, player) {
}

function cancelSchedule() {
    if (task != null) {
        task.cancel(true);
        task = null;
    }
}

function pickupItem(eim, player, itemID) {
    switch (itemID) {
        case 2430364:
            break;
    }
}

function monsterDamaged(eim, player, mobID, damage) {
}

function monsterKilled(eim, player, mobID) {
    if (mobID == 9300468 || mobID == 9300461) {
        eim.setProperty("boss", eim.getProperty("boss") + "1")
    }
}

function waterLevelUp(eim) {
    var level = parseInt(eim.getProperty("waterLevel")) + 1;
    eim.setProperty("waterLevel", level);
    var lastplayer;
    var mob;
    for (i = 0; i < eim.getPlayers().size(); i++) {
        lastplayer = eim.getPlayers().get(i);
    }
    if (level <= 17) {
        if (level == 8) {
            for (var i = 0; i < 6; i++) {
                mob = em.getMonster(9300888);
                eim.getMapInstance(2).spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 168));
                mob.switchController(lastplayer);
            }
            eim.getMapInstance(2).getReactorByID(9238003).forceHitReactor(2);
        }
        eim.getMapInstance(2).setMomentAreaOnOff(4, "waterLevel" + level, true);
        eim.getMapInstance(2).setWaterLevelUp(level, level >= 17, 1764);
        eim.schedule("waterLevelUp", 2200);
    } else if (level == 18) {
        eim.getMapInstance(2).killAllMonsters(true);
        mob = em.getMonster(9300460);
        mob.setHP(parseInt(eim.getProperty("HP")));
        eim.registerMonster(mob);
        eim.getMapInstance(2).spawnMonsterOnGroundBelow(mob, new java.awt.Point(354, -1032));
        //eim.displayNode(mob, lastplayer);
        eim.setProperty("kenta_batAttack", "1");
        eim.schedule("waterLevelUp", 1000);
    } else if (level < 23) {
        for (i = 0; i < 5; i++) {
            mob = em.getMonster(9300889);
            eim.getMapInstance(2).spawnMonsterOnGroundBelow(mob, new java.awt.Point(354, -1032));
            mob.switchController(lastplayer);
        }
        eim.schedule("waterLevelUp", 3000);
    } else if (level == 23) {
        eim.setProperty("kenta_batAttack", "2");
        eim.getMapInstance(2).startMapEffect("哎，我真的很讨厌蝙蝠。如果使用那边的杠杆，就能前往上面的出口。", 5120052);
    }
}

function checkDone(eim) {
    var count = parseInt(eim.getProperty("timing"));
    var map = eim.getMapInstance(2);
    if (map != null) {
        if (map.getCharactersSize() > 0 && count >= map.getCharactersSize()) {
            eim.getMapInstance(2).setPublicShareStateValue(3, "cave1", "1");
            eim.getMapInstance(2).setFieldValue("waterUp", "1");
            eim.getMapInstance(2).removeNPC(9020004);
            eim.getMapInstance(2).startMapEffect("洞窟里正在进水！在怪物们进来之前，我们快上去吧！！！", 5120052);
            task = eim.schedule("waterLevelUp", 100);
        } else {
            task = eim.schedule("checkDone", 100);
        }
    }
}