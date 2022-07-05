
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
        cm.sendYesNo("嗨，我这里可以兑换春节限定礼包哦，只需要5000GASH。\r\n" +
                "#i2140002# 大量枫币+乳香世家的LINE . . . \r\n" +
                "#i1102248# #z1102248#x1 \r\n" +
                "#i1032205# #z1032205#x1 \r\n" +
                "#i1132145# #z1132145#x1 \r\n" +
                "#i3010756# #z3010756#x1 \r\n" +
                "#i2022463# #z2022463#x2 \r\n" +
                "#i5220000# #z5220000#x10 \r\n");

    } else if (status == 1) {
        if (cm.getPotion(1) < 5000) {
            cm.sendOk("你没有5000GASH");
            cm.dispose();
            return;
        } else {
            if (cm.canHoldByType(1, 3) && cm.canHoldByType(2, 1) && cm.canHoldByType(3, 1) && cm.canHoldByType(5, 1)) {
                cm.getPlayer().modifyCSPoints(1, -5000, true);
                cm.gainMeso(20172017);
                cm.gainItem(1102248, 1);
                cm.gainItem(1032205, 1);
                cm.gainItem(1132145, 1);
                cm.gainItem(3010756, 1);
                cm.gainItem(2022463, 2);
                cm.gainItem(5220000, 10);
                cm.sendOk("祝您新春快乐。");
                cm.dispose();
                return;
            } else {
                cm.sendOk("对不起，你的背包栏位不足。");
                cm.dispose();
                return;
            }
        }
    }
}
