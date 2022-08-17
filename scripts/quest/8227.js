/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("找人翻译这.");
	if (qm.canHold(4032032,1)) {
		qm.gainItem(4032032,1);
		qm.forceCompleteQuest();
	}
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}
