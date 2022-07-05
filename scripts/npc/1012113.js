
function action(mode, type, selection) {
    cm.getPlayer().removeAll(4001101);
    cm.getPlayer().removeAll(4001095);
    cm.getPlayer().removeAll(4001096);
    cm.getPlayer().removeAll(4001097);
    cm.getPlayer().removeAll(4001098);
    cm.getPlayer().removeAll(4001099);
    cm.getPlayer().removeAll(4001100);
    if (cm.getPlayer().getMapId() == 910010300) {//月妙副本奖励
		if (cm.getPlayer().getLevel() <= 120){
			cm.gainExp(8000);
			cm.playerMessage(5, "恭喜你完成月妙副本！");
		} else {
			//cm.setBossRankCount("越级副本出席");
			cm.givePartyLevelItems(1, 21, 1, 4001229, 1);//1个金叶子
			cm.setBossRankCount("越级月妙副本总次数");
			cm.playerMessage(5, "恭喜你带新人完成月妙副本！");
				}
		cm.setBossRankCount("月妙副本总次数");
		cm.setBossRankCount("所有副本总次数");
		cm.setBossLog('每日月妙副本次数');
        //cm.warp(100000200, 3);
		map = cm.getSavedLocation("DUTY_JOIN");
		cm.warp(map == -1 ? 910000000 : map);
		cm.clearSavedLocation("DUTY_JOIN");
    }
    if (cm.getPlayer().getMapId() == 910010200) {
        cm.warp(100000200);
    }
    cm.dispose();
}