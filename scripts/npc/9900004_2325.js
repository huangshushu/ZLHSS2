var status = -1;
var map = 910000019;
var num = 3;
var maxp = 2;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status <= 1) {
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
		var selStr = "选择一个你想要去的房间.";
		for (var i = 1; i < num; i++) {
			selStr += "\r\n#b#L" + i + "##v3015259#双人boss挑战房间 " + i + " (" + cm.getPlayerCount(map + i) + "/" + maxp + ")#l#k";
		}
		cm.sendSimple(selStr);
    } else if (status == 1) {
		if (selection < 0 || selection >= num) {
			cm.dispose();
		} else if (cm.getPlayer().getLevel() <= 119) {
            cm.sendNext("需要达到120级才可以进入。");
            cm.dispose();
		} else if (cm.getPlayerCount(map + selection) >= maxp) {
			cm.sendNext("这个线的副本已经有人，请稍后再尝试!");
			status = -1;
		} else {
			cm.warp(map + selection, 0);
			cm.dispose();
		}
    }
}