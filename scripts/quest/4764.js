/*
 ZEVMS冒险岛(079)游戏服务端
 20级奖励
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
            if (qm.getQuestStatus(4764) == 2) {
                qm.sendOk("你已经领取过奖励，继续努力到30级可以获得新奖励喔");
                qm.forceCompleteQuest();
                qm.dispose();
            } else {
                qm.sendNext("恭喜你当前等级已经到达 #b20#k 级!再送你一点小礼物哦~\r\n\r\n" + huoqu + " #v5150040# x 1  #v1102468# x 1");
            }
        } else if (status == 1) {
            qm.sendOk("下一次奖励为 #b30#k 级。");
	    qm.gainItem(5150040, 1);
            qm.gainItem(1102468, 1);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}