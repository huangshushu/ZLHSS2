function enter(pi) {
    var returnMap = pi.getSavedLocation("MULUNG_TC");
    pi.clearSavedLocation("MULUNG_TC");
    if (returnMap == 950000100) {
	returnMap = 211000000;
    }
    var target = pi.getMap(returnMap);
    var portal = target.getPortal("unityPortal2");
    if (portal == null) {
	portal = target.getPortal(0);
    }
    if (pi.getMapId() != target) {
	pi.getPlayer().changeMap(target, portal);
    }
}
