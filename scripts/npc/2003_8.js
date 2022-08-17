/*
 ZEVMS冒险岛(079)游戏服务端
 */
var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
var status = -1;
var map = 551030000;
var num = 6;
var maxp = 1;

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
	if (cm.getMapId()>=551030001&&cm.getMapId()<=551030005) {
		cm.warp(551030000,3);
		cm.dispose();
		return;
	}
    if (status == 0) {
		var selStr = "\r\n\r\n\t\t\t  [ #v5252000# #d#t5252000# ]\r\n\t#d进入迷你地图后可进行 #r10分钟 #d的狩猎,一次消耗一张,一个房间最多只能进入一名玩家。#k\r\n\t\t\t\t#d怪物等级:#r#e65 - 75级#k#n";
		for (var i = 1; i < num; i++) {
			selStr += "\r\n\t\t #b#L" + i + "#"+jt+"[掰掰站最后一环( " + i + " 房 )] #r[" + cm.getPlayerCount(map + i) + "/" + maxp + "]#l#k";
		}
	cm.sendSimple(selStr);
    } else if (status == 1) {
		if (selection < 0 || selection >= num) {
			cm.dispose();
		
		} else if (cm.getPlayerCount(map + selection) >= maxp) {
			cm.sendNext("这个房间已经满人，请稍后再尝试!");
			status = -1;
		} else if (!cm.haveItem(5252000,1)) {
			cm.sendNext("你缺少 #v5252000# #b#t5252000# !");
			status = -1;
		} else {
			cm.gainItem(5252000,-1); 
			cm.warp(map + selection, 3);
			cm.playerMessage(1,"欢迎进入迷你地图，退出当前请从出口退出!");
			cm.dispose();
		}
    }
}