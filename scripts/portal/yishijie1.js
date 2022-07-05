function enter(pi) {
    if (pi.GetPiot("异世界开关","1") > 0) {
		//&& pi.getPlayer().getInventory(pi.getInvType(-1)).findById(1302063)
	pi.playerMessage(5, "触发异世界传送阵···");
	pi.warp(910000023);
	return true;
	}
	pi.playerMessage(5, "");
	pi.warp(910000000);
	return false;
}