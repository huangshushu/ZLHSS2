var status = -1;
var coin = 4310018;
var baseid = 1142321;
var points = Array(500, 350, 250, 200, 150, 100, 75, 50, 30, 20, 10, 1);  

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
	if (cm.haveItem(baseid, 1, true, true)) { //grand champion
	    cm.sendNext("您是最高等级.");
	    cm.dispose();
	} else {
	    for (var i = 0; i < (points.length - 1); i++) {
		if (cm.haveItem(baseid - (i+1), 1, true, true)) {
		    cm.sendYesNo("你在排名 #i" + (baseid - (i+1)) + "#. \r\n您是否想获得下一等级? #i" + (baseid - i) + "#\r\n成本: " + points[i] + " 硬币");
		    return;
		}
	    } 
	    cm.sendYesNo("你没有一枚奖牌. \r\n你要得到一个? #i" + (baseid - (points.length - 1)) + "#\r\n成本: " + points[points.length - 1] + " 硬币");
 	}
    } else if (status == 1) {
	for (var i = 0; i < (points.length - 1); i++) {
	    if (cm.haveItem(baseid - (i+1), 1, true, true)) {
		giveItem(i);
		return;
	    }
	} 
	giveItem(points.length - 1);
    }
}

function giveItem(stat) {
     if (!cm.haveItem(coin, points[stat])) {
	cm.sendOk("你没有 " + points[stat] + " 硬币.");
     } else if (!cm.canHold(baseid - stat, 1)) {
	cm.sendOk("请一些空间.");
     } else if (cm.getPlayer().hasEquipped(baseid - (stat+1))) {
	cm.sendOk("请脱下你的勋章.");
     } else {
	cm.gainItem(coin, -points[stat]);
	cm.gainItem(baseid - stat, 1);
	if (cm.haveItem(baseid - (stat+1))) {
	    cm.gainItem(baseid - (stat+1), -1);
	}
     }
     cm.dispose();
}