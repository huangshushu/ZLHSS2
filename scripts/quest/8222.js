/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("找到10个风暴突击者徽章.");
	qm.forceStartQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	if (qm.haveItem(4032006,10)) {
		qm.sendNext("干得好!");
		qm.gainExp(85000);
		qm.forceCompleteQuest();
		qm.gainItem(4032006,-10);
	} else {
		qm.sendNext("请找到10个风暴突击者徽章.");
	}
	qm.dispose();
}
