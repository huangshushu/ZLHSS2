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
                qm.forceCompleteQuest();
                qm.dispose();
            } else {
                qm.sendNext("恭喜你当前等级已经到达 #b10#k 级，已经可以正式的踏入冒险世界了！枫叶阁冒险岛送给您新手小礼包！\r\n\r\n" + huoqu + " 金币 x #b1000000#k  抵用券 x #b5000#k ~" );
            }
        } else if (status == 1) {
            qm.sendOk("下一次奖励为 #b15#k 级。");
            qm.gainPet(5000047, 1, 1, 1, 1, 90);
            qm.gainMeso(100 * 10000);
	        //qm.给抵用券(5000);
	        qm.gainItem(4006000, 20);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}