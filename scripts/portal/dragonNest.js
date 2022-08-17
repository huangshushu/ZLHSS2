function enter(pi) {
    if (pi.haveItem(4001094)) {
		if (pi.getQuestStatus(3706) == 1) {
			pi.playerMessage(5, "pi.getQuestStatus(3706):" + pi.getQuestStatus(3706));//测试
			if (pi.getPlayerCount(240040611) == 0) {
			pi.removeNpc(240040611, 2081008);
			pi.resetMap(240040611);
			pi.playPortalSE();
			pi.warp(240040611, "sp");
			//pi.getMap().给时钟(5, true, true);
			} else {
			pi.playerMessage(5, "已经有人在里面了，请稍后再试。");
			}
		} else {
			//pi.forceStartQuest(3706, "");
			if(pi.getQuestStatus(3705) > 0){
				pi.startQuest(3706, 2081007);
			}
			pi.playerMessage(5, "你并没有接受敢死队任务，无法进入。");
		}
    } else {
	pi.playerMessage(5, "需要有九灵龙的蛋才可以进入。");
    }
}