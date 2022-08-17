/*
 * 寻找第3条路
 * 夜光法师2转
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNextNoESC("夜光法师，我知道这样做很突兀，但请你集中精力相信我。我要唤醒夜光法师身上的光之力量，引导出你体内的黑暗力量。如果成功的话，夜光法师就不用再被黑暗力量束缚了。");
    } else if (status == 1) {
        qm.PlayerToNpc("(感觉飞鱼丸的声音好像缓缓的包裹住了我体内的黑暗力量。)");
    } else if (status == 2) {
        qm.PlayerToNpc("黑暗力量不再侵蚀我的灵魂了呢。这都是你的功劳。");
    } else if (status == 3) {
        qm.sendNextPrevS("过奖了。这一切都要归功于夜光法师你想要战胜黑暗力量的坚强意志。我只是在旁边帮了点小忙而已。这个你应该知道，是能够自由出入希利尼提的极光三棱镜。收下吧。", 1);
    } else if (status == 4) {
        if (qm.getJob() == 2700) {
            qm.changeJob(2710);
        }
        if (!qm.haveItem(2430874, 1)) {
            qm.gainItem(2430874, 1);
        }
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
