/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    cm.openShop(35);
    cm.dispose();
}
