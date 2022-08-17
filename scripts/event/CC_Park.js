/* This is mada by Care

 * 简化 凯梅尔兹 - 航海王

 * global em

 * 脚本定制 技术支持 游戏顾问 50009219

 */

var char_ID, Attribute
function init() {
    /* 初始化 */
    em.setProperty("state", "0")
    em.setProperty("leader", "true")
}

function setup(eim, CharID) {
    /* 开启副本前设置 */
    em.setProperty("state", "1")
    em.setProperty("leader", "false")
    /* 创建分本实例 */
    var eim = em.newInstance("CC_Park" + CharID)
    char_ID = CharID
    /* 写入副本状态 */
    eim.setProperty("stage", "1")
    /* 新建个地图实例 完成副本将重置实例 */
    eim.createInstanceMap(706020000).resetFully()

    /* 退出副本地图 */
    eim.setProperty("returnMap", "706020100");
    /* 时间线程 */
    eim.schedule("navigation", 1000)
    eim.startEventTimer(30 * 60 * 1000);
    return eim
}

function navigation(eim) {
    var map = eim.getMapInstance(0);
    eim.broadcastWeatherEffectNotice("[ 天空庭院 ] 这里可是福利聚集地 别错过每一分钟 多刷一些金币来我这里兑换好东西噢.", 15, 5000);
}

function stageClear(eim, stage) {
    eim.setProperty("stage" + stage, "clear");
}


function playerEntry(eim, player) {
    //注册玩家并进入到副本中 
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}


function changedMap(eim, player, mapid) {
    //玩家切换地图时候进行处理
    var check = false;
    var checkID = 706020000;
    if (checkID == mapid) {
        check = true;
    }
    if (!check) {
        playerExit(eim, player);
    }
}

function playerExit(eim, player) {
    //移除玩家的时候执行
    eim.unregisterPlayer(player);
    eim.getMapInstance(0).killAllMonsters(true);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function scheduledTimeout(eim) {
    end(eim);
}

function allMonstersDead(eim) {
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
    em.setProperty("state", "0")
    em.setProperty("leader", "true")
    //事件重新加载时执行
}

function pickUpItem(eim, player, itemID) {
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
    eim.getMapInstance(0).killAllMonsters(true);
    eim.disposeIfPlayerBelow(100, returnMap);
	//openNpc(eim,9390244,"hhjl");
    em.setProperty("state", "0");
    em.setProperty("leader", "true");

}