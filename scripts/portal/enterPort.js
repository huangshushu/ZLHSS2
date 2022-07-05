function enter(pi) {
    if (pi.getQuestStatus(21301) == 1) {
        var em = pi.getEventManager("aran3rd");
        if (em == null) {
            pi.playerMessage("找不到脚本，请联络管理员。");
        } else {
            em.startInstance(pi.getPlayer());
        }
    } else {
        pi.warp(140020300, 1);
    }
    return true;
}