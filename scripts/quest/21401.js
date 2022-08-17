/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (qm.getPlayerCount(914020000) <= 0) {//判断地图是否有人。判断任务
	qm.forceStartQuest();//开始任务
	qm.getMap(914020000).resetFully();//地图刷新
	qm.warp(914020000, 0);
	qm.dispose();
	} else {
	qm.sendOk("里面有人!")
	qm.dispose();
}
}

function end(mode, type, selection) {
	qm.changeJob(2112);
	qm.gainItem(1142132, 1);
	qm.forceCompleteQuest();//完成任务
	qm.dispose();
}