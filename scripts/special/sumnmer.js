var log = "暑期活动";
var item = 2450000;
var quantity = 5;
var MaplePoint = 666;
var player_old = false;
var text = "null";
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
	if (cm.getPlayer().getClient().getAccID() <= 25300) {
		player_old = true;
	} else {
		quantity = 0;
		MaplePoint = 1688;
	}
	if (status == 0) {
		if (cm.getPlayer().getPrizeLog(log) >= 1) {
			text = "您的帐号已经领取过了喔！";
		} else if (cm.getInventory(2).getNumFreeSlot() <= quantity && quantity > 0) {
			text = "您的消耗栏位空间不足5格唷";
		} else if (cm.getPlayer().getLevel() <= 30) {
			text = "您的等级不足";
		}
		if (text != "null") {
			cm.sendNext(text);
			cm.dispose();
			return;
		}
		
		text = "请问您是否要领取";
		if (player_old) {
			text += "枫叶点数666吗?";
		} else {
			text += "枫叶点数1688吗?";
		}
		cm.sendYesNo(text);
		text = "null";
	} else if (status == 1) {
		if (cm.getPlayer().getPrizeLog(log) >= 1) {
			text = "您的帐号已经领取过了喔！";
		} else if (cm.getInventory(2).getNumFreeSlot() <= quantity && quantity > 0) {
			text = "您的消耗栏位空间不足5格唷";
		} else if (cm.getPlayer().getLevel() <= 30) {
			text = "您的等级不足";
		}

		if (text != "null") {
			cm.sendNext(text);
			cm.dispose();
			return;
		}
		text = "请问确定是否要领取奖励??";
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (quantity != 0) {
		}
		cm.getPlayer().modifyCSPoints(2, MaplePoint, true);
		cm.getPlayer().setPrizeLog(log);
		cm.sendNext("奖励皆已发放，请前往背包查收");
		cm.dispose();
	} else {
		cm.dispose();
	}
}
