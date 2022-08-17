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
		var text = "";
		text += "\t\t\t\t#L1##b[时装属性转移]#k#l\r\n\r\n";
		text += "\t\t\t  #L2##b[宠物装备属性转移]#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.dispose();
			cm.openNpc(9062178, 1);
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9062178, 2);
			return;
		} 
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

