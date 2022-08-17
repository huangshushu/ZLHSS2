/*
	任务: 称号 - 光之骑士团长
	描述: 为了纪念光之骑士米哈尔成功完成4转而发放的勋章。
	获得: 1142402 - 光之骑士团长
*/

var status = -1;
var level = 100
var itemId = 1142402;

function start(mode, type, selection) {
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && (qm.getJob() >= 5000 && qm.getJob() <= 5112) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && (qm.getJob() >= 5000 && qm.getJob() <= 5112) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}
