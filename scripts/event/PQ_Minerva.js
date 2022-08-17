/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：女神之塔
 *  
 *  @Author Jackson 
 */

/* global java, em */

var minPlayers = 2;
var stg2_combo0 = Array("3", "2", "1");
var stg2_combo1= Array("0", "0", "1"); //unique combos only
var stg2_combo2 = Array("0", "1", "1");
var stg6_combo = Array("00", "01", "02", "03", "04", "05", "06", "07", "08");


function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("PQ_Minerva" + leaderid);

    var rand_combo = java.lang.Math.floor(java.lang.Math.random() * stg2_combo0.length);
    var rand_num = java.lang.Math.random();
    var combo0 = rand_num < 0.33 ? true : false;
    var combo1= rand_num < 0.66 ? true : false;
    eim.setProperty("stage4_0", combo0 ? stg2_combo0[rand_combo] : (combo1? stg2_combo1[rand_combo] : stg2_combo2[rand_combo]));
    eim.setProperty("stage4_1", combo0 ? stg2_combo1[rand_combo] : (combo1? stg2_combo2[rand_combo] : stg2_combo0[rand_combo]));
    eim.setProperty("stage4_2", combo0 ? stg2_combo2[rand_combo] : (combo1? stg2_combo0[rand_combo] : stg2_combo1[rand_combo]));
    eim.setProperty("stage6", "0"); //on way up ... hard
    //
    //  4001046  4001045 4001049 4001048
    eim.setProperty("summon", "0");
    eim.setProperty("pre", "0");
    eim.setProperty("stage", "0");
    eim.setProperty("Slice", "");


    for (var b = 0; b < stg6_combo.length; b++) { //stage6_001
        for (var y = 0; y < 4; y++) { //stage number
            eim.setProperty("stage6_" + stg6_combo[b] + "" + (y + 1) + "", "0");
        }
    }
    for (var b = 0; b < stg6_combo.length; b++) { //stage6_001	
        var found = false;
        while (!found) {
            for (var x = 0; x < 4; x++) {
                if (!found) {
                    var founded = false;
                    for (var z = 0; z < 4; z++) { //check if any other stages have this value set already.
                        if (eim.getProperty("stage6_" + stg6_combo[b] + "" + (z + 1) + "") == null) {
                            eim.setProperty("stage6_" + stg6_combo[b] + "" + (z + 1) + "", "0");
                        } else if (eim.getProperty("stage6_" + stg6_combo[b] + "" + (z + 1) + "").equals("1")) {
                            founded = true;
                            break;
                        }
                    }
                    if (!founded && java.lang.Math.random() < 0.25) {
                        eim.setProperty("stage6_" + stg6_combo[b] + "" + (x + 1) + "", "1");
                        found = true;
                        break;
                    }
                }
            }
        }
    }

    //STILL not done yet! levers = 2 of them
    for (var i = 0; i < 3; i++) {
        eim.setProperty("stage62_" + i + "", "0");
    }

    var found_1= false;
    while (!found_1) {
        for (var i = 0; i < 3; i++) {
            if (eim.getProperty("stage62_" + i + "") == null) {
                eim.setProperty("stage62_" + i + "", "0");
            } else if (!found_1&& java.lang.Math.random() < 0.2) {
                eim.setProperty("stage62_" + i + "", "1");
                found_1= true;
            }
        }
    }
    var found_2 = false;
    while (!found_2) {
        for (var i = 0; i < 3; i++) {
            if (eim.getProperty("stage62_" + i + "") == null) {
                eim.setProperty("stage62_" + i + "", "0");
            } else if (!eim.getProperty("stage62_" + i + "").equals("1") && !found_2 && java.lang.Math.random() < 0.2) {
                eim.setProperty("stage62_" + i + "", "1");
                found_2 = true;
            }
        }
    }

    eim.setInstanceMap(933031000).resetFully(eim, level);
    var map = eim.setInstanceMap(933032000);
    map.resetFully(eim, level);

    map = eim.setInstanceMap(933033000);
    map.resetFully(eim, level);
    var mob = em.getMonster(9300040);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-50, -503));

    mob = em.getMonster(9300040);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-50, -715));

    mob = em.getMonster(9300040);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-830, -907));

    mob = em.getMonster(9300040);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-830, -1119));

    mob = em.getMonster(9300040);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-830, -1306));

    //
    eim.setInstanceMap(933034000).resetFully(eim, level);
    eim.setInstanceMap(933035000).resetFully(eim, level);
    eim.setInstanceMap(933036000).resetFully(eim, level);

    map = eim.setInstanceMap(933037000);
    map.resetFully(eim, level);

    eim.startEventTimer(20 * 60 * 1000); //20 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    // PartyQuest 1203
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid < 933031000 || mapid > 933037000) {
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
    eim.disposeIfPlayerBelow(100, 933030000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
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
    switch (itemID) {
        case 4001050:
            var stats = parseInt(eim.getProperty("933034000"));
            if (!"clear".equals(stats)) {
                var count = eim.getAllItemNumber(itemID);
                eim.broadcastScriptProgressMessage("收集到了" + count + "个小碎片。");
                if (count >= 30) {
                    player.getMap().startMapEffect("收集到了所有小碎片.请队长和帮佣易克对话,执行下一阶段！", 5120019);
                }
            }
            break;
    }
}

function monsterDamaged(eim, player, mobID, damage) {
}

function monsterKilled(eim, chr, mobID) {
    var mapID = chr.getMapID();
    switch (mapID) {
        case 933033000:
            if (chr.getMap().getMobSize() <= 0) {
                eim.setProperty(String(mapID), "clear");
                chr.getMap().showScreenEffect("quest/party/clear");
                chr.getMap().startMapEffect("消灭了所有的独角狮.请队长和帮佣易克对话,执行下一阶段！", 5120019);
            }
            break;
        case 933037000:
            if (mobID == 9300938) {
                eim.setProperty(String(mapID), "clear");
                chr.getMap().showScreenEffect("quest/party/clear");
                chr.getMap().startMapEffect("消灭了远古精灵.请队长去帮佣易克那里领取生命草,移动到中央房间.", 5120019);
            } else if (mobID == 9300937) {
                eim.broadcastPlayerMsg(-1, "精灵爸爸被召唤了!");
                var mob = em.getMonster(9300938);
                eim.registerMonster(mob);
                chr.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-830, 563));
            }
            break;
    }
}
