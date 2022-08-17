function enter(pi) {
    pi.playPortalSE();
    try {
        var mapid = pi.getMapId();
        if (mapid == 863010330) {
            pi.warpS(863010300, 0);
        } else if (mapid == 863010430) {
            pi.warpS(863010400, 0);
        }
    } catch (e) {
        pi.getPlayer().dropMessage(5, "Portal Name : " + pi.getPortalName() + " ID : " + pi.getPortal().getId() + "Error: " + e);
    }
}
