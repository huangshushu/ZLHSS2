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
		cm.sendOk("你好，冒险家~");
		cm.dispose();
		return;
		
		var text = "这里输入要说的开头语\r\n\r\n";
		text += "#L1##b选项1内容#k#l\r\n\r\n";
		text += "#L2##b选项2内容#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			
		} 
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

