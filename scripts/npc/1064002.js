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
		
		var text = "欢迎来到鲁塔比斯\r\n\r\n";

		cm.sendSimple(text);
		cm.dispose();
		return;
	} else if (status == 1) {
		
		if(selection == 1){
			
			
		}else if (selection == 2) {
			
			
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

