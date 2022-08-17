/* 
 * 迷之幻域 - 奇怪的通道
 */
        var mobList = Array(9300741,
                9300379, // - 黑魔法师的黑飞龙
                9300380, // - 黑魔法师的双刀蜥蜴
                9300381); //- 黑魔法师的骷髅龙
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    //副本实例
    var eim = em.newInstance("Mzhy");
    //生成并储存路径
    var imRoute = Array(1, 2, 0, -1, -2);
    for (var i = 0; i < 20; i++) {
        var haveUp = false;
        var routes = Array();
        for (var k = 0; k < 3; k++) {
            if (!haveUp)
            {
                var id = Math.floor(Math.random() * imRoute.length);
            } else {
                var id = Math.floor(Math.random() * 3 + 2);
            }
            var route = imRoute[id];
            if (!haveUp && route > 0) {
                haveUp = true;
            }
            routes.push(route);
        }
        var road = "";
        if (routes[0] <= 0 && routes[1] <= 0) {
            routes[2] = Math.floor(Math.random() * 2 + 1);
        }
        for (var key in routes) {
            road += routes[key] + ",";
        }
        road = road.substring(0, road.length - 1);
        eim.setProperty("floor" + i, road);
    }
    //层数记录
    eim.setProperty("currentFloor", 1);
    var map = eim.setInstanceMap(931050410);
    map.resetFully();
    eim.getMapFactory().getMap(931050410).killAllMonsters(false);
    eim.startEventTimer(1000 * 60 * 30); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    map.startMapEffect("一梦千年，几世的记忆，几世的等待，几世的痛彻心扉。", 5120026);
    player.changeMap(map, map.getPortal(2));
    //player.dropMessage(1, "一阵眩晕后醒来，发现自己来到了迷之幻域第1层幻境。");
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(9070010, 2);
    }

}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid != 931050410) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
        return;
    }
    if (eim.getProperty("currentFloor") == 20) {
        //20层BOSS
        var map = eim.getMapInstance(0);
        map.startMapEffect("愚蠢的人类，你以为你逃得出我的幻境吗？", 5120026);
        var mob = em.getMonster(9300807); //黑魔法师
        var overrideStats = em.newMonsterStats();
        var hprand = 500000000;
        overrideStats.setOHp(hprand);
        overrideStats.setOExp(500000);
        overrideStats.setOMp(200000);
        mob.setOverrideStats(overrideStats);
        mob.setHp(hprand);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-57, 215)); //刷出这个怪物
    } else if (eim.getProperty("currentFloor") != 1) {
        //巡逻小怪
        spawnMonster(eim);
    }
}

function spawnMonster(eim) {
    var map = eim.getMapInstance(0);
    var mob = null;
    map.resetFully();
    eim.getMapFactory().getMap(931050410).killAllMonsters(false);
    for (var key in mobList) {
        mob = em.getMonster(mobList[key]);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-57, 215)); //刷出这个怪物
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
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
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function monsterDrop(eim, player, mob) {}

function allMonstersDead(eim) {
    eim.getMapFactory().getMap(931050410).killAllMonsters(false);
    em.setProperty("state", "2");
    /* var state = em.getProperty("state");
     if (state.equals("1")) {
     em.setProperty("state", "2");
     } else if (state.equals("2")) {
     em.setProperty("state", "3");
     }*/
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}