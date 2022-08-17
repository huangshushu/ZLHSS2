/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("哇. 把这个给杰克!");
	qm.forceStartQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.sendNext("谢谢!");
	if (qm.haveItem(4032018,1)) {
		qm.gainItem(4032018,-1);
		qm.forceCompleteQuest();
	}
	qm.dispose();
}
