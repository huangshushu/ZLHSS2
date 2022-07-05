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
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("我这里可以通子弹换手枪哦。\r\n " +
                "#L0##d#i1352701##z1352701#兑换#i1492077##z1492077##l\r\n" +
                "#L1##d#i1352702##z1352702#兑换#i1492078##z1492078##l\r\n" +
                "#L2##d#i1352703##z1352703#兑换#i1492079##z1492079##l\r\n");

    } else if (status == 1) {
        if (selection == 0) {
            if (cm.haveItem(1352701, 1)) {
                if (cm.canHold()) {
                    cm.gainItem(1352701, -1);
                    cm.gainItem(1492077, 1);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你没有#z1352701#。");
                cm.dispose();
                return;
            }
        }
        if (selection == 1) {
            if (cm.haveItem(1352702, 1)) {
                if (cm.canHold()) {
                    cm.gainItem(1352702, -1);
                    cm.gainItem(1492078, 1);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你没有#z1352702#。");
                cm.dispose();
                return;
            }
        }
        if (selection == 2) {
            if (cm.haveItem(1352703, 1)) {
                if (cm.canHold()) {
                    cm.gainItem(1352703, -1);
                    cm.gainItem(1492079, 1);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你没有#z1352703#。");
                cm.dispose();
                return;
            }
        }
    }
}
