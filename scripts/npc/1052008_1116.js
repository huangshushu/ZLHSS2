function start() {
    var eim = cm.getEventInstance();
	var itemid = eim.getProperty("rewarditem");
	var rewardid = eim.getProperty("rewardplayerid");
	if (cm.getPlayer().getId() == rewardid) {
		cm.gainItem(itemid, 1);
	}
	cm.getPlayer().dropMessage(6, "[路西德副本] 恭喜玩家 "+eim.getProperty("rewardplayer")+" 以最高点数获得了 "+cm.getItemName(itemid)+"x1");
	cm.dispose();
}