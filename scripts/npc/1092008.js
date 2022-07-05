function start() {
	if (cm.getQuestStatus(6410) == 1) {
		cm.warp(925010000,0);
	} else {
		cm.sendOk("在世界上什么，你说什么？");
	}
    cm.dispose();
}
