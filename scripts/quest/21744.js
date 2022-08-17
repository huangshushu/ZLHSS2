/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	//qm.sendNextS("不久之前，#p2090004#从一个自称是黑色之翼成员的名叫#r#o9300351##k的男人那里得到了#t4220151#。但是因为保管的失误，#t4220151#的内容全部不见了。必须复原#t4220151#，看看上面写的是什么内容。去向#b画师#p2091008##k咨询复原#t4220151#的方法吧,他就在#r武陵#k。", 3);
	//qm.removeAll(4220151);暂时没办法修复
	//qm.gainItem(4220151, 1);
	qm.forceStartQuest(21742);//开始任务
	qm.forceStartQuest(21743);//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest(21742);//完成任务
	qm.forceCompleteQuest(21743);//完成任务
	qm.dispose();
}