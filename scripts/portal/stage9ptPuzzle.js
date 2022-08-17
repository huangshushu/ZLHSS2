/* 
 *
 *  
 *  功能：起源之塔 第9阶段 传送口
 *  
 *
 */

function enter(pi) {
    var eim = pi.getEventInstance();
    var em = pi.getEventManager("LobbyQuest");
    if (pi.isAdmin()) {
        pi.showSystemMessage("stage9_" + pi.getPortal().getName().substring(3, 6));
    }
    if (eim != null && em != null) {
        if (pi.isAdmin()) {
            pi.showSystemMessage(eim.getProperty("stage9_" + (pi.getPortal().getName().substring(3, 6))));
        }
        if ("1".equals(eim.getProperty("stage9_" + (pi.getPortal().getName().substring(3, 6))))) {
            var s = parseInt(pi.getPortal().getName().substring(3, 4));
            pi.teleport(s == 8 ? 42 : (s - 1) * 4 + 3);
            pi.setObjectState("ans" + pi.getPortal().getName().substring(3, 6));
            if (s == 8) {
                var stage = parseInt(eim.getProperty("stage"));
                eim.setProperty("stage" + stage, "clear");
                pi.broadcastScreenEffect("event/clear");
            }
        } else {
            var errornum = parseInt(eim.getProperty("stage9_errornum")) + 1
            eim.setProperty("stage9_errornum", String(errornum))
            pi.teleport(1);
            pi.showSystemMessage("第" + errornum + "次错误。虽然这全靠运气，但已经错了一次，所以请当心不要再错。");
        }
    } else {
        pi.showSystemMessage("发生未知错误，请退出后重试!");
    }
}

