function enter(pi) {
    if (pi.getMap().getAllMonster().size() == 0) {
        pi.warpParty(510001400, 0);
    } else {
        //pi.playerMessage(1, "必须消灭区域内的所有怪物才能移动到下一回合。");
        //pi.playerMessage(5, "必须消灭区域内的所有怪物才能移动到下一回合。");
    pi.openNpc(2540000, 1);
    }
}