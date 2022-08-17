/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：职业头任务，魔鬼入口
 地图；104040002
 */
var 等级 = 40;
var 勋章 = 1452084;
var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getPlayer().getLevel() < 等级 && cm.haveItem(勋章)) {
            cm.sendYesNo("你想移动到隐藏地图？");
        } else {
             cm.sendOk("你需要小于 #b" + 等级 + "#k 级，需要进入要有 #v" + 勋章 + "# #b#t" + 勋章 + "#");
            cm.dispose();
        }
    } else {
        cm.spawnMob_map(9400610, 677000003, 34, 35);
        cm.warp(677000002, 0);
        cm.dispose();
    }
}