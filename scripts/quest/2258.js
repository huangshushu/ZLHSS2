/*
 ZEVMS冒险岛(079)游戏服务端
 */
function start(mode, type, selection) {
	qm.sendNext("没有后续了？有问题请联系ZEV");
	qm.dispose();
}

function end(mode, type, selection) {
	qm.dispose();
	qm.打开NPC(2007,2124);
}