function enter(pi) {
    if (pi.getPlayer().getIntNoRecord(251003) == 1) {
        pi.warp(915010001, "out00");
    } else {
        pi.playerMessage("I must pass that lock first.");
    }
    return true;
}