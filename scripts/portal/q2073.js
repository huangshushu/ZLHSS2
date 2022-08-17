function enter(pi) {

	if (pi.判断物品数量(4031156,1)) {
		pi.warp(900000000,0);
		return true;
	} else {
		pi.playerMessage(5,"你似乎不能进去。");
		return false;
	}
}
//pi.getQuestStatus(2073) == 0