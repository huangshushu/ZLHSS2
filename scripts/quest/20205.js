/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.removeAll(4032100);
	qm.changeJob(1510);
	qm.forceCompleteQuest();//完成任务
	qm.dispose();
}