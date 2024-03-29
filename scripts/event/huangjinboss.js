﻿function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("huangjinboss");
    var map = eim.setInstanceMap(252030100);    
	map.resetFully(false); //重置地图
    map.setSpawns(false);
       var mob = em.getMonster(8800200); //希拉 - 120级
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(30000000000);
    mob.setHp(30000000000);
    //var modified = em.newMonsterStats();
    //modified.setOMp(mob.getMobMaxMp());
    //modified.setOHp(mob.getMobMaxHp() * 6.0);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(984, 513));
    eim.startEventTimer(2700000); //45分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid != 252030100) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function monsterDamaged(eim, player, mobid, damage) {
}

function cancelSchedule() {
}

function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 252030000);
}


function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 252030000);
}


function leftParty(eim, player) {
}

function pickUpItem(eim, player, itemID) {
}

function monsterDrop(eim, player, mob) {}