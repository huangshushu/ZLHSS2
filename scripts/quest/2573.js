/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		qm.dispose();
		return;
	}
	if (status == 0) {
		qm.sendNext("您好！这是不是只是一个旅程完美的天气怎么样？我是队长，这样的好船长。你必须是一个新的浏览器，是吗？很高兴认识你.");
	} else if (status == 1) {
		qm.sendAcceptDecline("我们还没有准备好离开，可以随意看看周围的船在我们等待.");
	} else if (status == 2) {
		qm.forceCompleteQuest();
		qm.warp(3000000,0);
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}
