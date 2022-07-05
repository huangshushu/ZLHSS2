function enter(pi) {
    var em = pi.getEventManager("siwu");
    var eim = em.getInstance("siwu")
    if (em.getProperty("state") == "2") {
        var map = eim.getMapInstance(350050300);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            eim.getPlayers().get(i).changeMap(map, map.getPortal(0))
        }
        pi.playerMessage(6,"clo4_350050200")
    }else{
        pi.warp(350050300,0);
    }
}