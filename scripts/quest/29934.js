/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 
var status = -1;

function start(mode, type, selection) {
	if (qm.getPlayer().getLevel() >= 10 && (qm.getPlayer().getJob() / 100) | 0 == 22) {
		qm.forceStartQuest(); //quest auto gives 
		qm.forceCompleteQuest();
	}
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.getPlayer().getLevel() >= 10 && (qm.getPlayer().getJob() / 100) | 0 == 22) {
		qm.forceStartQuest(); //quest auto gives 
		qm.forceCompleteQuest();
	}
	qm.dispose();
}