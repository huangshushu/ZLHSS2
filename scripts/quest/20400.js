/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("去冰原雪域找#b杰德#k 他会告诉你详细情况。");
	qm.forceStartQuest();//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();//完成任务
	qm.gainExp(10000);
	qm.forceStartQuest(20401);//给予开始任务
	qm.dispose();
}