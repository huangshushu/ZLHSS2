function enter(pi) {
	if (pi.getPlayer().getParty() != null &&pi.getPlayer().getParty() != null && pi.getMap().getAllMonster().size() == 0 && pi.isLeader()){
	pi.warpParty(262030100);
        pi.playPortalSE();
	}
}
