/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//this quest is SECRET ORGANIZATION 2
function start(mode, type, selection) {
	if (qm.canHold(4032471,1)) {
		qm.gainItem(4032471,1);	
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(7100);
		qm.getPlayer().gainSP(1, 4);
	
	} else {
		qm.sendNext("请腾出背包空间.");
	}
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.canHold(4032471,1)) {
		qm.gainItem(4032471,1);	
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(7100);
		qm.getPlayer().gainSP(1, 4);
	} else {
		qm.sendNext("请腾出背包空间.");
	}
	qm.dispose();
}