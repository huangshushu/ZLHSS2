/* 
 * 脚本类型: cm
 * 脚本用途: 点券中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */
 
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
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
                cm.sendNext("如果需要点券中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var gsjb = "";
            gsjb ="  #e此处兑换 #b- 枫叶 - #r1比1兑换。\r\n  #r枫叶获得方式: #v4001126#\r\n  打任何怪物有几率爆\r\n";
            gsjb +="  当前点券:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";
            gsjb +="#L3##b#z4001126#兑换点券 #fUI/Basic/BtHide3/mouseOver/0# #b比例 - (#r1 = 1#b)#l\r\n\r\n\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(1) / 100 == 0) {
                    cm.sendNext("您的帐户点券不足无法兑换国庆纪念币。");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("请输入#r点券#k兑换#b#z4000463##k的数量:\r\n#b比例 - (#r100 = 1#b)\r\n你的账户信息 -  点券数量: #r" +
                            cm.getPlayer().getCSPoints(1) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(1) / 100);

                }

            
            } else if (selection == 1) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("您的帐户#z4000463#数量不足兑换点券。");
                    status = -1;
                } else {
                    beauty = 2;
                    cm.sendGetNumber("请输入#b#z4000463##k兑换#r点券#k的数量:\r\n#b比例 - (#r1 = 100#b)\r\n你的账户信息 - \r\n    点券数量: #r" +
                            cm.getPlayer().getCSPoints(1) + "    \r\n", 1, 1, iter.next().getQuantity());

                }
            } else if (selection == 3) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001126).iterator();
                if (cm.haveItem(4001126) == 0) {
                    cm.sendNext("您的帐户#v4001126#数量不足兑换点券。");
                    status = -1;
                } else {
                    beauty = 3;
                    cm.sendGetNumber("请输入#b#z4001126##k兑换#r点券#k的数量:\r\n#b比例 - (#r1 = 1#b)\r\n你的账户信息 - \r\n    点券数量: #r" +
                            cm.getPlayer().getCSPoints(1) + "   \r\n", 1, 1, iter.next().getQuantity());

                }

            }


        } else if (status == 2) {
            if (beauty == 1) {
                if (selection <= 0) {
                    cm.sendOk("输入的兑换数字错误。");
                    cm.dispose();
                } else if (cm.getPlayer().getCSPoints(1) >= selection * 100) {
                    cm.gainD(-selection * 100);
                    cm.gainItem(4000463, selection);
                    cm.sendOk("您成功将 #r " + (selection * 100) + " #k点券 兑换成 国庆纪念币#v4000463# x #r" + selection + " #k")
                } else {
                    cm.sendNext("兑换" + selection + "个#z4000463##v4000463# 需要#r " + (selection * 100) + "#k点券。您没有足够的点券。");
                    cm.dispose();
                }
            } else if (beauty == 2) {
                if (cm.haveItem(4000463, selection)) {
                    cm.gainItem(4000463, -selection);
                    cm.gainD(+100 * selection);
                    cm.sendOk("您成功将#z4000463##v4000463# x #r" + selection + " #k换为#r " + (100 * selection) + " #k点券。");
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换点券。");
                    cm.dispose();
                }

            } else if (beauty == 3) {
                if (cm.haveItem(4001126, selection)) {
                    cm.gainItem(4001126, -selection);
                    cm.gainNX(+Math.floor(1 * selection));
                    cm.sendOk("您成功将#z4001126##v4001126# x #r" + selection + " #k换为#r " + Math.floor(1 * selection) + " #k点券。");
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换点券。");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
