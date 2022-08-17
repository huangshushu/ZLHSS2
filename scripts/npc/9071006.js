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
		//在这里编写脚本第一步要做的事
		var text = "你好啊，在我这里可以进行#v1602009#的合成，请选择：\r\n\r\n";
		text += "\t\t\t\t   #L1##b#i1602009:#合成#k#l\r\n\r\n";
		text += "\t\t\t\t   #L2##b#i1602010:#合成#k#l\r\n\r\n";
		text += "\t\t\t\t   #L3##b#i1602011:#合成#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.safeDispose();
			cm.openNpc(9071006, 1);
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.safeDispose();
			cm.openNpc(9071006, 2);
		}else if (selection == 3) {
			//在这里编写选项2要做的事
			cm.safeDispose();
			cm.openNpc(9071006, 3);
		} 
		
	} else {
		cm.dispose();
		return;
	}
}

