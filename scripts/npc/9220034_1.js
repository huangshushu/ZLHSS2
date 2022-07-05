function start() {
    cm.sendYesNo("你要离开这里吗?");
}

function action(mode, type, selection) {
    if (mode == 1) {
    cm.warp(510100200,0);
    }
    cm.dispose();
}
