function enter(pi) {
    var returnMap = 100000000;;
    var target = pi.getMap(returnMap);
    var portal = target.getPortal("Achter00");
    if (portal == null) {
	portal = target.getPortal(0);
    }
    if (pi.getMapId() != target) {
	pi.getPlayer().changeMap(target, portal);
    }
}
