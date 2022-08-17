/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = " Hi~ #b#h ##k，是星缘推荐你来的吗？这里是闹鬼的宅邸，你要进去观光观光吗？\r\n";

        selStr += " #L1##b进入宅邸外围#l\r\n";
		selStr += " #L2##b我要离开这里#l\r\n";


        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.warp(229010000, 2);
				cm.dispose();
                break;
            case 2:
				cm.dispose();
				cm.openNpc(2007,6);
                break;
        }
    }
}
