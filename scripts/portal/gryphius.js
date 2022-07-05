function enter(pi) {
    if(pi.isQuestActive(1451) || pi.isQuestActive(1453) || pi.isQuestActive(1455) || pi.isQuestActive(1457) || pi.isQuestActive(1459)){
        pi.resetMap(924000201);
        pi.playPortalSE();
        pi.warp(924000201, 2);
    }else{
    pi.playPortalSE();
    pi.warp(240020101, "out00");
}
}