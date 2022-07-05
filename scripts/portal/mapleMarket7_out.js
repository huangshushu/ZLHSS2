

function enter(pi) {
    var returnMap = pi.getSavedLocation("EVENT");
    pi.clearSavedLocation("EVENT");

    if (returnMap < 0) {
	returnMap = 102000000; 
    }
    var target = pi.getMap(returnMap);
    var portal;

    if (returnMap == 230000000) { 
	portal = target.getPortal("EVENT");
    } else {
	portal = target.getPortal("EVENT");
    }
    if (portal == null) {
	portal = target.getPortal(0);
    }
    if (pi.getMapId() != target) {
	pi.getPlayer().changeMap(target, portal);
    }
}