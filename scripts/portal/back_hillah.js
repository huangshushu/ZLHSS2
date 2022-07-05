function enter(pi) {
    if (pi.getMap().getAllMonster().size() == 0) {
        pi.warp(pi.getMapId()-10, 0);
    } else {
        pi.playerMessage("Empress blocks you from the portal.");
    }
}
