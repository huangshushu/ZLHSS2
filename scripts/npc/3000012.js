var status = 0;

function start() {
    cm.sendYesNo("你现在就要去自由市场吗?");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(910000000);
	}
    cm.dispose();
}