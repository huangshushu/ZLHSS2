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
	if (status == 2) {
	    qm.sendNext("什么？我认为那电影有除了那小子任何嫌疑人。请三思.");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("做什么 #p1032112# 说?", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你告诉她 #p1032112# 观察到的.)#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("用木偶的孩子吗？这似乎很可疑。我相信，孩子是绿色蘑菇突然演变成暴力冲突的原因.");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNextS("怎么敢这小子肆虐南方森林。谁知道它需要多长时间来恢复森林......请给我投入我大部分的时间清理烂摊子.", 2);
    } else if (status == 4) {
	qm.sendPrevS("#b(你能找出导致绿蘑菇的变化。你应该报告#p1002104#并提供您所收集的信息.)#k", 2);
    } else if (status == 5) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}