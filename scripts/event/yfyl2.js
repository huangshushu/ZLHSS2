var mapId = 980000403;
var item = Array(1132110,1152068,1003364,1102322,1082391,1052405,1072610,1302192,1312098,1322138,1332168,1372117,1382142,1402129,1412087,1422089,1432117,1442154,1452147,1462136,1472159,1482120,1492119,1522055,1532059); //传说系列装备
var mob1 = new Array("8840000", "8840001", "8840002", "9001009", "9001010", "9001012", "9300182", "9300381", "9400542", "9500122", "8610004", "8610005", "8610006", "8610007", "8610008", "8610009", "8610010");

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
    var hprand = mob.getId()*30;
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
    if (mapid != 980000103) {
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