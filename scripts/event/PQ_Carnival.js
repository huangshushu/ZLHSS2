/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  @script:怪物嘉年华
 *  
 *  @Author:Jackson 
 */
/* global em, java */


function init() {
    //初始化
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(instanceID, level) {
    //开启新副本前 设置 
    //setup 这边有多种类型 根据实际情况使用 可以参照已写好的其他副本
    em.setProperty("leader", "true");
    // Setup the instance when invoked, EG : start PQ
    var eim = em.newInstance("PQ_Carnival" + instanceID);//创建分本实例
    eim.setProperty("kill", "0");
    //createInstanceMap 为新建里一个地图实例  不会影响 该频道已有的地图
    //且当 副本完成后该地图实例会被清理
    var map = eim.createInstanceMap(980001001);//战场
    map.resetFully(eim, level);
    //eim.setProperty("level", String(level));
    eim.createInstanceMap(980001002);//燃烧地 复活
    eim.createInstanceMap(980001003);//胜利的呐喊
    eim.createInstanceMap(980001004);//败者的风骨

    var returnMap = map.getForcedReturnMap();
    eim.setProperty("returnMap", String(returnMap));

    eim.startEventTimer(3, 1, 15 * 60 * 1000);
    return eim;
}


function playerEntry(eim, player) {
    //注册玩家并进入到副本中 
    var portalID = player.getTeam() == 0 ? 0 : 1;
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(portalID));
}

function changedMap(eim, player, mapid) {
    //玩家切换地图时候进行处理
    switch (mapid) {
        case 980001001:
        case 980001002:
        case 980001003:
        case 980001004:
            break;
        default:
            playerExit(eim, player);
    }
}

function playerExit(eim, player) {
    //移除玩家的时候执行
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function scheduledTimeout(eim) {
    //事件计时结束后执行
    //检测对战结果

}

function allMonstersDead(eim) {
    //所有注册在事件里面的怪物都死亡后执行
}


function playerDead(eim, player) {
    // 玩家在副本中死亡后执行
}

function playerRevive(eim, player) {
    // 处理玩家死亡后复活
    var map = eim.getMapInstance(1);
    player.modifyCarnivalPoint(-10);//死亡复活扣除CP点
    player.changeMap(map, map.getPortal(0));
    player.heal();
    return true;
}

function playerDisconnected(eim, player) {
    //玩家掉线后执行
    return 0;
    // return 0 - Deregister player normally Dispose instance if there are zero player left
    // return x that is > 0 - Deregister player normally + Dispose instance if there x player or below
    // return x that is < 0 - Deregister player normally + Dispose instance if there x player or below, if it's leader = boot all
}

function monsterValue(eim, mobid) {
    // 杀死注册的怪物时执行
    // Invoked when a monster that's registered has been killed
    // return x amount for this player - "Saved Points"
    return 1;
}

function leftParty(eim, player) {
    // 队员离开组队时执行
    // Happens when a player left the party
}

function disbandParty(eim, player) {
    // 解散队伍时执行
    // Happens when the party is disbanded by the leader.
}

function cancelSchedule() {
    //事件重新加载时执行
}

function pickupItem(eim, player, itemID) {
    //拾取道具时执行
    switch (itemID) {
        case 2022157:
            player.modifyCarnivalPoint(1);
            break;
        case 2022158:
            player.modifyCarnivalPoint(2);
            break;
        case 2022159:
            player.modifyCarnivalPoint(3);
            break;
    }
}

function monsterDamaged(eim, player, mobID, damage) {
    //攻击注册的怪物时执行
}

function monsterKilled(eim, player, mobID) {
    //杀死注册的怪物时执行
    var map = eim.getMapInstance(0);
    var kill = parseInt(eim.getProperty("kill"));
    switch (mobID) {
        case 10000://根据怪物的ID 获得CP点   可以设置BOSS的ID 然后杀死这个BOSS可以获取多少 CP点数  ID 请自行添加
            player.modifyCarnivalPoint(100);
            break;
        default://小怪
            kill = kill + 1;
            player.modifyCarnivalPoint(2);
            eim.setProperty("kill", String(kill));//计算当前共杀死多少小怪
            if (map != null) {
                switch (kill) {
                    case 100://当杀死5只小怪的时候 
                        var mob = em.getMonster(8150000);//召唤怪物
                        mob.setChangeHP(6500000000);//修改血量
                        mob.setForcedMobStat(220);//修改等级
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(player.getPosition()));
                        break;
                }
            }
            break;
    }
}

function clearPQ(eim) {
    //调用finishPQ时执行
    end(eim);
}

function makeCarnivalSpawn(eim, map, monster) {
    //怪物嘉年华 玩家使用CP点召唤怪物会调用此方法
    //此函数用于自定义被召唤的怪物的属性更改。可以更改血量，等级等。。。。
    //monster 可以设置 monster 的血量 change
    //eg. monster.setChangeHP(6500000000);
    //eg  monster.setForcedMobStat(220);
    var level = parseInt(eim.getProperty("level"));
    monster.setForcedMobStat(level);
    //monster.setChangeHP(monster.getHP() * (Math.max(level - monster.getLevel(), 1) * 100));
}

function end(eim) {
    // 此为自定义方法 不是务必存在的
    var str = eim.getProperty("returnMap");
    var returnMap = parseInt(str);
    eim.disposeIfPlayerBelow(100, returnMap);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

