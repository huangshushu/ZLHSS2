var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestActive(3929)) {
        cm.playerMessage("任务完成。");
        cm.forceCompleteQuest(3929);
    } else if (cm.isQuestActive(3926)) {
        if (cm.haveItem(4031579)) {
            if (cm.getBossLog("耍红蝎子团4") == 1) {
                cm.sendNext("貌似已经给过米了。");
            } else {
                cm.setBossLog("耍红蝎子团4");
                cm.gainItem(4031579, -1);
				cm.gainExp(6500);
				cm.forceCompleteQuest(3926);
            }
        }
        cm.dispose();
    }
}
