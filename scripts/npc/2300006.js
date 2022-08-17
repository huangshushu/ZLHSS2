function start() {
    cm.sendYesNo("你想通过传送口移动到#m230050000#吗？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(230050000);
	}
    cm.dispose();
}
