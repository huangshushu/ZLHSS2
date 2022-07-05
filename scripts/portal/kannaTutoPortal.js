function enter(pi) {
    if (pi.getMap().getAllMonster().size() == 0) {
        pi.openNpc(0,"kannaTutoPortal");
    } else {
        pi.topMsg("打敗所有的敵人！");
    }
}
