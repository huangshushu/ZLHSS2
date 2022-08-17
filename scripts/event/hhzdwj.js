var mapId = 866000230;

function init() {
    em.setProperty("state", "0");
    em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("state1", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Vergamot" + leaderid);

    eim.setProperty("vergamotSummoned", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();
    eim.schedule("beginQuest", 1000);
    eim.schedule("pf", 1000 * 60 * 3);
    eim.startEventTimer(1000 * 60 * 30);//3分钟
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
    if (mapid != 866000230) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("state1", "0");
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
    var map = eim.getMapFactory().getMap(101050000);
    player.changeMap(map, map.getPortal(0));
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function pf(eim) {
    if (em.getProperty("state1").equals("1") == true) {
        em.setProperty("state1", "2");
        eim.schedule("pf", 1000 * 60 * 3);
    } else if (em.getProperty("state1").equals("2") == true) {
        em.setProperty("state1", "3");
        eim.schedule("pf", 1000 * 60 * 6);
    } else if (em.getProperty("state1").equals("3") == true) {
        em.setProperty("state1", "4");
    }
}


function end(eim) {
    var map = eim.getMapInstance(866000230);
    eim.broadcastPlayerMsg(1, "航海失败！已把你遣送回自由！！");
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}

function monsterSpawn(eim) {
    var map = eim.getMapInstance(866000230);
    var packetsnd = em.playSound("rootabyss/firework");
    if (em.getProperty("state").equals("1") == true) {
        map.startMapEffect("当心！！有海族！快 防守 消灭它们！！！", 5120080);
        //cm.getNpcNotice(2480009, "当心！有海族！快 退居二线\r\n防守！消灭它们！！！", 3)
        var overrideStats = em.newMonsterStats();
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390829);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-306, 236)); //刷出这个怪物 -1
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390829);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-256, 236)); //刷出这个怪物 -2
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390811);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-206, 236)); //刷出这个怪物 -3
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390811);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-156, 236)); //刷出这个怪物 -3
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390811);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-106, 236)); //刷出这个怪物 -3
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390811);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-56, 236)); //刷出这个怪物 -3-1
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390810);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-6, 236)); //刷出这个怪物 -4
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390810);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(44, 236)); //刷出这个怪物 -4
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390810);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(92, 236)); //刷出这个怪物 -4-1
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390810);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(144, 236)); //刷出这个怪物 -4-1
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390810);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(194, 236)); //刷出这个怪物 -4-1
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390810);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(70, 236)); //刷出这个怪物 -4-1
        }
        for (var i = 0; i < 2; i++) {
            var mob = em.getMonster(9390808);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-200, 236)); //刷出这个怪物 -5
        }
        for (var i = 0; i < 2; i++) {
            var mob = em.getMonster(9390808);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-70, 236)); //刷出这个怪物 -5-1
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390808);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(82, 236)); //刷出这个怪物 -5-1
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390808);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-17, 236)); //刷出这个怪物 -5-1
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390808);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-40, 236)); //刷出这个怪物 -5-1
        }
        em.setProperty("state", "2");
        //cm.getNpcNotice(1530100, "在坚持坚持！以我的观察还有两波海兽我们就可以渡过难关了！！！", 3)
    } else if (em.getProperty("state").equals("2") == true) {
        var overrideStats = em.newMonsterStats();
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9500342);//怪物
            var hprand = 115275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-306, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            // cm.getNpcNotice(1530150, "那就干吧！不能再美女面前丢人！海兽！！统统死亡吧！！！", 3)
            var mob = em.getMonster(9500342);//怪物
            var hprand = 115275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-256, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9500342);//怪物
            var hprand = 115275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-156, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(2600221);//怪物
            var hprand = 125275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-106, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(2600221);//怪物
            var hprand = 125275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-6, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(2600221);//怪物
            var hprand = 125275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(44, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390801);//怪物
            var hprand = 135275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(92, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390801);//怪物
            var hprand = 135275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(144, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390801);//怪物
            var hprand = 135275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(194, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390005);//怪物
            var hprand = 105275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(58, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390005);//怪物
            var hprand = 105275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-199, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390005);//怪物
            var hprand = 105275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-70, 236)); //刷出这个怪物
        }
        em.setProperty("state", "3");
    } else if (em.getProperty("state").equals("3") == true) {
        var overrideStats = em.newMonsterStats();
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(3300109);//怪物
            var hprand = 55275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-306, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(3300105);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-256, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(3300105);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-156, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9500334);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-106, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(3300105);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-56, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9500334);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-6, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9303024);//怪物
            var hprand = 995275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(44, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(3300105);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(92, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9303024);//怪物
            var hprand = 995275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(144, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(3300109);//怪物
            var hprand = 55275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(194, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9500334);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(82, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(3300105);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-17, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(3300105);//怪物
            var hprand = 95275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-40, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(3300109);//怪物
            var hprand = 55275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(160, 236)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9303024);//怪物
            var hprand = 995275089;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(9588);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(140, 236)); //刷出这个怪物
        }
        em.getMapFactory().getMap(866000230).startMapEffect("[航海中的危机] 深海巨龙神 正在潜伏过来!!各位玩家补充体力做好战斗准备", 5120055);
        em.setProperty("state", "4");
    } else if (em.getProperty("state").equals("4") == true) {
        em.getMapFactory().getMap(866000230).startMapEffect("[航海中的危机] 深海霸主-海龙王-出现了！！大家齐心协力消灭它吧！！！", 5120085);
        //cm.getNpcNotice(2470018, "深海霸主-海龙王-勇士们！用你们的力量消灭它！我将赐予你们海贼王称号！！前进吧勇士们", 3)
        var overrideStats = em.newMonsterStats();
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9390804);//BOSS
            var stats = mob.getStats();
            var ostats = em.newMonsterStats();
            ostats.setOHp(888888888888);
            ostats.setOMp(8888888);
            stats.setPhysicalAttack(10000000);
            stats.setMagicAttack(10000000);
            stats.setLevel(250);
            mob.setOverrideStats(ostats);
            eim.registerMonster(mob);
            eim.broadcastPlayerMsg(5, "深海霸主：你妈叫你回去吃饭了!");
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(550, 235)); //刷出这个怪物
        }
        em.setProperty("state", "5");
        em.getMapFactory().getMap(866000230).startMapEffect("[航海中的危机] 不要掉以轻心！海龙王只是配角！后面还有更厉害的深海巨妖！", 5120081);
    } else if (em.getProperty("state").equals("5") == true) {
        map.spawnNpc(1052010, new java.awt.Point(377, 156));
        em.getMapFactory().getMap(866000230).startMapEffect("[航海中的危机] 恭喜你们打败了海龙兽！领取你们的奖励吧！！", 5120093);
    }
}
function allMonstersDead(eim) {
    var map = eim.getMapInstance(866000230);
    eim.schedule("monsterSpawn", 20000);
}

function beginQuest(eim) {
    em.getMapFactory().getMap(866000230).startMapEffect("[航海中的危机] 各位勇士 - 航海旅行正式开始了！", 5120059);
    eim.schedule("monsterSpawn", 20000);
}

function likai(eim) {
    var map = eim.getMapInstance(866000230);
    eim.broadcastPlayerMsg(1, "你已被遣送回自由了！");
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}
function leftParty(eim, player) { }

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 865000999);
}

function playerDead(eim, player) { }

function cancelSchedule() { }
function monsterDrop(eim, player, mob) {}