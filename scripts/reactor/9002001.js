/* 尋寶活動by:Kodan
 * 
 * 
*/

function act() {
	var cs = rm.getPlayer().getClient().getChannelServer();
	var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.寻宝);
	if(!myEvent.isRunning()){
		rm.playerMessage("活动尚未开始，无法获得宝箱~");
		return;
	}
    if (!rm.haveItem(4031017)) {
        var rand = (Math.random() * 10) + 1;
        var randMap = (Math.random() * 9) + 1;
        if (rand < 3) {
            if (rm.canHold(4031017)) {
                rm.gainItem(4031017, 1);
                rm.playerMessage("得到了寶箱趕緊去找NPC。");
            } else {
                rm.playerMessage("您的背包空間不足");
            }
        } else {
            rm.warp(109010100 + randMap);
        }
    } else {
        rm.playerMessage("已經得到了相同的物品。");
    }
}