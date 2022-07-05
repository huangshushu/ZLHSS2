function enter(pi) {
	if (pi.isQuestActive(1035)) {
		pi.ShowWZEffect("UI/tutorial.img/21");
		return true;
	}
	return false;
}