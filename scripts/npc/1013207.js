/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("您要直接去利斯港吗？");
    } else if (status == 1) {
	cm.warp(104000000);
	cm.dispose();
    }
}