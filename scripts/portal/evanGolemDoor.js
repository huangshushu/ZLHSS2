function enter(pi) {
    pi.warp(100040000,0);
    pi.playPortalSE();
    if (pi.isQuestActive(22557)) {
	pi.forceCompleteQuest(22557);
	pi.playerMessage(5, "Camilla rescued!");
	pi.getPlayer().gainSP(1);
    }
}