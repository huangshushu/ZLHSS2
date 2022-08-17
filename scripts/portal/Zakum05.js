/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：扎昆
 */

function enter(pi) {
    /*if (pi.getQuestStatus(100200) != 2) {
        pi.playerMessage(5, "你还未完成挑战扎昆的相关任务。");
        return false;
    } 
    if (!pi.haveItem(4001017)) {
        pi.playerMessage(5, "由于你沒有火焰之眼，所以不能挑战扎昆。");
        return false;
    }*/
    // pi.playPortalSE();
    // pi.warp(pi.getPlayer().getMapId() + 100, "west00");
	
	pi.openNpc(2030013, 6);
	
    return true;
}