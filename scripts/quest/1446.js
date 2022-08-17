/* Pedro
	El Nath : Cheif's Resistance (211000001)
	3rd job advancer/quests.
        Made by TheGM
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
			status = -1;
			qm.warp(211040401);
			qm.forceStartQuest();
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
			if (!qm.haveItem(4031059)) {
				qm.sendOk("请把 #i4031059# 带回来给我吧");
				qm.forceStartQuest();
				qm.dispose();
			} else {
				qm.gainItem(1142109, 1);
				qm.removeAll(4031059);
				qm.forceCompleteQuest();
				qm.getPlayer().changeJob(521);
				//qm.gainSp(3);
				qm.dispose();
			}
			status = -1;
		}
	}
}
