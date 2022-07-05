function start() {
    cm.sendYesNo("你要回到自由市场吗?");
}

function action(mode, type, selection) {
    if (mode == 1) {
    cm.warp(910000000,0);
    }
    cm.dispose();
}
