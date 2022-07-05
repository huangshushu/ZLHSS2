function enter(pi) {
    if (pi.getQuestStatus(6132) == 1) {
	var em = pi.getEventManager("s4resurrection");
	if (em == null) {
	    pi.playerMessage("未加载事件，请联系管理员。" );
	} else { // 923000100
	    var prop = em.getProperty("started");
	    if (prop == null || prop.equals("false")) {
		em.startInstance(pi.getPlayer());
		return true;
	    } else {
		pi.playerMessage("已经有人在挑战此任务，请稍后在尝试。");
	    }
	}
    } else {
	pi.playerMessage("你不能进入封闭的地方。");
    }
    return false;
}