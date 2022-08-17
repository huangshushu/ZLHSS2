/* 
 *
 *  
 *  功能：起源之塔 第47层 陷阱传送
 *  
 *
 */

function enter(pi) {
    var eim = pi.getEventInstance();
    var em = pi.getEventManager("LobbyQuest");
    if (pi.isAdmin()) {
        pi.showSystemMessage("PT_" + pi.getPortal().getName().substring(3, 6));
    }
    if (eim != null && em != null) {
        var s = pi.getPortal().getName().substring(3, 4);
        if (s.equals(eim.getProperty("stage47_Key"))) {
            if (!"1".equals(eim.getProperty("stage47_Summon"))) {
                eim.setProperty("stage47_Summon", "1");
                var mob = em.getMonster(9309036);//召唤怪物  9309036
                eim.registerMonster(mob);
                pi.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(500, 185));
            }
        }
    } else {
        pi.showSystemMessage("发生未知错误，请退出后重试!");
    }
}