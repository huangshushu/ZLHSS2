var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 3)
		status++;
	status++;

    if (status == 0) {
        qm.sendNextS("麦加说的那个人就是你？#h0#……嗯，据她说，你是个很有天赋的小孩……喂，你想成为飞侠吗？你知道飞侠吗？",1);
	} else if (status == 1) {
	    qm.sendNextS("有些人觉得飞侠是些偷偷摸摸的小偷，但其实不是这样的。冒险岛世界的飞侠是在黑暗中用锋利的短刀和飞镖战斗的人。可能有一点不是那么堂堂正正，但是这就是飞侠的本质，没有必要否定。",1);
	} else if (status == 2) {
	    qm.sendNextS("飞侠是可以用快速强力技能攻击敌人的职业。虽然你体力较弱，但因为行动快速，所以可以轻松地躲避怪物。因为运气很强，所以擅长爆击。",1);
	} else if (status == 3) {
	    qm.sendYesNo("怎么样？你想一起踏上飞侠之路吗？如果你决定选择飞侠之路，我就使用转职官的特权，邀请你到#b废都的废都酒吧#k去……那是个隐秘的地方，你应该感到荣幸。#r但是如果更喜欢其他职业的话，你可以拒绝。我会为你推荐飞侠之外的其他道路#k。");
	} else if (status == 4) {
		qm.warp(103000003);
		qm.forceStartQuest();
		qm.dispose();
	} else if (status == 5) {
		qm.sendSimple("你不喜欢飞侠之路吗？不喜欢的话，我也不想勉强。那你想选择什么职业呢？\r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L5#海盗#l");
	} else if (status == 6) {
		if (selection == 1) {
			qm.sendNextS("你想选择战士吗？虽然很遗憾，但是没办法。武术教练会联系你的。你可以留意#b左侧的任务提示#k。",1);
		} else if (selection == 2) {
			qm.sendNextS("你想走魔法师之路吗？虽然很遗憾，但我尊重你的选择。#b汉斯#k会联系你的。你可以通过#b左侧的任务提示#k查看。",1);
		} else if (selection == 3) {
			qm.sendNextS("你想选择弓箭手吗？虽然很遗憾，不过没办法。赫丽娜会和你联系的。你可以通过#b左侧的任务提示#k查看。",1);
		} else if (selection == 5) {
			qm.sendNextS("你选择海盗吗？嗯……那也不错。凯琳很快就会和你联系。注意#b左侧的任务提示#k。",1);
		}
		if (selection > 0 && selection < 6)
			qm.forceStartQuest(1406, selection);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
    if (status == 0) {
	    qm.sendYesNo("很高兴能在这里见到你……我来把你变成飞侠吧。做好心理准备了吗？临阵退缩的人，不配成为飞侠。");
	} else if (status == 1) {
		if (mode == 1) {
			qm.sendNextS("成为飞侠的你已然变得更强。并且你也有了作为飞侠可使用的技能, 那就赶紧拿出来试一试吧。",1);
			qm.resetStats(4, 4, 4, 25);
			qm.expandInventory(1, 4);
			qm.expandInventory(2, 4);
			qm.expandInventory(3, 4);
			qm.expandInventory(4, 4);
			qm.changeJob(400);
			//qm.gainSp(3);
			qm.gainItem(1332063,1);
			qm.gainItem(1472000,1);
			qm.gainItem(1472063,1);
			qm.gainItem(2070008, 800);
			qm.gainItem(2070008, 800);
			qm.gainItem(2070008, 800);
			qm.gainItem(1142107,1);
			qm.forceCompleteQuest();
		} else {
			qm.sendNextS("哎呀……没想到你这么胆小。难道你失去成为飞侠的自信了吗？",1);
			status = -1;
			qm.dispose();
		}
	} else if (status == 2) {
		qm.sendNextS("另外, 你的能力值也得进行适当修改, 以便更加适合飞侠的特点。显然对于飞侠而言, LUK才是核心属性, 而DEX为补助属性。若不清楚的话, 不妨使用#b自动分配#k也好。",1);
	} else if (status == 3) {
		qm.sendNextS("为了纪念你已成为飞侠, 我还将适当给你增加背包空间。你可以收集更多的武器和防具, 让自己变得更加强大。",1);
	} else if (status == 4) {
		qm.sendNextS("对了，有一点需要注意。虽然新手的时候没关系，但是成为飞侠的瞬间开始，必须小心不要死掉……万一死了的话，之前积累的经验值可能会受到损失……",1);
	} else if (status == 5) {
		qm.sendNextS("我能教你的只有这些……我送了你一些装备，现在你去锻炼自己，让自己变得更强吧。",1);
		status = -1;
		qm.dispose();
	}
}
