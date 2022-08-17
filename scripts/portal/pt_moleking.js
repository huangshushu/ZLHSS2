var 挑战次数 = 1;

function enter(pi) {
    if (pi.getPlayerCount(101073300) <= 0) { // krex. Map
        var krexMap = pi.getMap(101073300);
        krexMap.resetFully();
        pi.playPortalSE();
     
    } 
	if (pi.getBossLog("dishu") >= 挑战次数) {
		pi.playerMessage(5, "一个账号一天只能挑战" + 挑战次数 + "次地鼠大王。");
	
        return true;
    } else {
        if (pi.getMap(101073300).getSpeedRunStart() == 0 && pi.getPlayerCount(101073300) <= 0) {
            pi.playPortalSE();
            pi.warp(101073300, "sp");
            pi.setBossLog("dishu");
			//pi.getMap(101073300).给时钟(15, true, true);
	
            return true;
        } else {
            pi.playerMessage(5, "对抗BOSS的挑战已经开始了，你不能进入到里面。");
            return false;
        }
    }
}