function enter(pi) {
    if (pi.getMapId() == 814000200) {
        pi.forceCompleteQuest(58439);
        pi.warp(814000300, 0);
    } else {
        pi.warp(814000000, 0);
    }
}