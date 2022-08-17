/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：组队任务：冰骑士的诅咒
 *  
 *  @Author Jackson 
 */

/* global em, java */

var minPlayers = 2;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("PQ_Iceman");
    eim.setInstanceMap(932000100).resetFully();
    eim.setInstanceMap(932000200).resetFully();
    var map = eim.setInstanceMap(932000300);
    map.resetFully();
    var mob = em.getMonster(9300441);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(798, 154));
    eim.setProperty("checkdone", "0");
    eim.setInstanceMap(932000400).resetFully();//复活地图
    eim.startEventTimer(1200000); //20 mins
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
    if (mapid < 932000100 || mapid > 932000400) {
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
    if (eim.disposeIfPlayerBelow(minPlayers, 932000000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 932000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    player.changeMap(932000000, 0);
}
function disbandParty(eim) {
    end(eim);
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
    if (mobID == 9300442) {
        player.getMap().spawnNPC(2159017, -444, 154);
        player.getMap().showScreenEffect("quest/party/clear");
        eim.setProperty("boss", "clear");
    }
    if (mobID == 9300438) {
        end(eim);
    }
}