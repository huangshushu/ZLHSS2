var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = "你集齐了#v4009053##v4009054##v4009055##v4009056##v4009057##v4009058##v4009059#吗？是否想兑换一个未来机器人？";
		cm.sendYesNo(text);
	} else if (status == 1) {
		if (cm.haveItem(4009053) && cm.haveItem(4009054) && cm.haveItem(4009055) && cm.haveItem(4009056) && cm.haveItem(4009057) && cm.haveItem(4009058) && cm.haveItem(4009059)) {
			cm.sendSimple("请选择：#b\r\n#L1662033#制作未来机器人（男）#l\r\n#L1662034#制作未来机器人（女）#l\r\n");
		} else {
			cm.sendOk("你没有集齐未来机器人的配件，无法制作机器人。");
			cm.dispose();
		}
	} else if (status == 2) {
		var itemid = selection;
		cm.gainItem(4009053, -1);
		cm.gainItem(4009054, -1);
		cm.gainItem(4009055, -1);
		cm.gainItem(4009056, -1);
		cm.gainItem(4009057, -1);
		cm.gainItem(4009058, -1);
		cm.gainItem(4009059, -1);
		cm.gainItem(itemid, 1);
		cm.sendOk("恭喜你，成功制作了一个#b#v"+itemid+"##t"+itemid+"##k。");
		cm.dispose();
	}
}