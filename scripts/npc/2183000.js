function start() {
	cm.sendYesNo("Do you want to really go out and abandon your duty?");
}

function action(mode, type, selection) {
    	if (mode == 1) {
		cm.warp(262010000,0);
	}
	cm.dispose();
}

/*var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        
        if (cm.getPlayer().getEventInstance() == null) {
            cm.warp(955000000);
            cm.dispose();
            return;
        }
        cm.sendYesNo("Do you want to really go out?");
        
    } else if (status == 1) {
        var eim = cm.getPlayer().getEventInstance();
        if (cm.getPlayer().getParty() != null) {
            if (!cm.isLeader()) {
                eim.leftParty(cm.getPlayer());
            } else {
                eim.disbandParty();
            }
        } else {
            eim.unregisterPlayer(cm.getPlayer());
            cm.warp(262000000);
        }
        cm.dispose();
    }
}*/