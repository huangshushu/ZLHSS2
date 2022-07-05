var debug = false;
var status = -1;
var gain;
var pig = 4032226;
var req;
var msg;
var sels;
var amount;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (debug && !cm.getPlayer().isAdmin()) {
        msg = "暂停运作";
        cm.sendNext(msg);
            cm.dispose();
            return;
        }
    if (mode == 1) {
            status++;
    } else if (mode == 0 && status == 0) {
            status--;
    } else {
          cm.dispose();
          return;
        } 
            
    if (status == 0) {
        msg = "#b欢迎玩家 #r#h ##k\r\n" +
                " 兑换#r绵羊单人床#i3010054#\r\n" +
                "#L10##r黄金猪#i" + pig + "##bx500#r换#b绵羊单人床 #i3010054#\r\n" +
                "#L102##r黄金猪#i" + pig + "##bx5#r换#b加持道具(加攻击)#i2022483#x5\r\n" +
                "#L103##r黄金猪#i" + pig + "##bx1#r换#b加持道具(加移速)#i2022484#x1\r\n" +
                "#L104##r黄金猪#i" + pig + "##bx1#r换#b加持道具(加跳跃)#i2022485#x1\r\n" +
                "#L105##r黄金猪#i" + pig + "##bx1#r换#b加持道具(加回避)#i2022486#x1\r\n" +
                "#L106##r黄金猪#i" + pig + "##bx1#r换#b加持道具(加命中)#i2022487#x1";
        cm.sendSimple(msg);
    } else if (status == 1) {
        sels = selection;
        msg = "请问需要用多少个#i" + pig + "#换加持道具??";
        cm.sendGetNumber(msg, 1, 1, 100);
    } else if (status == 2) {
        amount = selection;
		req = amount;
        if (sels == 10) {
            req = (amount * 500);
            gain = 3010054;
        } else if (sels == 102) {
            req = (amount * 5);
            gain = 2022483;
        } else if (sels == 103) {
            gain = 2022484;
        } else if (sels == 104) {
            gain = 2022485;
        } else if (sels == 105) {
            gain = 2022486;
        } else if (sels == 106) {
            gain = 2022487;
                } else {
                    cm.dispose();
            return;
				}
        msg = "您确定要使用#i" + pig + "#x" + req + "兑换加持道具(#i" + gain + "#)x" + amount + "吗？？";
        cm.sendYesNo(msg);
    } else if (status == 3) {
        if (!cm.canHold(3010054) || !cm.canHold(2022483)) {
            msg = "您的背包空格不足";
            cm.sendNext(msg);
                    cm.dispose();
            return;
				}
        if (!cm.haveItem(pig, req)) {
            msg = "您身上没有足够的#i" + pig + "#,请再次确认";
            cm.sendNext(msg);
                    cm.dispose();
            return;
				}
        msg = "请问再次确定是否要购买加持道具(#i" + gain + "#)x" + amount + "，价格为: " + pig + "x" + req;
        cm.sendYesNo(msg)
    } else if (status == 4) {
        cm.gainItem(pig, -req);
        cm.gainItem(gain, amount);
        msg = "获得#i" + gain + "#x" + amount;
        cm.sendNext(msg);
                    cm.dispose();
        return;
                } else {
                    cm.dispose();
        return;
				}
			 }
	
