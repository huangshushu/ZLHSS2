/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (!qm.canHold(4310018, 5) || !qm.canHold(1112601,1)) {
	    qm.sendOk("请腾出背包空间.");
	} else {
	    qm.gainItem(4310018, 5);
	    qm.gainItem(1112601, 1);
	    qm.forceStartQuest(50682);
	    qm.forceStartQuest(50686);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
function end(mode, type, selection) {
	if (!qm.canHold(4310018, 5) || !qm.canHold(1112601,1)) {
	    qm.sendOk("请腾出背包空间.");
	} else {
	    qm.gainItem(4310018, 5);
	    qm.gainItem(1112601, 1);
	    qm.forceStartQuest(50682);
	    qm.forceStartQuest(50686);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
