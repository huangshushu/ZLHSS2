/*
 ZEVMS冒险岛(079)游戏服务端
 */
function enter(pi) {
    if (pi.getQuestStatus(21728) > 0) {
        pi.打开NPC(2007,21728);
        return true;
    } else {
        pi.playerMessage(5, "因不明的力量，你无法进入。");
        return false;
    }
}