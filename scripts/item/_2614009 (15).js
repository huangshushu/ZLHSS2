/*
SnailMS脚本生成器
*/
变身池 = Array(145,146,147,148,149,150,151,152,153,154,155,156,157,74,75,87,95,97,100,103,104,105,110,111,114,115,116,125,128,130,131,139,140,143,144,160,161,162,178,196,197,198,199,207,208,209,212,213,221);

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
		var text = "\r\n你好，再马拉松比赛进行期间，把我交给目的地的送货员，就可以完成比赛了哦，千万别把我扔掉，不然你就白跑啦！\r\n#rps：必须要保持变身才能正常参与马拉松比赛，如果变身消失了，可以找我恢复变身哦！\r\n\r\n";
		text += "#L1#我要变身\r\n\r\n";
		text += "#L2#我明白了\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			var i = parseInt(Math.random() * 变身池.length);
			cm.getPlayer().setMorph(2614103, 变身池[i], 3600000, false);
			cm.getPlayer().giveBuff(2438001, 30000, 10000, -9999, 9999, -9999, 9999, -9999, -9999, 60, 60, 3600000, false);
			cm.sendOk("您已恢复变身，请继续比赛吧，加油！！\r\n");
			cm.dispose();
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			
		} 
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

