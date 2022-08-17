function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.warp(931050500, 0);
    qm.forceCompleteQuest();
    qm.dispose();
}
