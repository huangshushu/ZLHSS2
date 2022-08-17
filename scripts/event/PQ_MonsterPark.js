/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：怪物公园
 *  
 *  @Author Jackson 
 */
/* global em */

var minPlayers = 1;

function init() {
}

function setup(mapid, level) {
    var eim = em.newInstance("PQ_MonsterPark" + mapid);
    var map = parseInt(mapid);
    var max = (map / 1000000 == 952 ? 5 : 6);
    eim.setProperty("max", "" + max);
    eim.setProperty("boss", "0");
    eim.setProperty("BASE_EXP", "550");
    eim.setProperty("BASE_LEVEL", level);
    eim.setProperty("TOTAL_EXP", "0");
    eim.setProperty("stage", "0");
    for (var i = 0; i < max; i++) {
        //eim.setInstanceMap(map + (i * 100)).resetFully();
        eim.setInstanceMap(map + (i * 100)).resetFully(eim);
        eim.setProperty("map" + i, "" + (map + (i * 100)));
    }
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
    for (var i = 0; i < parseInt(eim.getProperty("max")); i++) {
        if (mapid == parseInt(eim.getProperty("map" + i))) {
            return;
        }
    }
    eim.unregisterPlayer(player);
    eim.disposeIfPlayerBelow(0, 0);
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.disposeIfPlayerBelow(0, 0);
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 951000000);
}

function clearPQ(eim) {
    end(eim);
}

function  monsterKilled(eim, chr, mobID) {
    var baseLevel = parseInt(eim.getProperty("BASE_LEVEL"));
    var totalEXP = parseInt(eim.getProperty("TOTAL_EXP"));
    var baseEXP = parseInt(eim.getProperty("BASE_EXP"));
    var maxC = parseInt(eim.getProperty("max"));
    totalEXP = baseEXP * baseLevel * eim.getPlayerCount() + totalEXP;
    eim.setProperty("TOTAL_EXP", totalEXP);
    eim.broadcastWeatherEffectNotice("当前累计获得" + totalEXP + "经验!", 0xD1, 2000);
    if (chr.getMap().getMobSize() <= 0) {
        var stage = parseInt(eim.getProperty("stage"));
        eim.setProperty("stage", stage + 1);
        var mapID = chr.getMap().getMapID();
        switch (mapID % 1000 / 100) {
            case 5:
                if (mapID / 1000000 == 952) {
                    chr.getMap().showScreenEffect("monsterPark/clearF");
                } else {
                    chr.getMap().showScreenEffect("monsterPark/clear");
                }
                break;
            case 6:
                chr.getMap().showScreenEffect("monsterPark/clearF");
                break;
            default:
                chr.getMap().showScreenEffect("monsterPark/clear");
        }
    }
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    player.changeMap(951000000, 0);
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
