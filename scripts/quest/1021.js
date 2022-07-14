var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	
	if (status == 0) {
	    qm.sendNext("嗨, 怎么了吗? 我是罗杰，可以教你一些有用的知识");
	} else if (status == 1) {
		qm.sendNextPrev("你问我为什么在这里吗? 哈哈哈!\r我想要教导那些刚进冒险岛的新手啊。");
	} else if (status == 2) {
	qm.sendAcceptDecline("所以..... 让我们來玩点有趣的~!");
	} else if (status == 3) {
	    if (!qm.haveItem(2010007)) {
		qm.gainItem(2010007, 1);
	    }
	    qm.sendNext("请把它吃完然后\r\n我等等会给你#r神秘小礼物#k。 请务必收下啊。 使用后你会变得更强壮。 打开消耗栏，双击一下苹果 很简单的，按一下键盘的 #bI#k就能了喔！");
	} else if (status == 4) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}
        
function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    if (qm.getPlayerStat("HP") < 50) {
		qm.sendNext("哈囉，你還沒把我給你的蘋果吃掉啊，趕快吃了再來找我吧。");
		qm.dispose();
	    } else {
		qm.sendNext("你看～是不是很简单？ 你可以在右侧的栏位设定#b热键#k。 哈哈，你听不懂对吧？ 喔，每隔一段時間，血量就会恢复了。 虽然很花时间，但好好运用的话可以帮助不少的。");
	    }
	} else if (status == 1) {
	    qm.gainExp(10);
	    qm.gainItem(2010000, 3);
	    qm.gainItem(2010009, 3);
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
    }
}