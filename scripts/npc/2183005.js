function start() {
    cm.sendYesNoS("So, you really want to leave?", 4);
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(262010000,0);
    }
    cm.dispose();
}