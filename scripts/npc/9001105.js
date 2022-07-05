/* global cm */

var status = -1;
var select = -1;

function start() {
    cm.sendSimple(
            "#r我是咖哩猪的细汉，有什么需要我替您服务吗?#k\r\n" +
            "#b#L1#【中秋活动-200个糯米粉兑换】#l#k\r\n" +
            "#b#L2#【中秋活动-脆皮鸡烤肉趣】#l#k\r\n"
            );
}

function action(mode, type, selection) {
    if (select === -1) {
        select = selection;
    }
    var level = cm.getPlayer().getLevel();
    switch (select) {
        case 1:
        {
            if (cm.getAcLogS("中秋活动") < 1) {
                if (level >= 30) {
                    if (cm.haveItem(4031184, 200)) {
                        if (cm.canHoldByType(1, 7)) {
                            cm.setAcLog("中秋活动");
                            cm.gainItem(4031184, -200);
                            cm.gainItem(1102369, 1);
                            cm.gainItem(1002552, 1);
                            cm.gainItem(1052077, 1);
                            cm.gainItem(1072274, 1);
                            cm.gainItem(1082169, 1);
							cm.gainItem(1702576, 1);
                            cm.getPlayer().modifyCSPoints(2, 888, true);
                            cm.sendOk("领取成功。");
                            cm.dispose();
                            return;
                        } else {
                            cm.sendOk("您的背包已满,请保留9格以上。");
                            cm.dispose();
                            return;
                        }
                    } else {
                        cm.sendOk("你的道具不足。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你的等级还不够30等。");
                    cm.dispose();
                    return;
                }

            } else {
                cm.sendOk("你已经领取过了。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;


        }
        case 2:
        {
            if (level >= 30) {
                if (!cm.haveItem(4000188, 100) || !cm.haveItem(4000187, 100) || !cm.haveItem(4000006, 100) ||
                        !cm.haveItem(4000247, 100) || !cm.haveItem(4000253, 100) || !cm.haveItem(4000252, 100)
                        || !cm.haveItem(4000166, 100) || !cm.haveItem(4000189, 200)) {
                    cm.sendOk("你的道具不足，需要鸭蛋100个，鸡爪100个，章鱼脚100个，青蛙后腿100个，白色鸡蛋100个，新鲜肌肉100个，虾肉100个，羊毛200个。");
                    cm.dispose();
                    return;
                } else {
                    if (cm.canHoldByType(1, 2)) {
                        cm.gainItem(4000188, -100);
                        cm.gainItem(4000187, -100);
                        cm.gainItem(4000006, -100);
                        cm.gainItem(4000247, -100);
                        cm.gainItem(4000253, -100);
                        cm.gainItem(4000252, -100);
                        cm.gainItem(4000166, -100);
                        cm.gainItem(4000189, -200);
                        cm.gainItem(1142813, 1);
                        cm.sendOk("领取成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("您的背包已满。");
                        cm.dispose();
                        return;
                    }
                }
            } else {
                cm.sendOk("你的等级还不够30等。");
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

