/*
 脚本功能： 三头犬副本
 */
function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    var eim = em.newInstance("StqBoss");
    var map = eim.setInstanceMap(510102100);
    map.resetReactors();
    map.killAllMonsters(true);
    map.respawn(true);
    map.shuffleReactors();

    eim.startEventTimer(1000 * 60 * 30);//30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 510101100);
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 510102100:
            return;
            break;
    }
    eim.unregisterPlayer(player);
}

function playerDisconnected(eim, player) {
    return 0;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    playerExit(eim, player);
}

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 510101100);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(510101100);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 510101100);
}

function allMonstersDead(eim) {
//has nothing to do with monster killing
}

function cancelSchedule() {
}