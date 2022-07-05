function enter(pi) {
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap <= 1 || returnMap == null) {
		returnMap = 100000000;
	} else {
		pi.clearSavedLocation("MULUNG_TC");
	}
	pi.playPortalSE();
	pi.warp(returnMap);
}
