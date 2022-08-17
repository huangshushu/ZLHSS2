var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
		status++;
	status++;

    if (status == 0) {
        qm.sendNextS("你好，#h0#哦，你就是麦加说的那个人啊。你好？听说你对魔法师之路感兴趣。那么，我魔法师转职官汉斯可以帮助你。",1);
	} else if (status == 1) {
	    qm.sendNextS("相信你应该已经对魔法师有所了解了。那是以较高的智力为基础，使用魔法的职业。虽然远距离和近距离战斗都很出色，但体力稍微有点弱……但是魔法师创造出了很多魔法来克服这一缺点，不要太担心。",1);
	} else if (status == 2) {
	    qm.sendYesNo("你看上去好像充分具备成为魔法师的素质……你想成为魔法师吗？接受的话，我就使用转职官的特权，邀请你到#b魔法密林的魔法图书馆#k去。和我见个面，然后帮你转职。#r但是就算拒绝，也不是没有别的路可走。拒绝的话，我可以为你介绍魔法师以外的职业。#k");
	} else if (status == 3) {
		qm.warp(101000003);
		qm.forceStartQuest();
		qm.dispose();
	} else if (status == 4) {
		qm.sendSimple("你不喜欢魔法师之路吗？很遗憾。但是我尊重你的选择。那你想走哪条道路呢？\r\n#b#L1#战士#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l");
	} else if (status == 5) {
		if (selection == 1) {
			qm.sendNextS("你想选择战士吗？虽然很遗憾，但是没办法。武术教练会联系你的。你可以留意#b左侧的任务提示#k。",1);
		} else if (selection == 3) {
			qm.sendNextS("你想选择弓箭手吗？虽然很遗憾，不过没办法。赫丽娜会和你联系的。你可以通过#b左侧的任务提示#k查看。",1);
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
	    qm.sendYesNo("很高兴能在这里见到你……我来把你变成魔法师吧。做好心理准备了吗？临阵退缩的人，不配成为魔法师。");
	} else if (status == 1) {
		if (mode == 1) {
			qm.sendNextS("成为魔法师的你已然变得更强。并且你也有了作为魔法师可使用的技能, 那就赶紧拿出来试一试吧。",1);
			qm.resetStats(4, 4, 25, 4);
			qm.expandInventory(1, 4);
			qm.expandInventory(2, 4);
			qm.expandInventory(3, 4);
			qm.expandInventory(4, 4);
			qm.changeJob(200);
			//qm.gainSp(3);
			qm.gainItem(1372062,1);
			qm.gainItem(1142107,1);
			qm.forceCompleteQuest();
		} else {
			qm.sendNextS("哎呀……没想到你这么胆小。难道你失去成为魔法师的自信了吗？",1);
			status = -1;
			qm.dispose();
		}
	} else if (status == 2) {
		qm.sendNextS("另外, 你的能力值也得进行适当修改, 以便更加适合魔法师的特点。显然对于魔法师而言, INT才是核心属性, 而LUK为补助属性。若不清楚的话, 不妨使用#b自动分配#k也好。",1);
	} else if (status == 3) {
		qm.sendNextS("为了纪念你已成为魔法师, 我还将适当给你增加背包空间。你可以收集更多的武器和防具, 让自己变得更加强大。",1);
	} else if (status == 4) {
		qm.sendNextS("对了，有一点需要注意。虽然新手的时候没关系，但是成为魔法师的瞬间开始，必须小心不要死掉……万一死了的话，之前积累的经验值可能会受到损失……",1);
	} else if (status == 5) {
		qm.sendNextS("我能教你的只有这些……我送了你一把杖，现在你去锻炼自己，让自己变得更强吧。",1);
		status = -1;
		qm.dispose();
	}
}
