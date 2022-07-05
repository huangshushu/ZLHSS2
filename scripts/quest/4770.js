/*
 ZEVMS冒险岛(079)游戏服务端
 71级奖励
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
            /*
            if (qm.判断背包其他栏().isFull()) {
                qm.sendNext("其他栏必须有一个空位。");
                qm.对话结束();
                return;
            }
            */
            if (qm.getQuestStatus(4770) == 2) {
                qm.sendOk("你已经领取过奖励，继续努力到72级可以获得更多奖励喔");
                qm.forceCompleteQuest();
                qm.dispose();
            } else {
                qm.sendNext("恭喜你当前等级已经到达 #b71#k 级。\r\n\r\n" + huoqu + " #v4251202# x 5");
            }
        } else if (status == 1) {
            qm.sendOk("下一次奖励为 #b72#k 级。");
            qm.gainItem(4251202, 5);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}