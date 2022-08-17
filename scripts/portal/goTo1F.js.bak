/* 
 *
 *  
 *  功能：LobbyQuest 起源之塔
 *  
 *
 */


function enter(pi) {
    if (pi.getPQLog("LobbyQuest") >= 200) {
        pi.showSystemMessage("今天已经突破了200层，无法再次进入了！");
        return;
    }

    var em = pi.getEventManager("LobbyQuest");
    if (em == null) {
        pi.dropAlertNotice("配置文件不存在,请联系管理员。");
    } else {
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            pi.setPQLog("LobbyQuest");
            //对时间进行设置
            pi.updateOneQuestInfo(42011, "start", String(java.lang.System.currentTimeMillis()));
            em.startInstance(pi.getPlayer());
            for (var i = 1; i <= 5; i++) {
                var sData = pi.getQuestInfo(42000, "slot" + i);
                if (sData != null && !"0".equals(sData) && !"-1".equals(sData)) {
                    pi.updateOneQuestInfo(42000, "slot" + i, "0");
                }
            }
        } else {
            pi.dropAlertNotice("发生未知错误，请联系管理员。");
        }
    }
}
