/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：组队任务：罗密欧与朱丽叶
 *  
 *  @Author Jackson 
 */

/* global em */

var minPlayers = 4;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.getProperties().clear();
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("PQ_Juliet");
    eim.setProperty("summoned", "0");
    var y;
    for (y = 0; y < 4; y++) { //stage number
        eim.setProperty("stage6_" + y, "0");
        for (var b = 0; b < 10; b++) {
            for (var c = 0; c < 4; c++) {
                //em.broadcastYellowMsg("stage6_" + y + "_" + b + "_" + c + " = 0");
                eim.setProperty("stage6_ " + y + "_" + b + "_" + c + "", "0");
            }
        }
    }
    var i;
    for (y = 0; y < 4; y++) { //stage number
        for (i = 0; i < 10; i++) {
            var found = false;
            while (!found) {
                for (var x = 0; x < 4; x++) {
                    if (!found) {
                        var founded = false;
                        for (var z = 0; z < 4; z++) { //check if any other stages have this value set already.
                            //em.broadcastYellowMsg("stage6_" + z + "_" + i + "_" + x + " check");
                            if (eim.getProperty("stage6_" + z + "_" + i + "_" + x + "") == null) {
                                eim.setProperty("stage6_" + z + "_" + i + "_" + x + "", "0");
                            } else if (eim.getProperty("stage6_" + z + "_" + i + "_" + x + "").equals("1")) {
                                founded = true;
                                break;
                            }
                        }
                        if (!founded && java.lang.Math.random() < 0.25) {
                            //em.broadcastYellowMsg("stage6_" + z + "_" + i + "_" + x + " = 1");
                            eim.setProperty("stage6_" + y + "_" + i + "_" + x + "", "1");
                            found = true;
                            break;
                        }
                    }
                }
            }
            //BUT, stage6_0_0_0 set, then stage6_1_0_0 also not set!
        }
    }
    eim.setProperty("stage7", "0"); //whether they were killed or not.
    eim.setInstanceMap(926110000).resetFully();
    eim.setInstanceMap(926110001).resetFully();
    eim.setInstanceMap(926110100).resetFully();
    eim.setInstanceMap(926110200).resetFully();
    var map = eim.setInstanceMap(926110201);
    map.resetFully();
    map = eim.setInstanceMap(926110202);
    map.resetFully();
    map = eim.setInstanceMap(926110203);
    map.resetFully();
    //
    eim.setInstanceMap(926110300).resetFully();
    eim.setInstanceMap(926110301).resetFully();
    eim.setInstanceMap(926110302).resetFully();
    eim.setInstanceMap(926110303).resetFully();
    eim.setInstanceMap(926110304).resetFully();
    eim.setInstanceMap(926110400).resetFully();

    map = eim.setInstanceMap(926110401);
    map.resetFully();
    map.spawnNPC(2112000, 269, 150); //urete MADMAN
    eim.setInstanceMap(926110500).resetFully(); //spawn urete based on properties ?????
    eim.setInstanceMap(926110600).resetFully(); //spawn romeo&juliet OR fallen romeo/juliet based on properties???

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
    if (mapid < 926110000 || mapid > 926110600) {
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
    eim.disposeIfPlayerBelow(100, 926110700);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    player.changeMap(926110700, 0);
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
            case 926110001:
                var size = map.getEventMobSize();
                eim.broadcastScriptProgressMessage("剩余 " + size + "个怪物。");
                if (size <= 0 && !"1".equals(eim.getProperty("stage1_1"))) {
                    eim.setProperty("stage1_1", "1");
                    map.showScreenEffect("quest/party/clear");
                    map.playFieldSound("Party1/Clear");
                }
                break;
            case 926110203:
                var size = map.getEventMobSize();
                eim.broadcastScriptProgressMessage("剩余 " + size + "个怪物。");
                if (size <= 0 && !"1".equals(eim.getProperty("stage3_next"))) {
                    map.forceTrigger("jnr6_out", 1);
                    eim.setProperty("stage3_next", "1");
                    map.showScreenEffect("quest/party/clear");
                    map.playFieldSound("Party1/Clear");
                }
                break;
            case 926110401:
                if (mobID == 9300137 || mobID == 9300138) {
                    if (!"1".equals(eim.getProperty("boss"))) {
                        eim.broadcastScriptProgressMessage("所保护的对象已经死亡。任务失败！");
                        end(eim);
                    }
                } else if (mobID == 9300139 || mobID == 9300140) {
                    if (!"1".equals(eim.getProperty("boss"))) {
                        eim.setProperty("boss", "1");
                        player.getMap().killMonster(9300137);
                        player.getMap().killMonster(9300138);
                        player.getMap().spawnNPC(2112005, 0, 150);
                        player.getMap().spawnNPC(2112006, 115, 150);
                        eim.getMapInstance(14).spawnNPC(2112001, 232, 150);
                        eim.getMapInstance(15).spawnNPC(2112005, 201, 128);
                        eim.getMapInstance(15).spawnNPC(2112006, 288, 128);
                    }
                }
                break;
        }
    }
}

