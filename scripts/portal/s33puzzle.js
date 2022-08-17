/* 
 *
 *  
 *  功能：起源之塔 第33层 选择传送
 *  
 *
 */

function enter(pi) {
    var em = pi.getEventManager("LobbyQuest");
    var eim = pi.getEventInstance();
    if (em != null && eim != null) {
        var pName = pi.getPortalName();
        var sub2 = pName.substring(0, 2);
        if (pi.isAdmin()) {
            pi.showSystemMessage("[Debug] pName:" + pName + " sub2:" + sub2);
        }
        switch (sub2) {
            case "pt":
                var rName = pName.substring(2, 4);//获得传送口对应反应堆的名字
                var x = parseInt(rName.substring(0, 1));
                var y = parseInt(rName.substring(1, 2));
                if (x == 5 && y == 5) {
                    if (!"clear".equals(eim.getProperty("stage33"))) {
                        eim.setProperty("stage33", "clear");
                        pi.broadcastScreenEffect("event/clear");
                        eim.broadcastWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
                        pi.teleport(17);
                    }
                    break;
                }
                var rStat = pi.getReactorStat(rName);//获得相应反应堆的 状态
                if (pi.isAdmin()) {
                    pi.showSystemMessage("[Debug] rName:" + rName + " x:" + x + " y:" + y + " rStat:" + rStat);
                }
                var portal = null;
                switch (rStat) {
                    case 0://向左
                        var rName = String(x) + String(y - 1);
                        portal = pi.getMap().getPortal("go" + rName);
                        break;
                    case 1://向上
                        var rName = String(x - 1) + String(y);
                        portal = pi.getMap().getPortal("go" + rName);
                        break;
                    case 2://向右
                        var rName = String(x) + String(y + 1);
                        portal = pi.getMap().getPortal("go" + rName);
                        break;
                    case 3://向下
                        if (x == 4 && y == 4) {
                            portal = pi.getMap().getPortal("go55");
                        } else {
                            var rName = String(x + 1) + String(y);
                            portal = pi.getMap().getPortal("go" + rName);
                        }
                        break;
                }
                if (portal != null) {
                    pi.teleport(portal.getId());
                }
                break;
        }
    }
}

