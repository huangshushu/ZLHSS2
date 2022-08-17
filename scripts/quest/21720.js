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
	qm.forceCompleteQuest();//完成任务
	qm.teachSkill(21001003, qm.getPlayer().getSkillLevel(21001003), 20);
	qm.gainExp(3900);
	qm.sendNextPrevS("很好，我现在就把快速矛传授给你！", 2);
	qm.dispose();
}