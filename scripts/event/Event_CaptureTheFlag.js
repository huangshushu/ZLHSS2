/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能:跑旗赛
 *  
 *  @Author Jackson 
 */

/* global em, java */

var setupTask;
var setupTask9;
var eim;
var map;
var minPlayers = 1;
var cal;
var readyMap, startMap, endMap;

function init() {
    scheduleNew();
}

/*
 932200001 - 跑旗赛 - 正午雪原：准备地图
 932200002 - 跑旗赛 - 正午雪原：退出地图
 932200003 - 跑旗赛 - 夕阳雪原：准备地图
 932200004 - 跑旗赛 - 夕阳雪原：退出地图
 932200005 - 跑旗赛 - 深夜雪原：准备地图
 932200006 - 跑旗赛 - 深夜雪原：退出地图
 
 932200100 - 跑旗赛 - 正午雪原  12点 
 932200200 - 跑旗赛 - 夕阳雪原  19点
 932200300 - 跑旗赛 - 深夜雪原  21点
 */

function ResetProperty() {
    em.setProperty("state", "0");
    em.setProperty("rank", "0");
}

function refreshDates(calendar) {
    year = calendar.get(java.util.Calendar.YEAR);
    month = calendar.get(java.util.Calendar.MONTH) + 1;
    if (Math.floor(month / 10) == 0) {
        month = "0" + month;
    }
    day = calendar.get(java.util.Calendar.DATE);
    if (Math.floor(day / 10) == 0) {
        day = "0" + day;
    }
}

function scheduleNew() {
    ResetProperty();
    var open = false;
    cal = java.util.Calendar.getInstance();
    hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    min = cal.get(java.util.Calendar.MINUTE);
    refreshDates(cal);
    if (hour < 12) {
        date = year + "-" + month + "-" + day + " 01:25:00.0";
        readyMap = 932200001;
        startMap = 932200100;
        endMap = 932200002;
    } else if (hour == 01 && min == 25) {
        open = true;
        readyMap = 932200001;
        startMap = 932200100;
        endMap = 932200002;
    } else if (hour < 19) {
        date = year + "-" + month + "-" + day + " 19:00:00.0";
        readyMap = 932200003;
        startMap = 932200200;
        endMap = 932200004;
    } else if (hour == 19 && min == 00) {
        open = true;
        readyMap = 932200003;
        startMap = 932200200;
        endMap = 932200004;
    } else if (hour < 21) {
        date = year + "-" + month + "-" + day + " 21:00:00.0";
        readyMap = 932200005;
        startMap = 932200300;
        endMap = 932200006;
    } else if (hour == 21 && min == 00) {
        open = true;
        readyMap = 932200005;
        startMap = 932200300;
        endMap = 932200006;
    } else {
        cal.add(java.util.Calendar.DATE, 1);
        refreshDates(cal);
        date = year + "-" + month + "-" + day + " 12:00:00.0";
        readyMap = 932200001;
        startMap = 932200100;
        endMap = 932200002;
    }

    if (open == true) {
        newopen();
        em.setProperty("rank", "0");
    } else {
        timeStamp = java.sql.Timestamp.valueOf(date).getTime();
        setupTask = em.scheduleAtTimestamp("newopen", timeStamp);
        em.broadcastNoticeWithoutPrefix("[家族跑旗活动] 活动将在" + date + "开始，希望大家积极参加。");
        em.setProperty("rank", "0");
    }
}


function newopen() {
    if (em.getProperty("state").equals("0")) {
        em.getProperties().clear();
        em.startInstance();
        eim.setInstanceMap(readyMap);
        eim.setInstanceMap(startMap);
        em.broadcastNoticeWithoutPrefix("[跑旗赛] 家族跑旗活动已经在频道2开放，有兴趣的玩家可以通过游戏中心进入,希望大家积极参加,奖励丰厚!");
    }
}


function setup() {
    eim = em.newInstance("Event_CaptureTheFlag");
    em.setProperty("state", "1");
    em.setProperty("rank", "0");
    eim.startEventTimer(3 * 60 * 1000); // 等待 3 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}


function scheduledTimeout(eim) {
    //事件实例计时完毕
    if (em.getProperty("state").equals("1")) {
        //进行检测实例人数
        if (eim.getPlayerCount() >= minPlayers) {
            //人数符合最小人数 开始进行传送到下一阶段
            readyGame(eim);
        } else {
            //人数不符合 所有玩家传送到退出地图
            eim.getMapInstance(0).startMapEffect("活动人数少于" + minPlayers + "人，活动将不进行！", 5121050);
            //不进行活动,进行下次活动计时。
            end(eim);
        }
    } else if (em.getProperty("state").equals("3")) {
        //活动计时结束 进行奖励 排名统计  
        eim.getMapInstance(1).startMapEffect("时间到!跑旗赛活动结束啦，请玩家在下次活动开启前领取奖励！否则无奖励", 5121050);
        em.setProperty("state", "4");
        eim.startEventTimer(10 * 1000);
    } else if (em.getProperty("state").equals("4")) {
        end(eim);
    } else {
        end(eim);
    }
}

function readyGame(eim) {
    //人数符合  开始进行跑旗赛
    em.setProperty("state", "2");
    eim.schedule("warpNext", 100);
    eim.schedule("startGame", 3000);
}

function startGame(eim) {
    em.setProperty("state", "3");
    eim.startEventTimer(8 * 60 * 1000); //  8分钟游戏时间
    em.broadcastNoticeWithoutPrefix("[跑旗赛] 跑旗赛开始进行啦！");
}

function warpNext(eim) {
    var map = eim.getMapInstance(1);
    if (map != null) {
        for (i = 0; i < eim.getPlayers().size(); i++) {
            eim.getPlayers().get(i).startMapTimeLimitTask(1, map);
        }
        map.showScreenEffect("defense/count");
    }
}

function changedMap(eim, player, mapid) {
    if (mapid != readyMap && mapid != startMap) {
        eim.unregisterPlayer(player);
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, endMap);
    em.setProperty("state", "0");
    //开始执行新的计时
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}

function clearPQ(eim) {
    em.setProperty("rank", "0");
    em.setProperty("state", "0");
    scheduledTimeout(eim);
}


function playerRevive(eim, player) {
    return false;
}
function allMonstersDead(eim) {}
function playerDisconnected(eim, player) {
    return 0;
}
function playerExit(eim, player) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}

function pickupItem(eim, player, itemID) {
    //拾取道具时执行
}

function monsterDamaged(eim, player, mobID, damage) {
    //攻击注册的怪物时执行
}

function monsterKilled(eim, player, mobID) {
    //杀死注册的怪物时执行
}