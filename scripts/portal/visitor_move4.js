function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
		pi.warpParty(pi.getPlayer().getMapId() + 100);
		pi.playPortalSE();
	} else {
		pi.playerMessage(5,"请击败地图内的所有敌人.");
	}
}