function start() {
	cm.sendYesNo("你想要回到入口处么？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(700000000);
	}
	cm.dispose();

}