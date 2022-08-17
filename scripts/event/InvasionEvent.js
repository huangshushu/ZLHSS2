/*
 * 新版次元入侵InvasionEvent
 * 2016年7月2日 09:28:08
 */

var setupTask;
var reSummonMobId = 2510200;//首先召唤，杀死之后再召唤所有怪物
var mobList = Array(8870001, 8870002, 8870003, 8870004, 2510133);//随机一个，每个30只。  一共120只。
var BossId = 9303084;//班·雷昂
var BossDrop = new Array(
        //物品ID，爆率，最小值，最大值
        new Array(4001547, 100, 1, 1)
        );//100必爆
var eim;
var phaseTime = 1000 * 60 * 1;//有1分钟的时间消灭召唤石

function init() {
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    eim = em.newInstance("InvasionEvent");
    var map = eim.setInstanceMap(940021000);
    map.resetFully();
    map.killAllMonsters(false);
    eim.startEventTimer(1000 * 15);//入场后有15秒的等候时间进行准备
    setupTask = em.schedule("reSummonMob", 1000 * 14, eim);//15秒后程序开始
    //提示部分
    em.setProperty("state", "1");//階段1
    return eim;
}
var Pos = Array(
        Array(2745, 28),
        Array(1999, -452),
        Array(3300, -452)
        );//怪物产生的坐标点。

function reSummonMob(eim) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(9900000, "InvasionShowEffect1");//開始特效
    }
    var map = eim.getMapInstance(0);
    //开始动画TODO
    //提示打掉召喚石，召喚怪物
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(9900000, "InvasionShowEffect");
    }
    eim.restartEventTimer(1000 * 60 * 5);//5分鐘的時間來消滅召喚石
    em.setProperty("state", (parseInt(em.getProperty("state")) + 1).toString());//階段1
    var mob = em.getMonster(reSummonMobId);
    var modified = em.newMonsterStats();
    modified.setOHp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2745, 28));
    eim.broadcastPlayerMsg(5, "STATS:" + em.getProperty("state"));
}

function SpawnWave(eim) {
    var map = eim.getMapInstance(0);
    //召唤石消失，召唤一大波怪物
    eim.restartEventTimer(1000 * 60 * 20);//20分鐘的時間來消滅怪物
    var map = eim.getMapInstance(0);
    for (var i = 0; i < 30; i++) {
        var mob = em.getMonster(mobList[Math.floor(Math.random() * mobList.length)]);
        var modified = em.newMonsterStats();
        modified.setOHp(1000000000);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(Pos[Math.floor(Math.random() * Pos.length)][0], Pos[Math.floor(Math.random() * Pos.length)][1]));
    }
    em.setProperty("state", (parseInt(em.getProperty("state")) + 1).toString());//階段1
}

function SpwanBoss(eim) {
    eim.restartEventTimer(1000 * 60 * 20);//20分鐘的時間來消滅怪物
    //一大波怪物消失，召喚BOSS
    em.setProperty("state", (parseInt(em.getProperty("state")) + 1).toString());//階段1
    var map = eim.getMapInstance(0);
    //召喚BOSS部分
    var mob = em.getMonster(BossId);
    var modified = em.newMonsterStats();
    modified.setOHp(20000000000);//100E
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2745, 28));
}

function allMonstersDead(eim) {
    eim.broadcastPlayerMsg(5, "STATS:" + em.getProperty("state"));
    switch (em.getProperty("state")) {
        case "2":
        case "5":
        case "8":
        case "11":
            SpawnWave(eim);
            break;
        case "3":
        case "6":
        case "9":
        case "12":
            SpwanBoss(eim);
            break;
        case "4":
        case "7":
        case "10":
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).openNpc(9900000, "InvasionReward");//碎片奖励NPC
            }
            eim.restartEventTimer(1000 * 15);//20分鐘的時間來消滅怪物
            setupTask = em.schedule("reSummonMob", 1000 * 14, eim);//15秒后程序开始

            break;
        case "13"://任務完成部分
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).openNpc(9900000, "InvasionFinish");//任务完成后的出场npc，包括奖励，增加战点
            }
            break;
    }//13最終
}


function monsterValue(eim, mobId) {
    return 1;
}


function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.openNpc(9020009, "InvasionShowNote");//顯示入場說明
}

function playerRevive(eim, player) {
    player.addHP(50);
    var map = eim.getMapFactoryMap(940021000);
    player.changeMap(map, map.getPortal(0));
    return true;
}


function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 940020000);
    em.setProperty("state", "0");
}

function changedMap(eim, player, mapid) {
    if (mapid != 940021000) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
        }
    }
}

function pickUpItem(eim, player, itemID) {
    if (itemID >= 4033602 && itemID <= 4033608) {
        player.dropMessage(-1, "获取了次元入侵手套碎片！通过入场NPC可以兑换相应手套喔~~~");
    }
}

function monsterDrop(eim, player, mob) {
    eim.broadcastPlayerMsg(5, "FUCK YOU");
    var mobid = mob.getId();
    player.dropMessage(-1, mobid);
    var toDrop = new Array();
    var pass = false;
    for (var i = 0; i < BossList.length; i++) {
        if (mobid == BossList[i]) {
            pass = true;
        }
    }
    if (!pass) {
        return;
    }

    for (var i = 0; i < BossDrop.length; i++) {
        var chance = Math.floor(Math.random() * 100);
        if (chance < BossDrop[i][1]) {
            var minQuantity = eim.getPlayerCount();//组队成员人数
            var maxQuantity = eim.getPlayerCount();//组队成员人数
            var quantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1) + minQuantity);
            toDrop.push(new Array(BossDrop[i][0], quantity)); //载入暴率数组
        }
    }
    for (var i = 0; i < toDrop.length; i++) {
        if (player.getMap() != null)
            player.getMap().spawnMobDrop(em.newItem(toDrop[i][0], 0, toDrop[i][1]), new java.awt.Point(mob.getTruePosition().getX() + 30 * i, mob.getTruePosition().getY()), mob, player, 0, 0);
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    if (eim.disposeIfPlayerBelow(100, 940020000)) {
        em.setProperty("state", "0");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 940020000)) {
        em.setProperty("state", "0");
    }
}

function clearPQ(eim) {
    end(eim);
}



function leftParty(eim, player) {
    if (eim.disposeIfPlayerBelow(100, 940020000)) {
        em.setProperty("state", "0");
    }
}
function disbandParty(eim) {
    if (eim.disposeIfPlayerBelow(100, 940020000)) {
        em.setProperty("state", "0");
    }
}
function playerDead(eim, player) {
}
function cancelSchedule() {
    //setupTask.cancel(true);
}
