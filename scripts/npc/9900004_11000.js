/*
SnailMS脚本生成器
*/

var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var 心1 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var 心2 = "#fUI/GuildMark.img/Mark/Etc/00009001/15#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
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
			// cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//在这里编写脚本第一步要做的事
		var selStr = "\t\t\t\t#d《经验储备系统说明》#k\r\n\r\n";
		selStr +="\t当你的等级达到服务器等级上限时，经验储备系统会自动开启，获得的经验自动存储至经验仓库，如果有特殊需要，也可以通过点击“#r经验储备开关#k”来手动开启和关闭。\r\n\r\n";
		selStr += "#b经验储备系统的作用:#r 可用来升级部分装备，具体参见市场“#g装备制作#k”NPC。#k\r\n";
		selStr += "#b目前支持的装备:#i1113219:#";
		selStr += "\r\n";
		selStr += "#d#L1#[返回]#l\r\n";
		cm.sendSimple(selStr);
		// cm.dispose();
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.dispose();
			cm.openNpc(9900004, 1);
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			
		}
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

