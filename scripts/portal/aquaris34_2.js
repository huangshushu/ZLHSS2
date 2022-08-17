/* 
 *
 *  
 *  功能：起源之塔 第34层 
 *  
 *
 */

function enter(pi) {
    var em = pi.getEventManager("LobbyQuest");
    var eim = pi.getEventInstance();
    if (em != null && eim != null) {
        if (pi.haveItem(4009234, 10)) {
            pi.removeItem(4009234, 10);
            pi.teleport(2);
        } else {
            eim.broadcastWeatherEffectNotice("需要10张黄色皮革收集到才能上去", 147, 3000);
        }
    }
}

