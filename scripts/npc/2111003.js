
/* Author: aaroncsn(MapleSea Like)(Incomplete)
NPC Name: 		Humanoid A
Map(s): 		Sunset Road: Magatia(2610000000)
Description: 		Unknown
 */

function start() {
	if (cm.isQuestActive(3335)) {
		if (!cm.canHold(4000361)) {
			cm.sendNext("请检察背包空间。");
			if (cm.haveItem(4000361) && !cm.haveItem(4031695)) {
				cm.gainItem(4000361, -1);
				cm.gainItem(4031695, 1);
			} else {
				cm.sendNext("您好像没有满足条件呢。");
				cm.dispose();
			}
		}
	} else {
		cm.sendNext("我想是一个人，一个人有著温暖的心脏......这样也许我可以牵她的手。不幸的是，现在这是不可能的.");
	}
	cm.dispose();
}
