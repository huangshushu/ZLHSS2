/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
function start(mode, type, selection) {
    qm.gainItem(4032208, 1);
    qm.forceStartQuest();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}