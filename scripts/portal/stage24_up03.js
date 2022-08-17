/* 
 *
 *  
 *  功能：起源之塔 24 层
 *        听背景音乐，猜村庄
 *  
 *
 */

function enter(pi) {
    var em = pi.getEventManager("LobbyQuest");
    var eim = pi.getEventInstance();
    if (em != null && eim != null) {
        if (!"1".equals(eim.getProperty("stage24_up043"))) {
            pi.openNpc(2540002, "stage24_guess");
        } else {
            pi.teleport(4);
        }
    }
}

