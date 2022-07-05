
function start() {
    var Editing = false //false 开始
    if (Editing) {
        cm.sendOk("维修中");
        cm.dispose();
        return;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendSimple("嗨，你如果有枫叶可以来找我兑换礼品。\r\n" +
                "#L0##d惊喜圣诞袜（100个枫叶）\r\n" +
                "#L1##d耶诞树（500个枫叶）\r\n" +
                "#L2##d耶诞树椅子（1500个枫叶）\r\n" +
                "#L3##d圣诞幽灵（1500个枫叶）\r\n" +
                "#L4##d与雪人一起椅子（1500个枫叶）\r\n" +
                "#L5##d考古学家的眼镜（2000个枫叶）\r\n" +
                "#L6##d转蛋卷（500个枫叶）\r\n");

    } else if (status == 1) {
        if (selection == 0) {
            if (cm.canHold()) {
                if (cm.haveItem(4001126, 100)) {
                    cm.gainItem(4001126, -100);
                    cm.gainItem(2022468, 10);
                    cm.sendOk("恭喜你获得#d惊喜圣诞袜x1。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你没有足够数量的枫叶。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你的背包没有足够的位置。");
                cm.dispose();
                return;
            }
        } else if (selection == 1) {
            if (cm.canHold()) {
                if (cm.haveItem(4001126, 500)) {
                    cm.gainItem(4001126, -500);
                    cm.gainItem(1332032, 1);
                    cm.sendOk("恭喜你获得#d耶诞树x1。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你没有足够数量的枫叶。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你的背包没有足够的位置。");
                cm.dispose();
                return;
            }
        } else if (selection == 2) {
            if (cm.canHold()) {
                if (cm.haveItem(4001126, 1500)) {
                    cm.gainItem(4001126, -1500);
                    cm.gainItem(3010048, 1);
                    cm.sendOk("恭喜你获得#d耶诞树椅子x1。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你没有足够数量的枫叶。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你的背包没有足够的位置。");
                cm.dispose();
                return;
            }
        } else if (selection == 3) {
            if (cm.canHold()) {
                if (cm.haveItem(4001126, 1500)) {
                    cm.gainItem(4001126, -1500);
                    cm.gainItem(3010584, 1);
                    cm.sendOk("恭喜你获得#d圣诞幽灵x1。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你没有足够数量的枫叶。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你的背包没有足够的位置。");
                cm.dispose();
                return;
            }
        } else if (selection == 4) {
            if (cm.canHold()) {
                if (cm.haveItem(4001126, 1500)) {
                    cm.gainItem(4001126, -1500);
                    cm.gainItem(3010767, 1);
                    cm.sendOk("恭喜你获得#d与雪人一起椅子x1。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你没有足够数量的枫叶。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你的背包没有足够的位置。");
                cm.dispose();
                return;
            }
        } else if (selection == 5) {
            if (cm.canHold()) {
                if (cm.haveItem(4001126, 2000)) {
                    cm.gainItem(4001126, -2000);
                    cm.gainItem(1022088, 1);
                    cm.sendOk("恭喜你获得#d考古学者的眼镜x1。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你没有足够数量的枫叶。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你的背包没有足够的位置。");
                cm.dispose();
                return;
            }
        } else if (selection == 6) {
            if (cm.canHold()) {
                if (cm.haveItem(4001126, 500)) {
                    cm.gainItem(4001126, -500);
                    cm.gainItem(5220000, 1);
                    cm.sendOk("恭喜你获得#d转蛋卷X1。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你没有足够数量的枫叶。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你的背包没有足够的位置。");
                cm.dispose();
                return;
            }
        }
    }
}
