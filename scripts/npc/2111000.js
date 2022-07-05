var status = -1;

function start() {
    /*if (cm.isQuestActive(6029)) {
        if (cm.getMeso() >= 500000000) {
            cm.gainMeso(-500000000);
            cm.gainItem(4161037, 1);
			cm.gainExp(5000);
			if (cm.getPlayer().isAran()) {
				cm.teachSkill(20001007, 3, 0);
            } else if (cm.getPlayer().isKOC()) {
                cm.teachSkill(10001007, 3, 0);
            } else {
                cm.teachSkill(1007, 3, 0);
            }
                cm.forceCompleteQuest(6029);
                cm.forceCompleteQuest(6030);
                cm.forceCompleteQuest(6031);
                cm.forceCompleteQuest(6032);
				cm.forceCompleteQuest(6033);
                cm.sendNext("任务完成。获得:#i4161037#1个#b强化合成#k\r\n经验值5000 exp");
            } else {
                cm.sendNext("貌似没有足够的枫币，则无法完成任务。\r\n我需要:#r500,000,000#k枫币。");
            }
            cm.dispose();
        }
	}*/
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >=2 || status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		cm.sendSimple("您好我是#b#p2111000##k找我有什么事情吗?\r\n#r#L0#我要进入封闭的实验室#k#l");
	} else if (status == 1) {
		if (selection == 0) {
			if (cm.getQuestStatus(3310) == 1) {
				cm.warp(926120100);
			} else {
				cm.sendNext("找我有事吗??");
			}
		}
		cm.dispose();
	}
}
