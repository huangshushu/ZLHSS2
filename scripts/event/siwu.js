/*
 * 斯乌11关超级副本
 * 菜菜制作 奇幻冒险岛工作室所有
 * 联系QQ：537050710
 * 欢迎定制各种脚本 
 INSERT INTO `drop_data` (`id`, `dropperid`, `itemid`, `minimum_quantity`, `maximum_quantity`, `questid`, `chance`) VALUES (null, '8240089', '4009159', '1', '10', '0', '99999');
 INSERT INTO `drop_data` (`id`, `dropperid`, `itemid`, `minimum_quantity`, `maximum_quantity`, `questid`, `chance`) VALUES (null, '8240089', '4009160', '1', '5', '0', '99999');
 INSERT INTO `drop_data` (`id`, `dropperid`, `itemid`, `minimum_quantity`, `maximum_quantity`, `questid`, `chance`) VALUES (null, '8240090', '4009159', '5', '8', '0', '99999');
 INSERT INTO `drop_data` (`id`, `dropperid`, `itemid`, `minimum_quantity`, `maximum_quantity`, `questid`, `chance`) VALUES (null, '8240090', '4009160', '5', '8', '0', '99999');
 */

var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var MapList = Array(
        350050100, //黑色天堂拱门 - 进入通道1 10分钟
        350050200, //黑色天堂拱门 - 进入通道2 10分钟
        350050300, //电梯，之后出现怪物，消灭掉它们直接进入下一关 -162,-25|183,-25   |8250014
        350051000, //电梯到达 代码 D1 Z05 001
        350051050, //进入地图后消灭怪物，进入下一关 参考坐标 -66,61|314,61|634,61|1025,61|1349,61|950,-153
        350051100, //消灭怪物，获取证明：4009159，4009160 各50个进到第二个传送口，判断。
        350051150, //进来消除怪物，回到350051100，之后bh_1100_check1.js 判断是否350051150 没怪了，没怪的话允许前进！进入下一个地图
        350051200, //进来消除怪物，之后点击1540752，开放入口，之后NPC消失，允许前进，之后进入下一个地图
        350051250, //就是管道，之后直接破除障碍进入下一个地图
        350060000, //进入地图后消灭怪物，进入下一关
        350060160//BOSS地图
        );


function init() {
    em.setProperty("state", "0");
}

function setup(level, leaderid) {
    var eim = em.newInstance("siwu");
    for (var i = 0; i < MapList.length; i++) {
        var map = eim.setInstanceMap(MapList[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
        //map.respawn(false);
    }
    var map = eim.setInstanceMap(350050100);
    map.getPortal("in00").setScriptName("swpq1");//增加脚本传送，避免玩家意外传出副本
    map.getPortal("out00").setScriptName("swpq1next");//增加脚本传送，避免玩家意外传出副本
    var map = eim.setInstanceMap(350050200);
    map.getPortal("in00").setScriptName("swpq2");//增加脚本传送，避免玩家意外传出副本
    em.setProperty("state", "1");
    //第三关电梯陷阱刷怪
    for (var i = 0; i < 10; i++) {//刷10只
        mobid = 8230043;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(500000000);
        modified.setOMp(mob.getMobMaxMp() * 2);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(350050300);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-162, -25));
    }
    for (var i = 0; i < 10; i++) {//刷10只
        mobid = 8230043;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(500000000);
        modified.setOMp(mob.getMobMaxMp() * 2);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(350050300);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(183, -25));
    }
    //第四关怪物 每只怪1E血
    //-66,61|314,61|634,61|1025,61|1349,61|950,-153
    mobid = 8230043;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(350051050);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(950, -153));

    mobid = 8230043;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(350051050);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1349, 61));

    mobid = 8230043;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(350051050);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1025, 61));

    mobid = 8230043;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(350051050);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(634, 61));

    mobid = 8230043;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(350051050);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-66, 61));

    mobid = 8230043;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(350051050);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(314, 61));

    mobid = 8240096;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob1 = eim.getMapInstance(350051250);
    mapForMob1.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-104, 59));

    mobid = 8240096;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob2 = eim.getMapInstance(350051250);
    mapForMob2.spawnMonsterOnGroundBelow(mob, new java.awt.Point(145, 113));


    mobid = 8240096;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob3 = eim.getMapInstance(350051250);
    mapForMob3.spawnMonsterOnGroundBelow(mob, new java.awt.Point(290, 196));

    mobid = 8240096;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob4 = eim.getMapInstance(350051250);
    mapForMob4.spawnMonsterOnGroundBelow(mob, new java.awt.Point(458, 292));

    mobid = 8240096;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob5 = eim.getMapInstance(350051250);
    mapForMob5.spawnMonsterOnGroundBelow(mob, new java.awt.Point(619, 385));

    mobid = 8240096;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob6 = eim.getMapInstance(350051250);
    mapForMob6.spawnMonsterOnGroundBelow(mob, new java.awt.Point(830, 456));

    mobid = 8240096;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob7 = eim.getMapInstance(350051250);
    mapForMob7.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1170, 456));

    mobid = 8240096;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(350051250);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1449, 456));

    mobid = 8240091;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(300000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(350060000);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(747, 61));



    mobid = 8240097;////第一只斯乌 
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1000000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(350060160);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-9, -16));
    eim.startEventTimer(1000 * 60 * 15);//第一、二关有15分钟的时间
    //8240089 90
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.dropMessage(6, "[斯乌副本] 进入到了挑战地图，请小心行事。");
    player.changeMap(map, map.getPortal(0));
}

function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(1, "[斯乌副本] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 101050000);
}

function cancelSchedule() {
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
    /*var map = em.getMapFactory().getMap(101050000);
     if (map != null) {
     player.changeMap(map, map.getPortal(0));
     }
     eim.disposeIfPlayerBelow(100, 101050000);
     return false;
     */
    return false;
}


function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 350050100: //黑色天堂拱门 - 进入通道1
            em.setProperty("state", "1");
            var map = eim.getMapInstance(350050100);
            map.startMapEffect("前方高能预警！继续前进可能会有危险！让我来考验一下你吧！", 5120124);
            break;
        case 350050200: //黑色天堂拱门 - 进入通道2
            em.setProperty("state", "2");
            var map = eim.getMapInstance(350050200);
            map.startMapEffect("想不到你还能通过我的测验？哼哼……。那现在呢？", 5120124);
            eim.restartEventTimer(1000 * 60 * 10);//第二关有10分钟的时间
            break;
        case 350050300: //电梯，之后出现怪物，消灭掉它们直接进入下一关
            var map = eim.getMapInstance(350050300);
            map.startMapEffect("这里好像有黑暗气息，好像什么人混在了这里？", 5120124);
            em.setProperty("state", "3");
            eim.restartEventTimer(1000 * 60 * 10);//第三关有10分钟的时间
            break;
        case 350051000: //电梯到达 代码 D1 Z05 001
            em.setProperty("state", "4");
            var map = eim.getMapInstance(350051000);
            map.startMapEffect("黑暗力量越来越强大了，这里好像布满了危险……。", 5120124);
            eim.restartEventTimer(1000 * 60 * 45);//第四大关有45分钟的时间
            break;
        case 350051100: //电梯到达 代码 D1 Z05 001
            em.setProperty("state", "4");
            var map = eim.getMapInstance(350051100);
            map.startMapEffect("机械门坏了，请收集100个解体机零件之后交给队长吧！！", 5120124);
            eim.restartEventTimer(1000 * 60 * 45);//第四大关有45分钟的时间
            break;
        case 350051150: //电梯到达 代码 D1 Z05 001
            em.setProperty("state", "4");
            var map = eim.getMapInstance(350051150);
            map.startMapEffect("机械门坏了，请收集100个解体机零件之后交给队长吧！！", 5120124);
            break;
        case 350051200: //进来消除怪物，消灭到一定数量有能量条 能量条满了之后，之后点击1540752，开放入口，之后NPC消失，允许前进，之后进入下一个地图
            em.setProperty("state", "5");//100代表能量收集完成
            var map = eim.getMapInstance(350051200);
            map.startMapEffect("推动机好像坏掉了，快点去采集黑暗力量的能量吧！", 5120124);
            eim.restartEventTimer(1000 * 60 * 15);//第五大关有15分钟的时间
            break;
        case 350051250: //就是管道，之后直接破除障碍进入下一个地图
            em.setProperty("state", "6");
            var map = eim.getMapInstance(350051250);
            map.startMapEffect("好像有一道无形的墙壁阻挡着你的前进……。", 5120124);
            eim.restartEventTimer(1000 * 60 * 10);//第五大关有10分钟的时间
            break;
        case 350060000: //进入地图后消灭怪物，进入下一关
            em.setProperty("state", "7");
            var map = eim.getMapInstance(350060000);
            map.startMapEffect("好像有谁在这里？！", 5120124);
            eim.restartEventTimer(1000 * 60 * 8);//第五大关有8分钟的时间
            break;
        case 350060160://BOSS地图
            em.setProperty("state", "8");
            var map = eim.getMapInstance(350060160);
            map.startMapEffect("黑暗力量的爪牙……。好像培养胚里有什么动静？", 5120124);
            eim.restartEventTimer(1000 * 60 * 60);//第五大关有1小时的时间
            break;
    }

    switch (mapid) {
        case 350050200: //黑色天堂拱门 - 进入通道2
        case 350050100: //黑色天堂拱门 - 进入通道1
        case 350050300: //电梯，之后出现怪物，消灭掉它们直接进入下一关
        case 350051000: //电梯到达 代码 D1 Z05 001
        case 350051050: //进入地图后消灭怪物，进入下一关 参考坐标 -66,61|314,61|634,61|1025,61|1349,61|950,-153
        case 350051100: //无怪物，直接进入
        case 350051150: //进来消除怪物，回到350051100，之后bh_1100_check1.js 判断是否350051150 没怪了，没怪的话允许前进！进入下一个地图
        case 350051200: //进来消除怪物，消灭到一定数量有能量条 能量条满了之后，之后点击1540752，开放入口，之后NPC消失，允许前进，之后进入下一个地图
        case 350051250: //就是管道，之后直接破除障碍进入下一个地图
        case 350060000: //进入地图后消灭怪物，进入下一关
        case 350060160://BOSS地图
            return;
    }
    player.dropMessage(6, "[斯乌副本] 已退出挑战。");
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
    if (mobid == 8240104) {
        openNpc(eim, 9900000, 1);
        return 0;
    }
    if (mobid == 8240097) {//第二只只斯乌 
        mobid = 8240098;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(2000000000000);
        modified.setOMp(mob.getMobMaxMp() * 2);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob8 = eim.getMapInstance(350060160);
        mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-9, -16));
        return 0;
    }
    if (mobid == 8240098) {//第三只斯乌 规定
        mobid = 8240099;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(4000000000000);
        modified.setOMp(mob.getMobMaxMp() * 2);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob8 = eim.getMapInstance(350060160);
        mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-9, -16));
        return 0;
    }
    if (mobid == 8240099) {//斯乌死后，召唤NPC
        openNpc(eim, 1540446, 2);
        return 0;
    }
    if (eim.getMapFactory().getMap(350051200).getCharactersSize() != 0) {
        return 1;
    }
    if (eim.getMapFactory().getMap(350050300).getCharactersSize() != 0) {
        if (eim.getMapFactory().getMap(350050300).getAllMonstersThreadsafe().size() == 0) {
            openNpc(eim, 1540446, 1);//控制过关  那个allmonsterdead触发不了 只能用这个了 T.T
        }
    }
    if (eim.getMapFactory().getMap(350051050).getCharactersSize() != 0) {
        if (eim.getMapFactory().getMap(350051050).getAllMonstersThreadsafe().size() == 0) {
            openNpc(eim, 1540446, 1);//控制过关  那个allmonsterdead触发不了 只能用这个了 T.T
        }
    }

    if (eim.getMapFactory().getMap(350051100).getCharactersSize() != 0) {
        openNpc(eim, 1540446, 5);//monsterdrop 不能使用于地图原有的怪物，只能这样了T.T
    }
    if (eim.getMapFactory().getMap(350051150).getCharactersSize() != 0) {
        openNpc(eim, 1540446, 5);//monsterdrop 不能使用于地图原有的怪物，只能这样了T.T
    }

    if (eim.getMapFactory().getMap(350051250).getCharactersSize() != 0) {
        if (eim.getMapFactory().getMap(350051250).getAllMonstersThreadsafe().size() == 0) {
            openNpc(eim, 1540446, 1);//控制过关  那个allmonsterdead触发不了 只能用这个了 T.T
        }
    }

    if (eim.getMapFactory().getMap(350060000).getCharactersSize() != 0) {
        if (eim.getMapFactory().getMap(350060000).getAllMonstersThreadsafe().size() == 0) {
            openNpc(eim, 1540446, 1);//控制过关  那个allmonsterdead触发不了 只能用这个了 T.T
        }
    }
    return 0;
}

function monsterKilled(eim, player, cp) {
}

function allMonstersDead(eim) {
    // openNpc(eim, 1540446, 1);//控制过关
}

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
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