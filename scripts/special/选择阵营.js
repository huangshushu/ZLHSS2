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
        cm.sendSimple("我这里可以选择阵营哦。\r\n " +
                "#L0##d#i1142398##z1142398##l\r\n" +
                "#L1##d#i1142440##z1142440##l\r\n" +
                "#L2##d#i1142441##z1142441##l\r\n" +
                "#L3##d#i1142443##z1142443##l\r\n");

    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getOneTimeLog("选择阵营1") < 1) {
                if (cm.canHold()) {
                    cm.setOneTimeLog("选择阵营1");
                    cm.gainItem(1142398, 1);
                    cm.sendOk("选择阵营成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你已经选择过阵营。");
                cm.dispose();
                return;
            }
        }
        if (selection == 1) {
            if (cm.getOneTimeLog("选择阵营1") < 1) {
                if (cm.canHold()) {
                    cm.setOneTimeLog("选择阵营1");
                    cm.gainItem(1142440, 1);
                    cm.sendOk("选择阵营成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你已经选择过阵营。");
                cm.dispose();
                return;
            }
        }
        if (selection == 2) {
            if (cm.getOneTimeLog("选择阵营1") < 1) {
                if (cm.canHold()) {
                    cm.setOneTimeLog("选择阵营1");
                    cm.gainItem(1142441, 1);
                    cm.sendOk("选择阵营成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你已经选择过阵营。");
                cm.dispose();
                return;
            }
        }
        if (selection == 3) {
            if (cm.getOneTimeLog("选择阵营1") < 1) {
                if (cm.canHold()) {
                    cm.setOneTimeLog("选择阵营1");
                    cm.gainItem(1142443, 1);
                    cm.sendOk("选择阵营成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你已经选择过阵营。");
                cm.dispose();
                return;
            }
        }
    }
}
