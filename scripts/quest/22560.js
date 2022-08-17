/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//this quest is JOINING ORGANIZATION
function start(mode, type, selection) {
	qm.sendNext("请杀150眼诅咒.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(2300);
	qm.forceCompleteQuest();
	qm.dispose();
}