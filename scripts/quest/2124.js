/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = -1;

function start(mode, type, selection) {
	qm.sendNext("没有后续了？有问题请联系枫叶阁");
	qm.dispose();
}

function end(mode, type, selection) {
	qm.dispose();
	qm.openNPC(2007,2124);
}