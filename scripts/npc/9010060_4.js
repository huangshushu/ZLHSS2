var status = -1;
var beauty = 0;
var tosend = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果您需要金卷中介的话，那么请下次来找我！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var text = "";
            text = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n金卷兑换#z4000463# 比例:10=1\r\n#z4000463#兑换金卷 比例:1=9\r\n当前金卷:#r " + cm.getJQ() + " #k张\r\n国庆纪念币:#r " + cm.itemQuantity(4000463) + " #k个\r\n";
            text += "            #L0##b>>>金卷兑换#z4000463#<<<#l\r\n\r\n";
            text += "            #L1##b>>>#z4000463#兑换金卷<<<#l\r\n";
            cm.sendSimple(text);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换.");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getSpace(4) < 5) {
                    cm.sendOk("你的背包“其它”空间不足!至少有5个空间以上才可以兑换。");
                    cm.dispose();
                } else if (cm.getJQ() / 10 == 0) {
                    cm.sendNext("金卷不足无法兑换国庆纪念币。");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("请输入金卷兑换国庆纪念币的数量:\r\n兑换比例为 10 : 1\r\n", 1, 1, cm.getJQ() / 10);
                }
            } else if (selection == 1) {
                if (cm.haveItem(4000463) == false) {
                    cm.sendNext("国庆纪念币不足无法兑换金卷。");
                    status = -1;
                } else {
                    beauty = 2;
                    cm.sendGetNumber("请输入国庆纪念币兑换金卷的数量:\r\n兑换比例为 1 : 9\r\n", 1, 1, 999);
                }
            }
        } else if (status == 2) {
            if (beauty == 1) {
                if (cm.getSpace(4) < 5) {
                    cm.sendOk("你的背包“其它”空间不足!至少有5个空间以上才可以兑换。");
                    cm.dispose();
                } else if (selection <= 0) {
                    cm.sendOk("输入的兑换数字错误。");
                    cm.dispose();
                } else if (cm.getJQ() >= selection * 10) {
                    cm.addJQ(-selection * 10);
                    cm.gainItem(4000463, selection);
                    cm.sendOk("您成功将#r " + (selection * 10) + " #k金卷兑换成国庆纪念币#v4000463# x #r" + selection + "#k。");
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换国庆纪念币。");
                    cm.dispose();
                }
            } else if (beauty == 2) {
                if (cm.haveItem(4000463, selection)) {
                    cm.gainItem(4000463, -selection);
                    cm.addJQ(9 * selection);
                    cm.sendOk("您成功将国庆纪念币#v4000463# x #r" + selection + " #k兑换成#r " + (9 * selection) + " #k金卷。");
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换点卷。");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
