/* global em, java */

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
        eim.broadcastPlayerMsg(5, "霺���������һ�����횚���霺����������^�B�������M����һ�P��");
        eim.schedule("CheckHorntailHead", 3000);
        em.setProperty("state", "2");
    } else if (prop.equals("2")) {
        eim.schedule("CheckHorntailHead", 3000);
    } else if (prop.equals("3")) {
        em.setProperty("preheadCheck", "4");
        var mob = em.getMonster(8810025); // Second HT Head
        eim.registerMonster(mob);
        eim.getMapFactory().getMap(240060100).spawnMonsterOnGroundBelow(mob, new java.awt.Point( - 360, 230));
        eim.broadcastPlayerMsg(5, "霺���������һ�����횚���霺����������^�B�������M����һ�P��");
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
    //����Զ���������Ϣ
    eim.setProperty("isSquadPlayerID_" + player.getId(), "1");
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
    case 240060000:
    case 240060100:
    case 240060200:
        //���浱ǰִ�е�ͼID
        eim.setProperty("NowMapID", "" + mapid);
        return;
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function playerDisconnected(eim, player) {
    player.setMap(eim.getMapInstance(returnmap));
    return 0;
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

function allMonstersDead(eim) {}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
