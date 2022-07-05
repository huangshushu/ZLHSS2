var status = -1;
function action(mode, type, selection) {
    if (cm.isQuestActive(2236)) {
		var fkmap1 = cm.getPlayer().getMapId() == 105050200;
		var fkmap2 = cm.getPlayer().getMapId() == 105060000;
		var fkmap3 = cm.getPlayer().getMapId() == 105070000;
		var fkmap4 = cm.getPlayer().getMapId() == 105090000;
		var fkmap5 = cm.getPlayer().getMapId() == 105090100;
		var fk1 = cm.getOneTimeLog('fk1') == 0;
		var fk2 = cm.getOneTimeLog('fk2') == 0;
		var fk3 = cm.getOneTimeLog('fk3') == 0;
		var fk4 = cm.getOneTimeLog('fk4') == 0;
		var fk5 = cm.getOneTimeLog('fk5') == 0;
		var fk11 = cm.getOneTimeLog('fk1') != 0;
		var fk22 = cm.getOneTimeLog('fk2') != 0;
		var fk33 = cm.getOneTimeLog('fk3') != 0;
		var fk44 = cm.getOneTimeLog('fk4') != 0;
        if (fkmap1) {
            if (fk1) {
                cm.setOneTimeLog('fk1');
                cm.gainItem(4032263, -1);
				cm.sendNext("已经完成了5/1。");
            } else {
                cm.sendOk("有种强力的魔咒，无法接近。");
            }
        } else if (fkmap2) {
            if (fk2 && fk11) {
                cm.setOneTimeLog('fk2');
                cm.gainItem(4032263, -1);
				cm.sendNext("已经完成了5/2。");
            } else {
                cm.sendOk("有种强力的魔咒，无法接近。");
            }
        } else if (fkmap3) {
            if (fk3 && fk11 && fk22) {
                cm.setOneTimeLog('fk3');
                cm.gainItem(4032263, -1);
				cm.sendNext("已经完成了5/3。");
            } else {
                cm.sendOk("有种强力的魔咒，无法接近。");
            }
        } else if (fkmap4) {
            if (fk4 && fk11 && fk22 && fk33) {
                cm.setOneTimeLog('fk4');
                cm.gainItem(4032263, -1);
				cm.sendNext("已经完成了5/4。");
            } else {
                cm.sendOk("有种强力的魔咒，无法接近。");
            }
        } else if (fkmap5) {
            if (fk5 && fk11 && fk22 && fk33 && fk44) {
                cm.setOneTimeLog('fk5');
                cm.gainItem(4032263, -2);
                cm.forceCompleteQuest(2236);
                cm.gainExp(30000);
                cm.sendNext("完成任务。 经验值:30000");
            } else {
                cm.sendOk("有种强力的魔咒，无法接近。");
            }
        }
    }
    cm.dispose();
}
