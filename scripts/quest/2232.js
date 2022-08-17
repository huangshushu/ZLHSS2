/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (qm.getPlayer().getJunior1() > 0) {
		qm.forceCompleteQuest();
		qm.gainExp(3000);
		qm.sendNext("棒极了！！");
	} else {
		qm.sendNext("请找一个徒弟来见我！");
	}
	qm.dispose();
}
function end(mode, type, selection) {
	if (qm.getPlayer().getJunior1() > 0) {
		qm.forceCompleteQuest();
		qm.gainExp(3000);
		qm.sendNext("棒极了！！");
	} else {
		qm.sendNext("请找一个徒弟来见我！");
	}
	qm.dispose();
}
