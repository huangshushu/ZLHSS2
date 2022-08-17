function start() {
    cm.sendSimple("Go to school already!\r\n#L0#Go to school#l\r\n#L1#View my friendship status#l");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    switch (selection) {
        case 0:
            //cm.warp();
            cm.dispose();
            break;
        case 1:
            cm.sendRedLeaf(true, false);
            cm.dispose();
            break;
    }
}