/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：组队任务:御龙魔
 *  
 *  @Author Jackson 
 */

/* global em */

var minPlayers = 3;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("PQ_Dragonica");
    eim.setProperty("summon", "0");

    eim.setInstanceMap(240080100).resetFully();
    eim.setInstanceMap(240080200).resetFully();
    eim.setInstanceMap(240080300).resetFully();
    eim.setInstanceMap(240080400).resetFully();
    eim.setInstanceMap(240080500).resetFully();//BOSS

    //revivemap
    eim.setInstanceMap(240080040).resetFully();
    eim.setInstanceMap(240080050).resetFully();
    eim.startEventTimer(1200000); //20 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return true;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 240080100 && mapid != 240080200 && mapid != 240080300 && mapid != 240080400 && mapid != 240080500 && mapid != 240080040 && mapid != 240080050) {
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

    if (eim.disposeIfPlayerBelow(1, 240080000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 240080000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    if (em.getProperty("state").equals("5") && eim.getMapInstance(4).getMobSize() == 0) {
        eim.getMapInstance(4).spawnNPC(2085003, -557, -10);
        eim.broadcastPlayerMsg(6, "御龙魔已被消灭，传送门已开启！");
    }
}

function leftParty(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(1, 240080000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
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
    if (chr.getMap().getMobSize() <= 0) {
        chr.getMap().showScreenEffect("quest/party/clear");
        chr.getMap().playFieldSound("Party1/Clear");
    }
}