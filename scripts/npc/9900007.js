/* global cm */

var status = -1;
var select = -1;

function start() {
    cm.sendSimple(
            "\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
            "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
            "              #r有什么需要我替您服务吗?#k\r\n" +
            "#e#L1#  1.枫叶点数50点   (100赞助积分)#l\r\n" +
            "#L2#  2.枫叶点数550点  (1000赞助积分)#l\r\n" +
            "#L3#  3.枫叶点数6000点 (10000赞助积分)#l\r\n" +
            "#L4#  4.独角兽骑宠组合 (2500赞助积分)#l\r\n" +
            "#L5#  5.MVP名牌聊天戒指组合(银) (5000赞助积分)#l\r\n" +
            "#L6#  6.MVP名牌聊天戒指组合(黄金) (10000赞助积分)#l\r\n" +
            "#L7#  7.MVP名牌聊天戒指组合(钻石) (20000赞助积分)#l\r\n" +
            "#L8#  8.500发小钢珠 (200赞助积分)#l\r\n" +
            "#L9#  9.3000发小钢珠 (900赞助积分)#l\r\n" +
            "#r #k\r\n" +
            "#d重要申明:特殊骑宠移动速度每种不同,无法爬绳\r\n解除技能需从右上角按右键,拍卖可装备#k\r\n" +
            "#L10#  11.魔法扫把 (2000赞助积分)#l\r\n" +
            "#L11#  12.巴洛谷 (2000赞助积分)#l\r\n" +
            "#L12#  13.筋斗云 (2000赞助积分)#l\r\n" +
            "#L13#  14.透明巴洛谷 (2000赞助积分)#l\r\n" +
            "#L14#  15.黑山猪王 (2000赞助积分)#l\r\n" +
			"#L15#  16.熊猫骑宠 (2000赞助积分)#l\r\n" +
			"#L16#  17.企鹅骑宠 (2000赞助积分)#l\r\n" +
			"#L17#  18.蓝绵绵羊 (2000赞助积分)#l\r\n" +
			"#L18#  19.拉风跑车 (2000赞助积分)#l\r\n" +
			"#L19#  20.阿拉丁 (5000赞助积分)#l\r\n" +
		    "#r #k\r\n" +
            "#d    ------------------------------------#k\r\n" +
            "#e#L20#  21.鱼儿戒指 (7张泡泡谷签到证明)#l\r\n" +
            "#L21#  22.空虚寂寞觉得冷戒指 (7张泡泡谷签到证明)#l\r\n"+
            "#L22#  23.欧洛拉戒指 (需要泡泡谷签到证明30张)#l\r\n" 
            );
}

function action(mode, type, selection) {
    if (select === -1) {
        select = selection;
    }
    switch (select) {
        case 1:
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

        case 2:
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

        case 3:
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
        case 4:
        {
            if (cm.getPlayer().getCZJF() < 2500) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 2500);
                        cm.gainItem(1902024, 1);
                        cm.gainItem(1912017, 1);
                        cm.getItemLog("赞助积分兑换", "花2500积分兑换物品：1902024,1912017");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 5000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 3)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 5000);
                        cm.gainItem(1115012, 1);
                        cm.gainItem(1115100, 1);
                        cm.getItemLog("赞助积分兑换", "花5000积分兑换物品：1115012,1115100");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 10000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 3)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 10000);
                        cm.gainItem(1115013, 1);
                        cm.gainItem(1115101, 1);
                        cm.getItemLog("赞助积分兑换", "花10000积分兑换物品：1115013,1115101");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 20000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 3)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 20000);
                        cm.gainItem(1115014, 1);
                        cm.gainItem(1115102, 1);
                        cm.getItemLog("赞助积分兑换", "花20000积分兑换物品：1115014,1115102");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 200) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(5, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 200);
                        cm.gainItem(5201001, 1);
                        cm.getItemLog("赞助积分兑换", "花100积分兑换物品：5201001");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 900) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(5, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 900);
                        cm.gainItem(5201002, 1);
                        cm.getItemLog("赞助积分兑换", "花900积分兑换物品：5201002");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 2000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 2000);
                        cm.gainItem(1932005, 1);
                        cm.getItemLog("赞助积分兑换", "花2000积分兑换物品：1932005");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 2000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 2000);
                        cm.gainItem(1932010, 1);
                        cm.getItemLog("赞助积分兑换", "花2000积分兑换物品：1932010");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 2000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 2000);
                        cm.gainItem(1932011, 1);
                        cm.getItemLog("赞助积分兑换", "花2000积分兑换物品：1932011");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 2000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 2000);
                        cm.gainItem(1932012, 1);
                        cm.getItemLog("赞助积分兑换", "花2000积分兑换物品：1932012");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 2000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 2000);
                        cm.gainItem(1932096, 1);
                        cm.getItemLog("赞助积分兑换", "花5000积分兑换物品：1932096");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 2000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 2000);
                        cm.gainItem(1932097, 1);
                        cm.getItemLog("赞助积分兑换", "花5000积分兑换物品：1932097");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
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
            if (cm.getPlayer().getCZJF() < 2000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 2000);
                        cm.gainItem(1932098, 1);
                        cm.getItemLog("赞助积分兑换", "花5000积分兑换物品：1932098");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }
		case 17:
        {
            if (cm.getPlayer().getCZJF() < 2000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 2000);
                        cm.gainItem(1932306, 1);
                        cm.getItemLog("赞助积分兑换", "花5000积分兑换物品：1932306");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }
		case 18:
        {
            if (cm.getPlayer().getCZJF() < 2000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 2000);
                        cm.gainItem(1932265, 1);
                        cm.getItemLog("赞助积分兑换", "花5000积分兑换物品：1932265");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }
		case 19:
        {
            if (cm.getPlayer().getCZJF() < 5000) {
                cm.sendOk("#b你的赞助积分不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    if (cm.canHoldByType(1, 2)) {
                        cm.getPlayer().setCZJF(cm.getPlayer().getCZJF() - 5000);
                        cm.gainItem(1932223, 1);
                        cm.getItemLog("赞助积分兑换", "花5000积分兑换物品：1932223");
                        cm.sendOk("#b兑换成功。~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的背包没有多余的空格。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你的背包没有多余的空格。");
                    cm.dispose();
                    return;
                }
            }
            cm.dispose();
            break;
        }
        case 20:
        {
            if (!cm.haveItem(4000392, 7)) {
                cm.sendOk("#b你的泡泡谷签到证明不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4000392, -7);
                    cm.gainItem(1112907, 1);
                    cm.getItemLog("签到证明兑换", "用7个签到证明兑换到：1112907");
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
        case 21:
        {
            if (!cm.haveItem(4000392, 7)) {
                cm.sendOk("#b你的泡泡谷签到证明不够哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4000392, -7);
                    cm.gainItem(1112916, 1);
                    cm.getItemLog("签到证明兑换", "用7个签到证明兑换到：1112916");
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
        case 22:
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

