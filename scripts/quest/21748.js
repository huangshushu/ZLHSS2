/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.teachSkill(21100002, qm.getPlayer().getSkillLevel(21100002), 30);   // Combo Ability 
	qm.forceCompleteQuest();//完成任务
	qm.sendNextS("好好的解读#b战神突进#k技能吧！", 3);
	qm.dispose();
}