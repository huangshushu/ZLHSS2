function enter(pi) {
    var level = pi.getPlayerStat("LVL");
    if (level >= 80 && level <= 200) {
	pi.playPortalSE();
	pi.warp(541020000, 1);
    } else {
	pi.playerMessage(5, "未知的力量无法进入....");
    }
}