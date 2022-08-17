/* 
 * 卧虎藏龙
 */
var r;
var rr;
var TimeA = 30 * 60 * 1000;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("LongHs");
    var map = eim.setInstanceMap(706041715);
    map.resetFully();
    map.killAllMonsters(false);
    map.resetSpawnLevel(200);
    for (var i = 9601013; i <= 9601018; i++) {
        var mob = em.getMonster(i);
		mob.setForcedMobStat(200);
        mob.setChangeHP(50000000000000);
        eim.registerMonster(mob);
        var mapForMob = eim.setInstanceMap(706041715);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(162, 95));
    }
    eim.startEventTimer(TimeA); //30分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 706041715) {
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

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) { }
function disbandParty(eim) { }
function playerDead(eim, player) { }
function cancelSchedule() { }
function monsterDrop(eim, player, mob) { }
function pickupItem(eim, player, itemID) {}
function monsterDamaged(eim, player, mobID, damage) {}
function monsterKilled(eim, player, mobID) {}