var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//在这里编写脚本第一步要做的事
		
		var text = "\r\n#L1#" + 小烟花 + "帽子抽奖#l\t#L2#" + 小烟花 + "披风抽奖#l\t#L3#" + 小烟花 + "上衣抽奖#l\r\n\r\n";
		text += "\r\n#L4#" + 小烟花 + "手套抽奖#l\t#L5#" + 小烟花 + "裤子抽奖#l\t#L6#" + 小烟花 + "戒指抽奖#l\r\n\r\n";
		text += "\r\n#L7#" + 小烟花 + "盾牌抽奖#l\t#L8#" + 小烟花 + "鞋子抽奖#l\t#L9#" + 小烟花 + "武器抽奖#l\r\n\r\n";
		text += "\r\n#L10#" + 小烟花 + "长袍抽奖#l\t#L11#" + 小烟花 + "宠装抽奖#l\r\n\r\n";
		
		/* if(cm.getPlayer().getGMLevel()>= 100){
			text += "\r\n#L12#" + 小烟花 + "新武器抽奖#l\t\r\n\r\n";
		} */
		
		cm.sendSimple(text);
	} else if (status == 1) {
		if(selection == 1){
			cm.dispose();
			cm.openNpc(9062504, 1);
			
			return;
		}else if (selection == 2) {
			cm.dispose();
			cm.openNpc(9062504, 2);
			return;
		} else if (selection == 3) {
			cm.dispose();
			cm.openNpc(9062504, 3);
			return;
		} else if (selection == 4) {
			cm.dispose();
			cm.openNpc(9062504, 4);
			return;
		} else if (selection == 5) {
			cm.dispose();
			cm.openNpc(9062504, 5);
			return;
		} else if (selection == 6) {
			cm.dispose();
			cm.openNpc(9062504, 6);
			return;
		} else if (selection == 7) {
			cm.dispose();
			cm.openNpc(9062504, 7);
			return;
		} else if (selection == 8) {
			cm.dispose();
			cm.openNpc(9062504, 8);
			return;
		} else if (selection == 9) {
			cm.dispose();
			cm.openNpc(9062504, 9);
			return;
		} else if (selection == 10) {
			cm.dispose();
			cm.openNpc(9062504, 10);
			return;
		} else if (selection == 11) {
			cm.dispose();
			cm.openNpc(9062504, 11);
			return;
		} else if (selection == 12) {
			cm.dispose();
			cm.openNpc(9062504, 12);
			return;
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

