/*
 * 最终觉醒狂龙战士！
 * 狂龙战士3转
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendPlayerOk("面临着最终觉醒，觉得很紧张啊……");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendPlayerStart("诺巴精髓充满了力量。要不要试试进行最终觉醒？据说如果最终觉醒成功，就能变身为狂龙战士的最终面貌……真的可以吗？");
    } else if (status == 1) {
	if (qm.getJob() == 6110) {
	    qm.changeJob(6111);
	}
        if (!qm.haveItem(1142486, 1)) {
            qm.gainItem(1142486, 1);
        }
	qm.forceCompleteQuest();
        qm.sendPlayerOk("成功了！现在你可以变身为狂龙战士的最终面貌。同时还可以使用更强力多样的攻击技能。");
        qm.dispose();
    }
}
