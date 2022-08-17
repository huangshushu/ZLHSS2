var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);

    var nextTime = cal.getTimeInMillis();

    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function start() {
    var cal = java.util.Calendar.getInstance();
    var hour = cal.get(java.util.Calendar.HOUR);
    var min = cal.get(java.util.Calendar.MINUTE);
    var sec = cal.get(java.util.Calendar.SECOND);
    var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
    weekday -= 1;
    scheduleNew();    
	if ( min == 00 && hour == 6 ){
	//if ( sec == 0 ){
        allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();//取得当前所有玩家
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//循环每一个玩家
            var player = allPlayers.next();
            player.openNpc(9310373, "折扣商店刷新");
        }
    }
	//if (java.util.Calendar.PM == cal.get(java.util.Calendar.AM_PM) && min == 00 && hour == 8){
	//allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();//取得当前所有玩家
    //allPlayers = allPlayers.iterator();
    //while (allPlayers.hasNext()) {//循环每一个玩家
	//		var player = allPlayers.next();
	//		player.dropMessage(5,"每晚20：00奖励已经发放，请记得查收哦!!");
	//		player.openNpc(9310373, "每日8点在线奖励");
    //}
	//	em.broadcastServerMsg(5121040, "恭喜所有在线的玩家获得每晚8点福利，月光岛感谢你们的加入！", true);
	//}
	 if (java.util.Calendar.PM == cal.get(java.util.Calendar.AM_PM) && min == 00 && hour == 9){
		allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();//取得当前所有玩家
		allPlayers = allPlayers.iterator();
		while (allPlayers.hasNext()) {//循环每一个玩家
			var player = allPlayers.next();
			player.dropMessage(5,"每晚21：00奖励已经发放，请记得查收哦!!");
			player.openNpc(9310373, "每日9点在线奖励");
    }
		em.broadcastServerMsg(5121070, "恭喜所有在线的玩家获得每晚9点福利，月光岛感谢你们的加入！", true);
	}
}