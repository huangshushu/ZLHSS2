var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
	var shijian = java.lang.Math.floor(Math.random() * 6000 + 6000);
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * shijian;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
	scheduleNew();
	//var allPlayers = em.getChannelServer().getMapFactory().getMap(101050000).getCharacters();//取得当前地图上面的所有玩家
	var allPlayers = em.getChannelAllChr();
	allPlayers = allPlayers.iterator();
	while (allPlayers.hasNext()) {//循环每一个玩家
		var player = allPlayers.next();
		if (player.getClient().getChannel() == 1 && player.getMapId() == 101050000) {
			//var points = 30;
			//if (player.haveItem(2430865)) {
			//	points = 15;
			//}
			//player.modifyCSPoints(2, points);
			player.openNpc(9310362, "shichangjiangli");
			em.broadcastServerMsg(5121048, "恭喜所有在一线自由市场的玩家都获得了系统赠出的奖励。" ,true);
		}			
	}
}