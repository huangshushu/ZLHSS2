function start() {
	if (cm.getQuestStatus(4100) == 2 && cm.getQuestStatus(4103) == 1) {
		cm.warp(701010321);
		cm.dispose();
	} else {
		//cm.forceStartQuest(8512);
		cm.sendOk("你没有完成农民的拜托任务或者没有资格挑战大王蜈蚣!");
		cm.dispose();
	}
}
