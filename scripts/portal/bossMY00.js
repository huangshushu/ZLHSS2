function enter(pi) {
	/*if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2) {
		pi.playerMessage(5, "1 频道或者 2 频道 挑战试试？");
		return false;
	}*/
	if(pi.getMap(551030200).isDisconnected(pi.getPlayer().getId())){
			pi.playPortalSE();
			pi.warp(551030200, "sp");
	}
	if (pi.getBossLog("暴力熊") >= 2 && !pi.getPlayer().isGM()) {
		pi.playerMessage(5, "一天只能打 2 次暴力熊。");
		return false;
	}
    if (!pi.haveItem(4032246)) {
	pi.playerMessage(5, "你没有梦幻主题娃娃，所以无法挑战.");
    } else {
	if (pi.getPlayerCount(551030200) <= 0) {
			var FantMap = pi.getMap(551030200);
			pi.setBossLog("暴力熊");
			FantMap.resetFully();
			pi.playPortalSE();
			pi.warp(551030200, "sp");
			//FantMap.给时钟(120, true, true);
			FantMap.clearOwnerList();
			FantMap.addOwner(pi.getPlayer().getId());
	} else {
	    if (pi.getMap(551030200).getSpeedRunStart() == 0 && (pi.getMonsterCount(551030200) <= 0)) {
		pi.playPortalSE();
		pi.setBossLog("暴力熊");
		pi.warp(551030200, "sp");
		var FantMap = pi.getMap(551030200);
		//FantMap.给时钟(FantMap.获得剩余时钟时间()/60/1000, true, true);
		FantMap.addOwner(pi.getPlayer().getId());
		}else{
		pi.playerMessage(5, "战斗已经开始，所以你可能不会进入这个地方.");
	    }
	}
    }
}