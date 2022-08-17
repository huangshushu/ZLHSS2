var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("看来你还不想离开这里..");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("你是否想要现在就离开这里了,回到射手村？");
    } else if (status == 1) {
        cm.warp(100000000, 0);
        cm.dispose();
    }
}
