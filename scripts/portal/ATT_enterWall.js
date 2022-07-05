function enter(pi) {/*
    if (!pi.isQuestFinished(58438)) {
        pi.topMsg("現在還無法移動。");
    } else if (!pi.isQuestFinished(58439)) {
        pi.warp(814000100, 0);
    } else if (!pi.isQuestFinished(58440)) {
        pi.warp(814000300, 0);
    } else if (!pi.isQuestFinished(58444)) {
        pi.warp(814000500, 0);
    } else if (!pi.isQuestFinished(58449)) {
        pi.warp(814000400, 0);
    } else if (!pi.isQuestFinished(58450)) {
        pi.warp(814000500, 0);
    } else {*/
        pi.openUI(0x163);
//    }
    if (!pi.haveItem(1073010)) {
        pi.gainItem(1073010, 1);
    }
}