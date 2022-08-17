var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.removeAll(4032312);
	qm.changeJob(2111);
	qm.forceCompleteQuest();//完成任务
	qm.forceCompleteQuest();
	qm.dispose();
}