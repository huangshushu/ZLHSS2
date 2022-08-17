function enter(pi) {
	if(pi.getBossLoga("千年树精") >= 2){
		pi.sendSimpleS("抱歉，你的每日挑战次数已达到2次，无法进入！", 0, 9270045);
		return;
	}
    if (pi.getPlayerCount(541020800) <= 0) { // krex. Map
	var krexMap = pi.getMap(541020800);
	krexMap.resetFully();
	pi.setBossLoga("千年树精");
	pi.playPortalSE();
	pi.warp(541020800, "sp");
	krexMap.clearOwnerList();
	krexMap.addAllOwnerHere();
	krexMap.startEventTimer(30, true, true);
	return true;
    } else {
	if (pi.getMap(541020800).getSpeedRunStart() == 0 && (pi.getMonsterCount(541020800) <= 0 || pi.getMap(541020800).isDisconnected(pi.getPlayer().getId()))) {
		pi.setBossLoga("千年树精");
	    pi.playPortalSE();
	    pi.warp(541020800, "sp");
	    return true;
	} else {
	    pi.playerMessage(5, "里面的战斗已经开始了，请稍后片刻.");
	    return false;
	}
    }
}