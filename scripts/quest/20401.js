/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest(20401);//开始任务
	qm.forceCompleteQuest(20401);//完成任务
	qm.forceStartQuest(20402);//给予开始任务
	qm.gainExp(10000);
	qm.gainItem(4001207, 1);
	qm.sendNext("请拿#v4001207##z4001207#在去找斯皮罗纳吧！如果中途丢弃的话请去打僵尸获得#v4001207##z4001207#触发任务在继续吧！");
	qm.dispose();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest(20401);//开始任务
	qm.forceCompleteQuest(20401);//完成任务
	qm.forceStartQuest(20402);//给予开始任务
	qm.gainExp(10000);
	qm.gainItem(4001207, 1);
	qm.sendNext("请拿#v4001207##z4001207#在去找斯皮罗纳吧！如果中途丢弃的话请去打僵尸获得#v4001207##z4001207#触发任务在继续吧！");
	qm.dispose();
}