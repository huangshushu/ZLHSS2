/*
 ZEVMS冒险岛(079)游戏服务端
 */
var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
var status = -1;
var map = 749020800;
var num = 2;
var maxp = 10;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status <= 1) {
	    cm.dispose();
	    return;
	}
	 
	status--;
    }
	if (cm.getMapId()>=100020100&&cm.getMapId()<=100020104) {
		cm.warp(100020000,8);
		cm.dispose();
		return;
	}
    if (status == 0) {
		var selStr = "  	Hi~#b#h ##k 你要进去打蛋糕吗？拿国庆币来可以兑换好东西哦。\r\n\t\t\t\t#n";
		for (var i = 1; i < num; i++) {
			selStr += "\r\n\t\t  #b#L" + i + "#"+jt+"[国庆蛋糕地图] #r[" + cm.getPlayerCount(map + i*100) + "/" + maxp + "]#l#k";
		}
	cm.sendSimple(selStr);
    } else if (status == 1) {
		if (selection < 0 || selection >= num) {
			cm.dispose();
		
		} else if (cm.getPlayerCount((map + selection*100)) >= maxp) {
			cm.sendNext("这个房间已经满人，请稍后再尝试!");
			status = -1;
		} else {
			cm.warp((map + selection*100), 0);
			cm.dispose();
		}
    }
}