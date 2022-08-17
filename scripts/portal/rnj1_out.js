function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.warp(926100200,0);
    } else {
	pi.playerMessage(5, "请清理这里的怪物");
    }
}