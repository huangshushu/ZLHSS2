/*
 ZEVMS冒险岛(079)游戏服务端
 */

importPackage(Packages.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.forceCompleteQuest(22015);
			cm.playerMessage("You have rescued the Piglet.");
			cm.gainItem(4032449, 1);
			cm.dispose();
		}
	}
}