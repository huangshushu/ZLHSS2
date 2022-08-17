function enter(pi) {
    if (!pi.haveMonster(8880151)) {
        pi.warp(450004500, 0); //next
    } else {
        pi.playerMessage(5, "抱歉 请先清理怪物");
    }
}
