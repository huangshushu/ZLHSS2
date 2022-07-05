
 function enter(pi) {
    if (pi.getQuestStatus(21010) == 2) {
	pi.playPortalSE();
	pi.warp(140090200, 1);
    } else {
	pi.playerMessage(5, "在进行下一张地图之前，你必须完成任务.");
    }
}