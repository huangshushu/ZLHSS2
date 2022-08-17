/*
SnailMS脚本生成器
*/

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
		
		var text = "请选择你要挑战的BOSS：\r\n\r\n";
		text += "#L1#普通扎昆（#r100级#k）\r\n\r\n";
		text += "#L2#进阶扎昆（#r140级#k）\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		
		if(selection == 1){
			cm.warp(cm.getPlayer().getMapId() + 100, "west00");
		}else if (selection == 2) {
			cm.warp(cm.getPlayer().getMapId() + 101, "west00");
		} 
		cm.dispose();
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

