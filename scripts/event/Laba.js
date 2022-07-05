var setupTask;

function init() {
	scheduleNew();
}

function scheduleNew() {
	var nextTime = 15*1000;//cal.getTimeInMillis();
	nextTime += java.lang.System.currentTimeMillis() ;
	setupTask =  em.scheduleAtTimestamp("start", nextTime);
	
}

function cancelSchedule() { 
	if (setupTask != null)
		setupTask.cancel(true);
}

function start() {
	
	scheduleNew()
	var hour=new Date(java.lang.System.currentTimeMillis()).getHours();
	var minute=new Date(java.lang.System.currentTimeMillis()).getMinutes();
	var 星期 = em.获取当前星期();
	//每天第一个喇叭提醒。
	if (hour == 23 && minute == 59 ) {	
		em.broadcastServerMsg(5120008, "各位冒险家，新的一天又开始了", true);
	}
	// //每日送货活动提醒喇叭。
	// if (hour == 11 && minute == 58 ) {
	// 	em.broadcastServerMsg(5120026, "[每日送货] 3 分钟后开始，参加的玩家前往明珠港售票区找比尔", true);	
	// }
	// if (hour == 16 && minute == 58 ) {
	// 	em.broadcastServerMsg(5120026, "[每日送货] 3 分钟后开始，参加的玩家前往明珠港售票区找比尔", true);	
	// }
	// //节奏大师活动提醒喇叭
	// if (hour == 18 && minute == 58 ) {
	// 	em.broadcastServerMsg(5120026, "[节奏大师] 3 分钟后开始，需要参加的玩家请到活动地图参加", true);	
	// }
	// //每日答题活动提醒喇叭
	// if (hour == 19 && minute == 58 ) {
	// 	em.broadcastServerMsg(5120026, "[每日答题] 3 分钟后开始，需要参加的玩家请到活动地图参加", true);	
	// }
	
	}
function monsterDrop(eim, player, mob) {}