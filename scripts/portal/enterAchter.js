
 function enter(pi) {
	 map = pi.getPlayer().getMap();
	if (pi.isQuestFinished(21754)) {
	pi.warp(100000201, 1);
	} else if (!pi.getPlayerCount(910050000) <= 0 && pi.isQuestFinished(21754)) {//判断地图是否有人。判断任务
	pi.playerMessage(5, "里面有人,请稍后.");
	} else if (pi.isQuestFinished(21753)) {
	//pi.playerMessage(5, "panduanyourenwu.");
	pi.getMap(910050000).resetFully();//地图刷新
    pi.warp(910050000, 1);
	pi.getPlayer().startMapTimeLimitTask(600, map);
	} else{
	//pi.playerMessage(5, "meiyourenwu.");
	pi.warp(100000201, 1);
}
}