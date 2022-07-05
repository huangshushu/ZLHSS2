function start() {
	cm.sendYesNo("你确定要离开吗?我将把你带回自由市场");
}

function action(mode, type, selection) {
    	if (mode == 1) {
		cm.warp(910000000,6);
	}
	cm.dispose();
}
