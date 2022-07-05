function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.warp(271040200,0);
    } else {
	pi.playerMessage("Empress blocks you from the portal.");
    }
}