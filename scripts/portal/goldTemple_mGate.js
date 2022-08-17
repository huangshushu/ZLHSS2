
var 挑战次数 = 1;

function enter(pi) {
    if (pi.getPlayerCount(925120000) <= 0) { // krex. Map
        var krexMap = pi.getMap(925120000);
        krexMap.resetFully();
        pi.playPortalSE();
     
    } 
	if (pi.getBossLoga("白毛公猴王") >= 挑战次数) {
		pi.playerMessage(5, "一个账号一天只能挑战 " + 挑战次数 + " 次白毛公猴王。");
	
        return true;
    } else {
        if (pi.getMap(925120000).getSpeedRunStart() == 0 && pi.getPlayerCount(925120000) <= 0) {
            pi.playPortalSE();
            pi.warp(925120000);
            pi.setBossLoga("白毛公猴王");
			//pi.getMap(925120000).给时钟(20, true, true);
	
            return true;
        } else {
            pi.playerMessage(5, "对抗BOSS的挑战已经开始了，你不能进入到里面。");
            return false;
        }
    }
}