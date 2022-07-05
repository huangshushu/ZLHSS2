function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        var em = pi.getEventManager("siwu");
        var eim = em.getInstance("siwu")
        if (em.getProperty("state") == "4") {
            var map = eim.getMapInstance(350051100);
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).changeMap(map, map.getPortal(0))
            }
            pi.playerMessage(6, "go_maze1100");
        }else{
            pi.warp(350051100,0)
        }
    } else {
        pi.playerMessage(-1, "必须消灭区域内的所有怪物才能移动到下一回合。");
        pi.playerMessage(5, "必须消灭区域内的所有怪物才能移动到下一回合。");
    }
}