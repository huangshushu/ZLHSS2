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
	cm.sendNext("您现在想要做些什么？\r\n\r\n#L0#进行组队任务#l\t#L1#一条龙奖励#l\t#L3#组队积分奖励#l\r\n#L4#领取“#b#i1143052##t1143052##k”#l【#d所需积分：#r900#k】#l");//\t#L3#组队积分奖励#l
    } else if (status == 1) {
		if (selection == 0) {
			cm.dispose()
			cm.openNpc(9076001,1)
			//cm.warp(933010000);
		} else if (selection == 1) {
			cm.dispose()
			cm.openNpc(9076001,2)
			//cm.warp(933020000);
		} else if (selection == 2) {
			cm.dispose()
			cm.openNpc(9076001,3)
		} else if (selection == 3) {
			cm.dispose()
			cm.openNpc(9076001,4)
		} else if (selection == 4) {
			cm.dispose()
			cm.openNpc(9076001,5)
		}
	}
}
	

