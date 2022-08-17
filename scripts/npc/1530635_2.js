var eff = "#fEffect/CharacterEff/1051296/1/0#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        var map = Java.type("client.MapleClient");
        var text = "#d当前账户信息如下：\r\n";
        text += "====================================\r\n#b"
        text += "#L0#" + eff + "\t游戏账号： #r" + format(" ", 15, cm.getClient().getAccountName()) + "#b #e#r【改密】#b#n#l\r\n";
        text += "#L1#" + eff + "\t剩余元宝： #r" + format(" ", 15, cm.getRMB().toString()) + "#b #e#r【充值】#n#l\r\n";
        text += "#L2#" + eff + "\t#b累计充值： #r" + format(" ", 15, cm.getHyPay(3).toString()) + "#b #e#r【礼包】#b#n#l\r\n";
        text += "#L3#" + eff + "\t剩余点券： #r" + format(" ", 15, cm.getPlayer().getCSPoints(1).toString()) + "#b #e#r【兑换】#b#n#l\r\n";
        text += "#L4#" + eff + "\t剩余金币： #r" + format(" ", 15, cm.getPlayer().getMeso().toString()) + "#b #e#r【兑换】#b#n#l\r\n\r\n";
        text += "\t\t\t\t#L5#"+ "#b" + ttt + "返回上一页";
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendOk("暂时不支持在线改密，请前往登陆器改密。");
            cm.dispose();
        } else if (selection == 1) {
            cm.dispose();
			cm.openNpc(1530635,"czjl");
        } else if (selection == 2) { // 礼包
            cm.dispose();
			cm.openNpc(1530635,"czjl");
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(1530635,7766);
        } else if (selection == 4) {
            cm.dispose();
            cm.openNpc(2159359,"金币商店");
		 } else if (selection == 5) {
			cm.dispose();
            cm.openNpc(1530635,0);
        }
    }
}


var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}
    