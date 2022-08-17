/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//this quest is DRAGON KNOWLEDGE
function start(mode, type, selection) {
	qm.sendNext("去谈话 首席Leafre的Tatamo.");
	qm.forceStartQuest();
	qm.getPlayer().gainSP(1, 2);
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.getPlayer().gainSP(1, 2);
	qm.forceCompleteQuest();
	qm.dispose();
}