/*
 ZEVMS冒险岛(079)游戏服务端
 72级奖励
 */
var huoqu = "#fUI/UIWindow.img/QuestIcon/4/0#";
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            // if (qm.判断背包其他栏().isFull()) {
            //     qm.sendNext("其他栏必须有一个空位。");
            //     qm.对话结束();
            //     return;
            // }
            if (qm.getQuestStatus(4771) == 2) {
                qm.sendOk("你的奖励已经全部领取完。");
                qm.forceCompleteQuest();
                qm.dispose();
            } else {
                qm.sendNext("恭喜你当前等级已经到达 #b72#k 级。\r\n\r\n" + huoqu + " #v4001005# x 5");
            }
        } else if (status == 1) {
            qm.sendOk("你的奖励已经全部领取完。");
            qm.gainItem(4001005, 5);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}