function enter(pi) {
	/*if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2) {
		pi.playerMessage(5, "1 频道或者 2 频道 挑战试试？");
		return false;
	}*/
	if(pi.getMap(745010400).isDisconnected(pi.getPlayer().getId())){
			pi.playPortalSE();
			pi.warp(745010400, "sp");
	}
	if (pi.getBossLog("皇帝") >= 30) {
		pi.playerMessage(5, "一天只能打 3 次皇帝。");
		return false;
	}
    if (!pi.haveItem(2000005)) {
	pi.playerMessage(5, "你没有超级药水~，所以无法挑战.");
    } else {
	if (pi.getPlayerCount(745010400) <= 0) {
			var FantMap = pi.getMap(745010400);
			//pi.setBossLog("皇帝");
			FantMap.resetFully();
			pi.playPortalSE();
			pi.warp(745010400, "sp");	
	} else {
	    if (pi.getMap(745010400).getSpeedRunStart() == 0 && (pi.getMonsterCount(745010400) <= 0)) {
		pi.playPortalSE();
		//pi.setBossLog("暴力熊");
		pi.warp(745010400, "sp");
		}else{
		pi.playerMessage(5, "战斗已经开始，所以你可能不会进入这个地方.");
	    }
	}
    }
}