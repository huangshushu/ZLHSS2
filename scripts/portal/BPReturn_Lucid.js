function enter(pi){
	var returnMap = pi.getSavedLocation("BPReturn");
    if (returnMap == 100000000) {
		returnMap = 450003540;
    } else {
		pi.clearSavedLocation("BPReturn");
	}
	pi.playPortalSE();
	pi.warp(returnMap, 0);
}