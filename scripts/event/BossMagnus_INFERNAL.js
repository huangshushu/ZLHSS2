/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：暴君城堡  暴君之王座 麦格纳斯<地狱> Level:190  Hard 
 *  
 *  @Author Jackson 
 */

/* global em */
//自定义复活次数
var nDeathCount = 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossMagnus_INFERNAL");
    var map = eim.setInstanceMap(401060300);
    map.resetFully();

    var mob = em.getMonster(8880000);//190J
    mob.setReduceDamageR(200);
    mob.setChangeHP(2820000000000);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1860, -1450));
    mob.setZoneDataType(1);
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(1000 * 60 * 60); // 30 min
    eim.schedule("summonFall", 5000);
    
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

function changedMap(eim, player, mapid) {
    if (mapid != 401060100) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(0, 401060000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
    switch (mobId) {
        case 8880000:
            eim.gainItemRand(4310059, 20, 35);
            break;
    }
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
    eim.disposeIfPlayerBelow(100, 401060000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    em.broadcastServerMsg(5120027, "麦格纳斯已被消灭，请在1分钟内点击NPC获得奖励。" ,true);
    eim.startEventTimer(1000 * 120); //10 min
    eim.getMapInstance(0).spawnNpc(9390123, new java.awt.Point(599, -1386));
    eim.setProperty("HPstate", "-1");
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}

function summonFall(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    var time = 4500;
    if (state > 0) {
        var map = eim.getMapInstance(0);
        if (map != null) {
            map.createObtacleAtom(0, 2 * state + 1, 1, 8);
            eim.schedule("summonFall", time);
        }
    }
}

function pickupItem(eim, player, itemID) {
}
function monsterDamaged(eim, player, mobID, damage) {
}
function monsterKilled(eim, player, mobID) {
}