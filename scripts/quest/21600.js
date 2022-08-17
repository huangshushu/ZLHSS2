/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("请去水下世界找#r纳努科#k看看！也许她会知道饲养小狼的方法!");
	qm.forceStartQuest();//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();//完成任务
	qm.dispose();
}