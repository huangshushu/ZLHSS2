var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
		qm.dispose();
    } else {
		status++;

		if (status == 0) {
			qm.sendNext("哇, 你现在比我上次见你的时候强了很多呢, 我觉得你现在是时候转职了。");
		} else if (status == 1) {
			qm.sendNextPrev("这是魔法师在30级或以上才能进行的!");
		} else if (status == 2) {
			qm.sendYesNo("那么..... 你想测试自己的能力吗? 你只需要消灭那些怪物获得30个黑珠就可以了! ");
		} else if (status == 3) {
			if (mode == 1) {
				qm.forceStartQuest();
				if (!qm.haveItem(4031013, 30)) {
					qm.warp(910140000);//mage test
				}
			} else {
				qm.sendNext("好吧,那么你想转职的时候再来找我吧。");
			}
			qm.dispose();
		} else {
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
			if (qm.haveItem(4031013, 30) && qm.canHold(1142108)) {
				qm.removeAll(4031013);
				qm.gainItem(1142108, 1);
				qm.sendOk("恭喜!你现在是一名牧师了!");
				qm.changeJob(230);
				//qm.gainSp(3);
				qm.forceCompleteQuest();
			} else {
				qm.sendNext("请确认你装备栏有一格空间。");
			}
			qm.dispose();
		} else {
			qm.dispose();
		}
	}
}
