/*
SnailMS脚本生成器
*/
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
		
		var text = "\r\n\t#L1#" + 小烟花 + "装备骑宠抽奖#l\t#L2#" + 小烟花 + "技能骑宠抽奖#l\r\n\r\n";
		/* if(cm.getPlayer().getGMLevel()>= 100){
			text += "\r\n#L12#" + 小烟花 + "新武器抽奖#l\t\r\n\r\n";
		} */
		
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.dispose();
			cm.openNpc(9062507, 1);
			cm.safeDispose();
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 2);
			cm.safeDispose();
			return;
		} else if (selection == 3) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 3);
			cm.safeDispose();
			return;
		} else if (selection == 4) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 4);
			cm.safeDispose();
			return;
		} else if (selection == 5) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 5);
			cm.safeDispose();
			return;
		} else if (selection == 6) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 6);
			cm.safeDispose();
			return;
		} else if (selection == 7) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 7);
			cm.safeDispose();
			return;
		} else if (selection == 8) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 8);
			cm.safeDispose();
			return;
		} else if (selection == 9) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 9);
			cm.safeDispose();
			return;
		} else if (selection == 10) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 10);
			cm.safeDispose();
			return;
		} else if (selection == 11) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 11);
			cm.safeDispose();
			return;
		} else if (selection == 12) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062507, 12);
			cm.safeDispose();
			return;
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

