var newmapid=0;

function init() {
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    var eim = em.newInstance("Endless1" + leaderid);

    var map = eim.setInstanceMap(956010000); //画廊1
    map.resetFully();

    map = eim.setInstanceMap(956010300); //画廊2
    map.resetFully();

    map = eim.setInstanceMap(922000000); //画廊3
    map.resetFully();

    map = eim.setInstanceMap(956010400); //画廊最终
    map.resetFully();
    mob = em.getMonster(8800400); 
    modified = em.newMonsterStats();
    modified.setOHp(5000100000000);
    modified.setOMp(9999990);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1424,18));

    eim.startEventTimer(1800000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    em.getMapFactory().getMap(956010000).startSimpleMapEffect("请通过消灭GM后花园饲养的小动物获得足够数量物品后.交给蓝光掩护罩进行充能.", 5120037);
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid == 956010000 || mapid == 956010300 || mapid == 922000000 || mapid == 956010400) {
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
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}