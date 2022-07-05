function enter(pi) {
	/*if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2) {
		pi.playerMessage(5, "1 频道或者 2 频道 挑战试试？");
		return false;
	}*/
	if(pi.getMap(105200400).isDisconnected(pi.getPlayer().getId())){
			pi.playPortalSE();
			pi.warp(105200400, "sp");
	}
	if (pi.getBossLog("贝伦") >= 3) {
		pi.playerMessage(5, "一天只能打 3 次皮埃尔。");
		return false;
	}
    if (!pi.haveItem(4032595)) {
	pi.playerMessage(5, "你没有古树钥匙，所以无法挑战.");
    } else {
	if (pi.getPlayerCount(105200400) <= 0) {
			var FantMap = pi.getMap(105200400);
			//pi.setBossLog("皮埃尔");
			pi.gainItem(4032595,-1);
			FantMap.resetFully();
			pi.playPortalSE();
			pi.warp(105200400, "sp");	
	} else {
	    if (pi.getMap(105200410).getSpeedRunStart() == 0 && (pi.getMonsterCount(105200410) <= 0)) {
		pi.playPortalSE();
		//pi.setBossLog("皮埃尔");
		pi.warp(105200400, "sp");
		}else{
		pi.playerMessage(5, "战斗已经开始，所以你可能不会进入这个地方.");
	    }
	}
    }
}