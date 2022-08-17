/* 
 *
 *  
 *  功能：起源之塔 第12层 陷阱传送
 *  
 *
 */

function enter(pi) {
    var em = pi.getEventManager("LobbyQuest");
    var eim = pi.getEventInstance();
    if (em != null && eim != null) {
        if (!"1".equals(eim.getProperty("stage12_trap2"))) {
            pi.teleport(1);
        }
    }
}

