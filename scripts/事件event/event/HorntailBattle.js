var returnmap = 240050400;
function init() {
    // 0 = Not started, 1 = started, 2 = first head defeated, 3 = second head defeated
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    em.setProperty("preheadCheck", "0");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("preheadCheck", "0");
    em.setProperty("leader", "true");

    var eim = em.newInstance("HorntailBattle");
    eim.setInstanceMap(240060000).resetFully();
    eim.setInstanceMap(240060100).resetFully();
    eim.setInstanceMap(240060200).resetFully();
    eim.startEventTimer(60 * 1000 * 720); //now changed to 2 hours
    eim.schedule("CheckHorntailHead", 3000);
    return eim;
}

function CheckHorntailHead(eim) {
    var prop = em.getProperty("preheadCheck");
    if (prop.equals("0")) {
        eim.schedule("CheckHorntailHead", 3000);
    } else if (prop.equals("1")) {
        em.setProperty("preheadCheck", "2");
        var mob = em.getMonster(8810024); // First HT Head
        eim.registerMonster(mob);
        eim.getMapFactory().getMap(240060000).spawnMonsterOnGroundBelow(mob, new java.awt.Point(890, 230));
        eim.broadcastPlayerMsg(5, "暗黑龙王吼了一声，你必须杀死暗黑龙王的左头颅，才能进入下一关。");
        eim.schedule("CheckHorntailHead", 3000);
        em.setProperty("state", "2");
    } else if (prop.equals("2")) {
        eim.schedule("CheckHorntailHead", 3000);
    } else if (prop.equals("3")) {
        em.setProperty("preheadCheck", "4");
        var mob = em.getMonster(8810025); // Second HT Head
        eim.registerMonster(mob);
        eim.getMapFactory().getMap(240060100).spawnMonsterOnGroundBelow(mob, new java.awt.Point(-360, 230));
        eim.broadcastPlayerMsg(5, "暗黑龙王吼了一声，你必须杀死暗黑龙王的右头颅，才能进入下一关。");
        em.setProperty("state", "3");
    }
}

function playerEntry(eim, player) {
    var NowMapID = eim.getProperty("NowMapID");
    var toMapid = 240060000;
    if (NowMapID != null) {
        toMapid = java.lang.Integer.parseInt(NowMapID);
    }
    var map = eim.getMapFactory().getMap(toMapid);
    player.changeMap(map, map.getPortal(0));
    //加入远征队玩家信息
    eim.setProperty("isSquadPlayerID_" + player.getId(), "1");
    //var map = eim.getMapFactory().getMap(240060200);
    //player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 240060000:
        case 240060100:
        case 240060200:
            //保存当前执行地图ID
            eim.setProperty("NowMapID", "" + mapid);
            return;
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
    /*switch (mapid) {
     case 240060200:
     return;
     }
     eim.unregisterPlayer(player);
     
     if (eim.disposeIfPlayerBelow(0, 0)) {
     em.setProperty("state", "0");
     em.setProperty("leader", "true");
     }*/
}

function playerDisconnected(eim, player) {
    playerExit(eim, player);
    return 0;
    //return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 240040700);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {
    eim.setProperty("isSquadPlayerID_" + player.getId(), "1");
}
function cancelSchedule() {}