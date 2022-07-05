function enter(pi) {
    if (!pi.isQuestFinished(58443)) {
        pi.topMsg("現在還無法移動。");
        return;
    }
    pi.warp(814000400, 0);
}