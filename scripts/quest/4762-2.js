/*
 ZEVMS冒险岛(079)游戏服务端
 10级奖励
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
            if (qm.getQuestStatus(4762) == 2) {
                qm.sendOk("你已经领取过奖励，继续努力到15级可以获得新奖励喔");
                qm.completeQuest();
                qm.dispose();
            } else {
                qm.sendNext("恭喜你当前等级已经到达 #b10#k 级。\r\n\r\n" + huoqu + " 金币 x #b100000#k");
            }
        } else if (status == 1) {
            qm.sendOk("下一次奖励为 #b15#k 级。");
            qm.gainMeso(10 * 10000);
            qm.completeQuest();
            qm.dispose();
        }
    }
}