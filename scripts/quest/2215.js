/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
 	if (!qm.canHold(4031894, 1)) {
	    qm.sendNext("请做一些空间..");
	} else {
	    qm.gainItem(4031894, 1);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
function end(mode, type, selection) {
 	if (!qm.canHold(4031894, 1)) {
	    qm.sendNext("请做一些空间..");
	} else {
	    qm.gainItem(4031894, 1);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
