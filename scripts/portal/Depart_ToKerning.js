function enter(pi) {
    try {
	pi.warp(103000000,0);
    } catch(e) {
	pi.playerMessage(5, "Error: " + e);
	e.printStackTrace();
    }
}