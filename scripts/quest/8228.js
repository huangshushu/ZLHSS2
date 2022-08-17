/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("哇. 等一等，而我这个翻译..");
	if (qm.haveItem(4032032,1)) {
		qm.gainItem(4032032,-1);
		qm.forceStartQuest();
	}
	qm.dispose();
}
function end(mode, type, selection) {
	qm.sendNext("给你!");
	if (qm.canHold(4032018,1)) {
		qm.gainItem(4032018,1);
		qm.forceCompleteQuest();
	}
	qm.dispose();
}
