/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：梦幻主题公园 - 梦幻野兽演出
 *  
 *  @Author Jackson 
 */
/* global em */

﻿function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(level, partyid) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    var eim = em.newInstance("BossScarTar");
    var map = eim.setInstanceMap(223030210);
    map.resetFully();
    var x = Math.floor(Math.random() * 2);
    var mob = em.getMonster(x == 0 ? 9420541 : 9420546); //暴力熊
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-17, 86));

    eim.startEventTimer(1800000);
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
    eim.disposeIfPlayerBelow(100, 223030200);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 223030210) {
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
    if (eim.disposeIfPlayerBelow(100, 223030200)) {
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