function enter(pi) {
    pi.playPortalSE();
    if (pi.getPlayer().getMapId() == 101020400) {
        pi.warp(331001000, 4);
    } else {
        pi.warp(101020400, 5);
    }
    return true;
}
