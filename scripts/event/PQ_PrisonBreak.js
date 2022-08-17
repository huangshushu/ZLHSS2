/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：组队任务:逃脱
 *  
 *  @Author Jackson 
 */

/* global em */

var minPlayers = 2;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("PQ_PrisonBreak");
    eim.setProperty("openDoor", "0");
    eim.setProperty("npc", "0");

    eim.setInstanceMap(921160100).resetFully();
    eim.setInstanceMap(921160200).resetFully();
    eim.setInstanceMap(921160300).resetFully();
    eim.setInstanceMap(921160310).resetFully();
    eim.setInstanceMap(921160320).resetFully();
    eim.setInstanceMap(921160330).resetFully();
    eim.setInstanceMap(921160340).resetFully();
    eim.setInstanceMap(921160350).resetFully();
    eim.setInstanceMap(921160400).resetFully();
    eim.setInstanceMap(921160500).resetFully();
    eim.setInstanceMap(921160600).resetFully();

    var map = eim.setInstanceMap(921160700);
    map.resetFully();

    eim.startEventTimer(1200000); //20 mins
    eim.setProperty("entryTimestamp", "" + java.lang.System.currentTimeMillis());
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
    if (mapid < 921160100 || mapid > 921160700) {
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
    eim.disposeIfPlayerBelow(100, 921160000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    em.setProperty("state", "2");
    var map = eim.getMapInstance(11);
    map.startMapEffect("终于击败了看守阿尼！", 5120053);
}

function leftParty(eim, player) {
    end(eim);
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
function monsterKilled(eim, chr, mobID) {
}