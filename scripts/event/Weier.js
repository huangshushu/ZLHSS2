/*
M7MS服务端
副本事件
M7MS服务端
*/

function init() {
    em.setProperty("state", "0");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    em.setProperty("state", "1");
    var eim = em.newInstance("Weier");
    var map = eim.setInstanceMap(206600670);
    map.resetFully();
    eim.startEventTimer(1000000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(206600670);
    player.changeMap(map, map.getPortal(0));
    player.tryPartyQuest(1201);
}

function playerDead(eim, player) {}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 206600670: 
            return;
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}


function playerDisconnected(eim, player) {
    return -2;
}

function leftParty(eim, player) {
    if (eim.disposeIfPlayerBelow(3, 910000000)) {
        em.setProperty("started", "false");
    } else {
        playerExit(eim, player);
    }
}

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var exit = eim.getMapFactory().getMap(910000000);
    player.changeMap(exit, exit.getPortal(0));
}

function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
}

function scheduledTimeout(eim) {
    var players = eim.getPlayers();
    var exit = eim.getMapFactory().getMap(910000000);
    for (var i = 0; i < players.size(); i++) {
        var player = players.get(i);
        eim.unregisterPlayer(player);
        player.changeMap(exit, exit.getPortal(0));
    }

}


function allMonstersDead(eim) {}

function cancelSchedule() {}

function playerRevive(eim, player) {}
