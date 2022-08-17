/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 
var status = -1;

function start(mode, type, selection) {
	if (qm.canHold(1142245,1) && qm.getPlayer().getLevel() >= 10 && ((qm.getPlayer().getJob() / 1000) | 0) == 3) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142245,1);
	}
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.canHold(1142245,1) && qm.getPlayer().getLevel() >= 10 && ((qm.getPlayer().getJob() / 1000) | 0) == 3) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142245,1);
	}
	qm.dispose();
}