/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	map = qm.getPlayer().getMap();
	if (qm.getPlayerCount(925040001) <= 0) {
	qm.getMap(925040001).resetFully();//地图刷新
	qm.warp(925040001, 1);
	qm.getPlayer().startMapTimeLimitTask(1200, map);
	//qm.removeAll(4220151);
	//qm.gainItem(4220151, 1);
	qm.forceStartQuest(21746);//开始任务
	qm.dispose();
	} else{
	qm.sendNextS("里面有人暂时无法进入,请稍后。。", 3);
	qm.dispose();
}}

function end(mode, type, selection) {
	qm.forceCompleteQuest(21746);//完成任务
	qm.dispose();
}