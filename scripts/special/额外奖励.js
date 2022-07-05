var select = -1;

function start() {
    var Editing = false //false 开始
    if (Editing) {
        cm.sendOk("维修中");
        cm.dispose();
        return;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
		cm.sendSimple("#L1#打开商店#l\t\t#L2#升1级#l");
    } else if (status == 1) {
		if (selection == 1) {
			cm.openShop(201);
			cm.dispose();
		} else {
			var getExpNeededForLevel = Packages.constants.GameConstants.getExpNeededForLevel(cm.getPlayer().getLevel());
			cm.gainExp(getExpNeededForLevel);
			cm.dispose();
		}
    }
}


