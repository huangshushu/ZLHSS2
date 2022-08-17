function enter(pi) {
    if (pi.getQuestStatus(6134) == 1) {
	var em = pi.getEventManager("s4resurrection2");
	if (em == null) {
	    pi.playerMessage("你不能带着未知的理由进入。再试一次。");
	} else {
	    var prop = em.getProperty("started");
	    if (prop == null || prop.equals("false")) {
		em.startInstance(pi.getPlayer());
		return true;
	    } else {
		pi.playerMessage("有人已经在进行这项任务。");
	    }
	}
    } else {
	pi.playerMessage("你无法进入。");
    }
    return false;
}