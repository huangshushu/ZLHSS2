/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = -1;

function start(mode, type, selection) {
	if (qm.getPlayer().getCurrentRep() > 0 && qm.getPlayer().getTotalRep() > qm.getPlayer().getCurrentRep()) {
		qm.forceCompleteQuest();
		qm.gainExp(3000);
		qm.sendNext("干得好!");
	} else {
		qm.sendNext("请，得到一些代表!");
	}
	qm.dispose();
}
function end(mode, type, selection) {
	if (qm.getPlayer().getCurrentRep() > 0 && qm.getPlayer().getTotalRep() > qm.getPlayer().getCurrentRep()) {
		qm.forceCompleteQuest();
		qm.gainExp(3000);
		qm.sendNext("干得好!");
	} else {
		qm.sendNext("请，得到一些代表!");
	}
	qm.dispose();
}