function start() {
    cm.sendYesNo("你现在是想离开这里吗?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(105200000, 0);
    }
    cm.dispose();
}
