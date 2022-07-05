function enter(pi) {
	/*if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2) {
		pi.playerMessage(5, "1 频道或者 2 频道 挑战试试？");
		return false;
	}*/
	if(pi.getMap(105200300).isDisconnected(pi.getPlayer().getId())){
			pi.playPortalSE();
			pi.warp(105200300, "sp");
	}
	if (pi.getBossLog("血腥女王") >= 3) {
		pi.playerMessage(5, "一天只能打 3 次血腥女王。");
		return false;
	}
    if (!pi.haveItem(4032595)) {
	pi.playerMessage(5, "你没有古树钥匙，所以无法挑战.");
    } else {
	if (pi.getPlayerCount(105200300) <= 0) {
			var FantMap = pi.getMap(105200300);
			//pi.setBossLog("血腥女王");
			pi.gainItem(4032595,-1);
			FantMap.resetFully();
			pi.playPortalSE();
			pi.warp(105200300, "sp");	
	} else {
	    if (pi.getMap(105200310).getSpeedRunStart() == 0 && (pi.getMonsterCount(105200310) <= 0)) {
		pi.playPortalSE();
		//pi.setBossLog("血腥女王");
		pi.warp(105200300, "sp");
		}else{
		pi.playerMessage(5, "战斗已经开始，所以你可能不会进入这个地方.");
	    }
	}
    }
}