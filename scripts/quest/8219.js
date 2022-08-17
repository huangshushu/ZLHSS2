/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("找到我的兄弟.");
	qm.forceStartQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.sendNext("...");
	qm.gainItem(3992040,1);
	qm.gainExp(175000);
	qm.forceCompleteQuest();
	qm.dispose();
}
