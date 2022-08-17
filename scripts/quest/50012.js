/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.getQuestStatus(50012) == 0) {
	qm.forceStartQuest();
    } else {
	qm.forceCompleteQuest(50015);
	qm.forceCompleteQuest();
    }
    qm.dispose();
}