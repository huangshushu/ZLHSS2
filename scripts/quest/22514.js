/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//this quest is DRAGON TRAINING
function start(mode, type, selection) {
	qm.sendNext("去跟Henesys的首席Stan谈话.");
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(100);
	qm.forceCompleteQuest();
	qm.dispose();
}