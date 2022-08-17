var hour;
var min;
var year;
var month;
var day;
var date;
var timeStamp;
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
	hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	min = cal.get(java.util.Calendar.MINUTE);
	refreshDates(cal);
	if (hour == 12){
		date = year + "-" + month + "-" + day + " 12:00:00.0";
        timeStamp = java.sql.Timestamp.valueOf(date).getTime();
        setupTask = em.scheduleAtTimestamp("startEvent", timeStamp);
		em.broadcastServerMsg(5120116, "【火焰狼副本】：宝藏大门已开启，请玩家到自由NPC“猎人弗雷德”处，进入挑战！",true);
	}else if (hour == 21){
		date = year + "-" + month + "-"+(day+1)+" 21:00:00.0";
        timeStamp = java.sql.Timestamp.valueOf(date).getTime();
        setupTask = em.scheduleAtTimestamp("startEvent", timeStamp);
		em.broadcastServerMsg(5120116, "【火焰狼副本】：宝藏大门已开启，请玩家到自由NPC“猎人弗雷德”处，进入挑战！",true);
	}
    

    

}

function startEvent() {
    em.setProperty("state", "true");
    em.setProperty("endEvent", "false");
    em.setProperty("check", 0);
    em.setProperty("maxCheck", "" + getMaxCheck(Math.floor(Math.random() * 2)));
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 1);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 5; //设置多久结束
    }
    setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
	//em.broadcastServerMsg(5120116, "【火焰狼副本】每整点的前10分钟宝库的大门将会开启，请玩家到自由NPC“猎人弗雷德”处，进入挑战！",true);
}

function finishEvent() {
    if (em.getProperty("endEvent").equals("false")) {
       // em.broadcastServerMsg("[抢火焰狼副本] 宝库的大门已关闭，请等待下次开启！");
    } else {
        //em.broadcastServerMsg("[抢火焰狼副本] 宝库的大门已关闭，请等待下次开启！");
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
        return 88;
    case 1:
        return 99;
    case 2:
        return 111;
    }
    return 122;
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
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