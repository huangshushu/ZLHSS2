/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(1000);
	qm.removeAll(4031619);
    qm.forceCompleteQuest();
    qm.dispose();
}