/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：情人节红线女
 */




var status = 0

function start() {
    cm.sendYesNo("你是要去殿堂吗？");
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0)
            cm.sendOk("既然你不去那就算了。");
        cm.dispose();
        return;
    }
    status++;
    if (status == 1) {
        cm.saveLocation("WEDDING");
        cm.warp(700000000, 0);
        cm.dispose();
    }
}