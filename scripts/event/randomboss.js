var instancemap = 910000020;
var returnmap = 910000000
var mobid = 100100;
function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
    var eim = em.newInstance("randomboss");
    var map = eim.setInstanceMap(instancemap);
    map.resetFully();
    em.setProperty("state", "1");

    eim.startEventTimer(1000 * 60 & 5); // 5 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(instancemap);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, returnmap);
    em.setProperty("state", "0");
		em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != instancemap) {
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
    if (eim.disposeIfPlayerBelow(100, returnmap)) {
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
