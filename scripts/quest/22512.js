/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//this quest is CALL DRAGON
function start(mode, type, selection) {
	qm.sendNext("去谈话Henesys的丽娜.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(110);
	qm.forceCompleteQuest();
	qm.dispose();
}