/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：副本示例
 *  
 *  @Author Jackson 
 */

/* global em */

function init() {
    //初始化
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(chrID, mapID) {
    //开启新副本前 设置 
    //setup 这边有多种类型 根据实际情况使用 可以参照已写好的其他副本
    em.setProperty("leader", "true");
    // Setup the instance when invoked, EG : start PQ
    var eim = em.newInstance("PQ_Demo" + chrID);//创建分本实例

    eim.setProperty("mode", "3");//设置自定义配置项


    //createInstanceMap 为新建里一个地图实例  不会影响 该频道已有的地图
    //且当 副本完成后该地图实例会被清理

    var map = eim.createInstanceMap(925070000);

    //setInstanceMap 是把当前频道中的 某个地图加入 副本中 而不是 新建一个地图。
    eim.setInstanceMap(280030100).resetFully();

    //startEventTimer(int eventType, int timeType, long duration)
    //一般默认是使用 startEventTimer(long duration)
    eim.startEventTimer(15 * 60 * 1000);
    return eim;
}


function playerEntry(eim, player) {
    //注册玩家并进入到副本中 
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    //玩家切换地图时候进行处理
    var check = false;

    for (var i = 1; i <= 40; i++) {
        var checkID = 925070000 + (i * 100);
        if (checkID == mapid) {
            check = true;
            break;
        }
    }

    if (!check) {
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
    end(eim);
}

function allMonstersDead(eim) {
    //所有注册在事件里面的怪物都死亡后执行
}


function playerDead(eim, player) {
    // 玩家在副本中死亡后执行
}

function playerRevive(eim, player) {
    // 处理玩家死亡后复活
    // Happens when player's revived.
    // @Param : returns true/false
    return false;
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
    var str = eim.getProperty("returnMap");
    var returnMap = parseInt(str);
    eim.disposeIfPlayerBelow(100, returnMap);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}


