function enter(pi) {
    if (pi.getQuestStatus(6241) == 1 || pi.getQuestStatus(6243) == 1) {
	if (pi.getJob() == 312) {
	    if (pi.haveItem(4001113)) {
		if (pi.getPlayerCount(924000100) > 0) {
		    pi.playerMessage("有其他人在里面挑战请稍后再尝试。");
		    return false;
		}
		var em = pi.getEventManager("s4nest");
		if (em == null) {
		    pi.playerMessage("未加载事件，请联系管理员。" );
		} else {
		    em.startInstance(pi.getPlayer());
		    return true;
		}
	    } else {
		pi.playerMessage("你没有凤凰蛋。你不能进入。" );
	    }
	} else if (pi.getJob() == 322) {
	    if (pi.haveItem(4001114)) {
		if (pi.getPlayerCount(924000100) > 0) {
		    pi.playerMessage("有其他人在里面挑战请稍后再尝试。");
		    return false;
		}
		var em = pi.getEventManager("s4nest");
		if (em == null) {
		    pi.playerMessage("未加载事件，请联系管理员。" );
		} else {
		    em.startInstance(pi.getPlayer());
		    return true;
		}
	    } else {
		pi.playerMessage("你没有凤凰蛋。你不能进入。" );
	    }
	}
    } else {
	pi.playerMessage("你不能进入封闭的地方。");
    }
    return false;
}