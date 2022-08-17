var status = -1;


function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	var date = new Date();
	cm.sendNext("您现在想要做些什么？\r\n\r\n#L0#进入“#b废弃组队副本 - 开启副本#k”#l\r\n\r\n - #d当前通关次数：#k（#g"+cm.getBossLog("废弃组队副本")+" #k/#r 20#k）\r\n\r\n#L1#进入“#b御龙魔组队副本 - 开启副本#k”#l\r\n\r\n - #d当前通关次数：#k（#g"+cm.getBossLog("御龙魔组队副本")+" #k/#r 20#k）\r\n\r\n#L2#进入“#b逃脱组队副本 - 开启副本#k”#l\r\n\r\n - #d当前通关次数：#k（#g"+cm.getBossLog("逃脱组队副本")+" #k/#r 20#k）");//\r\n\r\n#L2#玩具城副本#l\r\n\r\n#L3#海盗副本#l\r\n\r\n#L4#御龙魔副本#l
    } else if (status == 1) {
		if (selection == 0) {
			if (cm.getBossLog("废弃组队副本") < 25) {
				cm.warp(933010000,0);
				cm.dispose();
			}else{
				cm.sendOk("今日的挑战次数已达到上限，无法再次进入。");
				cm.dispose();
			}
		} else if (selection == 1) {
			if (cm.getBossLog("御龙魔组队副本") < 25) {
				cm.warp(240080000,0);
				cm.dispose();
			}else{
				cm.sendOk("今日的挑战次数已达到上限，无法再次进入。");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.getBossLog("逃脱组队副本") < 15) {
				cm.warp(921160000,0);
				cm.dispose();
			}else{
				cm.sendOk("今日的挑战次数已达到上限，无法再次进入。");
				cm.dispose();
			}	
		}
    }
}

