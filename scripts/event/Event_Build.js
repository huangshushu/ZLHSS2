/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能:抢楼
 *  
 *  @Author Jackson 
 */

/* global em, java */

﻿var setupTask;
var hour;
var random;
var wMin = 20;

function init() {
    var tmpDate = new Date();
    var date = tmpDate.getDate();
    var month = tmpDate.getMonth() + 1;
    random = em.getRandom(date + month);
    scheduleNew();
}

function scheduleNew() {
    //时间需要设置到每个小时的 20分开始 
    em.setProperty("state", "false");
    em.setProperty("endEvent", "true");
    em.setProperty("check", "0");
    em.setProperty("maxCheck", "999");

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
    em.setProperty("endEvent", "false");
    em.setProperty("check", 0);
    em.setProperty("maxCheck", String(rand(100, 150)));
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR_OF_DAY, 6);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 10; //设置多久结束
    }
    setupTask = em.schedule("finishEvent", 10 * 1000 * 60);
    em.broadcastNoticeWithoutPrefix("[抢楼活动] 活动已经开启。10分钟后结束，第1个达到 " + em.getProperty("maxCheck") + " 楼的玩家将获得一等奖5000点卷。");
}

function finishEvent() {
    if (em.getProperty("endEvent").equals("true")) {
        em.broadcastNoticeWithoutPrefix("[抢楼活动] 本次活动所有奖励已经发放，下次活动将在下一个小时的20分开启，欢迎大家积极参加。");
    } else {
        em.broadcastNoticeWithoutPrefix("[抢楼活动] 活动已经结束，每个小时的20分开启。本次活动未开出所有奖励，请大家再接再厉。");
    }
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}

function rand(lbound, ubound) {
    return Math.floor(random.nextInt(ubound - lbound + 1)) + lbound;
}