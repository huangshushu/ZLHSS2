/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
var skills = Array(21001003, 21000000, 21100000, 21100002, 21100004, 21100005, 21110002);
//polearm booster, combo ability, polearm mastery, final charge, combo smash, combo drain, full swing

function start(mode, type, selection) {
	qm.sendNext("你想要一个撑杆？ 哈哈！ 你看起来不强。 方式胜过你的联赛。 如果你想要一个杆臂，通过狩猎证明我错了 #r#o9001012#s#k 到这里的西边，找到 30 #b#t4032311##k!");
	qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		qm.sendNext("哈哈！ 你已经证明了你的价值，你会得到你想要的; 最好的手臂可能!");
	} else if (status == 1) {
	// if (qm.getPlayerStat("RSP") > (qm.getPlayerStat("LVL") - 30) * 3) {
	    // qm.sendNext("你还有太多了#b技能点#k。我强烈敦促你使用更多的技能点在你的一级和二级技能.");
	    // qm.dispose();
	    // return;
	// }
		qm.sendNextS("我的记忆回来了...", 2);
		qm.changeJob(2110);
		qm.removeAll(4032311);
		qm.forceCompleteQuest(21201);
		qm.gainItem(1142130,1);
	for (var i = 0; i < skills.length; i++) {
		//qm.teachSkill(skills[i], qm.getPlayer().getSkillLevel(skills[i]));
	}
	    qm.forceCompleteQuest(21201);
		qm.forceCompleteQuest(21202);
	} else if (status == 2) {
		qm.sendOk("哈哈！ 你有你想要的，现在离开!");
		qm.dispose();
	}
}