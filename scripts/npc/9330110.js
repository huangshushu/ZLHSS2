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
                "#L1#使用10条舞痴鱼换取 #i5072000#高效能喇叭#l\r\n"+
                "#L2#使用20条舞痴鱼换取 #i5230000#猫头鹰*10#l\r\n"+
                "#L3#使用40条舞痴鱼换取 #i5561000#任意门高级券#l\r\n"+
                "#L4#使用40条舞痴鱼换取 #i5130000#护身符*10#l\r\n"+
                "#L5#使用40条舞痴鱼换取 #i5210001#经验加倍凌晨券1日#l\r\n" +
                "#L6#使用40条舞痴鱼换取 #i5210002#经验加倍上午券1日#l\r\n" +
                "#L7#使用40条舞痴鱼换取 #i5210003#经验加倍下午券1日#l\r\n" +
                "#L8#使用40条舞痴鱼换取 #i5210004#经验加倍晚上券1日#l\r\n" +
                "#L9#使用40条舞痴鱼换取 #i5360015#掉宝加倍全日券1日#l\r\n" +
                "#L10#使用60条舞痴鱼换取 #i5150042#通用美发券#l\r\n" +
				"#L11#使用120条舞痴鱼换取 #i5210000#经验加倍全日券1日#l\r\n" +
				"#L12#使用290条舞痴鱼换取 #i2180000#能力点数重置*20#l\r\n" +
				"#L13#使用320条舞痴鱼换取 #i5520000#神奇剪刀#l\r\n"+
				"#L14#使用500条舞痴鱼换取 #i3010142#鱼缸椅#l\r\n"
);
    } else if (status == 1) {
        sel = selection;
        switch (sel) {
            case 1:
            {
                if (cm.haveItem(4001188, 10)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -10);
                        cm.gainItem(5072000, 1);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有10条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
            case 2:
            {
                if (cm.haveItem(4001188, 20)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -20);
                        cm.gainItem(5230000, 10);
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
            case 3:
            {
                if (cm.haveItem(4001188, 40)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -40);
                        cm.gainItem(5561000, 1);
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
                        cm.gainItem(5130000, 10);
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
                        cm.gainItemPeriod(5210001, 1, 1);
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
                if (cm.haveItem(4001188, 40)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -40);
                        cm.gainItemPeriod(5210002, 1, 1);
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
            case 7:
            {
                if (cm.haveItem(4001188, 40)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -40);
                        cm.gainItemPeriod(5210003, 1, 1);
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
            case 8:
            {
                if (cm.haveItem(4001188, 40)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -40);
                        cm.gainItemPeriod(5210004, 1, 1);
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
            case 9:
            {
                if (cm.haveItem(4001188, 40)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -40);
                        cm.gainItemPeriod(5360015, 1, 1);
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
            case 10:
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
			 case 11:
            {
                if (cm.haveItem(4001188, 120)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -120);
                        cm.gainItem(5210000, 1);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有120条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
			 case 12:
            {
                if (cm.haveItem(4001188, 290)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -290);
                        cm.gainItem(5050000, 20);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有290条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
            case 13:
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
                    cm.sendOk("#b检查一下背包有没有320条舞痴鱼哦");
                    cm.dispose();
                    return;
                }
                cm.dispose();
                break;
            }
			case 14:
            {
                if (cm.haveItem(4001188, 500)) {
                    if (cm.canHold()) {
                        cm.gainItem(4001188, -500);
                        cm.gainItem(3010142, 1);
                        cm.sendOk("兑换成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b检查一下背包有没有500条舞痴鱼哦");
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
