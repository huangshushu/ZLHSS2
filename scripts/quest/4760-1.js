/*
 ZEVMS冒险岛(079)游戏服务端
 5级奖励
 */
var status = -1;
var huoqu = "#fUI/UIWindow.img/QuestIcon/4/0#";

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (qm.判断背包消耗栏().isFull()) {
				qm.sendNext("消耗栏必须有一个空位。");
				qm.对话结束();
				return;
			}
			if(qm.getQuestStatus(4760)==2){
			qm.sendOk("你已经领取过奖励，继续努力到8级可以获得更多奖励喔");
			qm.completeQuest();
			qm.dispose();
			}else{
			qm.sendNext("恭喜你当前等级已经到达 #b5#k 级。\r\n\r\n"+huoqu+" #v2000000# x 50");
			}
		} else if (status == 1) {
			qm.sendOk("下一次奖励为 #b8#k 级。"); 
			qm.gainItem(2000000, 50);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}