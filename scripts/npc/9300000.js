function start() {
	cm.sendYesNo("施主想要去红鸾宫吗？贫道可以送你过去~");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(700000000);
	}
	cm.dispose();

}