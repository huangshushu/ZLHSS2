var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("This is an important decision to make.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendNext("Did krag bring you here?");
    } else if (status == 1) {
	qm.sendPlayerToNpc("#bI think so.");
    } else if (status == 2) {
	qm.sendNext("Ok, here is your mission.");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.dispose();
    }
}