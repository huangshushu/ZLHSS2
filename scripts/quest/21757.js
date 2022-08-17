/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.removeAll(4032330);
	qm.gainItem(4032330, 1);	
	//qm.sendNextS("自己那里有一封写着其他封印石的情报的信，他说可以把信交给我。但是我却没办法拿到那封信……#b因为我和#p2131000#是属于两个不同时代的人#k。\n\n#p2131000#说自己是可以活很长时间的妖精，说会在我那个时代把信交给我。只要离开艾琳森林，#b在原来的时空里找到#p2131000#就行#k。#p2131000#在哪儿呢？去问问#b#p1002104##k吧。。", 3);
	//qm.forceStartQuest(21765, "2");//给他可以开开始任务的条件
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();//完成任务
	qm.removeAll(4032330);
	qm.gainExp(1000);
	qm.teachSkill(21110002, qm.getPlayer().getSkillLevel(21110002), 20);   // 全力灰挥击
	//qm.teachSkill(21110007, qm.getPlayer().getSkillLevel(21110007), 20);   // 全力灰挥击
	//qm.teachSkill(21110008, qm.getPlayer().getSkillLevel(21110008), 20);   // 全力灰挥击
	//\r\n算了，#r全力灰挥击#k就交给你吧
	//cm.forceStartQuest(100112); //开始任务
	qm.forceCompleteQuest(21758); //完成任务
	qm.sendNextS("我会对信的内容进行慎重的讨论和研究。怎么看上去有点不太可靠啊？", 3);
	qm.dispose();
}