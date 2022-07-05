function enter(pi) {
    var pt = pi.getEventManager("ProtectRichard");
    if (pt == null) {
        pi.warp(120000104, 0);
    } else {
        if (pt.getInstance("ProtectRichard").getTimeLeft() < 240000) {
            pi.warp(925010400, 0);
            pi.forceStartQuest(6411, "p2");
            return true;
        } else {
            pi.playerMessage("必须再忍耐一下子!");
            return false;
        }
    }
    return true;
}
