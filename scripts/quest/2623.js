/* 
	NPC Name: 		Lady syl
	Map(s): 		103050101
	Description: 		Quest - Becoming a blade recruit
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.forceStartQuest();
            qm.gainItem(4032616,1);
            qm.warp(910350000);
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
		qm.dispose();
    } else {
		if (mode == 1)
			status++;
		else
			status--;

		if (status == 0) {
			qm.forceCompleteQuest();
			qm.fixDualSkill();
			qm.gainItem(4032616,-1);
			qm.changeJob(430);
			qm.dispose();
		}
    }
}
