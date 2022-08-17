/*
 * 4轉狂狼勇士打怪腳本
 *
 */

function init() {}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    var eim = em.newInstance("aran4th");
    var map = eim.setInstanceMap(914020000);
    eim.startEventTimer(1200000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(914020000);
	var mob = em.getMonster(9001014);
    player.changeMap(map, map.getPortal(0));
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-640, 86));
}

function playerDead(eim, player) {}

function playerRevive(eim, player) {}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 140000000);
}

function changedMap(eim, player, mapid) {
    if (mapid != 914020000) {
        eim.unregisterPlayer(player);

        eim.disposeIfPlayerBelow(0, 0);
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function leftParty(eim, player) {
    playerExit(eim, player);
}

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 140000000);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(140000000);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ() {}

function allMonstersDead() {}

function cancelSchedule() {}