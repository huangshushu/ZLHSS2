
function start () {
	/*if (cm.getPlayer().isGM()) {
		cm.dispose();
		cm.openNpc(9310022, "随机boss入场");
		return;
	}*/
	var list = Packages.constants.GameConstants.迷之蛋随机物品;
	var txt = "谜之蛋奖品：\r\n";
	for (var i in list) {
		txt += "#v" + list[i] + "# #b#z" + list[i] + "##k\r\n";
	}
	cm.sendOk(txt);
	cm.dispose();
}