/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能:红包雨
 *  
 *  @Author Jackson 
 */

/* global em, java */

﻿var setupTask;
var hour;
var random;
var wMin = 00;

function init() {
    var tmpDate = new Date();
    var date = tmpDate.getDate();
    var month = tmpDate.getMonth() + 1;
    random = em.getRandom(date + month);
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("state", "false");
    var cal = java.util.Calendar.getInstance();
    var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    var min = cal.get(java.util.Calendar.MINUTE);
    if (min < wMin) {
        cal.set(java.util.Calendar.MINUTE, 0);
        cal.set(java.util.Calendar.SECOND, 0);
        var nextTime = cal.getTimeInMillis();
        nextTime += 1000 * 60 * wMin;
        setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
    } else {
        cal.set(java.util.Calendar.HOUR_OF_DAY, 6);
        cal.set(java.util.Calendar.MINUTE, 0);
        cal.set(java.util.Calendar.SECOND, 0);
        var nextTime = cal.getTimeInMillis();
        while (nextTime <= java.lang.System.currentTimeMillis()) {
            nextTime += 1000 * 60 * 60; //设置多久开启
        }
        nextTime += 1000 * 60 * wMin;
        setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
    }
}

function startEvent() {
    em.setProperty("state", "true");
    setupTask = em.schedule("finishEvent", 3 * 60 * 1000);
    em.broadcastNoticeWithoutPrefix("[红包雨] 射手村开始下起了红包雨，只下3分钟！大家快去捡红包啦！！");
    //开始处理红包雨地图随机掉落红包
    em.schedule("doRain", 300);
}

function doRain() {
    if ("true".equals(em.getProperty("state"))) {
        var town = em.getMap(100000000);//射手村
        if (town != null) {
            town.spawnFallingDrop(2430210);
        }
        em.schedule("doRain", 300);
    }
}

function finishEvent() {
    em.broadcastNoticeWithoutPrefix("[红包雨] 活动已经结束，红包雨将在下一个整点准时开启。");
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}
