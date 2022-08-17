function enter(pi) {
	if ((pi.getMap().getAllMonstersThreadsafe().size() == 0 || pi.getMap().getMonsterById(9300183) != null) && (pi.getMap().getReactorByName("") == null || pi.getMap().getReactorByName("").getState() == 1)) {
		pi.warp(930000700,0);
	} else {
		pi.playerMessage(5, "请使用魔力石召唤个巫毒巨人，打败它");
	}
}