/*
	任务: 称号 - 终极复仇者
	描述: 了纪念恶魔复仇者达到200级转职而发放的勋章。
	获得: 1142557
*/

var status = -1;
var level = 200;
var itemId = 1142557;

function start(mode, type, selection) {
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && ((qm.getJob() >= 3120 && qm.getJob() <= 3122) || qm.getJob() == 3101) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && ((qm.getJob() >= 3120 && qm.getJob() <= 3122) || qm.getJob() == 3101) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}
