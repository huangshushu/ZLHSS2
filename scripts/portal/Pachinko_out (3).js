function enter(pi) {
	var returnMap == 0;// = pi.getPlayer().getSavedLocation("PACH");
	if (returnMap < 0) {
		returnMap = 102000000;
	}
	var target = pi.getPlayer().getClient().getChannelServer().getMapFactory().getMap(returnMap);
	var portal = target.getPortal("pachinkoDoor");
	if (portal == null) {
		portal = target.getPortal(0);
	}
	//pi.getPlayer().clearSavedLocation("PACH");
	pi.getPlayer().changeMap(target, portal);
	return true;
}
