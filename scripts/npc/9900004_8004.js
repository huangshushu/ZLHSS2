/*
SnailMS脚本生成器
*/
importClass(Packages.tools.处理字符串);
importClass(Packages.constants.WorldConstants);

var 技能列表 = Array(
	Array(21100002, "战神突进"),
	Array(21100004, "斗气爆裂"),
	Array(21100005, "连环吸血"),
	Array(21110003, "终极投掷"),
	Array(21110004, "幻影狼牙"),
	Array(21110006, "旋风"),
	Array(21120005, "巨熊咆哮"),
	Array(21120006, "钻石星辰"),
	Array(21120007, "战神之盾")
);

var 键位 = new Array(
	Array("`", 41),
	Array("1", 2),
	Array("2", 3),
	Array("3", 4),
	Array("4", 5),
	Array("5", 6),
	Array("6", 7),
	Array("7", 8),
	Array("8", 9),
	Array("9", 10),
	Array("0", 11),
	Array("-", 12),
	Array("=", 13),
	Array("Q", 16),
	Array("W", 17),
	Array("E", 18),
	Array("R", 19),
	Array("T", 20),
	Array("Y", 21),
	Array("U", 22),
	Array("I", 23),
	Array("O", 24),
	Array("P", 25),
	Array("A", 30),
	Array("S", 31),
	Array("D", 32),
	Array("F", 33),
	Array("G", 34),
	Array("H", 35),
	Array("J", 36),
	Array("K", 37),
	Array("L", 38),
	Array("Z", 44),
	Array("X", 45),
	Array("C", 46),
	Array("V", 47),
	Array("B", 48),
	Array("N", 49),
	Array("M", 50),
	Array("Shift", 42),
	Array("Ctrl", 29),
	Array("Alt", 56),
	Array("Space", 57),
	Array("Ins", 82),
	Array("Del", 83),
	Array("Home", 71),
	Array("End", 79),
	Array("Pup", 73),
	Array("Pdn", 81)
);


var choose = -1;
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
		var text = "请选择你要设置的技能:\r\n\r\n";
		for(var i = 0; i < 技能列表.length; i++){
			if(Packages.constants.SkillConstants.isJobSkill(技能列表[i][0], cm.getPlayer().getJob())){
				text += "#L" + i + "##fSkill/" + (技能列表[i][0] + "").substring(0, 4) + ".img/skill/" + 技能列表[i][0] + "/icon##b" + 处理字符串.formatString(8, " ", 技能列表[i][1]) + "#k#l ";
			}
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		choose = selection;
		if(choose >= 0){
			var text = "你选择了#fSkill/" + (技能列表[choose][0] + "").substring(0, 4) + ".img/skill/" + 技能列表[choose][0] + "/icon##b" + 处理字符串.formatString(8, " ", 技能列表[choose][1]) + "#k，请选择要设置的键位：\r\n";
			for(var i = 0; i < 键位.length; i++){
				text += "#L" + i + "##b" + 处理字符串.formatString(4, " ", 键位[i][0]) + " "
				if((i + 1)  % 6 == 0){
					text += "\r\n";
				}
			}
			text += "\r\n";
			
			cm.sendSimple(text);
		}else{
			cm.dispose();
			return;
		}
		
		
	} else if (status == 2) {
		if(selection >= 0){
			cm.getPlayer().changeKeybinding(键位[selection][1], 1, 技能列表[choose][0]);
			var channel = cm.getPlayer().getClient().getChannel();
			if(channel < WorldConstants.CHANNEL_COUNT){
				cm.getPlayer().dropMessage(1, "设置成功，请去键盘查看！！");
				cm.getPlayer().changeChannel(channel + 1);
			}else{
				cm.getPlayer().dropMessage(1, "设置成功，请去键盘查看！！");
				cm.getPlayer().changeChannel(1);
			}
			
		}else{
			cm.sendOk("你设置的键盘位置不在范围内！");
			cm.dispose();
			return;
		}
		
	} else {
		cm.dispose();
		return;
	}
}

