/* 
 *
 *  
 *  功能：起源之塔 第27层 选择传送
 *  
 *
 */

function enter(pi) {
    var em = pi.getEventManager("LobbyQuest");
    var eim = pi.getEventInstance();
    if (em != null && eim != null) {
        var name = pi.getPortalName();
        var sub2 = name.substring(0, 2);
        switch (sub2) {
            case "pt":
                var ptID = "0" + name.substring(5, 6);
                var check = eim.getProperty("stage27_trap1");
                if (!ptID.equals(check)) {
                    pi.teleport(1);
                }
                break;
            case "lv":
                var lvID = name.substring(2, 3);
                if (!"lv1_2_3".equals(name)) {
                    pi.teleport(1);
                }
                break;
        }
    }
}

