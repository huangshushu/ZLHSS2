/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("这是为了一个重要的决定.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("你们已经做出了决定？该决定将是最终的，所以决定做什么之前，仔细考虑.");
    } else if (status == 1) {
	qm.sendNext("我刚刚成型你的身体，使其完美的战斗法师。如果你想变得更强大，使用统计窗口（S），以提高相应的统计信息。如果您arn't一定要提高什么，只要点击#b汽车#k.");	if (qm.getJob() == 3300) {
	if (qm.getJob() == 3500) {
	    qm.changeJob(3510);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("现在...我希望你去那里，向世界展示了电阻如何运作.");
	qm.safeDispose();
    }
}