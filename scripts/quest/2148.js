/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = -1;

function start(mode, type, selection) {
	qm.sendNext("做什么？");
	qm.forceCompleteQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}
