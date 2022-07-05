function enter(pi) {
    var returnMap = pi.getSavedLocation("BPReturn");

	var portal = 0;
    if (returnMap == 950000100) {
		returnMap = 270000000;
		portal = 6;
    } else {
		pi.clearSavedLocation("BPReturn");
	}
	pi.playPortalSE();
	pi.warp(returnMap, portal);
}
