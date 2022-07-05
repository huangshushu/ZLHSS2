function enter(pi) {
    if (pi.haveItem(4009159, 100)) {
        pi.gainItem(4009159, -100);
        var em = pi.getEventManager("siwu");
        var eim = em.getInstance("siwu")
        if (em.getProperty("state") == "4") {
            var map = eim.getMapInstance(350051200);
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).changeMap(map, map.getPortal(0))
                pi.playerMessage(6,"goto_maze1200");
            }
        }else{
            pi.warp(350051200,0)
        }
    } else {
        pi.openNpc(1540446, 1);
    }
}