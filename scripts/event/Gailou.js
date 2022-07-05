var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("state", "false");
    em.setProperty("endEvent", "true");
    em.setProperty("check", "0");
    em.setProperty("maxCheck", "9999999");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 60 * 2; //设置多久开启
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function startEvent() {
    em.setProperty("state", "true");
    em.setProperty("endEvent", "false");
    em.setProperty("check", 0);
    em.setProperty("maxCheck", "" + getMaxCheck(Math.floor(Math.random() * 2)));
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 10; //设置多久结束
    }
    setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
    em.broadcastServerMsg(5121010, " 抢楼活动已经开始，参加的玩家请到市场找小Z参加。", true);
	
    em.broadcastServerMsg("[抢楼活动]:活动已经开始，目标 " + em.getProperty("maxCheck") + " 楼。");

}

function finishEvent() {
    if (em.getProperty("endEvent").equals("false")) {
        em.broadcastServerMsg("[抢楼活动]:抢楼活动已经结束，120分钟后开启下一轮。");
		
    } else {
        em.broadcastServerMsg("[抢楼活动]:本轮活动结束，下一轮抢楼将在120分钟后开启。");
		
    }
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}

function getMaxCheck(type) {
    switch (type) {
        case 0:
            return 321;//楼层
        case 1:
            return 350;//楼层
        case 2:
            return 400;//楼层
        case 3:
            return 450;//楼层
        case 4:
            return 500;//楼层
        case 5:
            return 550;//楼层
        case 6:
            return 600;//楼层
    }
    return 700;//楼层
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}