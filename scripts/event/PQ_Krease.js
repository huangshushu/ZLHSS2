/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：组队任务：克里塞的薛西斯 
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
    var eim = em.newInstance("PQ_Krease");
    eim.setProperty("checkdone", "0");
    eim.setProperty("kreaseIvy", "0");
    var map = eim.setInstanceMap(920012000);
    map.resetFully();
    map.setPublicShareStateValue(3, "kreaseIvy", "0");
    map.setMomentAreaOnOff(3, "kreaseClimb", false);
    map.setMomentAreaOnOff(1, "cl01", false);
    map.setMomentAreaOnOff(1, "cl02", false);
    map.setMomentAreaOnOff(2, "cr01", false);
    map = eim.setInstanceMap(920012100);//消灭所有怪物
    map.resetFully();
    map.setSpawns(false);
    eim.setInstanceMap(920012200).resetFully();
    eim.setInstanceMap(920012300).resetFully();
    eim.setInstanceMap(920012400).resetFully();
    eim.setInstanceMap(920012500).resetFully();
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
    if (mapid < 920012000 || mapid > 920012500) {
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
    if (eim.disposeIfPlayerBelow(minPlayers, 920012600)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 920012600);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    player.changeMap(920012600, 0);
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
    var map = player.getMap();
    if (map != null) {
        switch (map.getMapID()) {
            case 920012100:
                var size = map.getEventMobSize();
                eim.broadcastScriptProgressMessage("剩余" + size + "个怪物。");
                if (size <= 0 && !"clear".equals(eim.getProperty("stage2"))) {
                    eim.setProperty("stage2", "clear");
                    map.showScreenEffect("quest/party/clear");
                    map.playFieldSound("Party1/Clear");
                }
                break;
            case 920012300:
                if (mobID == 9300965) {
                    if (!"clear".equals(eim.getProperty("boss"))) {
                        eim.setProperty("boss", "clear");
                        player.getMap().showScreenEffect("quest/party/clear");
                        eim.schedule("warpNext", 2000);
                    }
                }
                break;
        }
    }
}

function warpNext(eim) {
    var map = eim.getMapInstance(3);
    for (var i = 0; i < eim.getPlayers().size(); i++) {
        map = eim.getMapInstance(4);
        eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
    }
}