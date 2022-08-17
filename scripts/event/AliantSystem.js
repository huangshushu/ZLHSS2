
/*  
 *  
 *  功能：阿里安特竞技场
 *  
 */
var MobList =
        Array(
                2600422, // - 强化防御系统
                2600421, // - 防御系统
                2600423, // - AF型智能机器人
                2600424, // - 出故障的DF型智能机器人
                2600418, // - 矿石吞噬者
                9500618, // - 黑色比恩宝宝
                9500617, // - 绿色比恩宝宝
                9500614 // - 红色比恩宝宝
                );
var MobBossList =
        Array(
                7220001, // - 九尾狐
                6300005, // - 僵尸蘑菇王
                2220000, // - 红蜗牛王
                3220000, // - 树妖王
                9303085, // - 伟大的班?雷昂
                6130101, // - 蘑菇王
                8220007, // - 蓝蘑菇王
                9600009 // - 大王蜈蚣
                );

var mobid;
var mob;
var modified;


function init() {
    em.setProperty("FriendlyTips", "0");
    em.setProperty("playing", "false");
}


function setup() {
    var eim = em.newInstance("AliantSystem");
    var map = eim.setInstanceMap(980010101);
    //map.resetFully();
    //map.killAllMonsters(true);
    map.respawn(false);
    eim.startEventTimer(1000 * 60 * 6);//缩短为5分钟
    em.setProperty("FriendlyTips", "0");
    em.setProperty("playing", "true");
    openMessageBoxInBattle(eim);

    //开始的时候先召唤5只高级怪
    for (var i = 0; i < 15; i++) {
        mobid = MobList[Math.floor(Math.random() * MobList.length)];
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(500000);
        modified.setOMp(mob.getMobMaxMp());
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(980010101);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-328, -85));
    }
    //em.schedule("EndThisBattle", 13250000, eim);// 4m50s
    return eim;
}


function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.dropMessage(6, "[阿里安特竞技场] 进入到了挑战地图。");
    player.changeMap(map, map.getPortal(0));
    player.openNpc(2101014);
}


function scheduledTimeout(eim) {
    finish();
    eim.broadcastPlayerMsg(1, "[阿里安特竞技场] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 910000000);
}

function cancelSchedule() {
}


function playerDead(eim, player) {
}




function playerRevive(eim, player) {
    var map = em.getMapFactoryMap(910000000);
    if (map != null) {
        player.changeMap(map, map.getPortal(0));
    }
    eim.disposeIfPlayerBelow(100, 910000000);
    return false;
}


function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 980010100:
        case 980010101:
            return;
    }
    player.dropMessage(6, "[阿里安特竞技场] 已退出挑战。");
    eim.dispose();
    if (eim.getPlayerCount() <= 0) {
        eim.disposeIfPlayerBelow(100, 910000000);
    }
}


function playerExit(eim, player) {
    eim.disposeIfPlayerBelow(100, 910000000);
}



function playerDisconnected(eim, player) {
    if (eim.getPlayerCount() <= 1) {
        eim.disposeIfPlayerBelow(100, 910000000);
        eim.dispose();
    }
    return 0;
}


function monsterValue(eim, mobid) {
    return 1;
}


function monsterKilled(eim, player, cp) {
}


function allMonstersDead(eim) {
    for (var i = 0; i < 5; i++) {
        mobid = MobList[Math.floor(Math.random() * MobList.length)];
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(500000);
        modified.setOMp(mob.getMobMaxMp());
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(980010101);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-328, -85));
    }
    for (var i = 0; i < 5; i++) {
        mobid = MobList[Math.floor(Math.random() * MobList.length)];
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(500000);
        modified.setOMp(mob.getMobMaxMp());
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(980010101);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-691, 95));
    }
    for (var i = 0; i < 5; i++) {
        mobid = MobList[Math.floor(Math.random() * MobList.length)];
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(500000);
        modified.setOMp(mob.getMobMaxMp());
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(980010101);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-832, 275));
    }
    mobid = MobBossList[Math.floor(Math.random() * MobList.length)];
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(5000000);
    modified.setOMp(mob.getMobMaxMp());
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(980010101);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-311, 275));
}


function monsterDamaged(eim, player, mobid, damage) {
}


function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 910000000);
}


function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
}


function onMapLoad(eim, player) {
}

function finish() {
    em.setProperty("playing", "false");
}

function openMessageBoxInBattle(eim) {
    var map = eim.setInstanceMap(980010101)
    if (em.getProperty("FriendlyTips") == "0") {
        map.startMapEffect("[阿里安特竞技场] 竞技场的战斗已经开始了! 请赶快消灭怪物吧!", 5120026);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场] 竞技场的战斗已经开始了! 请赶快消灭怪物吧!");
        }
        em.setProperty("FriendlyTips", "1");
        em.schedule("openMessageBoxInBattle", 1000 * 60 * 1, eim);
    } else if (em.getProperty("FriendlyTips") == "1") {
        map.startMapEffect("[阿里安特竞技场] 干的不错！消灭越多的怪物得到的奖励也就越丰厚！", 5120026);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场]  干的不错！消灭越多的怪物得到的奖励也就越丰厚！");
        }
        em.setProperty("FriendlyTips", "2");
        em.schedule("openMessageBoxInBattle", 1000 * 60 * 1, eim);
    } else if (em.getProperty("FriendlyTips") == "2") {
        map.startMapEffect("[阿里安特竞技场] 如果不努力一点的话。到最后可是什么奖励都没有。", 5120026);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场]  如果不努力一点的话。到最后可是什么奖励都没有。");
        }
        em.setProperty("FriendlyTips", "3");
        em.schedule("openMessageBoxInBattle", 1000 * 60 * 1, eim);
    } else if (em.getProperty("FriendlyTips") == "3") {
        map.startMapEffect("[阿里安特竞技场] 中途退出战役的话，就不能领取到任何的奖励。", 5120026);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场] 中途退出战役的话，就不能领取到任何的奖励。");
        }
        em.setProperty("FriendlyTips", "4");
        em.schedule("openMessageBoxInBattle", 1000 * 60 * 1, eim);
        /*} else if (em.getProperty("FriendlyTips") == "4") {
         map.startMapEffect("[阿里安特竞技场] 战役考验就要结束了！再努力加把劲！！", 5120026);
         for (var i = 0; i < eim.getPlayerCount(); i++) {
         eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场] 战役考验就要结束了！再努力加把劲！！");
         }
         em.setProperty("FriendlyTips", "5");
         em.schedule("openMessageBoxInBattle", 1000 * 60 * 1, eim);
         } else if (em.getProperty("FriendlyTips") == "5") {
         map.startMapEffect("[阿里安特竞技场] 战役结束后，将会自动报告战役结果。", 5120026);
         for (var i = 0; i < eim.getPlayerCount(); i++) {
         eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场] 战役结束后，将会自动报告战役结果。");
         }
         em.setProperty("FriendlyTips", "6");
         em.schedule("openMessageBoxInBattle", 1000 * 60 * 1, eim);
         } else if (em.getProperty("FriendlyTips") == "6") {
         map.startMapEffect("[阿里安特竞技场] 还有4分钟！！坚持就是胜利！！", 5120026);
         for (var i = 0; i < eim.getPlayerCount(); i++) {
         eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场] 还有4分钟！！坚持就是胜利！！");
         }
         em.setProperty("FriendlyTips", "7");
         em.schedule("openMessageBoxInBattle", 1000 * 60 * 1, eim);
         } else if (em.getProperty("FriendlyTips") == "7") {
         map.startMapEffect("[阿里安特竞技场] 还有3分钟！胜利是属于你的！", 5120026);
         for (var i = 0; i < eim.getPlayerCount(); i++) {
         eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场] 还有3分钟！胜利是属于你的！");
         }
         em.setProperty("FriendlyTips", "8");
         em.schedule("openMessageBoxInBattle", 1000 * 60 * 1, eim);
         } else if (em.getProperty("FriendlyTips") == "8") {
         map.startMapEffect("[阿里安特竞技场] 还有2分钟！", 5120026);
         for (var i = 0; i < eim.getPlayerCount(); i++) {
         eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场] 还有2分钟！");
         }
         em.setProperty("FriendlyTips", "9");
         em.schedule("openMessageBoxInBattle", 1000 * 60 * 1, eim);*/
    } else if (em.getProperty("FriendlyTips") == "4") {
        map.startMapEffect("[阿里安特竞技场] 还有1分钟就结束战役了，请大家抓紧时间。", 5120026);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场] 还有1分钟就结束战役了，请大家抓紧时间。");
        }
        em.setProperty("FriendlyTips", "5");
        //em.schedule("openMessageBoxInBattle", 1000 * 55 * 1, eim);
        em.schedule("openMessageBoxInBattle", 1000 * 55 * 1, eim);
    } else if (em.getProperty("FriendlyTips") == "5") {
        EndThisBattle(eim)
    }
}

function EndThisBattle(eim) {
    em.setProperty("FriendlyTips", "done");
    em.setProperty("PlayerCount", "" + eim.getPlayerCount() + "");
    var map = eim.setInstanceMap(980010100)
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
        map.startMapEffect("[阿里安特竞技场] 现在公布结果，1分钟后自动离开此地图。", 5120026);
        eim.getPlayers().get(i).dropMessage(6, "[阿里安特竞技场] 现在公布结果，1分钟后自动离开此地图。");
        eim.getPlayers().get(i).openNpc(2101017);
    }
    eim.startEventTimer(1000 * 60 * 1);
}
function monsterDrop(eim, player, mob) {
}
function pickUpItem(eim, player, itemID) {
}