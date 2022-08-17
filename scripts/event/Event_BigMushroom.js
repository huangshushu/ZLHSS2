/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能:巨大蘑菇活动
 *  
 *  @Author Jackson 
 */

/* global em, java */

var setupTask;
var setupTask9;
var eim;
var map;
var minPlayers = 3;
var cal;
var readyMap = 706030100;
var startMap = 706030200;
var endMap = 706030300;

function init() {
    scheduleNew();
}

/*
 706030100 - 巨大蘑菇活动 - 活动等候地图
 706030200 - 巨大蘑菇活动 - 射手村北部森林
 706030201 - 巨大蘑菇活动 - 射手村北部森林
 706030202 - 巨大蘑菇活动 - 射手村北部森林
 706030203 - 巨大蘑菇活动 - 射手村北部森林
 706030204 - 巨大蘑菇活动 - 射手村北部森林
 706030300 - 巨大蘑菇活动 - 活动退出地图
 
 9601004 - BIG蘑菇王
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
    if (hour < 10) {
        date = year + "-" + month + "-" + day + " 10:00:00.0";
    } else if (hour == 10 && min == 00) {
        open = true;
    } else if (hour < 16) {
        date = year + "-" + month + "-" + day + " 16:00:00.0";
    } else if (hour == 16 && min == 00) {
        open = true;
    } else if (hour < 22) {
        date = year + "-" + month + "-" + day + " 22:00:00.0";
    } else if (hour == 22 && min == 00) {
        open = true;
    } else {
        day = cal.get(java.util.Calendar.DATE) + 1;
        if (Math.floor(day / 10) == 0) {
            day = "0" + day;
        }
        date = year + "-" + month + "-" + day + " 12:00:00.0";
    }

    if (open == true) {
        newopen();
        em.setProperty("rank", "0");
    } else {
        timeStamp = java.sql.Timestamp.valueOf(date).getTime();
        setupTask = em.scheduleAtTimestamp("newopen", timeStamp);
        em.setProperty("rank", "0");
    }
}


function newopen() {
    if (em.getProperty("state").equals("0")) {
        em.getProperties().clear();
        em.startInstance();
        eim.setInstanceMap(readyMap);
        eim.setInstanceMap(startMap);
        em.broadcastNoticeWithoutPrefix("[巨大蘑菇] 巨大蘑菇旗活动已经在频道1开放，希望大家积极参加,奖励丰厚!");
    }
}


function setup() {
    eim = em.newInstance("Event_BigMushroom");
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
    //人数符合  开始进行活动
    em.setProperty("state", "2");
    eim.schedule("warpNext", 100);
    eim.schedule("startGame", 3000);
}

function startGame(eim) {
    em.setProperty("state", "3");
    eim.startEventTimer(10 * 60 * 1000); //  10分钟游戏时间
    em.broadcastNoticeWithoutPrefix("[巨大蘑菇] 巨大蘑菇活动开始进行啦！");
    var map = eim.getMapInstance(1);
    if (map != null) {
        //召唤出Big蘑菇王
        var mob = em.getMonster(9601004);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2343, -565));
    }
}

function warpNext(eim) {
    var map = eim.getMapInstance(1);
    if (map != null) {
        for (i = 0; i < eim.getPlayers().size(); i++) {
            eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
        }
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
function playerDisconnected(eim, player) {}
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