/*
 * 火焰狼仿官副本
 * Care制作 梦幻冒险岛工作室所有
 * 联系QQ：381991414
 * 欢迎定制各种脚本 
 */

var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var MapList = Array(
        993000500, //梦幻森林 挑战路西德
        993000400
        );


function init() {
    em.setProperty("state", "0");
}

function setup(level, leaderid) {
    var eim = em.newInstance("CareFirewolf");
    for (var i = 0; i < MapList.length; i++) {
        var map = eim.setInstanceMap(MapList[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
    }
    var map = eim.setInstanceMap(993000500);
    em.setProperty("state", "1");
    //隐藏地图 - 火焰狼栖息之地

    mobid = 9101078;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(2000000000000);
    modified.setOMp(2000000);
    mob.getStats().setPhysicalAttack(499999999);//物理伤害
    mob.getStats().setMagicAttack(499999999);//魔攻伤害
    mob.getStats().setAcc(500000);
    mob.getStats().setPDRate(50);
    mob.getStats().setMDRate(50);
    mob.getStats().setLevel(200);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(993000500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-38, 353));

    eim.startEventTimer(1000 * 60 * 50);// 1 - 分钟时间
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.dropMessage(6, "[ 暴走的火焰狼 ] 进入到了挑战地图，请小心行事。");
    player.changeMap(map, map.getPortal(0));
}

function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(1, "[ 暴走的火焰狼 ] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
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
        case 993000500: // 隐藏地图 火焰狼栖息之地
            em.setProperty("state", "1");
            var map = eim.getMapInstance(993000500);
            map.startMapEffect("要消灭火焰的勇士做多了呢,赶紧攻击那个家伙!能够停留的时间只有60秒!", 5120161);
            break;
    }

    switch (mapid) {
        case 993000500:
        case 993000400:
            return;
    }
    player.dropMessage(6, "[ 暴走的火焰狼 ] 已退出挑战。");
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 1) {
        eim.disposeIfPlayerBelow(100, 101050000);
    }
}


function playerExit(eim, player) {
    eim.disposeIfPlayerBelow(100, 993000500);
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
    return 0;
}


function monsterValue(eim, mobid) {
    switch (mobid) {
        case 9101078:
            var mapA = eim.getMapInstance(993000500);
            for (var i = 0; i < eim.getPlayerCount() ; i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
            break;
    }
    return 1;
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
    eim.disposeIfPlayerBelow(100, 993000500);
}

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 993000500);
}

function onMapLoad(eim, player) {
}

function monsterDrop(eim, player, mob) {
}

function EndThisBattle(eim) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).dropMessage(1, "[ 火焰狼 ] 挑战成功！");
    }
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 100000000);
    if (setupTask != null)
        setupTask.cancel(true);
    eim.dispose();
}

function summonMob(eim) {
    var map;
    map = eim.getMapInstance(0);
    var mob1 = em.getMonster(8880167);
    mob1.setStance(2);
    var mob2 = em.getMonster(8880167);
    var mob3 = em.getMonster(8880167);
    var mob4 = em.getMonster(8880167);
    mob4.setStance(2);
    if (map.getNumMonsters() < 100) {
        map.spawnMonsterWithEffect(mob1, -2, new java.awt.Point(-100, -436));
        map.spawnMonsterWithEffect(mob2, -2, new java.awt.Point(322, -336));
        map.spawnMonsterWithEffect(mob3, -2, new java.awt.Point(505, -230));
        map.spawnMonsterWithEffect(mob4, -2, new java.awt.Point(-514, -230));
    }
    if (em.getProperty("state").equals("1")) {
    }
    eim.schedule("summonMob", 6000);
}


function summonFall(eim) {
    var stop = parseInt(eim.getProperty("stop"));
    if (stop == 0) {
        var state = parseInt(em.getProperty("state"));
        var map = eim.getMapInstance(state - 1);
        map.obtacleFall(3, 0x30, 0x33);
        eim.schedule("summonFall", 5000);
    }
}