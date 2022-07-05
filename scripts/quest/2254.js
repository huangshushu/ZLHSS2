var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
		qm.dispose();
    } else {
        if (mode == 0 && type > 0) {
            qm.dispose();
            return;
		}
		if (mode == 1){
			status++;
		} else {
			status--;
		}
		switch(status){
			case 0:
				qm.forceStartQuest();
				qm.dispose();
				break;
			default:
				qm.dispose();
				break;
		}
	}
}