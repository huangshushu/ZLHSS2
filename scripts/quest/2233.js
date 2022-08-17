/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (qm.getPlayer().getCurrentRep() > 0) {
		qm.forceCompleteQuest();
		qm.gainExp(3000);
		qm.sendNext("干得好!");
	} else {
		qm.sendNext("Please, get some Rep!");
	}
	qm.dispose();
}
function end(mode, type, selection) {
	if (qm.getPlayer().getCurrentRep() > 0) {
		qm.forceCompleteQuest();
		qm.gainExp(3000);
		qm.sendNext("干得好!");
	} else {
		qm.sendNext("Please, get some Rep!");
	}
	qm.dispose();
}
