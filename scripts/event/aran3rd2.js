/*
 * 3轉狂狼勇士打怪腳本
 *
 */

var exitMap;
var instanceId;
var finishMap;

function init() {
    instanceId = 1;
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    exitMap = em.getChannelServer().getMapFactory().getMap(108010701);
    finishMap = em.getChannelServer().getMapFactory().getMap(108010702);

    var instanceName = "aran3rd2" + instanceId;
    var eim = em.newInstance(instanceName);

    instanceId++;

    var eventTime = 1200000;
    eim.startEventTimer(eventTime);

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(108010701);
	var map1 = eim.getMapFactory().getMap(108010702);
	var mob = em.getMonster(9001013);
    player.changeMap(map, map.getPortal(0));
	map1.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-168, 454));
}

function playerDead(eim, player) {}

function playerDisconnected(eim, player) {}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerExit(eim, player) {}

function playerFinish(eim, player) {}

function removePlayer(eim, player) {}

function clearPQ(eim) {}

function changedMap(eim, player, mapid) {
    if (mapid == 140030000) {
        eim.unregisterPlayer(player);

        eim.disposeIfPlayerBelow(0, 0);
    }
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 140030000);
}

function cancelSchedule() {}

function playerRevive(eim, player) {}