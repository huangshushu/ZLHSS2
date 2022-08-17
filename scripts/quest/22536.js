/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//this quest is NELLA INVESTIGATION
function start(mode, type, selection) {
	qm.sendNext("让我们来谈谈字距市的内拉.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(4000);
	qm.forceCompleteQuest();
	qm.dispose();
}