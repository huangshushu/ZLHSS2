var status = 0;
var itemId = new Array(2047000, 2047002, 2047100, 2047102, 2047200, 2047201, 2047202, 2047203);
var set = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        cm.dispose();
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("要是我也能在天上飞就好了……如果你对飞行感兴趣的话，可以去见见神木村的塔塔曼村长。\r\n#b#L0#购买制炼书。");
    } else if (status == 1) {
        var selStr = "要想强化存在耐久度的装备，需要制炼书。你需要什么吗？";
        for (var i = 0; i < itemId.length; i++) {
            selStr += "\r\n#b#L" + i + "#领取#t" + itemId[i] + "#。#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if (cm.haveItem(4001545, 10)) {
            cm.gainItem(4001545, -10);
            cm.gainItem(itemId[selection], 1);
            cm.sendOk("恭喜你成功领取#b#t" + itemId[selection] + "##k，如果还需要的话请来找我吧！");
        } else {
            cm.sendNext("要想领取#b#t" + itemId[selection] + "##k，需要10个#b#t4001545##k。需要制炼书的话，就去消灭#b#o8300007##k，搜集#b#t4001545##k。");
        }
        cm.dispose();
    }
}
