/*
SnailMS脚本生成器
*/
importClass(Packages.constants.SkillConstants);
importClass(Packages.tools.处理字符串);

var 暴风箭雨 = "#fSkill/312.img/skill/3121004/icon#";
var 战神之舞 = "#fSkill/2112.img/skill/21120002/icon#";
var icon1 = "#fSkill/";
var icon2 = ".img/skill/";
var icon3 = "/icon#";

var finalSkillId = 0;
var finalSkillIdS = "";
var finalSkillName = "";

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
		var text = "欢迎来到技能皮肤切换系统，请选择切换方式：\r\n\r\n";
		text += "#L1##b全部切换为复古版#l#k\r\n\r\n";
		text += "#L2##b全部切换为新版#l#k\r\n\r\n";
		// text += "#L5##b全部切换为第三版#l#k\r\n\r\n";
		// text += "#L6##b全部切换为第四版#l#k\r\n\r\n";
		text += "#L3##b我要自己DIY#l#k\r\n\r\n";
		text += "#L4##b我要设置成搞怪的无特效模式#l#k\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.getPlayer().setSkillSkinAll(2);
			cm.sendOk("您已将全部技能皮肤切换为#r复古版#b。");
			cm.dispose();
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.getPlayer().setSkillSkinAll(1);
			cm.sendOk("您已将全部技能皮肤切换为#r新版#b。");
			cm.dispose();
			return;
		}else if (selection == 3) {
			//在这里编写选项3要做的事
			var skillSkin = cm.getPlayer().getSkillSkin();
			var skillTypeMap = skillSkin.getChrSkillListForJob();
			var text = "请选择你要设置皮肤的技能:\r\n\r\n";
			if(skillTypeMap != null){
				var it = skillTypeMap.entrySet().iterator();
				var i = 1;
				while(it.hasNext()){
					var entry = it.next();
					var skillId = entry.getKey();
					var skillType = entry.getValue();
					var skillIdS = skillId + " ";
					
					//cm.getPlayer().dropMessage("skillIdS0 = " + skillIdS);//测试
					if(cm.getPlayer().getJob() < 1000){
						skillIdS = skillIdS.substr(0, 3) + "";
					}else{
						skillIdS = skillIdS.substr(0, 4) + "";
					}
					text += "#L" + skillId + "##b" + icon1 + skillIdS + icon2 + skillId + icon3 + 处理字符串.formatString(8, " ", SkillConstants.getSkillName(skillId)) +"#k#l";
					if(i % 3 == 0 && i != 0){
						text += "\r\n";
					}
					i++;
				}
				text += "\r\n";
				cm.sendSimple(text);
				//cm.getPlayer().dropMessage(text);
			}else{
				cm.sendOk("出错了，未找到你的技能皮肤。");
				cm.dispose();
				return;
			}

		}else if (selection == 4) {
			//在这里编写选项4要做的事
			cm.getPlayer().setSkillSkinAll(0);
			cm.sendOk("您已将全部技能皮肤切换为#r啥也没有#b。");
			cm.dispose();
			return;
		}else if (selection == 5) {
			//在这里编写选项4要做的事
			cm.getPlayer().setSkillSkinAll(3);
			cm.sendOk("您已将全部技能皮肤切换为#r第三版#b。");
			cm.dispose();
			return;
		}else if (selection == 6) {
			//在这里编写选项4要做的事
			cm.getPlayer().setSkillSkinAll(4);
			cm.sendOk("您已将全部技能皮肤切换为#r第四版#b。");
			cm.dispose();
			return;
		}
		
	} else if (status == 2) {
		finalSkillId = selection;
		finalSkillName = SkillConstants.getSkillName(finalSkillId);
		if(finalSkillId == 0){
			cm.sendOk("出错了，你选择的技能ID为0。\r\n");
			cm.dispose();
			return;
		}
		var skillIdS = finalSkillId + " ";
		//cm.getPlayer().dropMessage("skillIdS = " + skillIdS);//测试
		if(cm.getPlayer().getJob() < 1000){
			finalSkillIdS = skillIdS.substr(0, 3) + "";
			//cm.getPlayer().dropMessage("3.finalSkillIdS = " + finalSkillIdS);//测试
		}else{
			finalSkillIdS = skillIdS.substr(0, 4) + "";
			//cm.getPlayer().dropMessage("4.finalSkillIdS = " + finalSkillIdS);//测试
		}
		
		var text = "你选择了技能 #r" + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k,请为它选择想要更换的技能皮肤：\r\n";
		if(cm.getPlayer().getSkillSkin().containsType(finalSkillId, 2)){
			text += "#L0##b复古版皮肤#k\r\n\r\n";
		}
		if(cm.getPlayer().getSkillSkin().containsType(finalSkillId, 1)){
			text += "#L1##b新版皮肤#k\r\n\r\n";
		}
		if(cm.getPlayer().getSkillSkin().containsType(finalSkillId, 3)){
			text += "#L3##b第三套皮肤#k\r\n\r\n";
		}
		if(cm.getPlayer().getSkillSkin().containsType(finalSkillId, 4)){
			text += "#L4##b第四套皮肤#k\r\n\r\n";
		}
		text += "#L2##b无特效皮肤#k\r\n\r\n";
		//cm.getPlayer().dropMessage(text);//测试
		cm.sendSimple(text);
	} else if (status == 3) {
		
		if(finalSkillId == 0){
			cm.sendOk("出错了，你选择的技能ID为0。\r\n");
			cm.dispose();
			return;
		}
		switch(selection){
			case 0:
				cm.getPlayer().setSkillSkin(finalSkillId, 2);
				cm.sendOk("已成功将技能 #r"  + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k的皮肤设置为#r复古版皮肤#k\r\n");
				cm.dispose();
				break;
			case 1:
				cm.getPlayer().setSkillSkin(finalSkillId, 1);
				cm.sendOk("已成功将技能 #r"  + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k的皮肤设置为#r新版皮肤#k\r\n");
				cm.dispose();
				break;
			case 2:
				cm.getPlayer().setSkillSkin(finalSkillId, 0);
				cm.sendOk("已成功将技能 #r"  + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k的皮肤设置为#r无特效皮肤#k\r\n");
				cm.dispose();
				break;
			case 3:
				cm.getPlayer().setSkillSkin(finalSkillId, 3);
				cm.sendOk("已成功将技能 #r"  + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k的皮肤设置为#r第三套皮肤#k\r\n");
				cm.dispose();
				break;
			case 4:
				cm.getPlayer().setSkillSkin(finalSkillId, 4);
				cm.sendOk("已成功将技能 #r"  + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k的皮肤设置为#r第四套皮肤#k\r\n");
				cm.dispose();
				break;
		}
	} else {
		cm.dispose();
		return;
	}
}

