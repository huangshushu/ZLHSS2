

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var selStr = "#d冒险岛-副本一条龙[中级]\r\n";
        selStr += "#r难度：★★★\r\n";
		selStr += "#b副本要求：废弃副本-通关["+cm.getBossLog("废弃副本")+"/5]次#n\r\n"
		selStr += "          玩具副本-通关["+cm.getBossLog("玩具副本")+"/5]次#n\r\n"
		selStr += "          毒物副本-通关["+cm.getBossLog("毒物副本")+"/5]次#n\r\n"        
		selStr += "任务奖励：魔化星之力*300\r\n";
        selStr += "#L0#领取副本一条龙[中级]奖励\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getBossLog("废弃副本") < 5){
				cm.sendOk("废弃副本-通关["+cm.getBossLog("废弃副本")+"/5]次");
				cm.dispose();
			}else if (cm.getBossLog("玩具副本") < 5){
				cm.sendOk("玩具副本-通关["+cm.getBossLog("玩具副本")+"/5]次");
				cm.dispose();
			}else if (cm.getBossLog("毒物副本") < 5){
				cm.sendOk("毒物副本-通关["+cm.getBossLog("毒物副本")+"/5]次");
				cm.dispose();
			}else if (cm.getBossLog("副本一条龙[中级]奖励") > 0){
				cm.sendOk("今日你已经领取过奖励了。");
				cm.dispose();
			}else if (cm.canHold(3992010,300) == false){
				cm.sendOk("请保证有足够的背包空间。");
				cm.dispose();
			}else{
				cm.setBossLog("副本一条龙[中级]奖励");
				cm.gainItem(3992010,300);//蜗牛壳
				cm.sendOk("领取成功~")
				cm.dispose();
            break;
		}
    }
}}
