/* global cm */

var status = -1;
var select = -1;

function start() {
    cm.sendSimple(
            "\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
            "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
            "              #r有什么需要我替您服务吗?#k\r\n" +
            "#e#L1#  1. 青苹果和爱心名牌戒指 (300赞助积分)#l\r\n" +
            "#L2#  2. 胡子先生名牌戒指     (300赞助积分)#l\r\n" +
            "#L3#  3. 草莓蛋糕名牌戒指     (300赞助积分)#l\r\n" +
            "#L4#  4. 压岁钱防御名牌戒指   (300赞助积分)#l\r\n" +
            "#L5#  5. 环岛旅行名牌戒指     (300赞助积分)#l\r\n" +
            "#L6#  6. 梦想中的雪景名牌戒指 (300赞助积分)#l\r\n" +
            "#L7#  7. 弹性富豪名牌戒指     (300赞助积分)#l\r\n" +
			"#r #k\r\n" +
			"#d    ------------------------------------#k\r\n" +
            "#e#L8#  8. 蓝胡子聊天戒指       (300赞助积分)#l\r\n" +
            "#L9#  9. 红胡子聊天戒指       (300赞助积分)#l\r\n" +
            "#L10#  10.盛夏彩蝶聊天戒指     (300赞助积分)#l\r\n" +
			"#L11#  11.高音聊天戒指         (300赞助积分)#l\r\n" +
			"#L12#  12.梦想中的雪景聊天戒指 (300赞助积分)#l\r\n" +
			"#L13#  13.可爱羊聊天戒指       (300赞助积分)#l\r\n" +
			"#L14#  14.鱼儿戒指            (500赞助积分)#l\r\n" +
			"#r #k\r\n" +
			"#d    ------------------------------------#k\r\n" +
            "#e#L15#  15.随机抽取以上戒指 (需要泡泡谷签到证明7张)#l\r\n" +
			"#L16#  16.枫叶点数50点   (100赞助积分)#l\r\n" +
            "#L17#  17.枫叶点数550点  (1000赞助积分)#l\r\n" +
            "#L18#  18.枫叶点数6000点 (10000赞助积分)#l\r\n" +
            "#L19#  19.欧洛拉戒指 (需要泡泡谷签到证明30张)#l\r\n"
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
                    cm.gainItem(1112146, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112146");
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
                    cm.gainItem(1112148, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112148");
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
                    cm.gainItem(1112151, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112151");
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
                    cm.gainItem(1112154, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112154");
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
                    cm.gainItem(1112162, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112162");
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
                    cm.gainItem(1112178, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112178");
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
                    cm.gainItem(1112184, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112184");
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
                    cm.gainItem(1112269, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112269");
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
                    cm.gainItem(1112270, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112270");
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
                    cm.gainItem(1112276, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112276");
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
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112288, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112288");
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

		case 12:
        {
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112290, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112290");
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
            if (cm.getPlayer().getCZJF() < 300) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 300);
                    cm.gainItem(1112294, 1);
                    cm.getItemLog("赞助积分兑换", "花300积分兑换物品：1112294");
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

		case 14:
        {
            if (cm.getPlayer().getCZJF() < 500) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 500);
                    cm.gainItem(1112907, 1);
                    cm.getItemLog("赞助积分兑换", "花500积分兑换物品：1112907");
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

        case 15:
        {
            if (!cm.haveItem(4000392, 7)) {
                cm.sendOk("#b你的泡泡谷签到证明不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    var itemList = new Array(1112146, 1112148, 1112151, 1112154, 1112162, 1112178, 1112184, 1112269, 1112270, 1112276, 1112288, 1112290, 1112294, 1112907);
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

		case 16:
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

        case 17:
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

        case 18:
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

case 19:
        {
            if (!cm.haveItem(4000392, 30)) {
                cm.sendOk("#b你的泡泡谷签到证明不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4000392, -30);
                    cm.gainItem(1112908, 1);
                    cm.getItemLog("签到证明兑换", "用30个签到证明兑换到：欧洛拉戒指");
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

        default :
        {
            cm.sendOk("此功能未完成");
            cm.dispose();
        }
    }
}

