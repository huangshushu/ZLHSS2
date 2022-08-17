function start() {
    var mapid = 0;
    if (cm.getQuestStatus(1608) == 1) {
        mapid = 931050410;
    }
    if (mapid != 0) {
        //cm.getMap(mapid).respawn(true);
        cm.resetMap(mapid);
        cm.warp(mapid, 0);
    }
    cm.dispose();
}