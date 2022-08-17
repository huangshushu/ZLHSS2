function enter(pi) {
    if (pi.isQuestActive(20033)) {
        var blocked = true;
        for (var i = 913070020; i <= 913070039; i++)
            if (pi.getPlayerCount(i) == 0) {
                if (pi.itemQuantity(4033196) >= 1)
                    pi.gainItem(4033196, -pi.itemQuantity(4033196)); 
                pi.resetMap(i);
                pi.warp(i, 0);
                blocked = false;
                return true;
                break;
            }
    } else {
        pi.topMsg("Limbert wants to see you.");
        blocked = false;
        return false;
    }
    if (blocked)
        pi.getPlayer().dropMessage(5, "Someone is already in this map.");
    return true;
}
