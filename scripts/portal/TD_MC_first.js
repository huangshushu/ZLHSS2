/*
 ZEVMS冒险岛(079)游戏服务端
 */
function enter(pi) {
    var level = pi.getPlayerStat("LVL");
    if (level >= 30) {
        pi.playPortalSE();
        pi.warp(106020001, 0);
    } else {
        pi.playerMessage(5, " 30 级才可以进入。");
    }
}