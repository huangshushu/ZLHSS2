function enter(pi) {
	var returnMap = pi.getSavedLocation("BPReturn");
    if (returnMap == 950000100) {
		returnMap = 211042200;
    } else {
		pi.clearSavedLocation("BPReturn");
	}
	pi.playPortalSE();
	pi.warp(returnMap, 0);
}
