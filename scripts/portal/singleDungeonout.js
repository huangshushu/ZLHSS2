function enter(pi) {
    pi.playPortalSE();
    pi.warp(pi.getSavedLocation("MIRROR"), 0);
    pi.clearSavedLocation("MIRROR");
    return true;
}