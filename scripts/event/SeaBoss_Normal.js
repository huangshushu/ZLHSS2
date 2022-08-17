/*
 * 深海龙王BOSS
 * 菜菜整理 奇幻冒险岛工作室所有
 * 联系QQ：537050710
 * 欢迎定制各种脚本
 */
var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var itemList = Array(
        Array(1432086, 300), // - 狮心长枪, 300), // - (无描述)
        Array(1302152, 300), // - 狮心弯刀, 300), // - (无描述)
        Array(1522018, 300), // - 龙翼巨弩枪, 300), // - (无描述)
        Array(1232014, 300), // - 狮心痛苦命运, 300), // - (无描述)
        Array(1322096, 300), // - 狮心震雷钉, 300), // - (无描述)
        Array(1402095, 300), // - 狮心战斗弯刀, 300), // - (无描述)
        Array(1372084, 300), // - 龙尾精灵短杖, 300), // - (无描述)
        Array(1382104, 300), // - 龙尾战斗长杖, 300), // - (无描述)
        Array(1212014, 300), // - 龙尾黑甲凶灵, 300), // - (无描述)
        Array(1452111, 300), // - 鹰翼组合弓, 300), // - (无描述)
        Array(1462099, 300), // - 鹰翼重弩, 300), // - (无描述)
        Array(1242042, 300), // - 渡鸦之魂女王意志之剑, 300), // - (无描述)
        Array(1332130, 300), // - 渡鸦之魂短刀, 300), // - (无描述)
        Array(1362019, 300), // - 渡鸦之魂真红手杖, 300), // - (无描述)
        Array(1482084, 300), // - 鲨齿巨鹰爪, 300), // - (无描述)
        Array(1492085, 300), // - 鲨齿锐利手铳, 300), // - (无描述)
        Array(1532018, 300), // - 鲨齿火焰炮, 300), // - (无描述)
        Array(1222014, 300), // - 鲨齿灵魂汲取者, 300), // - (无描述)
        Array(1242014, 300), // - 鲨齿女王意志之剑, 300), // - (无描述)
        Array(1052314, 300), // - 狮心战斗锁子甲, 300), // - (无描述)
        Array(1052315, 300), // - 龙尾法师长袍, 300), // - (无描述)
        Array(1052316, 300), // - 鹰翼哨兵服, 300), // - (无描述)
        Array(1052317, 300), // - 渡鸦之魂追踪者盔甲, 300), // - (无描述)
        Array(1052318, 300), // - 鲨齿船长外套, 300), // - (无描述)
        Array(1082296, 300), // - 龙尾法师手套, 300), // - (无描述)
        Array(1082297, 300), // - 鹰翼哨兵手套, 300), // - (无描述)
        Array(1082298, 300), // - 渡鸦之魂追踪者手套, 300), // - (无描述)
        Array(1082299, 300), // - 鲨齿船长手套, 300), // - (无描述)
        Array(1082295, 300), // - 狮心战斗护腕, 300), // - (无描述)
        Array(1152110, 300), // - 龙尾法师护肩, 300), // - (无描述)
        Array(1152111, 300), // - 鹰翼哨兵护肩, 300), // - (无描述)
        Array(1152112, 300), // - 渡鸦之魂猎人护肩, 300), // - (无描述)
        Array(1152113, 300), // - 鲨齿船长护肩, 300), // - (无描述)
        Array(1152108, 300), // - 狮心战斗护肩, 300), // - (无描述)
        Array(1102275, 300), // - 狮心战斗披风, 300), // - (无描述)
        Array(1102276, 300), // - 龙尾法师披风, 300), // - (无描述)
        Array(1102277, 300), // - 鹰翼哨兵披风, 300), // - (无描述)
        Array(1102278, 300), // - 渡鸦之魂猎人披风, 300), // - (无描述)
        Array(1102279, 300), // - 鲨齿船长披风, 300), // - (无描述)
        Array(1003172, 300), // - 狮心战斗头盔, 300), // - (无描述)
        Array(1003173, 300), // - 龙尾法师帽子, 300), // - (无描述)
        Array(1003174, 300), // - 鹰翼哨兵便帽, 300), // - (无描述)
        Array(1003175, 300), // - 渡鸦之魂追踪者帽, 300), // - (无描述)
        Array(1003176, 300), // - 鲨齿船长帽, 300), // - (无描述)
        Array(1072485, 300), // - 狮心战斗鞋, 300), // - (无描述)
        Array(1072486, 300), // - 龙尾法师鞋, 300), // - (无描述)
        Array(1072487, 300), // - 鹰翼哨兵鞋, 300), // - (无描述)
        Array(1072488, 300), // - 渡鸦之魂追踪者鞋, 300), // - (无描述)
        Array(1072489, 300) // - 鲨齿船长鞋, 300), // - (无描述)
        );
function init() {
    em.setProperty("state", "0");
}


function setup(level, leaderid) {
    var eim = em.newInstance("SeaBoss_Normal");
    eim.setInstanceMap(209000011).resetPQ(level);
    var map = eim.setInstanceMap(209000011);
    map.resetFully();
    map.killAllMonsters(true);
    map.respawn(false);

    //mobid = 9390859;//浅蓝色海龙
    mobid = 9390804;//深蓝色海龙
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 400);
    modified.setOMp(mob.getMobMaxMp() * 300);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob1 = eim.getMapInstance(209000011);
    mapForMob1.spawnMonsterOnGroundBelow(mob, new java.awt.Point(273, 153));
    eim.startEventTimer(1000 * 60 * 5);
    em.setProperty("state", "1");
    return eim;
}


function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.dropMessage(6, "[深海霸主] 进入到了挑战地图，请小心行事。");
    player.changeMap(map, map.getPortal(0));
    map.startMapEffect("[航海中的危机] 深海霸主-海龙王出现了！！大家齐心协力消灭它吧！", 5120025);
}


function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(1, "[深海霸主] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 101050000);
}

function cancelSchedule() {
}


function playerDead(eim, player) {
}

function playerRevive(eim, player) {
    var map = em.getMapFactory().getMap(101050000);
    if (map != null) {
        player.changeMap(map, map.getPortal(0));
    }
    eim.disposeIfPlayerBelow(100, 101050000);
    return false;
}


function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 209000011:
            return;
    }

    player.dropMessage(6, "[深海霸主] 已退出挑战。");
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
    if (eim.getPlayerCount() <= 1) {
        eim.disposeIfPlayerBelow(100, 101050000);
        if (setupTask != null)
            setupTask.cancel(true);
        eim.dispose();
    }
    return 0;
}


function monsterValue(eim, mobid) {
    if (mobid == 9390804) {
        if (em.getProperty("state").equals("1")) {
            eim.setProperty("giftcount", "0");
            roll(eim);
            eim.startEventTimer(1000 * 60 * 5);
            eim.broadcastPlayerMsg(6, "[深海龙王副本] 10秒后开启宝箱，掷点时请勿进行其他操作，并且需要在10秒钟内做出需求选择，否则将会被强制下线。");
            var map = eim.getMapInstance(209000011);
            map.startMapEffect("[深海龙王副本] 深海龙王已被击败，10秒后将开出宝箱。", 5120059);
            return;
        }
    }
    return 1;
}


function monsterKilled(eim, player, cp) {
}


function allMonstersDead(eim) {
}

function roll(eim) {
    MaxRandom = 0;
    var count = eim.getProperty("giftcount");
    var rewardPlayer = null;
    //第二次开始,统计上一次ROLL点玩家结果，并发放奖励。
    if ((count * 1) >= 1) {
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            var charName = eim.getPlayers().get(i).getName();
            var charId = eim.getPlayers().get(i).getId();
            //推送ROLL点信息
            for (var j = 0; j < eim.getPlayerCount(); j++) {
                var notice = "[深海龙王副本] 玩家 " + charName + " 掷出了 " + eim.getProperty("charid_" + charId) + "点";
                if ((eim.getProperty("charid_" + charId) * 1) == 0) {
                    notice = "[深海龙王副本] 玩家 " + charName + " 放弃了掷点";
                }
                eim.getPlayers().get(j).dropMessage(6, notice);
            }
            //不断重置最大值
            if ((eim.getProperty("charid_" + charId) * 1) > MaxRandom) {
                MaxRandom = eim.getProperty("charid_" + charId);
                //置换玩家名称
                eim.setProperty("rewardplayer", charName);
                //置换玩家ID
                eim.setProperty("rewardplayerid", charId);
            }
        }
        for (var j = 0; j < eim.getPlayerCount(); j++) {
            //操作NPC 发放奖励
            eim.getPlayers().get(j).openNpc(1052008, "roll");
        }
    }
    for (var j = 0; j < eim.getPlayerCount(); j++) {
        //重置所有玩家ROLL点点数为零
        eim.setProperty("charid_" + eim.getPlayers().get(j).getId(), "0");
    }
    //次数+1
    eim.setProperty("giftcount", (count * 1 + 1));
    //重新读入次数
    count = eim.getProperty("giftcount");
    count = (count * 1);
    //退出战场
    if ((count * 1) > 10) {
        EndThisBattle(eim);
        return;
    }
    //创建几率
    var chance = Math.floor(Math.random() * 300);
    //最终物品列表
    var finalItemList = Array();
    for (var m = 0; m < itemList.length; m++) {
        if (itemList[m][1] >= chance) {
            finalItemList.push(itemList[m][0]);
        }
    }
    var currentItem = finalItemList[Math.floor(Math.random() * finalItemList.length)];
    switch (count) {
        case 8:
        case 9:
        case 10:
            currentItem = 4310156;
            break;
    }
    eim.setProperty("rewarditem", currentItem);
    //延迟10秒打开ROLL点NPC
    setupTask = em.schedule("openRollNpc", 1000 * 10 * 1, eim);
}

function openRollNpc(eim) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(1052008,"roll1");
    }
    //10秒后继续ROLL点
    setupTask = em.schedule("roll", 1000 * 10 * 1, eim);
}
function EndThisBattle(eim) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1, "[深海霸主] 挑战成功！");
    }
    //em.broadcastYellowMsg("[深海霸主] 挑战结束");
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 101050000);
    if (setupTask != null)
        setupTask.cancel(true);
    eim.dispose();
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