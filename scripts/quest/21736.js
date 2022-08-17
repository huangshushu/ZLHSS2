/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.sendNextS("#p1002104#说收到了和黑色之翼有关的情报，让我去见见#b#m200000000##k的#b妖精#p2012012##k。在#p2012012#那里，应该可以了解到详细的情况。", 3);
	qm.dispose();
}

function end(mode, type, selection) {
	//qm.teachSkill(21100005, qm.getPlayer().getSkillLevel(21100005), 10);   // Combo Ability 
	qm.forceCompleteQuest();//完成任务
	qm.dispose();
}