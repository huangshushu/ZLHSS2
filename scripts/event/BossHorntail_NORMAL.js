/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：暗黑龙王 
 *  
 *  @Author Jackson 
 */
/* global em */

function init() {
    // 0 = Not started, 1 = started, 2 = first head defeated, 3 = second head defeated
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("preheadCheck", "0");
    em.setProperty("leader", "true");
    var map = parseInt(240060000);
    var eim = em.newInstance("BossHorntail_NORMAL");
    for (var i = 0; i < 3; i++) {
        eim.setInstanceMap(map + (i * 100)).resetFully();
    }
    eim.startEventTimer(35 * 60 * 1000); //now changed to 1 hour 15 mins
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 240060000:
        case 240060100:
        case 240060200:
            return;
        default:
            eim.unregisterPlayer(player);
            if (eim.disposeIfPlayerBelow(0, 0)) {
                em.setProperty("state", "0");
                em.setProperty("leader", "true");
            }
            break;
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
function monsterKilled(eim, chr, mobID) {
    switch (mobID) {
        case 8810000:
            em.setProperty("state", "2");
            break;
        case 8810001:
            em.setProperty("state", "3");
            break;
    }
}

function allMonstersDead(eim) {
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {
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
