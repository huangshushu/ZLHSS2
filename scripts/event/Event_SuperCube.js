/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：超空间魔方
 *  
 *  @Author Jackson 
 */

/* global em */

var MobList = Array(
        9303095, // - 伟大的阿卡伊勒
        9303092, // - 伟大的希纳斯
        9303087, // - 伟大的品克缤
        9303085, // - 伟大的班·雷昂
        9303083, // - 伟大的蝙蝠怪
        9303103, // - 伟大的毛莫
        9303104, // - 迷你毛莫战士
        9303105, // - 迷你毛莫魔法师
        9303106, // - 迷你毛莫弓箭手
        9303107, // - 迷你毛莫飞侠
        9303090,
        9303087,
        //9303101,
        9303108// - 迷你毛莫海盗
        );

function init() {
    //初始化
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(chrID) {
    //开启新副本实例
    var eim = em.newInstance("Event_SuperCube" + chrID);
    em.setProperty("state", "1");
    eim.setProperty("Start", "0");

    for (var i = 0; i < 10; i++) {
        eim.createInstanceMap(867110050 + (i * 50));
    }

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function warpNext(eim) {
    var map;
    var size = eim.getPlayers().size()
    var nextIndex = Math.floor(Math.random() * 9) + 1;
    eim.setProperty("Start", "0");
    eim.startEventTimer(3 * 60 * 1000);
    for (var i = 0; i < size; i++) {
        map = eim.getMapInstance(nextIndex);
        map.resetFully();
        eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
    }
}

function SpwnMobForPlayer(eim) {
    var map = eim.getMapInstance(0);//获得副本第一个地图
    var GiftTimes = parseInt(eim.getProperty("GiftTimes"));
    var Times = parseInt(eim.getProperty("Times"));
    if (GiftTimes != 0) {
        var players = eim.getPlayers().iterator(); //获取副本里的所有玩家实例 List
        while (players.hasNext()) {
            var player = players.next();
            if ((GiftTimes % 10) == 0) {
                eim.setProperty("Gift", "true");
                player.openNpc(2060103, "UnlimitedFire_Done");//需要处理
            }
        }
        eim.startEventTimer(1000 * 60 * 1);//1 min 重置时间 -> 设置的时间是 1分钟
        eim.broadcastPlayerMsg(-1, "[无限战斗] 现在是第" + (Times + 1) + "关！ 你有1分钟的时间消灭怪物! ");
    }
    var mobid = MobList[Math.floor(Math.random() * MobList.length)];//随机获取BOSS MobID
    var mob = em.getMonster(mobid);//获取一个新的怪物实例
    mob.setForcedMobStat(200);//设置怪物的等级
    if (Times <= 10) {
        mob.setChangeHP(100000 + (Times * 2000000000));//设置改变怪物的HP量
    } else if (Times > 10 && Times <= 30) {
        mob.setChangeHP(100000 + (Times * 3000000000));//设置改变怪物的HP量
    } else if (Times > 30 && Times <= 50) {
        mob.setChangeHP(100000 + (Times * 4000000000));//设置改变怪物的HP量
    } else {
        mob.setChangeHP(100000 + (Times * 6000000000));//设置改变怪物的HP量
    }
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(490, 152));//在地图某一个点召唤生成的怪物
}

function playerDead(eim, player) {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    eim.disposeIfPlayerBelow(100, 867110001);
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    eim.disposeIfPlayerBelow(100, 867110001);
}

function changedMap(eim, player, mapid) {
    var index = Math.floor(mapid % 1000 / 50);
    if (Math.floor(mapid / 1000) == 867110 && index > 0) {
        return;
    }
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    eim.unregisterPlayer(player);
}

function playerDisconnected(eim, player) {
    return 0;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    playerExit(eim, player);
}

function disbandParty(eim) {//组队解散后果
    em.setProperty("started", "false");
    em.setProperty("Times", "0");
    eim.disposeIfPlayerBelow(100, 867110001);
}

function playerExit(eim, player) {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(867110001);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ(eim) {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    eim.disposeIfPlayerBelow(100, 867110001);
}

function allMonstersDead(eim) {
    /*var players = eim.getPlayers().iterator();
     while (players.hasNext()) {
     var player = players.next();
     player.openNpc(2060103, "UnlimitedFire_Done");
     }
     var Times = parseInt(eim.getProperty("Times")) + 1;
     eim.setProperty("Times", String(Times));
     var GiftTimes = parseInt(eim.getProperty("GiftTimes")) + 1;
     eim.setProperty("GiftTimes", String(GiftTimes));
     eim.broadcastPlayerMsg(-1, "[无限战斗] 消灭了怪物！请等待4秒进入下一关！");
     eim.schedule("SpwnMobForPlayer", 1000 * 4);//4秒后 重新召唤
     */
}

function scheduledTimeout(eim) {
    //事件计时结束后执行
    end(eim);
}

function monsterDrop(eim, player, mob) {
}
function monsterValue(eim, mobId) {
    return 1;
}

function pickupItem(eim, player, itemID) {
    //拾取道具时执行
}

function monsterDamaged(eim, player, mobID, damage) {
    //攻击注册的怪物时执行
}

function monsterKilled(eim, player, mobID) {
    //杀死注册的怪物时执行
}

function clearPQ(eim) {
    //调用finishPQ时执行
    end(eim);
}

function end(eim) {
    // 此为自定义方法 不是务必存在的
    eim.disposeIfPlayerBelow(100, 867110001);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function cancelSchedule() {
}


