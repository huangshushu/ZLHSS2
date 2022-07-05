function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    var eim = em.newInstance("chihu");
    var map = eim.setInstanceMap(108010101);
    var mob = em.getMonster(8830000);
    var mob1 = em.getMonster(8830001);
    var mob2 = em.getMonster(8830002);
    map.resetFully();
    em.setProperty("state", "1");
    mob.setHp(50000000000);
    mob1.setHp(10000000000);
    mob2.setHp(10000000000);
    eim.startEventTimer(3600000); // 1 hr
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(232, 20));
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(232, 20));
	map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(232, 20));
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(108010101);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 803000502);
    em.setProperty("state", "0");
		em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 108010101) {
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
    if (eim.disposeIfPlayerBelow(100, 803000502)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}