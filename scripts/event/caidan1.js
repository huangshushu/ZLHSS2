/*
*/
var taskid = 140003;
var changeJobMap, hp, returnMap, expInformation, amount;
var mX = 900, mY = 249;
var monsterMob = Array(
    Array("黄色", 9600067),
    Array("紫色", 9600068),
    Array("红色", 9600069),
    Array("绿色", 9600072),
    Array("蓝色", 9600073),
    Array("金鱼", 9600074)
    );
function init() { }
function setup() { }

function playerEntry(eim) {
    amount = 0;
    eim.setProperty("stop", "0");
    eim.setProperty("finsh", "0");
    em.setProperty("Care_num", 0);
    MobHP = parseInt(em.getProperty("Mob_HP"));
    changeJobMap = parseInt(em.getProperty("out_map"));
    returnMap = em.getMapFactory().getMap(changeJobMap);
    eim.schedule("spawnMonster", parseInt(em.getProperty("mob_Time")));
}

function spawnMonster(eim) {
    if (eim == null) {
        return;
    }
    Exp(amount);
    var player = eim.getPlayers().get(0);
    var overrideStats = em.newMonsterStats();
    if (eim.getMobs().size() <= parseInt(em.getProperty("mob_num"))) {
        if (player != null) {
            var monster = em.getMonster(monsterMob[0][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 200, mY));

            var monster = em.getMonster(monsterMob[1][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 300, mY));

            var monster = em.getMonster(monsterMob[2][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 400, mY));

            var monster = em.getMonster(monsterMob[3][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 500, mY));

            var monster = em.getMonster(monsterMob[4][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 600, mY));

            var monster = em.getMonster(monsterMob[4][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 700, mY));

            var monster = em.getMonster(monsterMob[3][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 800, mY));

            var monster = em.getMonster(monsterMob[2][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 900, mY));

            var monster = em.getMonster(monsterMob[3][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 1000, mY));

            var monster = em.getMonster(monsterMob[2][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 1100, mY));

            var monster = em.getMonster(monsterMob[3][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 1200, mY));

            var monster = em.getMonster(monsterMob[0][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 1300, mY));

            var monster = em.getMonster(monsterMob[1][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 1400, mY));

            var monster = em.getMonster(monsterMob[2][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 1500, mY));

			var monster = em.getMonster(monsterMob[4][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 1600, mY));

			var monster = em.getMonster(monsterMob[3][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 1700, mY));

            var monster = em.getMonster(monsterMob[4][1]);
            eim.registerMonster(monster);
            overrideStats.setOHp(MobHP);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 1800, mY));
        }
    } else {
        eim.broadcastPlayerMsg(-1, "彩蛋来袭：警告 警告 彩蛋已达到 " + parseInt(em.getProperty("mob_num")) + " 以上 已禁止生成新的彩蛋");
    }
    

    if (eim.getProperty("finsh") != "1") {
        eim.schedule("spawnMonster", parseInt(em.getProperty("mob_Time")));
    }

}

function playerRevive(eim, player) {
    player.setStance(0);
    player.changeMap(player.getMap(), player.getMap().getPortal(0));
    return true;
}
function scheduledTimeout(eim) {
    var player = eim.getPlayers().get(0);
    eim.setProperty("finsh", "1");
    eim.stopEventClock();
    player.getMap().killAllMonsters(true);
    pauseTimer(eim, player);
    player.changeMap(returnMap, returnMap.getPortal(0));
    em.setProperty("Care_num", amount);
    player.dropMessage(1, "恭喜您 - \r\n\r\n彩蛋时间结束");
}

function changedMap(eim, player, mapid) {
    if (mapid != 911004900) {
        eim.setProperty("finsh", "1");
        eim.stopEventClock();
        player.getMap().killAllMonsters(true);
        pauseTimer(eim, player);

    }
}

function playerExit(eim, player) {
    eim.setProperty("stop", "0");
    eim.setProperty("finsh", "0");
    em.setProperty("Care_num", 0);
    eim.setProperty("finsh", "1");
    eim.stopEventClock();
    player.getMap().killAllMonsters(true);
    pauseTimer(eim, player);
    player.changeMap(returnMap, returnMap.getPortal(0));
}

function playerDisconnected(eim, player) {
    playerExit(eim, player);
    return 0;
}

function pauseTimer(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function playerDead(eim, player) { }

function monsterValue(eim, mobid) {
    amount = parseInt(amount) + 1;
    eim.broadcastPlayerMsg(-1, "彩蛋时刻：第 " + amount + " 彩蛋出现 ");
    if (parseInt(amount % parseInt(em.getProperty("mob_BOSS"))) == 0) {
        amount = amount + 1;
        var overrideStats = em.newMonsterStats();
        var monster = em.getMonster(monsterMob[5][1]);
        eim.registerMonster(monster);
        overrideStats.setOHp(10000000000);
        overrideStats.setOExp(expInformation);
        monster.getStats().setLevel(100);
        monster.setOverrideStats(overrideStats);
        eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point(mX - 1700, mY));
    }
    return 0;
}
function cancelSchedule() { }
function monsterKilled(eim, player, amount) { }
function allMonstersDead(eim) { }
function monsterDamaged(eim, player, mobid, damage) { }
function leftParty(eim, player) { }
function disbandParty(eim) { }
function onMapLoad(eim, player) { }
function monsterDrop(eim, player, mob) { }

function Exp(x) {
    switch (true) {
        case x < 100:
            expInformation = 500;
            break;
        case x > 100 && x < 200:
            expInformation = 1000;
            break;

        case x > 200 && x < 300:
            expInformation = 3000;
            break;

        case x > 300 && x < 400:
            expInformation = 4000;
            break;
        default:
            expInformation = 6666;
            break;
    }
    return expInformation;
}