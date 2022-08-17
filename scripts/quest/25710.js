/*
 * 突破诺巴精髓极限
 * 狂龙战士2转
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendPlayerOk("要是不考虑清楚就进行尝试可能会毁坏诺巴精髓，你好好想清楚。");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendPlayerStart("是修炼的结果吗？感觉诺巴精髓充满力量。似乎能扩展一下诺巴精髓的极限值……不如试一试？");
    } else if (status == 1) {
        if (qm.getJob() == 6100) {
            qm.changeJob(6110);
        }
        if (!qm.haveItem(1142485, 1)) {
            qm.gainItem(1142485, 1);
        }
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
