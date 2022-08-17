function init() {
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");

    var eim = em.newInstance("ProtectRichard");

    var map = eim.setInstanceMap(925010300);
    map.killMonster(9300162);

    var mob = em.getMonster(9300162); // 戴利
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-111, 333));

    eim.startEventTimer(600000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(925010300);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 925010300) {
        playerExit(eim, player);
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 120000104);

    em.setProperty("state", "0");
}

function monsterValue(eim, mobId) {
    if (mobId == 9300162) {
        allMonstersDead(eim);
    }
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}

function allMonstersDead(eim) {
    eim.disposeIfPlayerBelow(100, 120000104);

    em.setProperty("state", "0");
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}