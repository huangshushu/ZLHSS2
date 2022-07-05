function enter(pi) {
    if(pi.isQuestActive(1451) || pi.isQuestActive(1453) || pi.isQuestActive(1455) || pi.isQuestActive(1457) || pi.isQuestActive(1459)){
        pi.resetMap(924000200);
        pi.playPortalSE();
        pi.warp(924000200, 2);
    }else{
    pi.playPortalSE();
    pi.warp(240020401, "out00");
}
}