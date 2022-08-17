/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：组队任务:玩具城101曙光女神塔
 *  
 *  @Author Jackson 
 */

/* global em, java */

var stg6_combo = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var minPlayers = 2;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup(level, leaderid) {
    em.setProperty("state", "1");

    var eim = em.newInstance("PQ_LudiCrack");
    eim.setProperty("stage2", "0");
    eim.setProperty("crackDone", "0");
    eim.setProperty("cleared", "false"); //set determine

    var map = eim.setInstanceMap(922010100);
    map.resetFully();

    map = eim.setInstanceMap(922010400);
    map.resetFully();
    eim.setInstanceMap(922010401).resetFully();
    eim.setInstanceMap(922010402).resetFully();
    eim.setInstanceMap(922010403).resetFully();
    eim.setInstanceMap(922010404).resetFully();
    eim.setInstanceMap(922010405).resetFully();
    map = eim.setInstanceMap(922010600);
    map.resetFully();

    map = eim.setInstanceMap(922010700);
    map.resetFully();
    map.getPortal("next00").setScriptName("ludi_s4Clear");

    map = eim.setInstanceMap(922010800);
    map.resetFully();
    map.getPortal("next00").setScriptName("ludi_s5Clear");

    map = eim.setInstanceMap(922010900);
    map.resetFully();
    var mob = em.getMonster(9300012);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1081, 184));
    eim.setInstanceMap(922011000).resetFully(); //Bonus - skipped entirely

    for (var b = 0; b < stg6_combo.length; b++) { //stage6_001
        for (var y = 0; y < 3; y++) { //stage number
            em.setProperty("stage6_" + stg6_combo[b] + "" + y + "", "0");
        }
    }
    for (var b = 0; b < stg6_combo.length; b++) { //stage6_001	
        var found = false;
        while (!found) {
            for (var x = 0; x < 3; x++) {
                if (!found) {
                    var founded = false;
                    for (var z = 0; z < 3; z++) { //check if any other stages have this value set already.
                        if (em.getProperty("stage6_" + stg6_combo[b] + "" + (z) + "") == null) {
                            em.setProperty("stage6_" + stg6_combo[b] + "" + (z) + "", "0");
                        } else if (em.getProperty("stage6_" + stg6_combo[b] + "" + (z) + "").equals("1")) {
                            founded = true;
                            break;
                        }
                    }
                    if (!founded && java.lang.Math.random() < 0.33) {
                        em.setProperty("stage6_" + stg6_combo[b] + "" + (x) + "", "1");
                        found = true;
                        break;
                    }
                }
            }
        }
    }
    eim.startEventTimer(1200000); //20 mins
    return eim;
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 922010100: // Stage 1
        case 922010200: // Stage 2
        case 922010201: // Stage 2 - Tower's Trap'
        case 922010300: // Stage 3
        case 922010400: //stage 4
        case 922010401: //darkness in stage 4
        case 922010402: //darkness in stage 4
        case 922010403: //darkness in stage 4
        case 922010404: //darkness in stage 4
        case 922010405: //darkness in stage 4
        case 922010500: //stage 5
        case 922010501: //tower's maze in stage 5
        case 922010502: //tower's maze in stage 5
        case 922010503: //tower's maze in stage 5
        case 922010504: //tower's maze in stage 5
        case 922010505: //tower's maze in stage 5
        case 922010506: //tower's maze in stage 5
        case 922010600:
        case 922010700: //stage 7
        case 922010800:
        case 922010900: //crack on the wall
        case 922011000: //bonus
            return;
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    //player.tryPartyQuest(1202);
}

function playerRevive(eim, player) {
    return false;
}

function playerDisconnected(eim, player) {
    return -3;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable
    if (eim.disposeIfPlayerBelow(minPlayers, 922010000)) {
        em.setProperty("state", "0");
    } else {
        playerExit(eim, player);
    }
}

function disbandParty(eim) {
    // Boot whole party and end
    end(eim);
}

function playerExit(eim, player) {
    var map = em.getMap(922010000);
    eim.unregisterPlayer(player);
    player.changeMap(map, map.getPortal(0));
}

// For offline players
function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
}
function end(eim) {
    eim.disposeIfPlayerBelow(100, 922010000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function scheduledTimeout(eim) {
    var clear = eim.getProperty("cleared");
    if (clear != null && clear.equals("true")) {
        clearPQ(eim);
    } else {
        end(eim);
    }
}
function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 922011100);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function finish(eim) {
    end(eim);
}

function timeOut(eim) {
    end(eim);
}

function cancelSchedule() {
}
function playerDead() {
}
function allMonstersDead(eim) {
    eim.setProperty("crackDone", "1");
}
function pickupItem(eim, player, itemID) {
}
function monsterDamaged(eim, player, mobID, damage) {
}
function monsterKilled(eim, chr, mobID) {
}