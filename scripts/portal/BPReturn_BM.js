function enter(pi) {
	var returnMap = pi.getSavedLocation("BPReturn");
	if (returnMap == 950000100 || returnMap == 100000000) {
		returnMap = 450012320;
	} else {
		pi.clearSavedLocation("BPReturn");
	}
	pi.playPortalSE();
	pi.warp(returnMap, 2);
}
