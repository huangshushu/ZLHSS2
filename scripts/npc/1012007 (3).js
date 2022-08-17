
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
		var tex = "\r\n";
		tex += "#L1#我要领取每日运动的奖励。#l"

		cm.sendSimple(tex);
    } else if (status == 1) {
		if (cm.getBossLog("每日运动") == 0){
			sel = Math.floor(Math.random() * 2);
			if (sel == 0){
				cm.gainNX(1000)
				cm.sendOk("#b你获得了 1000 点卷奖励.");
			}else if(sel == 1){
				cm.setmoneyb(+10)
				cm.sendOk("#b你获得了 10 积分奖励.");
			}
			cm.setBossLog("每日运动")
			cm.dispose();
		}else{
			cm.sendOk("#b你今天获得过奖励了.");
			cm.dispose();
		}
    }
}