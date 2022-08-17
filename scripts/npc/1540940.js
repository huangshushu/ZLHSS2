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
		var text = "你好啊，冒险家，欢迎来到冒险岛大陆，由于受到黑魔法师的影响，艾尔达的流动发生紊乱，两个处于平行时空的冒险岛世界融合到了一起，现在，你是要以#r旧冒险岛世界#k的冒险家身份，还是以另一个时空的#r新冒险岛世界#k的身份来展开你的冒险旅程呢？你可以分别和两个世界的#r冒险岛女神#k对话，了解两者的不同#r再做决定#k。\r\n#b注意：这关系到你的技能皮肤是复古还是全新，但你是否强大与此#r并无关联#k。\r\n#r一旦做出选择，便无后退之路，若将来想强行改变，需要借助强大的道具#k。\r\n\r\n";
		text += "\t\t\t#L1#" + 正方箭头 + "#d与#b旧世界冒险岛女神#d对话。#l\r\n\r\n";
		text += "\t\t\t#L2#" + 正方箭头 + "#d与#b新世界冒险岛女神#d对话。#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.openNpc(1541942);
			cm.safeDispose();
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.openNpc(1540942);
			cm.safeDispose();
			return;
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

