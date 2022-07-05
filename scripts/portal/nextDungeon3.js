function enter(pi) {
    if (pi.getMap().getAllMonster().size() == 0) {
        pi.warpParty(pi.getMapId() + 1000, 0);
        pi.playerMessage(-1, "请杀死所有怪物进入下一关。");
        pi.playerMessage(5, "请杀死所有怪物进入下一关。");
    } else {
        pi.playerMessage(-1, "必须消灭区域内的所有怪物才能移动到下一回合。");
        pi.playerMessage(5, "必须消灭区域内的所有怪物才能移动到下一回合。");
    }
}