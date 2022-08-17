/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：进阶暗黑龙王 
 *  
 *  @Author Jackson 
 */
/* global em */

//自定义复活次数

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("preheadCheck", "0");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossHorntail_CHAOS");
    eim.setInstanceMap(240060001).resetFully();
    eim.setInstanceMap(240060101).resetFully();
    eim.setInstanceMap(240060201).resetFully();
    eim.startEventTimer(60 * 60 * 1000); //2 hr
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 240060001:
        case 240060101:
        case 240060201:
            return;
        default:
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
    eim.disposeIfPlayerBelow(100, 240050400);
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
function  monsterKilled(eim, chr, mobID) {
    switch (mobID) {
        case 8810100:
            em.setProperty("state", "2");
            break;
        case 8810101:
            em.setProperty("state", "3");
            break;
    }
}

function allMonstersDead(eim) {
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