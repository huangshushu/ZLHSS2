/*
 Zakum Entrance
 */

function enter(pi) {
    if (pi.getQuestStatus(100200) != 2) {
        pi.playerMessage(5, "你还没有完成阿杜比斯的考验，无法面对扎昆。");
        return false;

    }
    if (!pi.haveItem(4001017)) {
        pi.playerMessage(5, "你没有火焰之眼无法进入!");
        return false;
    }
    // if (!pi.getMap().isZakumDoor()) {
    //     pi.playerMessage(5, "里面已经有人在挑战!");
    //     return false;
    // }
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}