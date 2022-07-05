/* global cm */

var status = -1;
var select = -1;

function start() {
    cm.sendSimple(
            "\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
            "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
            "#r   此为乖宝宝印章回收商人，有什么需要我替您服务吗?#k\r\n" +
            "#e#L1#  1. 戒子力量卷轴60% (需要1个印章)#l\r\n" +
            "#L2#  2. 戒子智力卷轴60% (需要1个印章)#l\r\n" +
            "#L3#  3. 戒子敏捷卷轴60% (需要1个印章)#l\r\n" +
            "#L4#  4. 戒子幸运卷轴60% (需要1个印章)#l\r\n" +
			"#r #k\r\n" +
			"#d    ------------------------------------#k\r\n" +
            "#e#L5#  5. 热狗套服(力量) (需要5个印章)#l\r\n" +
            "#L6#  6. 热狗套服(敏捷) (需要5个印章)#l\r\n" +
            "#L7#  7. 热狗套服(智力) (需要8个印章)#l\r\n" +
            "#L8#  8. 热狗套服(幸运) (需要5个印章)#l\r\n" +
			"#r #k\r\n" +
			"#d    ------------------------------------#k\r\n" +
            "#e#L9#  9. 魅惑之剑 (单手剑) (需要5个印章)#l\r\n" +
            "#L10#  10.魅惑之剑 (短剑)   (需要5个印章)#l\r\n" +
            "#L11#  11.魅惑之剑 (长杖)   (需要5个印章)#l\r\n" +
            "#L12#  12.魅惑之剑 (双手剑) (需要5个印章)#l\r\n" +
            "#L13#  13.魅惑之剑 (枪)     (需要5个印章)#l\r\n" +
            "#L14#  14.魅惑之剑 (矛)     (需要5个印章)#l\r\n" +
            "#L15#  15.魅惑之剑 (弓)     (需要5个印章)#l\r\n" +
            "#L16#  16.魅惑之剑 (弩)     (需要5个印章)#l\r\n" +
            "#L17#  17.魅惑之剑 (拳套)   (需要5个印章)#l\r\n"+
			"#r #k\r\n" +
			"#d    ------------------------------------#k\r\n" +
            "#e#L18#  18.单手剑攻击诅咒卷轴30% (需要30个印章)#l\r\n"+
            "#L19#  19.短剑攻击诅咒卷轴30%   (需要30个印章)#l\r\n"+
            "#L20#  20.矛攻击诅咒卷轴30%     (需要30个印章)#l\r\n"+
            "#L21#  21.弓攻击诅咒卷轴30%     (需要30个印章)#l\r\n"+
            "#L22#  22.拳套攻击诅咒卷轴30%   (需要30个印章)#l\r\n"+
            "#L23#  23.指虎攻击诅咒卷轴30%   (需要30个印章)#l\r\n"+
            "#L24#  24.火枪攻击诅咒卷轴30%   (需要30个印章)#l\r\n"+
			"#L25#  25.枪攻击诅咒卷轴30%     (需要30个印章)#l\r\n"+
			"#L26#  26.弩攻击诅咒卷轴30%     (需要30个印章)#l\r\n"+
			"#r #k\r\n" +
			"#d    ------------------------------------#k\r\n" +
            "#e#L27#  27.套服敏捷诅咒卷轴30% (需要40个印章)#l\r\n"+
            "#L28#  28.套服力量诅咒卷轴30% (需要40个印章)#l\r\n"+
            "#L29#  29.套服智力诅咒卷轴30% (需要40个印章)#l\r\n"+
            "#L30#  30.套服幸运诅咒卷轴30% (需要40个印章)#l"
            );
}

function action(mode, type, selection) {
    if (select === -1) {
        select = selection;
    }
    switch (select) {
        case 1:
        {
            if (!cm.haveItem(4001137, 1)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -1);
                    cm.gainItem(2041101, 1);
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
            if (!cm.haveItem(4001137, 1)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -1);
                    cm.gainItem(2041104, 1);
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
            if (!cm.haveItem(4001137, 1)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -1);
                    cm.gainItem(2041107, 1);
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
            if (!cm.haveItem(4001137, 1)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -1);
                    cm.gainItem(2041110, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1052187, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1052188, 1);
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
            if (!cm.haveItem(4001137, 8)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -8);
                    cm.gainItem(1052189, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1052190, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1302130, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1332098, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1382079, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1402071, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1432060, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1442085, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1452082, 1);
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
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1462074, 1);
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

        case 17:
        {
            if (!cm.haveItem(4001137, 5)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -5);
                    cm.gainItem(1472099, 1);
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
        case 18:
        {
            if (!cm.haveItem(4001137, 30)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -30);
                    cm.gainItem(2043005, 1);
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
        case 19:
        {
            if (!cm.haveItem(4001137, 30)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -30);
                    cm.gainItem(2043305, 1);
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
        case 20:
        {
            if (!cm.haveItem(4001137, 30)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -30);
                    cm.gainItem(2044405, 1);
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
            if (!cm.haveItem(4001137, 30)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -30);
                    cm.gainItem(2044505, 1);
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
            if (!cm.haveItem(4001137, 30)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -30);
                    cm.gainItem(2044705, 1);
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
        case 23:
        {
            if (!cm.haveItem(4001137, 30)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -30);
                    cm.gainItem(2044804, 1);
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
        case 24:
        {
            if (!cm.haveItem(4001137, 30)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -30);
                    cm.gainItem(2044904, 1);
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
		case 25:
        {
            if (!cm.haveItem(4001137, 30)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -30);
                    cm.gainItem(2044305, 1);
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
		case 26:
        {
            if (!cm.haveItem(4001137, 30)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -30);
                    cm.gainItem(2044605, 1);
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
        case 27:
        {
            if (!cm.haveItem(4001137, 40)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -40);
                    cm.gainItem(2040509, 1);
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
        case 28:
        {
            if (!cm.haveItem(4001137, 40)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -40);
                    cm.gainItem(2040533, 1);
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
        case 29:
        {
            if (!cm.haveItem(4001137, 40)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -40);
                    cm.gainItem(2040519, 1);
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
        case 30:
        {
            if (!cm.haveItem(4001137, 40)) {
                cm.sendOk("#b检查一下背包有没有乖宝宝印章哦");
                cm.dispose();
                return;
            } else {
                if (cm.canHold()) {
                    cm.gainItem(4001137, -40);
                    cm.gainItem(2040521, 1);
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

