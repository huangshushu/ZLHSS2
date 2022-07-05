/*
 * 3转狂狼勇士打怪脚本
 *
 */
 
function init() {}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    var eim = em.newInstance("aran3rd");
    var map = eim.setInstanceMap(108010700);
    eim.startEventTimer(600000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(108010700);
	var mob = em.getMonster(9001013);
    player.changeMap(map, map.getPortal(0));
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2661, 3));
}

function playerDead(eim, player) {}

function playerRevive(eim, player) {}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 140020200);
}

function changedMap(eim, player, mapid) {
    if (mapid != 108010700) {
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
    eim.disposeIfPlayerBelow(100, 140020200);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(140020200);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ() {}

function allMonstersDead() {}

function cancelSchedule() {}
