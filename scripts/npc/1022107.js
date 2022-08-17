/*
 ZEVMS冒险岛(079)游戏服务端
 */
function action(mode, type, selection) {
	if (cm.isQuestActive(22530)) {
		if (!cm.canHold(1952000,1)) {
			cm.sendOk("你需要库存空间…");
		} else {
			cm.forceCompleteQuest(22530);
			cm.gainExp(710);
			cm.gainItem(1952000,1);
			cm.getPlayer().gainSP(1, 1);
			cm.sendOk("你检查一下牌子。完成警卫的要求");
		}
	} else {
		cm.sendOk("这是个征兆。");
	}
	cm.dispose();
}