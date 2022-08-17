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
        nextTime += 2000 * 35 * 10; //设置多久开启
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function startEvent() {
    em.setProperty("state", "true");
    em.setProperty("endEvent", "false");
    em.setProperty("check", 0);
    em.setProperty("maxCheck", "" + getMaxCheck(Math.floor(Math.random() * 1)));
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 2000 * 35 * 20; //设置多久结束
    }
    setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
	em.broadcastServerMsg(5122015, "端午节活动详细请到自由市场找“裂空之鹰”及“金利奇”参加活动！！！",true);
    em.broadcastServerMsg("[端午活动] 端午节活动详细请到自由市场找“裂空之鹰”及“金利奇”参加活动！！！");
}

function finishEvent() {
    if (em.getProperty("endEvent").equals("false")) {
        em.broadcastServerMsg(5122015, "端午节活动详细请到自由市场找“裂空之鹰”及“金利奇”参加活动！！！！",true);
    } else {
        em.broadcastServerMsg("[端午活动] 端午节活动详细请到自由市场找“裂空之鹰”及“金利奇”参加活动！！！");
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
        return 222;
    case 1:
        return 333;
    case 2:
        return 444;
    }
    return 555;
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}