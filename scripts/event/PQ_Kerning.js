/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：组队任务:第一次同行
 *  
 *  @Author Jackson 
 */

/* global em, java */

﻿function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    var level = 10;
    em.setProperty("state", "1");
    em.setProperty("randoms", "0");
    em.setProperty("leader", "true");
    var eim = em.newInstance("PQ_Kerning");
    eim.setInstanceMap(910340100).resetSpawnLevel(level);
    eim.setInstanceMap(910340200).resetSpawnLevel(level);
    eim.setInstanceMap(910340300).resetSpawnLevel(level);
    eim.setInstanceMap(910340400).resetSpawnLevel(level);
    eim.setInstanceMap(910340500).resetSpawnLevel(level);

    var mob = em.getMonster(9300003);
    eim.registerMonster(mob);
    mob.setForcedMobStat(level);
    eim.getMapInstance(4).spawnMonsterOnGroundBelow(mob, new java.awt.Point(32, -435));

    for (var i = 0; i < 5; i++) {
        var mob = em.getMonster(9300002);
        eim.registerMonster(mob);
        mob.setForcedMobStat(level);
        eim.getMapInstance(3).spawnMonsterOnGroundBelow(mob, new java.awt.Point(877, 465));
    }
    for (var i = 0; i < 5; i++) {
        var mob = em.getMonster(9300002);
        eim.registerMonster(mob);
        mob.setForcedMobStat(level);
        eim.getMapInstance(3).spawnMonsterOnGroundBelow(mob, new java.awt.Point(1495, 405));
    }
    for (var i = 0; i < 3; i++) {
        var mob = em.getMonster(9300002);
        eim.registerMonster(mob);
        mob.setForcedMobStat(level);
        eim.getMapInstance(3).spawnMonsterOnGroundBelow(mob, new java.awt.Point(1996, 345));
    }
    for (var i = 0; i < 3; i++) {
        var mob = em.getMonster(9300002);
        eim.registerMonster(mob);
        mob.setForcedMobStat(level);
        eim.getMapInstance(3).spawnMonsterOnGroundBelow(mob, new java.awt.Point(2490, 285));
    }
    eim.startEventTimer(1000 * 60 * 30);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 910340100 && mapid != 910340200 && mapid != 910340300 && mapid != 910340400 && mapid != 910340500) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}


function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 910340000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerDisconnected(eim, player) {
    if (eim.disposeIfPlayerBelow(2, 910340000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
    return 0;
}

function playerExit(eim, player) {
    var map = em.getMap(910340000);
    eim.unregisterPlayer(player);
    player.changeMap(map, map.getPortal(0));
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function leftParty(eim, player) {
    player.changeMap(910340000, 0);
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 910340000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickupItem(eim, player, itemID) {
}
function monsterDamaged(eim, player, mobID, damage) {
}
function monsterKilled(eim, player, mobID) {
}