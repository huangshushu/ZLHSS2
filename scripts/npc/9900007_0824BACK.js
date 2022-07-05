/* global cm */

var status = -1;
var select = -1;

function start() {
    cm.sendSimple(
            "\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
            "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
            "              #r有什么需要我替您服务吗?#k\r\n" +
            "#L1#1.竹编名牌戒指 (300赞助积分)#l\r\n" +
            "#L2#2.水墨画名牌戒指 (300赞助积分)#l\r\n" +
            "#L3#3.红玫瑰名牌戒指 (300赞助积分)#l\r\n" +
            "#L4#4.木乃伊名牌戒指 (300赞助积分)#l\r\n" +
            "#L5#5.豪华珍珠名牌戒指 (300赞助积分)#l\r\n" +
            "#L6#6.竹编聊天戒指 (300赞助积分)#l\r\n" +
            "#L7#7.水墨画聊天戒指 (300赞助积分)#l\r\n" +
            "#L8#8.红玫瑰聊天戒指 (300赞助积分)#l\r\n" +
            "#L9#9.木乃伊气球戒指 (300赞助积分)#l\r\n" +
            "#L10#10.豪华珍珠聊天泡泡戒指 (300赞助积分)#l\r\n" +
            "#L11#11.枫叶点数50点 (100赞助积分)#l\r\n" +
            "#L12#12.随机抽取以上戒指 (需要泡泡谷签到证明7张)#l\r\n" +
            "#L13#13.枫叶点数550点 (1000赞助积分)#l\r\n" +
            "#L14#14.枫叶点数6000点 (10000赞助积分)#l\r\n"
            );
}

function action(mode, type, selection) {
    if (select === -1) {
        select = selection;
    }
    switch (select) {
        case 1:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112134, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112134");
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }

        case 2:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112135, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112135");
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }

        case 3:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112141, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112141");
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }


        case 4:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112142, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112142");
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }

        case 5:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112143, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112143");
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }

        case 6:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112237, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112237");
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }


        case 7:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112238, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112238");
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }

        case 8:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112252, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112252");
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }

        case 9:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112253, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112253");
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }

        case 10:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112254, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112254");
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }

        case 11:
        {
            if (cm.getPlayer().getCZJF() < 100) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 100);
                cm.getPlayer().modifyCSPoints(2, 50, true);
                cm.getItemLog("赞助积分兑换", "花100积分兑换50枫叶点数");
                cm.sendOk("#b兑换成功。~");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 12:
        {
            if (!cm.haveItem(4000392, 7)) {
                cm.sendOk("#b你的泡泡谷签到证明不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    var itemList = new Array(1112134, 1112135, 1112141, 1112142, 1112143, 1112237, 1112238, 1112252, 1112253, 1112254);
                    cm.gainItem(4000392, -7);
                    var itemid = itemList[Math.floor(Math.random() * itemList.length)];
                    cm.gainItem(itemid, 1);
                    cm.getItemLog("签到证明兑换", "用7个签到证明兑换到：" + itemid);
                    cm.sendOk("#b兑换成功。~");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }

        case 13:
        {
            if (cm.getPlayer().getCZJF() < 1000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 1000);
                cm.getPlayer().modifyCSPoints(2, 550, true);
                cm.getItemLog("赞助积分兑换", "花1000积分兑换550枫叶点数");
                cm.sendOk("#b兑换成功。~");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }

        case 14:
        {
            if (cm.getPlayer().getCZJF() < 10000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 10000);
                cm.getPlayer().modifyCSPoints(2, 6000, true);
                cm.getItemLog("赞助积分兑换", "花10000积分兑换6000枫叶点数");
                cm.sendOk("#b兑换成功。~");
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

