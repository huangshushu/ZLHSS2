function enter(pi) {
	if (pi.getQuestStatus(21610) == 1) {
		pi.forceCompleteQuest(21610);
		pi.playerMessage(5, "任務完成。");
	}
}