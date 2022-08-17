var 挑战次数 = 1;

function enter(pi) {
    if (pi.getPlayerCount(141050300) <= 0) { // krex. Map
        var krexMap = pi.getMap(141050300);
        krexMap.resetFully();
        pi.playPortalSE();
     
    } 
	if (pi.getBossLoga("盖奥勒克") >= 挑战次数) {
		pi.playerMessage(5, "一个账号一天只能挑战" + 挑战次数 + "次盖奥勒克。");
	
        return true;
    } else {
        if (pi.getMap(141050300).getSpeedRunStart() == 0 && pi.getPlayerCount(141050300) <= 0) {
            pi.playPortalSE();
            pi.warp(141050300);
            pi.setBossLoga("盖奥勒克");
			//pi.getMap(141050300).给时钟(15, true, true);
	
            return true;
        } else {
            pi.playerMessage(5, "对抗BOSS的挑战已经开始了，你不能进入到里面。");
            return false;
        }
    }
}