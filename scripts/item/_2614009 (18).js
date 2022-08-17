/*
SnailMS脚本生成器
*/
var 变身池 = Array(1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 40, 41, 42, 43, 44, 45, 50, 51, 52, 53, 63, 67, 68, 69, 70, 71, 72, 73, 74, 75, 87, 95, 97, 100, 103, 104, 105, 110, 111, 114, 115, 116, 125, 128, 130, 131, 139, 140, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 160, 161, 162, 178, 196, 197, 198, 199, 207, 208, 209, 212, 213, 221, 227, 231, 232, 233, 236, 237, 238, 239, 240, 252, 2001, 2002, 2003, 2004);

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
		/* var text = "这里输入要说的开头语\r\n\r\n";
		text += "#L1#选项1内容\r\n\r\n";
		text += "#L2#选项2内容\r\n\r\n";
		cm.sendSimple(text); */
		cm.gainItem(2614103, -1);
		var i = parseInt(Math.random() * 变身池.length);
		//cm.getPlayer().dropMessage("i = " + i);//测试
		cm.getPlayer().setMorph(2614103, 变身池[i], 1200000, true);
		cm.dispose();
		return;
		
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

