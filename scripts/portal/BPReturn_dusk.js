function enter(pi){
	var returnMap = pi.getSavedLocation("BPReturn");
    if (returnMap == 950000100 ||returnMap < 2|| returnMap == 100000000) {
		returnMap = 450009300;
    } else {
		pi.clearSavedLocation("BPReturn");
	}
	//pi.dropMessage(5,returnMap);
	pi.playPortalSE();
	pi.warp(returnMap,5);
}