var pop = 5;
function enter(pi) {
    if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2) {
        pi.playerMessage(5, "帕普拉图斯只能在頻道 1 和 2 能挑战。");
        return false;
    }
    if (pi.haveItem(4031870)) {
        pi.warp(922020300, 0);
        return true;
    }
    if (!pi.haveItem(4031172)) {
        pi.playerMessage(5, "不明的力量无法进入，需要有玩具奖牌。");
        return false;
    } else {
		//pi.getPlayer().removeAll(4031172);
	}
	if (pi.getBossLog("闹钟") >= 10  && !pi.getPlayer().isGM()) {
		pi.playerMessage(5, "一天只能打10次帕普拉图斯。");
		return false;
	}
    if (pi.getPlayerCount(220080001) <= 0) { 
        var papuMap = pi.getMap(220080001);
        papuMap.resetFully();
		pi.setBossLog("闹钟");
        pi.playPortalSE();
        pi.warp(220080001, "st00");
		papuMap.startEventTimer(120, true, true);
		papuMap.clearOwnerList();
		papuMap.addOwner(pi.getPlayer().getId());
        return true;
    } else {
        if (pi.getMap(220080001).getSpeedRunStart() == 0 && (pi.getMonsterCount(220080001) <= 0 || pi.getMap(220080001).isDisconnected(pi.getPlayer().getId()))) {
			pi.setBossLog("闹钟");
            pi.playPortalSE();
            pi.warp(220080001, "st00");
			var papuMap = pi.getMap(220080001);
			papuMap.startEventTimer(map.获得剩余时钟时间()/60/1000, true, true);
			papuMap.addOwner(pi.getPlayer().getId());
            return true;
        } else {
            pi.playerMessage(5, "里面的战斗已经开始，请稍后再尝试。");
            return false;
        }
    }
}