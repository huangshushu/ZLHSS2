var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestActive(3923)) {
		if (!cm.haveItem(4031578)) {
			cm.gainItem(4031578,1);
			cm.sendNext("看起来敲到什么好康的了。");
		}
	}
    cm.dispose();
}
