function enter(pi) {
	if (pi.isQuestFinished(1008))
		pi.ShowWZEffect("UI/tutorial.img/22");
	else if (pi.isQuestFinished(1020))
		pi.ShowWZEffect("UI/tutorial.img/27");
	return false;
}