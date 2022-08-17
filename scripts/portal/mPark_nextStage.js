function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.warpParty(pi.getMapId() + 100,0); //next
    } else {
	pi.playerMessage(5, "传送入口还没有开启，请先消灭所有怪物.");
    }
}