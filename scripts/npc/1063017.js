function action(mode, type, selection) {
	cm.warp(910510202, 0);
	if(cm.判断任务(21734) == 1){
		cm.当前地图召唤怪物(9300344, 1, 127, 240);
		cm.sendOk("弗朗西斯果真在这里，快击败他吧！");
		cm.forceCompleteQuest(21734);
	}
	cm.dispose();
}