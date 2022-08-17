var status = -1;

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        var mapid = getMap(cm.getPlayer().getMapId());
        cm.sendYesNo("The closest continental station to your location is #m" + mapid + "#. Would you like to move to #b#m" + mapid + "##k?");
    } else if (status == 1) {
        cm.warp(104020100);
        cm.dispose();
    }
}

function getMap(mapid) {
    switch (mapid / 10000000) {
        case 10:
            return 104020100;
        default:
            return 104020100;
    }
}