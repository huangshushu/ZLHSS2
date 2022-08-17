/*
 * 寻找第3条路
 * 夜光法师3转
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNextNoESC("夜光法师，我已经将秘宝力量全部收集来了。");
    } else if (status == 1) {
        qm.sendNextPrevS("现在利用这种力量，就能将夜光法师身体内的黑暗与光明融合在一起。", 1);
    } else if (status == 2) {
        qm.sendNextPrevS("别忘了。无论秘宝力量有多强大，最终还是要靠夜光法师你去战胜它。", 1);
    } else if (status == 3) {
        qm.PlayerToNpc("不要担心。我对自己的承受力有信心。");
    } else if (status == 4) {
        qm.sendNextPrevS("记住这句话。#b<最黑暗的时候，光芒最盛。>#k一定会有帮助的。开始啦。嘿啊啊呀！", 1);
    } else if (status == 5) {
        qm.PlayerToNpc("哇呀呀呀呀！");
    } else if (status == 6) {
        qm.sendNextPrevS("成功了！我就知道这样，不愧是夜光法师。", 1);
    } else if (status == 7) {
        qm.PlayerToNpc("(流淌在我体内的气息不太一样了。有种光与黑暗融为一体的感觉……)");
    } else if (status == 8) {
        qm.sendNextPrevS("刚才应该消耗了不少力气，先休息休息吧。关于你现在的情况，我一会和你细说。", 1);
    } else if (status == 9) {
        if (qm.getJob() == 2710) {
            qm.changeJob(2711);
        }
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
