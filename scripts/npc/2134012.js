var status = -1;

function start() {
	cm.sendYesNo("要返回先前所在的地方吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
		status--;
    }
    if (status == 0) {
		cm.warp(cm.getSavedLocation("MULUNG_TC"));
		cm.clearSavedLocation("MULUNG_TC");
		cm.dispose();
    } else {
        cm.dispose();
    }
}
