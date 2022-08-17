function enter(pi) {
    if (pi.isQuestActive(31149)) {
	pi.forceCompleteQuest(31149);
	pi.playerMessage("Quest complete");
    } else{
		pi.warp(271040000,0);
    }
}