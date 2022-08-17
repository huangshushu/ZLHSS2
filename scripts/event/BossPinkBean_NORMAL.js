/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  BOSS组队副本: 神的黄昏 - 品克缤
 *  
 *  @Author Jackson 
 */

/* global em */

var nDeathCount = 3;

function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");

    var eim = em.newInstance("BossPinkBean_NORMAL");
    eim.setProperty("npc", "0");
    eim.setProperty("summoned", "0");

    eim.setInstanceMap(270050100).resetFully();
    eim.setInstanceMap(270050200).resetFully();

    eim.startEventTimer(30 * 60 * 1000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setDeathCount(nDeathCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return true;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 270050100 && mapid != 270050200) {
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
    if (eim.disposeIfPlayerBelow(100, 270050300)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
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