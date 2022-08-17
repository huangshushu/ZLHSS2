/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//this quest is SECRET ORGANIZATION 1
function start(mode, type, selection) {
	qm.sendNext("Make a Growth Accelerant.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.isQuestFinished(22568) || qm.haveItem(4032468,10)) {
		qm.getPlayer().gainSP(2, 3);
		qm.forceCompleteQuest();
	} else {
		qm.sendNext("Make a growth accelerant.");
		qm.forceStartQuest();
	}
	qm.dispose();
}