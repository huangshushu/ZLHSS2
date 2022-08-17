/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.sendNextS("向#p1002104#说明了#m200000000#发生的所有事情之后，#p1002104#说最好把这些事情告诉#b#p1201000##k。。", 3);
	qm.dispose();
}

function end(mode, type, selection) {
	qm.teachSkill(21100004, qm.getPlayer().getSkillLevel(21100004), 20);   // Combo Ability 
	qm.forceCompleteQuest();//完成任务
	qm.sendNextS("#r斗气掌握#k技能就交给你了!", 3);
	qm.dispose();
}