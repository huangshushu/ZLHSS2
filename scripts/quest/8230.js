/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("查找绯红色木梯形.");
	qm.forceStartQuest();
	if (!qm.isQuestActive(8223) && !qm.isQuestFinished(8223)) {
		qm.forceStartQuest(8223);
	}
	qm.dispose();
}
function end(mode, type, selection) {
	if (!qm.isQuestFinished(8223)) {
		qm.sendNext("请找到它!");
	} else {
		qm.forceCompleteQuest();
		qm.sendNext("干得好.现在我们可以继续.");
	}
	qm.dispose();
}
