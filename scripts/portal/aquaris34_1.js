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
            pi.teleport(1);
            eim.broadcastWeatherEffectNotice("使用了10个黄色皮革。目前剩余的黄色皮革数量为" + pi.getItemQuantity(4009234) + "个。", 147, 15000);
        } else {
            eim.broadcastWeatherEffectNotice("需要10张黄色皮革收集到才能上去", 147, 3000);
        }
    }
}

