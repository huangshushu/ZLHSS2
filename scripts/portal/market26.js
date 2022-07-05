function enter(pi) {
    if (pi.getPlayer().getMapId() != 910000000) {
        pi.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("FREE_MARKET"));
        pi.warp(910000000, "out00");
        return true;
    }
    return false;
	
}