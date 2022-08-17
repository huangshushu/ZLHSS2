function init() {
    em.setProperty("started", "0");
}

function setup(character) {
    em.setProperty("started", "1");
    var eim = em.newInstance("Francis");

    var map = eim.createInstanceMap(910510000);


    var mob = em.getMonster(9300285);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(675, 260));
	
	//eim.schedule("end", 10 * 60 * 1000); // 3 minutes
	eim.startEventTimer(600000); // 10 mins
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
    if (mapid != 910510000) {
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
    eim.disposeIfPlayerBelow(100, 105070300);
    em.setProperty("started", "0");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    //after ravana is dead nothing special should really happen
}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}