/*
 ZEVMS冒险岛(079)游戏服务端
 */
function enter(pi) {
	if (pi.isQuestActive(2324) && pi.判断物品数量(2430015,1)) {
	    pi.forceCompleteQuest(2324);
	    pi.removeAll(2430015);
		pi.warp(106020502,0);
	    pi.playerMessage("成功消除毒刺。");
	}else if(pi.getQuestStatus(2324)==2 ){
		pi.warp(106020501,1);
	}else {
		pi.playerMessage("你带来消除毒刺的药剂了吗？");
	}
	return true;
}