var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
		status++;
	status++;

    if (status == 0) {
        qm.sendNextS("你就是麦加推荐的那个人啊。听说你想转职成战士……对吗？我就是战士转职官武术教练。我可以为想要以战士身份冒险的人提供帮助。",1);
	} else if (status == 1) {
	    qm.sendNextS("你对战士了解多少呢？战士是以强大的力量和体力为基础，挥舞近战武器打倒敌人的职业。在最接近敌人的地方战斗的无畏的人。是不是很有魅力？",1);
	} else if (status == 2) {
	    qm.sendYesNo("你好像充分拥有了资格。像你这样的人想成为战士，我随时表示欢迎。你想成为战士吗？接受的话，我就使用转职官的特权，邀请你到#b勇士部落的战士圣殿#k去。#r但是就算拒绝，也不是没有别的路可走。拒绝的话，我可以引导你走其他职业的道路#k。");
	} else if (status == 3) {
		qm.warp(102000003);
		qm.forceStartQuest();
		qm.dispose();
	} else if (status == 4) {
		qm.sendSimple("你不想走战士之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了战士之外，还有四条道路可供选择。\r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l");
	} else if (status == 5) {
		if (selection == 2) {
			qm.sendNextS("你想走魔法师之路吗？虽然很遗憾，但我尊重你的选择。#b汉斯#k会联系你的。你可以通过#b左侧的任务提示#k查看。",1);
		} else if (selection == 3) {
			qm.sendNextS("你想走弓箭手之路吗？虽然很遗憾，但我尊重你的选择。#b赫丽娜#k会联系你的。你可以通过#b左侧的任务提示#k查看。",1);
		} else if (selection == 4) {
			qm.sendNextS("你想走飞侠之路吗？虽然很遗憾，但我尊重你的选择。#b达克鲁#k会联系你的。你可以通过#b左侧的任务提示#k查看。",1);
		} else if (selection == 5) {
			qm.sendNextS("你想走海盗之路吗？虽然很遗憾，但我尊重你的选择。#b凯琳#k会联系你的。你可以通过#b左侧的任务提示#k查看。",1);
		}
		if (selection > 0 && selection < 6)
			qm.forceStartQuest(1406, selection);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
    if (status == 0) {
	    qm.sendYesNo("很高兴能在这里见到你……我来把你变成战士吧。做好心理准备了吗？临阵退缩的人，不配成为战士。");
	} else if (status == 1) {
		if (mode == 1) {
			qm.sendNextS("成为战士的你已然变得更强。并且你也有了作为战士可使用的技能, 那就赶紧拿出来试一试吧。",1);
			qm.resetStats(25, 4, 4, 4);
			qm.expandInventory(1, 4);
			qm.expandInventory(2, 4);
			qm.expandInventory(3, 4);
			qm.expandInventory(4, 4);
			qm.changeJob(100);
			//qm.gainSp(3);
			qm.gainItem(1302150,1);
			qm.gainItem(1142107,1);
			qm.forceCompleteQuest();
		} else {
			qm.sendNextS("哎呀……没想到你这么胆小。难道你失去成为战士的自信了吗？",1);
			status = -1;
			qm.dispose();
		}
	} else if (status == 2) {
		qm.sendNextS("另外, 你的能力值也得进行适当修改, 以便更加适合战士的特点。显然对于战士而言, STR才是核心属性, 而DEX为补助属性。若不清楚的话, 不妨使用#b自动分配#k也好。",1);
	} else if (status == 3) {
		qm.sendNextS("为了纪念你已成为战士, 我还将适当给你增加背包空间。你可以收集更多的武器和防具, 让自己变得更加强大。",1);
	} else if (status == 4) {
		qm.sendNextS("对了，有一点需要注意。虽然新手的时候没关系，但是成为战士的瞬间开始，必须小心不要死掉……万一死了的话，之前积累的经验值可能会受到损失……",1);
	} else if (status == 5) {
		qm.sendNextS("我能教你的只有这些……我送了你一把#b扫把#k，现在你去锻炼自己，让自己变得更强吧。",1);
		status = -1;
		qm.dispose();
	}
}
