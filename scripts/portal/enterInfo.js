function enter(pi) {
    pi.playPortalSE();
    pi.warp(104000004, 1);
	if(pi.判断任务(21733) == 1){
		pi.当前地图召唤怪物(9300344, 1, -61, 110);
		pi.teachSkill(21100000, pi.getPlayer().getSkillLevel(21100000), 20);
		pi.sendNextS("感谢你来搭救我!我现在就把精准矛传授给你！", 3, 1002104);
		pi.gainExp(3900);
		pi.forceCompleteQuest(21733);//完成任务
		// pi.dispose();
	}
}