var mapId = 910800100;

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
    eim.startEventTimer(1000 * 60 * 3);//3分钟
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
    if (mapid != 910800100) {
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

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        c
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
    var map = eim.getMapInstance(910800100);
    //map.resetFully();
    map.spawnNpc(9330087, new java.awt.Point(2, -132));
    eim.schedule("likai", 1000 * 60);
    map.broadcastMessage(em.getClock(60));
    eim.getMapFactory().getMap(910800100).killAllMonsters(true);
    map.startMapEffect("[西班牙斗牛]顽强的玩家！你坚持到了 3 分钟 请尽快领取奖励！", 5121015);
}

function monsterSpawn(eim) {
    var map = eim.getMapInstance(910800100);
    var packetsnd = em.playSound("rootabyss/firework");
    if (em.getProperty("state").equals("1") == true) {
        map.startMapEffect("[西班牙斗牛]请坚持3分钟！或者消灭牛牛！！", 5120092);
        var overrideStats = em.newMonsterStats();
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9402084);//怪物
            var hprand = 18888888888;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(20000);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-318, 82)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9309099);//怪物
            var hprand = 18888888888;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(20000);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(104, 82)); //刷出这个怪物
        }
        for (var i = 0; i < 1; i++) {
            var mob = em.getMonster(9309048);//怪物
            var hprand = 18888888888;
            overrideStats.setOHp(hprand);
            overrideStats.setOExp(20000);
            overrideStats.setOMp(200000);
            mob.setOverrideStats(overrideStats);
            mob.setHp(hprand);
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-702, 82)); //刷出这个怪物
        }
        em.setProperty("state", "2");
    }  else if (em.getProperty("state").equals("2") == true) {
        map.spawnNpc(9330087, new java.awt.Point(3, 82));
        eim.schedule("likai", 1000 * 60);
        map.broadcastMessage(em.getClock(60));
        map.startMapEffect("[西班牙斗牛]恭喜凶猛的玩家！您消灭了牛牛 请领取奖励 并且一分钟内退出！", 5121015);
    }
}

function allMonstersDead(eim) {
    var map = eim.getMapInstance(910800100);
    eim.schedule("monsterSpawn", 1000);
}

function beginQuest(eim) {
    //em.getMapFactory().getMap(910800100).startMapEffect("[西班牙斗牛] 愤怒的牛牛要冲出围栏了，干掉它们！！或躲开他们！", 5121015);
    eim.schedule("monsterSpawn", 1000);
}

function likai(eim) {
    var map = eim.getMapInstance(910800100);
    eim.broadcastPlayerMsg(1, "你已被遣送回自由了！");
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}
function leftParty(eim, player) { }

function disbandParty(eim) { }

function playerDead(eim, player) { }

function cancelSchedule() { }

function monsterDrop(eim, player, mob) {}