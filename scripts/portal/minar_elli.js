function enter(pi) {
    if (pi.haveItem(4031346)) {
	if (pi.getMapId() == 240010100) {
	    pi.playPortalSE();
	    pi.warp(101010000, "minar00");
	} else {
	    pi.playPortalSE();
	    pi.warp(240010100, "elli00");
	}
	pi.gainItem(4031346, -1);
	pi.playerMessage("你没有魔法种子，需要一个魔法种子才可以启动传送阵。");
	return true;
    } else {
	pi.playerMessage("你没有魔法种子，需要一个魔法种子才可以启动传送阵。");
	return false;
    }
}
