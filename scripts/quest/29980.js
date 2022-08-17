/*
	任务: 称号 - 真正的光之骑士
	描述: 为了纪念光之骑士米哈尔成功达成200级，并完成转职而发放的勋章。
	获得: 1142403 - 真正的光之骑士
*/

var status = -1;
var level = 200
var itemId = 1142403;

function start(mode, type, selection) {
    qm.playerMessage("开始任务... " + qm.canHold(itemId, 1) + "  " + !qm.haveItem(itemId, 1));
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && (qm.getJob() >= 5000 && qm.getJob() < 5112) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    qm.playerMessage("完成任务..." + qm.canHold(itemId, 1) + "  " + !qm.haveItem(itemId, 1));
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && (qm.getJob() >= 5000 && qm.getJob() < 5112) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}
