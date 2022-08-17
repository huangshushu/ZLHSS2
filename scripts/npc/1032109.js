/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
		if (!cm.isQuestActive(21764)) {//判断有没有完成任务
		cm.forceStartQuest(21764, "1");//给他可以开开始任务的条件
        cm.sendNext("去找赫雷娜谈谈吧!");
		cm.dispose();
		} else {
        cm.sendNext("去找赫雷娜谈谈吧!");
		cm.dispose();
    }
}}