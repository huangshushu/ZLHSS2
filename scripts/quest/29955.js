/*
	任务: 称号 - 精灵的英雄
	描述: 身为精灵的英雄，为了找回力量而努力吧！
	获得: 1142339 - 精灵的英雄
*/

var status = -1;
var level = 100
var itemId = 1142339;

function start(mode, type, selection) {
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && (qm.getJob() >= 2300 && qm.getJob() <= 2312) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && (qm.getJob() >= 2300 && qm.getJob() <= 2312) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}
