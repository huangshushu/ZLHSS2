var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getPlayer().getLevel() < 200 && cm.haveItem(4032485)) {
            cm.sendYesNo("你想移动到隐藏地图?");
        } else {
            cm.sendOk("你需要小于200级，需要进入要有#v4032485#勋章.");
            cm.dispose();
        }
    } else if (status == 1) {
        if (cm.getPlayerCount(677000009) == 0 && cm.getPlayerCount(677000008) == 0) {
            cm.warp(677000008, 0);
			cm.getMap(677000009).killAllMonsters(false);
            cm.spawnMobOnMap(9400613, 1, 84, 66, 677000009);
            cm.dispose();
        } else {
            cm.sendOk("里面已经有人在进行职业头任务了，你稍后再试");
            cm.dispose();
        }
    }
}
