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
		
		var text = "你要去废都广场吗？需要#r30000#k金币。\r\n\r\n";
		cm.sendYesNo(text);
	} else if (status == 1) {
		if(cm.判断金币() < 30000){
			cm.sendOk("对不起，你身上的金币不够。");
			cm.dispose();
			return;
		}else{
			cm.收金币(30000);
			cm.warp(103020020);
			cm.dispose();
		}
		
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

