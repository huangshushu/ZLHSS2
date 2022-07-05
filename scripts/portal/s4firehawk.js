function enter(pi) {
    if (pi.getQuestStatus(6240) == 1 || pi.getQuestStatus(6241) == 1) {
	if (!pi.haveItem(4001113)) {
	    if (pi.getPlayerCount(921100200) == 0) {
		pi.playPortalSE();
                               
		pi.warp(921100200, 0);
		return true;
	    } else {
		pi.playerMessage("已经其他玩家进入，你还不能进入。");
	    }
	} else {
	    pi.playerMessage("你已经有凤凰蛋了。你不能进入。");
	}
    } else if (pi.getQuestStatus(6240) == 2 && pi.getQuestStatus(6241) == 0) {
	if (!pi.haveItem(4001113)) {
	    pi.playPortalSE();
                    
	    pi.warp(921100200, 0);
	    return true;
	} else {
	    pi.playerMessage("你已经有凤凰蛋了。你不能进入。" );
	}
    } else {
	pi.playerMessage("你不能进入封闭的地方。");
    }
    return false;
}