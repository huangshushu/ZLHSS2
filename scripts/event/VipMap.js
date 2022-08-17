
var reviveCount = 5;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    em.setProperty("summon", "0");
    var eim = em.newInstance("VipMap");
    var map = eim.setInstanceMap(910540620);
	map.resetFully();
	for (var i = 0; i < 1; i++) {
		var mob = em.getMonster(9600037);
		mob.getStats().setChange(true);
		mob.changeLevel(150);
		mob.getChangedStats().setOHp(500000000); //200E
		mob.setHp(50000000);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(179, 20));
		eim.registerMonster(mob);
	}
	eim.startEventTimer(6 * 60 * 500); 
	return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}
function changedMap(eim, player, mapid) {
    if (mapid != 910540620) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}
function playerRevive(eim, player) {
   	return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}



function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 101050000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}
