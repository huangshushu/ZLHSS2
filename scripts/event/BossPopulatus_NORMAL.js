/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：狮子王 普通
 *  
 *  @Author Jackson 
 */
/* global em */

//自定义复活次数
var nDeathCount = 3;

function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    var eim = em.newInstance("BossPopulatus_NORMAL");
    eim.setProperty("summoned", "0");
    eim.setProperty("npc", "0");

    var map = eim.setInstanceMap(220080200);

    map.resetFully();
    map.forceTrigger("crack1", 1);
    map.forceTrigger("crack2", 1);
    map.forceTrigger("crack3", 1);
    map.forceTrigger("crack4", 1);
    map.forceTrigger("crack5", 1);
    map.forceTrigger("crack6", 1);
    map.forceTrigger("portal", 0);
    eim.startEventTimer(15 * 60 * 1000); // 1 hr
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
    switch (mapid) {
        case 220080200:
            break;
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
    if (eim.disposeIfPlayerBelow(100, 211060801)) {
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
function monsterKilled(eim, chr, mobID) {
}