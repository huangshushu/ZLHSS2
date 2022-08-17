/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.gainExp(10000);
	qm.forceCompleteQuest();//完成任务
	qm.sendNext("去圣地找南哈特吧");
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.gainExp(10000);
	qm.forceCompleteQuest();//完成任务
	qm.sendNext("去圣地找南哈特吧");
	qm.dispose();
}