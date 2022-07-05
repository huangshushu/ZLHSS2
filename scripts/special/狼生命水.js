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
        cm.sendSimple("如果你需要狼生命水，那么拿花费1亿来买。\r\n " +
                "#L0#我要购买#d#i4032334##z4032334##l\r\n");
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getPlayer().getMeso() >= 100000000) {
                if (cm.canHold()) {
                    cm.gainMeso(-100000000);
                    cm.gainItem(4032334, 1);
                    cm.sendOk("感谢购买!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你枫币不够哦");
                cm.dispose();
                return;
            }
        }
    }
}
