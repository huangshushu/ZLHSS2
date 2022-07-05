function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.spawnNpcForPlayer(1057001, -900, 152);
    qm.dispose();
}