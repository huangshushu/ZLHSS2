var mapId = 980000503;
var yp = Array(1, 2, 3); //邮票
var index = 0;

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

    var mob = em.getMonster(3300005); //灰雪人与企鹅王
    var overrideStats = Packages.server.life.OverrideMonsterStats();
    var hprand = mob.getId() * 10;
    overrideStats.setOHp(hprand);
    overrideStats.setOExp(20000000);
    overrideStats.setOMp(200000);
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-61, 132)); //刷出这个怪物
    eim.startEventTimer(1000 * 30);
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
    if (mapid != 980000503) {
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
    var map = eim.setInstanceMap(mapId);
    if (map.getNumMonsters() != 0) {
        xw(eim);
        map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(1, "未能成功解救公主,你损失了100修为点"));
    }
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    var map = eim.setInstanceMap(mapId);
    var mob;
    var overrideStats = Packages.server.life.OverrideMonsterStats();
    var hprand;
    var time;
       if(em.getProperty("state").equals("1")==true){
        em.setProperty("state", "2");
        mob = em.getMonster(3300006); //金雪人与企鹅王
        hprand = mob.getId() * 15;
        time = 1000 * 30;
	overrideStats.setOHp(hprand);
        mob.setOverrideStats(overrideStats);
        mob.setHp(hprand);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-61, 132)); //刷出这个怪物
    }else if(em.getProperty("state").equals("2")==true){
        em.setProperty("state", "3");
        mob = em.getMonster(3300007); //白雪人与企鹅王
        hprand = mob.getId() * 20;
        time = 1000 * 30;
	overrideStats.setOHp(hprand);
        mob.setOverrideStats(overrideStats);
        mob.setHp(hprand);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-61, 132)); //刷出这个怪物
    }else if(em.getProperty("state").equals("3")==true){
        em.setProperty("state", "4");
        mob = em.getMonster(3300008); //蘑菇大臣
        hprand = mob.getId() * 30;
        time = 1000 * 30;
	overrideStats.setOHp(hprand);
        mob.setOverrideStats(overrideStats);
        mob.setHp(hprand);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-61, 132)); //刷出这个怪物
    }else if(em.getProperty("state").equals("4")==true){
        map.spawnNpc(9310114, new java.awt.Point(-61, 132));
        time = 1000 * 60 * 1;
    }

    eim.startEventTimer(time);
}

function xw(eim) {
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
        var pIter = eim.getPlayers().iterator();
        while (pIter.hasNext()) {
            var chr = pIter.next();
            if (chr.getXw() >= 100) {
                chr.setXw(chr.getXw() - 100);
            }

        }
    }
}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}