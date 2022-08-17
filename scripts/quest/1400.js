/* Author: Xterminator (Modified by RMZero213)
	NPC Name: 		Roger
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Quest - Roger's Apple
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    qm.sendNext("嗯，你的练级取得了很好的进步。 你决定要做哪个工作？ 你可能是一个拥有强大力量和高HP的战士，拥有许多法术的魔法师，从远处射箭的弓箭手，使用快速，偷偷摸摸的攻击的小偷，或者拥有各种华丽链条技能的海盗...... 很多!");
	} else if (status == 1) {
	    qm.sendSimple("如果你去维多利亚岛，你可以通过找到合适的工作指导员来完成你选择的工作。 但在此之前，lemme知道你感兴趣的是哪一个，我会发送 #b他们# 推荐信。 这使您更容易前进！ 那么，你会选择哪个工作?\r\n#b#L1#我想成为一个强大的战士!#l\r\n#L2#我想成为一个神秘的魔术师!#l\r\n#L3#我想成为一名敏锐的弓箭手!#l\r\n#L4#我想成为一个偷偷摸摸的飞侠!#l\r\n#L5#我想成为一个虚张声势的海盗!#l");
	} else if (status == 2) {
	    sel = selection;
	    if (selection == 1) {
		qm.sendNext("一个战士，对吧？ 男孩，你会变得非常强大！ 他们可以承受大量的伤害，也可以充足。 好的，我会把我的推荐发送给 #b与炎魔共舞#k, 战士工作指导员.");
	    } else if (selection == 2) {
		qm.sendOk("Testting");
	    } else if (sel == 3) {
		qm.sendNext("你想成为一名鲍曼？ 我希望你有一个非常好的目标！ 凭借他们的灵巧性，他们可以毫无疑问地避免攻击并解雇他们自己的攻击。 好的，我会把我的推荐发送给 #b雅典娜皮尔斯#k, 鲍曼工作指导员.");
	    } else if (selection == 4) {
		qm.sendOk("飞侠");
	    } else if (selection == 5) {
		qm.sendOk("海盗");
	    }
	    qm.forceStartQuest(1406, sel);
	    qm.forceCompleteQuest();
	} else if (status == 3) {
	    if (sel == 1) {
		qm.sendNextPrev("当你到达Lv.10时,他想要联系。成为一个伟大的战士!");
	    } else if (sel == 2) {
	    } else if (sel == 3) {
		qm.sendNextPrev("一旦你到达Lv.10时，她会联系你。 我希望你成为一个伟大的弓箭手!");
	    } else if (sel == 4) {
	    } else if (sel == 5) {
	} else if (status == 4) {
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {
}