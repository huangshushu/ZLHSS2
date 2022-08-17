/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：帕普拉图斯
 *  
 *  @Author Jackson 
 */

/* global em */

﻿function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(chrID) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    var eim = em.newInstance("BossPopulatus");
    var map = eim.setInstanceMap(220080001);
    map.resetFully();
    eim.startEventTimer(600000);
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
    if (mapid != 220080001) {
        eim.unregisterPlayer(player);
        if (eim.getPlayerCount() <= 0) {
            if (em.getProperty("state").equals("2")) {
                em.getMap(220080000).resetReactors();
            }
        }
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 1;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 0) {
        if (em.getProperty("state").equals("2")) {
            em.getMap(220080000).resetReactors();
        }
    }
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (em.getProperty("state").equals("2")) {
        em.getMap(220080000).resetReactors();
    }
    if (eim.disposeIfPlayerBelow(100, 220080000)) {
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