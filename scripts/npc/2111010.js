function start() {
    if (cm.getQuestStatus(3309) == 1) {
        cm.gainItem(4031708, 1);
        cm.warp(261020700, 0);
    } else {
        cm.sendNext("找我有什么事情??");
    }
	cm.dispose();
}
