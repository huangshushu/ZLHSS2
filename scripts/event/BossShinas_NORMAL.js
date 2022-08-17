/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：希纳斯
 *  
 *  @Author Jackson 
 */
/* global em, java */

//自定义复活次数
var nDeathCount = 3;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossShinas_NORMAL");

    eim.setProperty("mapEffect", "0");

    eim.setInstanceMap(271040100).resetFully();
    eim.setInstanceMap(271040200).resetFully();
    eim.setInstanceMap(271040300).resetFully();

    var mob = em.getMonster(8850011);
    mob.setChangeHP(3000000000);
    mob.setForcedMobStat(200);
    eim.registerMonster(mob);
    eim.getMapInstance(0).spawnMonsterOnGroundBelow(mob, new java.awt.Point(-363, 100));

    eim.startEventTimer(60 * 60 * 1000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setDeathCount(nDeathCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 271040100 && mapid != 271040300 && mapid != 271040200) {
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

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 271030600);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
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
    return true;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {
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
