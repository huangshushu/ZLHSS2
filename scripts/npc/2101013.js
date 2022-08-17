/*
 ZEVMS冒险岛(079)游戏服务端
 */
var towns = new Array(100000000, 101000000, 102000000, 103000000, 104000000);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("切····");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.是否说明文字("你想要快速返回金银岛吗？");
        } else if (status == 1) {
            cm.sendNext("好了，准备起飞~");
        } else if (status == 2) {

            cm.warp(towns[Math.floor(Math.random() * towns.length)]);

            cm.dispose();

        }
    }
}