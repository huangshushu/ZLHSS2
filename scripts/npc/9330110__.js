/* Kedrick
 Fishking King NPC
 */

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        cm.sendSimple("我能为您做什么吗？？\r\n" +
                "#L1#使用40条舞痴鱼换取 #i5210001#经验加倍凌晨券1日#l\r\n" +
                "#L2#使用40条舞痴鱼换取 #i5210002#经验加倍上午券1日#l\r\n" +
                "#L3#使用40条舞痴鱼换取 #i5210003#经验加倍下午券1日#l\r\n" +
                "#L4#使用40条舞痴鱼换取 #i5210004#经验加倍晚上券1日#l\r\n" +
                "#L5#使用40条舞痴鱼换取 #i5360015#掉宝加倍全日券1日#l\r\n" +
                "#L6#使用60条舞痴鱼换取 #i5150042#通用美发券#l\r\n" +
                "#L7#使用320条舞痴鱼换取 #i5520000#神奇剪刀#l\r\n");
    } else if (status == 1) {
        sel = selection;
        switch (sel) {
            case 1:
            {
                if (cm.haveItem(4001188, 40)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -40);
                        cm.gainItem(5210001, 1);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有40条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
            case 2:
            {
                if (cm.haveItem(4001188, 40)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -40);
                        cm.gainItem(5210002, 1);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有40条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
            case 3:
            {
                if (cm.haveItem(4001188, 40)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -40);
                        cm.gainItem(5210003, 1);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有40条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
            case 4:
            {
                if (cm.haveItem(4001188, 40)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -40);
                        cm.gainItem(5210004, 1);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有40条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
            case 5:
            {
                if (cm.haveItem(4001188, 40)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -40);
                        cm.gainItem(5360015, 1);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有40条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
            case 6:
            {
                if (cm.haveItem(4001188, 60)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -60);
                        cm.gainItem(5150042, 1);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有60条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
            case 7:
            {
                if (cm.haveItem(4001188, 320)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -320);
                        cm.gainItem(5520000, 1);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有20条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
            default :
            {
                cm.sendOk("此功能未完成");
                cm.dispose();
            }
        }
    }
}
