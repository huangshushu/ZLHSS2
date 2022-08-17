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
	    qm.sendNext("哦，我的天哪，你从我们第一次见面后就成长了！ 你失去了你的回忆？ 我会照顾的.");
	    qm.forceCompleteQuest();
	    qm.forceCompleteQuest(3507);
	    qm.dispose();
	}
    //	qm.forceStartQuest();
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNextPrev("测试");
	    qm.dispose();
	}
    }
}