function enter(pi) {
    var em = pi.getEventManager("OrbisPQ");
    var eim = pi.getEventInstance();
    if (em != null && eim != null && pi.getPlayer().getParty() != null) {
        pi.warp(933032000, 0);
    }
}
