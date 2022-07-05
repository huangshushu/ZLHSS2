function enter(pi) {
    var map = 0;
    if (pi.getQuestStatus(20701) == 1) {
	map = 913000000;
    } else if (pi.getQuestStatus(20702) == 1) {
	map = 913000100;
    } else if (pi.getQuestStatus(20703) == 1) {
	map = 913000200;
    }
    if (map > 0) {
	if (pi.getPlayerCount(map) == 0) {
	    var mapp = pi.getMap(map);
	    mapp.resetFully();
	    mapp.respawn(true);
	    pi.warp(map, 0);
	} else {
	    pi.playerMessage("有人在地图裡面了，请稍后再尝试。");
	}
    } else {
	pi.playerMessage("我只给有修练的人进入。");
    }
}