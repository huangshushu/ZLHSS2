var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestActive(3927)) {
	cm.forceCompleteQuest(3927);
	cm.sendNext("任务完成。");
    }
    cm.dispose();
}