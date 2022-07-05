function enter(pi) {
	if (pi.getQuestStatus(21610) == 1) {
	if (pi.getPlayerCount(921110000) == 0) {
		pi.warp(921110000, 1);
	} else {
		pi.playerMessage(5, "已经有人在裡面挑战了请稍后在尝试。");
	}
	} else {
		pi.playerMessage(5, "你好像不能进入这个门。");
}
}