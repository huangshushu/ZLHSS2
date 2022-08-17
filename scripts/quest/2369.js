/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
function end(mode, type, selection) {
	if (qm.getJob() == 430) {
	    qm.changeJob(431);

	    qm.sendNext("您现在正在推进.");
	}
	    qm.forceCompleteQuest();
	qm.dispose();
}

function start(mode, type, selection) {
    qm.dispose();
}
