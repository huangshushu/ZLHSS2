/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 
var status = -1;

function start(mode, type, selection) {
	if (qm.getPlayer().getLevel() >= 200 && ((qm.getPlayer().getJob() / 1000) | 0) == 3) {
		if (!qm.haveItem(1142246,1) && qm.canHold(1142246, 1)) {
			qm.gainItem(1142246, 1);
		}
		qm.forceStartQuest();
		qm.forceCompleteQuest();
	}
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.getPlayer().getLevel() >= 200 && ((qm.getPlayer().getJob() / 1000) | 0) == 3) {
		if (!qm.haveItem(1142246,1) && qm.canHold(1142246, 1)) {
			qm.gainItem(1142246, 1);
		}
		qm.forceStartQuest();
		qm.forceCompleteQuest();
	}
	qm.dispose();
}