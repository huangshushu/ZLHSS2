function enter(pi) {
    var mapid = pi.getPlayer().getMapId();
    var togo = mapid / 100 % 10 == 5 ? mapid + 9500 : mapid + 100;
    if (pi.getPlayer().getMapId() != 270040100) {
        pi.warp(togo, "out00");
        return true;
    } else {
        pi.warp(270050000, 0);
        return true;
    }
    return false;
}