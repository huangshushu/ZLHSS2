function enter(pi) {
    var em = pi.getEventManager("siwu");
    var eim = em.getInstance("siwu")
    if (em.getProperty("state") == "4") {
        var map = eim.getMapInstance(350051050);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            eim.getPlayers().get(i).changeMap(map, map.getPortal(0))
        }
        pi.playerMessage(6,"goto_maze1050")
    }else{
        pi.warp(350051050,0);
    }
}