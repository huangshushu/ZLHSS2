/*
 * 顿悟 夜光法师4转
 * 对于光明和黑暗的力量的理解突然增加了。
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendPlayerNext("(这是什么感觉？我体内的两股力量合二为一，成为一种新的力量啦。)");
    } else if (status == 1) {
        qm.sendPlayerNextPrev("(光与黑暗的融合提升了一个阶段。)");
    } else if (status == 2) {
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
