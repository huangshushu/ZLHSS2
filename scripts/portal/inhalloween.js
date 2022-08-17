function enter(pi) {
	//var 副本进度 = cm.GetZfuben("副本进度",1);
    pi.playPortalSE();
	if(pi.GetZfuben("副本进度",1)==0 || pi.getBossRank("鬼屋报名",2) >0 ){
    pi.warp(229000000, 6);
	pi.dispose();
	}   else {
	pi.playerMessage(5,"副本已经开始，你无法进入。");	
	pi.dispose();	
	}
    return true;
}