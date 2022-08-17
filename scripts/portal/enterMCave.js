function enter(pi) {
    if (pi.isQuestActive(21201)) {
        pi.forceStartQuest(21202);
		pi.warp(108000700, 0);
    } else if (pi.getQuestStatus(21302) == 1) {
        var em = pi.getEventManager("aran3rd2");
        var d1 = pi.getMap(108010701);
        var d2 = pi.getMap(108010702);
        if (em == null) {
            pi.playerMessage("你没有任务无法进入哦");
        } else {
            if (d1.playerCount() <= 0 && d2.playerCount() <= 0) {
                d2.killAllMonsters(true);
               
                em.startInstance(pi.getPlayer());
                
            } else {
                pi.playerMessage("您有太多想法了，无法在镜子裡面反射您要的东西。");
            }
        }
    } else {
        pi.warp(108000700, 0);
    }
    return true;
}