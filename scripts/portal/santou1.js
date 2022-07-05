function enter(pi) {
    if (pi.haveItem(4001022,55) && pi.isLeader()) {
        pi.warpParty(510001400, 0);
            pi.removeAll(4001022);
    } else {
        pi.playerMessage(-1, "必须搜集55个通行证才可以进入下一关！请让队长与我说话！");
        pi.playerMessage(5, "必须搜集55个通行证才可以进入下一关！请让队长与我说话！");
    }
}