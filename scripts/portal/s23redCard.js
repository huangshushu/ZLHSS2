/* 
 *
 *  
 *  功能：起源之塔  红色卡片 处理
 *  
 *
 */

/* global rm, java */

function enter(pi) {
    var em = pi.getEventManager("LobbyQuest");
    var eim = pi.getEventInstance();
    if (em != null && eim != null) {
        var stage = parseInt(eim.getProperty("stage"));

        var rStat = pi.getReactorStat("r") + 1;
        var rValue = parseInt(pi.getQuestInfo(42006, "r"));

        if (rValue > rStat) {//获得的数字 大于当前的数字 则进行处理
            pi.updateOneQuestInfo(42006, "rc", String(rValue));
            pi.showAvatarOrientedRepeat(false, "");
            pi.showAvatarOriented("Effect/OnUserEff.img/aquarisTower/success");
            pi.updateOneQuestInfo(42006, "r", "0");
            pi.forceTrigger("r", rValue - 1);
            var rc = pi.getQuestInfo(42006, "rc");
            var gc = pi.getQuestInfo(42006, "gc");
            var bc = pi.getQuestInfo(42006, "bc");
            var yc = pi.getQuestInfo(42006, "yc");
            if (!"0".equals(rc) && !"0".equals(gc) && !"0".equals(bc) && !"0".equals(yc)) {
                //完成当前阶段
                if (!"clear".equals(eim.getProperty("stage" + stage))) {
                    eim.setProperty("stage2", "clear");
                    pi.showScreenEffect("event/clear");
                    eim.broadcastWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
                }
            } else {
                eim.broadcastWeatherEffectNotice("你成功用" + (rValue == 8 ? "紫色" : "红色" + rValue) + "卡片欺骗了结界！", 147, 15000);
            }
        }
    } else {
        pi.showSystemMessage("发生未知错误！");
    }
}
