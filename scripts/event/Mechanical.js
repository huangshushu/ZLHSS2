function init() {
    em.setProperty("started", "0");
}

function setup(character) {
    em.setProperty("started", "1");
    var eim = em.newInstance("Mechanical");

    var map = eim.createInstanceMap(922000000);
    eim.startEventTimer(1200000); // 20 mins
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
    if (mapid != 922000000) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("started", "0");
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
        em.setProperty("started", "0");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 220020000);
    em.setProperty("started", "0");
}

function clearPQ(eim) {}

function allMonstersDead(eim) {}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}