﻿
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
        cm.sendYesNo("嗨，我这里可以兑换开学限定礼包哦，只需要6888GASH哦。\r\n" +
                "预计近期将进行大改，大量不可交易装备将开放交易，列如下列装备。\r\n" +
                "#i2140002# 大量枫币+1888枫叶点数+摸鱼GM的LINE . . . \r\n" +
                "#i1032121# #z1032121#x1 \r\n" +
                "#i1042231# #z1042231#x1 \r\n" +
                "#i1062148# #z1062148#x1 \r\n" +
                "#i1072618# #z1072618#x1 \r\n" +
                "#i1082401# #z1082401#x1 \r\n" +
                "#i1112681# #z1112681#x1 \r\n" +
                "#i1122174# #z1122174#x1 \r\n" +
                "#i2450000# #z2450000#x1 \r\n" +
                "#i2022463# #z2022463#x1 \r\n" +
                "#i2022635# #z2022635#x10 \r\n");

    } else if (status == 1) {
        if (cm.getPotion(1) < 6888) {
            cm.sendOk("你没有6888GASH");
            cm.dispose();
            return;
        } else {
            if (cm.canHoldByType(1, 7) && cm.canHoldByType(2, 4)) {
                cm.getPlayer().modifyCSPoints(1, -6888, true);
                cm.getItemLog("GASH礼包", "6888GASH礼包");
                cm.getPlayer().modifyCSPoints(2, 1888, true);
                cm.gainMeso(18888888);
                cm.gainItem(1032121, 1);
                cm.gainItem(1042231, 1);
                cm.gainItem(1062148, 1);
                cm.gainItem(1072618, 1);
                cm.gainItem(1082401, 1);
                cm.gainItem(1112681, 1);
                cm.gainItem(1122174, 1);
                cm.gainItem(2450000, 1);
                cm.gainItem(2022463, 1);
                cm.gainItem(2022635, 10);
                cm.sendOk("祝您事业顺利，学业有成。");
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
