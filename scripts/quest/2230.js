/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = -1;

function start(mode, type, selection) {
}
function end(mode, type, selection) {
	qm.sendNext("不再有空了。");
	qm.forceCompleteQuest();
	qm.dispose();
}