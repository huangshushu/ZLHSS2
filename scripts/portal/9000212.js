function start() {
    cm.sendYesNo("你确定要离开这里到外面去吗？\r\n请慎重");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(910000000);
    }
    cm.dispose();
}