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
	qm.gainExp(1000);
	qm.teachSkill(21110002, qm.getPlayer().getSkillLevel(21110002), 20);   // 全力灰挥击
	//qm.teachSkill(21110007, qm.getPlayer().getSkillLevel(21110007), 20);   // 全力灰挥击
	//qm.teachSkill(21110007, qm.getPlayer().getSkillLevel(21110008), 20);   // 全力灰挥击
	//\r\n算了，#r全力灰挥击#k就交给你吧
	qm.sendNextS("我会对信的内容进行慎重的讨论和研究。怎么看上去有点不太可靠啊？", 3);
	qm.forceCompleteQuest();//完成任务
	qm.dispose();
}