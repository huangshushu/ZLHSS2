var status = -1;

function start(mode, type, selection) {}

function end(mode, type, selection) {
    if (qm.haveItem(4011008, 1)) {
        qm.gainItem(4011008, -1);
		qm.forceCompleteQuest(3953);
		qm.forceStartQuest(3954);
    } else {
        qm.sendNext("貌似没有我想要的东西呢。");
    }
    qm.dispose();
}
