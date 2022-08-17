function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple("#b#b这里是优质装备制造作坊.#k\r\n\r\n#L1##r戒指合成\n\#l\t#L2##r腰带合成\n\#l\t#L3##r耳环合成#k\r\n\r\n#L4##r五彩水晶合成#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 1) {	
    cm.openNpc(9120106, 1);//戒指合成
	}
	else if (selection == 2) {
	//cm.openNpc(9120106, 2);//腰带合成
	cm.sendOk("暂未开放，敬请期待！");
	cm.dispose();
	}
	else if (selection == 3) {
	cm.openNpc(9120106, 3);//耳环合成
	}
	else if (selection == 4) {	
    cm.openNpc(9120106, 4);//五彩水晶
	}
}
