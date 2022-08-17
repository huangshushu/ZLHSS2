var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 5)
		status++;
	status++;

    if (status == 0) {
        qm.sendNextS("嗯，麦加说的果然没错，你看上去很有天赋。见到你很高兴。我叫凯琳，是海盗船诺特勒斯号的船长，同时也是海盗们的转职官。听说你对海盗感兴趣，是吗？",1);
	} else if (status == 1) {
	    qm.sendNextS("我们得先谈点个人的事情。为了对抗威胁冒险岛世界的人——黑魔法师，我在不久前组建了海盗团。诺特勒斯号的海盗们现在正在冒险岛世界各地调查黑魔法师的痕迹。",1);
	} else if (status == 2) {
	    qm.sendNextS("如果你成为海盗的话，就必须帮助调查黑魔法师。当然，这不是义务，而是建议。虽然我是海盗们的转职官，但不是海盗们的主人。所以不是命令，只是建议。",1);
	} else if (status == 3) {
	    qm.sendNextS("如果你是在冒险岛世界冒险的人，相信你一定愿意为冒险岛世界做这些事情。不是出于奖励，而是出于善意……呵呵。好像扯得太长了。你先记住这些，真正重要的在后面。",1);
	} else if (status == 4) {
	    qm.sendNextS("海盗大致分为使用短枪的人和使用体术的人，各自的技能存在很大的差别。如果说有什么共同点的话，那就是都有华丽的连续技。虽然操作很难，但熟悉了的话，就会变得很强。",1);
	} else if (status == 5) {
	    qm.sendYesNo("我好像说得太多了……你快决定吧。到底是成为海盗，还是选择其他职业？如果想成为海盗，我就使用转职官的特权，马上邀请你到诺特勒斯号去。#r拒绝的话，我会建议你选择其他职业。请别担心#k。");
	} else if (status == 6) {
		qm.warp(120000101);
		qm.forceStartQuest();
		qm.dispose();
	} else if (status == 7) {
		qm.sendSimple("你想选择海盗以外的其他道路吗？这也不坏。那你想选择什么职业呢？ \r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l");
	} else if (status == 8) {
		if (selection == 1) {
			qm.sendNextS("你想选择战士吗？虽然很遗憾，但是没办法。武术教练会联系你的。你可以留意#b左侧的任务提示#k。",1);
		} else if (selection == 2) {
			qm.sendNextS("你想走魔法师之路吗？虽然很遗憾，但我尊重你的选择。#b汉斯#k会联系你的。你可以通过#b左侧的任务提示#k查看。",1);
		} else if (selection == 3) {
			qm.sendNextS("你想选择弓箭手吗？虽然很遗憾，不过没办法。赫丽娜会和你联系的。你可以通过#b左侧的任务提示#k查看。",1);
		} else if (selection == 4) {
			qm.sendNextS("你想选择飞侠吗？虽然很遗憾，不过没办法。达克鲁会和你联系的。你可以通过#b左侧的任务提示#k查看。",1);
		}
		if (selection > 0 && selection < 6)
			qm.forceStartQuest(1406, selection);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
    if (status == 0) {
	    qm.sendYesNo("很高兴能在这里见到你……干嘛这么吃惊？我看上去太年轻了吗？其实我的年纪比看上去要大得多，你可别小看我。好了，我马上让你转职成海盗。");
	} else if (status == 1) {
		if (mode == 1) {
			qm.sendNextS("好了，现在你已经是海盗的一员了。你已经有了很多海盗技能，你可以打开技能窗看一看。我给了你一些SP，你可以用来提升技能。随着等级的升高，你可以使用更多的技能。努力修炼吧。",1);
			qm.resetStats(4, 4, 4, 4);
			qm.expandInventory(1, 12);
			qm.expandInventory(2, 12);
			qm.expandInventory(3, 12);
			qm.expandInventory(4, 12);
			qm.changeJob(500);
			//qm.gainSp(3);
			qm.gainItem(1482065,1);
			qm.gainItem(1492065,1);
			qm.gainItem(2330000, 800);
			qm.gainItem(2330000, 800);
			qm.gainItem(2330000, 800);
			qm.gainItem(1142107,1);
			qm.forceCompleteQuest();
		} else {
			qm.sendNextS("你还没做好心理准备吗？",1);
			status = -1;
			qm.dispose();
		}
	} else if (status == 2) {
		qm.sendNextS("光是技能还不行。请你打开属性窗，按照海盗的需要对自己的属性进行分配。想成为拳手的话，就以力量为中心，想成为火枪手的话，就以敏捷为中心。不知道的话，使用#b自动分配#k会比较方便。",1);
	} else if (status == 3) {
		qm.sendNextS("还有一个礼物就是, 我给你增加了装备、消费、设置、其他道具保管箱的数量。若有价值的物品就放到背包里好了。",1);
	} else if (status == 4) {
		qm.sendNextS("啊，还有一件事必须记住。你已经从新手成为了海盗，战斗时一定要注意体力。死了的话，之前积累的经验值会受到损失。要是辛苦积累到的经验值受到损失，岂不是很冤枉？",1);
	} else if (status == 5) {
		qm.sendNextS("好了！我能教你的就只有这些。我给了你几件适合你使用的武器，希望你一边旅行，一边锻炼自己。如果遇到了黑魔法师的部下，一定要消灭掉他们！明白了吗？",1);
		status = -1;
		qm.dispose();
	}
}
