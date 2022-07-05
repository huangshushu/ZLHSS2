function enter(pi) {
    var em = pi.getEventManager("Kenta");
    var eim = pi.getEventInstance();
    if (em != null && eim != null && pi.getPlayer().getParty() != null) {
        var state = eim.getProperty("kenta_batAttack");
        if (state.equals("2")) {
            //pi.warpParty(pi.getMapId() + 100);
            eim.getMapInstance(2).getReactorById(9238003).forceHitReactor(1, 10, 0, -1);
            //eim.getMapInstance(2).getReactorById(9238003).forceHitReactor(2, 5, 0, 0);
        }
    }
}
