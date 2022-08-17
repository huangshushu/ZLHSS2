/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendAcceptDecline("正值暑假期间，我准备了很多快速问答题。你要不要参加？");
		} else if (status == 1) {
			qm.forceStartQuest(9991);
			qm.sendNext("不过我现在没时间，你过一会再来找我吧。");
		} else if (status == 2) {
			qm.dispose();
		}
	}
}
