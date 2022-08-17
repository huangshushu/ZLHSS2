/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：狮子王 困难
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
    var eim = em.newInstance("BossVonLeon_HARD");
    eim.setProperty("summoned", "0");
    eim.setProperty("npc", "0");

    var map1 = eim.setInstanceMap(211070104);
    var map2 = eim.setInstanceMap(211070105);
    var map3 = eim.setInstanceMap(211070112);
    map1.resetFully();
    map2.resetFully();
    map3.resetFully();

    eim.startEventTimer(3600000); // 1 hr
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
        case 211070104:
        case 211070105:
        case 211070112:
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
    eim.getMapInstance(0).spawnNpc(2161008, 0, -181);
    eim.getMapInstance(0).spawnNpc(2161009, 0, 0);
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