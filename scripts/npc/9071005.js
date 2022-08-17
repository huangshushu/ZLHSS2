
var status = 0;

function start() {
    if (cm.getMapId() == 951000000) {
	cm.dispose();
	return;
    }
    cm.sendYesNo("你想提前退出怪物公园吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(951000000);
    }
    cm.dispose();
}