var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
		status++;
	status++;

    if (status == 0) {
        qm.sendNextS("你好，#h0#……我经常听麦加提起你的名字。听说你对弓箭手很感兴趣。我是弓箭手转职官赫丽娜。见到你很高兴……",1);
	} else if (status == 1) {
	    qm.sendNextS("你对弓箭手的了解有多少呢？弓箭手是使用弓或弩，在远距离攻击敌人的职业……虽然移动速度相对较慢，但锐利的箭矢从来不会射偏，每一发都非常具有威胁。",1);
	} else if (status == 2) {
	    qm.sendYesNo("如果你真的想成为弓箭手，我就用转职官的特权，邀请你到#b射手村的弓箭手培训中心#k来。#r如果你想选择其他职业，可以拒绝。我会帮助你走上其他道路的#k……你想成为弓箭手吗？");
	} else if (status == 3) {
		qm.warp(100000201);
		qm.forceStartQuest();
		qm.dispose();
	} else if (status == 4) {
		qm.sendSimple("你想选择其他职业啊……虽然不无遗憾，但这是你自己的选择……那在弓箭手之外，你想选择哪条道路呢？\r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l");
	} else if (status == 5) {
		if (selection == 1) {
			qm.sendNextS("你想选择战士吗？虽然很遗憾，但是没办法。武术教练会联系你的。你可以留意#b左侧的任务提示#k。",1);
		} else if (selection == 2) {
			qm.sendNextS("魔法师……你想和拥有惊人魔法力量的人成为同伴吗？汉斯马上会联系你的。你只要看一下#b左侧的任务提示#k就行。",1);
		} else if (selection == 4) {
			qm.sendNextS("你想选择飞侠吗？虽然很遗憾，不过没办法。达克鲁会和你联系的。你可以通过#b左侧的任务提示#k查看。",1);
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
	    qm.sendYesNo("很高兴能在这里见到你……我来把你变成弓箭手吧。做好心理准备了吗？临阵退缩的人，不配成为弓箭手。");
	} else if (status == 1) {
		if (mode == 1) {
			qm.sendNextS("成为弓箭手的你已然变得更强。并且你也有了作为弓箭手可使用的技能, 那就赶紧拿出来试一试吧。",1);
			qm.resetStats(4, 25, 4, 4);
			qm.expandInventory(1, 4);
			qm.expandInventory(2, 4);
			qm.expandInventory(3, 4);
			qm.expandInventory(4, 4);
			qm.changeJob(300);
			//qm.gainSp(3);
			qm.gainItem(1452091,1);
			qm.gainItem(2060000,5000);
			qm.gainItem(1142107,1);
			qm.forceCompleteQuest();
		} else {
			qm.sendNextS("哎呀……没想到你这么胆小。难道你失去成为弓箭手的自信了吗？",1);
			status = -1;
			qm.dispose();
		}
	} else if (status == 2) {
		qm.sendNextS("另外, 你的能力值也得进行适当修改, 以便更加适合弓箭手的特点。显然对于弓箭手而言, DEX才是核心属性, 而STR为补助属性。若不清楚的话, 不妨使用#b自动分配#k也好。",1);
	} else if (status == 3) {
		qm.sendNextS("为了纪念你已成为弓箭手, 我还将适当给你增加背包空间。你可以收集更多的武器和防具, 让自己变得更加强大。",1);
	} else if (status == 4) {
		qm.sendNextS("对了，有一点需要注意。虽然新手的时候没关系，但是成为弓箭手的瞬间开始，必须小心不要死掉……万一死了的话，之前积累的经验值可能会受到损失……",1);
	} else if (status == 5) {
		qm.sendNextS("我能教你的只有这些……我送了你一把弓和一些箭，现在你去锻炼自己，让自己变得更强吧。",1);
		status = -1;
		qm.dispose();
	}
}
