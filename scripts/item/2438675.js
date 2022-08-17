/*
SnailMS脚本生成器
*/
var 抽奖系列 = "进阶扎昆";
function start() {
	status = -1;
	action(1, 0, 0);
}
var 脚本开关 = true;
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		if(!脚本开关){
			cm.sendOkS("兑换尚未开启", 1, 3002121);
			cm.dispose();
			return;
		}
		if(!cm.haveItem(2438675, 1)){
			cm.dispose();
			return;
		}
		var itemid = cm.抽奖(抽奖系列, "进阶扎昆宝箱");
		var 数量 = 1;
		if (itemid != -1) {
			cm.gainItem(2438675, -1, true);
			cm.gainItem(itemid, 数量, true);
			var message = "你获得了:\r\n" + cm.显示物品(itemid) + "\r\n";
			cm.getPlayer().dropMessage("你获得了 " + cm.读取奖品名称(抽奖系列, itemid) + "");
			cm.sendOkS(message, 1, 3002121);
			cm.dispose();
		} else {
			cm.sendOkS("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。", 1, 3002121);
			cm.dispose();
		}
	}else {
		cm.dispose();
		return;
	}
}

