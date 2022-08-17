function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.warpParty(925100300,0); //next
    } else {
	pi.playerMessage(5, "请清光这里的怪物.");
    }
}