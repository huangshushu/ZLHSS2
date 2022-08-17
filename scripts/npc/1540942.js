/*
SnailMS脚本生成器
*/
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";

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
		var text = "你好啊，可爱的冒险家，我是新冒险岛世界的女神，如果你#r选择接受我的祝福#k，我会将我所在的世界的艾尔达赋予你，让你可以它释放技能，但万物同源，我和旧冒险岛世界女神的艾尔达只是展现出来的#r形式不同#k，想要#r提升能力最终还是要靠你的努力#k。当然，在你做出选择前，可以先看看介绍再做决定。\r\n\r\n";
		text += "\t\t#L1#" + 正方箭头 + "#d我想要观看技能介绍。#l\r\n\r\n";
		text += "\t\t#L2#" + 正方箭头 + "#d我想好了，就选你了。#l\r\n\r\n";
		text += "\t\t#L3#" + 正方箭头 + "#d我还没考虑好，让我回去再想想。#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.openNpc(1540942, 1);
			cm.safeDispose();
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.openNpc(1540942, 2);
			cm.safeDispose();
			return;
		} else if (selection == 3){
			//在这里编写选项3要做的事
			cm.openNpc(1540940);
			cm.safeDispose();
			return;
		}
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

