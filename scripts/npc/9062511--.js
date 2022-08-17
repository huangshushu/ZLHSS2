/*
SnailMS脚本生成器
*/

var 技能皮肤 = Array(
	Array(1001005, 2, "群体攻击", "#fSkill/100.img/skill/1001005/icon#"),
	Array(1100002, 2, "终极剑", "#fSkill/110.img/skill/1100002/icon#"),
	Array(1101004, 2, "快速剑", "#fSkill/110.img/skill/1101004/icon#"),
	Array(1101006, 2, "愤怒之火", "#fSkill/110.img/skill/1101006/icon#"),
	Array(1101007, 2, "伤害反击", "#fSkill/110.img/skill/1101007/icon#")
);

var choosed = 0;
var skillId = 0;
var type = 0;

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
		var text = "请选择你想要设置的技能皮肤：\r\n\r\n";
		for(var i = 0; i < 技能皮肤.length; i++){
			text += "#L" + i + "##b" + 技能皮肤[i][3] + 技能皮肤[i][2] + "#k#l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection >= 0){
			skillId = 技能皮肤[selection][0];
			choosed = selection;
			var text = "你选择了#b" + 技能皮肤[selection][3] + 技能皮肤[selection][2] + "#k，接下来请设置他的皮肤类型：\r\n\r\n";
			for(var i = 1; i <= 技能皮肤[selection][1]; i++){
				text += "\t\t\t\t#b#L" + i + "#类型" + i + "#l\r\n"
			}
			cm.sendSimple(text);
		}
		
		
	} else if (status == 2){
		if(selection > 0){
			type = selection;
			cm.getPlayer().setSkillSkin(skillId, type);
			cm.sendOk("您已成功将技能#b" + 技能皮肤[choosed][3] + 技能皮肤[choosed][2] + "#k 设置为 #b类型" + type + "#k。\r\n")
		}
	} else {
		cm.dispose();
		return;
	}
}

