/*
By 梓条、宗达
 */
var item = 1142813;
var itemAmount = 1;
var need = 4000189;
var needAmount = 1000;
var log = '抓羊专家勋章记录';
var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendYesNo("#k是否要使用\r\n\r\n#r#t"+need+"##i"+need+"##bx"+needAmount+"#r换#b#t"+item+"# = #i"+item+":#?");
	} else if (status == 1) {
		if (cm.getPlayer().getOneTimeLog(log) >= 1 || cm.haveItem(item, itemAmount)) {
			cm.sendNext("您已经领过了#i"+item+":#");
			cm.dispose();
			return;
		} else if (!cm.haveItem(need, needAmount)) {
			cm.sendNext("您身上没有#i"+need+"#"+needAmount+"个,请再次确认");
			cm.dispose();
			return;
		} else if (!cm.canHold(item, itemAmount)) {
			cm.sendNext("您的背包空间不足,请再次确认");
			cm.dispose();
			return;
		}
		cm.getPlayer().setOneTimeLog(log);
		cm.gainItem(need, -needAmount);
		cm.gainItem(item, itemAmount);
		cm.sendNext("恭喜获得#t"+item+"#");
		cm.dispose();
	} else {
		cm.dispose();
	}
}
