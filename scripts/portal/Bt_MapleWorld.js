function enter(pi) {
	var returnMap = pi.getSavedLocation("STAR_PLANET");
	pi.clearSavedLocation("STAR_PLANET");
	if (returnMap < 0) {
		returnMap = 100000000;
	}
	pi.getPlayer().changeMap(returnMap, 0);
            //cm.saveReturnLocation("STAR_PLANET");
}
