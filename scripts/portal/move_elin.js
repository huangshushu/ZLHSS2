function enter(pi) {
    pi.playPortalSE();
    pi.warp(300000100, "out00");
	if(pi.判断任务(21749) == 1){
		pi.forceCompleteQuest(21749);//完成任务
	}
    return true;
}