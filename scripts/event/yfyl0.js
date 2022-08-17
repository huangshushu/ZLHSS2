var mapId = 980000403;
var item = Array(1132092, 1152060, 1003242, 1102294, 1082314, 1052357, 1072521, 1482098, 1402106, 1422069, 1412067, 1452125, 1362057, 1332144, 1492097, 1472136, 1382120, 1462113, 1322099, 1372096, 1302169, 1442132, 1432095, 1312068, 1522065, 1532069); //冒险岛宝石系列装备
var mob1 = Array(3230200, 3230302, 3230305, 3300001, 3300008, 4130100, 4230103, 4230118, 5130102, 5160005, 5220002, 6090000, 6090001, 6090002, 6110301, 6230100, 7130101);

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Vergamot" + leaderid);

    eim.setProperty("vergamotSummoned", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();
    var mobid = mob1[Math.floor(Math.random() * mob1.length)];
    var mob = em.getMonster(mobid); //随机怪物
    var overrideStats = Packages.server.life.OverrideMonsterStats();
    var hprand = mob.getId()*10;
    overrideStats.setOHp(hprand);
    overrideStats.setOExp(20000000);
    overrideStats.setOMp(200000);
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-61, 132)); //刷出这个怪物
    eim.startEventTimer(1000 * 60 * 1); 
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
    if (mapid != 980000403) {
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
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
        var pIter = eim.getPlayers().iterator();
        while (pIter.hasNext()) {
            var chr = pIter.next();
            var map = eim.getMapFactory().getMap(mapId);
            var randitem = Math.floor(Math.random() * item.length);
            map.spawnAutoDrop(item[randitem], chr.getPosition());

        }
    }
}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}