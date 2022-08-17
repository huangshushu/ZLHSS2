function enter(pi) {
    var returnMap = pi.getSavedLocation("PQ_OUT1");
    pi.clearSavedLocation("PQ_OUT1");

    var target = pi.getMap(returnMap);
    var portal = target.getPortal("unityPortal2");
    if (portal == null) {
        portal = target.getPortal(0);
    }
    if (pi.getMapId() != target) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(target, portal);
    }
}