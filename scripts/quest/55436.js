var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        qm.sendNextN("……我能理解. 对于我这种人你一定没什么兴趣的. 即使世界发生变化. ");
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        qm.openUI(0x134);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        qm.dispose();
    }
}