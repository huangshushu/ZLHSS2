/*
 * 路西德仿官副本
 * Care制作 梦幻冒险岛工作室所有
 * 联系QQ：50009219
 * 欢迎定制各种脚本 
 */

var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var MapList = Array(
        450004150, //梦幻森林 挑战路西德
        450004500
        );


function init() {
    em.setProperty("state", "0");
}

function setup(level, leaderid) {
    var eim = em.newInstance("LxD");
    for (var i = 0; i < MapList.length; i++) {
        var map = eim.setInstanceMap(MapList[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
    }
    var map = eim.setInstanceMap(350050100);
    em.setProperty("state", "1");
    //梦幻森林 


    mobid = 8880140;//路西德
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(300000000000000);
    modified.setOMp(mob.getMobMaxMp() * 0);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004150);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1239, 43));


    eim.startEventTimer(1000 * 60 * 15);//第一、二关有15分钟的时间
    //8240089 90
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.dropMessage(6, "[路西德] 进入到了挑战地图，请小心行事。");
    player.changeMap(map, map.getPortal(0));
}

function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(1, "[路西德副本] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 101050000);
}

function cancelSchedule() {
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
    return false;
}


function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 450004150: // 梦幻森林
            em.setProperty("state", "1");
            var map = eim.getMapInstance(450004150);
            map.startMapEffect("好像存在些什么未知的力量 - 让我们同心协力消灭噩梦女王吧", 5120124);
            break;

        case 450004500:// 结束地图
            em.setProperty("state", "2");
            var map = eim.getMapInstance(450004500);
            map.startMapEffect("想不到你还能通过我的测验？哼哼……", 5120124);
            eim.restartEventTimer(1000 * 60 * 5);//5分钟的时间
            break;

    }

    switch (mapid) {
        case 450004150: // 梦幻森林
        case 450004500: // 结束地图
            return;
    }
    player.dropMessage(6, "[路西德副本] 已退出挑战。");
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 0) {
        eim.disposeIfPlayerBelow(100, 101050000);
    }
}


function playerExit(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
    return 0;
}


function monsterValue(eim, mobid) {
    if (mobid == 8880140) {//第一个梦中的路西德
        mobid = 8880150;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(70000000000000);
        modified.setOMp(mob.getMobMaxMp() * 0);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob8 = eim.getMapInstance(450004150);
        mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(962, 43));
        return 0;
    }
    if (mobid == 8880150) {//路西德死亡
        mobid = 4000000;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(70000000000000);
        modified.setOMp(mob.getMobMaxMp() * 0);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob8 = eim.getMapInstance(450004150);
        mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(962, 43));
        var mapA = eim.getMapInstance(450004500);
        for (var i = 0; i < eim.getPlayerCount() ; i++) {
            eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
        }
        return 0;
    }

    return 0;
}

function monsterKilled(eim, player, cp) {
}

function allMonstersDead(eim) {
}

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function monsterDamaged(eim, player, mobid, damage) {
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
}

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
}

function onMapLoad(eim, player) {
}

function monsterDrop(eim, player, mob) {
}