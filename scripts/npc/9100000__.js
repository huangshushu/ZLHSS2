
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
        cm.sendYesNo("嗨，我这里可以兑换情人节限定礼包哦，只需要4131GASH。\r\n" +
                "#i2140002# 大量枫币+1314枫叶点数+摸鱼GM的LINE . . . \r\n" +
                "#i1022172# #z1022172#x1 \r\n" +
                "#i1032182# #z1032182#x1 \r\n" +
                "#i1012310# #z1012310#x1 \r\n" +
                "#i1102379# #z1102379#x1 \r\n");

    } else if (status == 1) {
        if (cm.getPotion(1) < 4131) {
            cm.sendOk("你没有4131GASH");
            cm.dispose();
            return;
        } else {
            if (cm.canHoldByType(1, 4)) {
                cm.getPlayer().modifyCSPoints(1, -4131, true);
                cm.getPlayer().modifyCSPoints(2, 1314, true);
                cm.gainMeso(13141314);
                cm.gainItem(1022172, 1);
                cm.gainItem(1012310, 1);
                cm.gainItem(1032182, 1);
                cm.gainItem(1102379, 1);
                cm.sendOk("祝您白色情人节快乐。");
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
