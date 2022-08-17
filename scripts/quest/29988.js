/*
	任务: 称号 - 继承狂龙战士命运的人
	描述: 为了纪念狂龙战士2转而发放的勋章。
	获得: 1142485 - 拥有狂龙战士的命运的人
*/

var status = -1;
var level = 30
var itemId = 1142485;

function start(mode, type, selection) {
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && (qm.getJob() >= 6000 && qm.getJob() <= 6112) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && (qm.getJob() >= 6000 && qm.getJob() <= 6112) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}
