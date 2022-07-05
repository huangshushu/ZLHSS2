var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getPlayer().getLevel() < 200 && cm.haveItem(4032495)) {
            cm.sendYesNo("你想移动到隐藏地图?");
        } else {
            cm.sendOk("你需要小于200级，需要进入要有#v4032495#勋章.");
            cm.dispose();
        }
    } else if (status == 1) {
        if (cm.getPlayerCount(677000000) == 0 && cm.getPlayerCount(677000001) == 0) {
            cm.warp(677000000, 0);
			cm.getMap(677000001).killAllMonsters(false);
            cm.spawnMobOnMap(9400612, 1, 52, 60, 677000001);
            cm.dispose();
        } else {
            cm.sendOk("里面已经有人在进行职业头任务了，你稍后再试");
            cm.dispose();
        }
    }
}
