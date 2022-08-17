var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 3);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis())
        nextTime += 100*6; 
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    var Message = new Array("你想每10分钟发的消息","依此类推，随机的");
	"欢迎来到079大众冒险岛怀旧服市场泡点每30分钟一次",
"每周五晚，市场会举行线上活动，周6和周日晚开放双倍经验",
"游戏内大家如果遇见什么问题，可以私聊我们的群管理，充值赞助请认准群主",
"大众冒险岛招收主播，要求：直播不卡，每天直播时间4小时以上且有麦解说",
"大众冒险岛欢迎你",
"温馨提醒：大众冒险岛的商城是禁止转物品的，否则背包物品可能失效");
    em.broadcastServerMsg("[冒险岛公告] " + Message[Math.floor(Math.random() * Message.length)]);	
}  
