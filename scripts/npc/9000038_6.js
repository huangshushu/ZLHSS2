/*
SnailMS脚本生成器
*/
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

var 装备50级 = Array(1002981, 1012389, 1022233, 1102563, 1072018, 1032257);
var 装备85级 = Array(1003982, 1012309, 1022234, 1102507, 1072660, 1032230);
var 装备120级 = Array(1003627, 1012469, 1022235, 1102606, 1072666, 1032227);

var 需求50级 = Array(
	Array(4000037, 100),
	Array(4000020, 100),
	Array(4000008, 100),
	Array(4000007, 100)
);

var 需求85级 = Array(
	Array(4000014, 500),
	Array(4000027, 500),
	Array(4000177, 500),
	Array(4000379, 500),
	Array(4000025, 500),
	Array(4000082, 50)
);

var 需求120级 = Array(
	Array(4000406, 50),
	Array(4000407, 50),
	Array(4000401, 50),
	Array(4000404, 50),
	Array(4000402, 50),
	Array(4000405, 50)
);

var check = 0;

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
		var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
		   text += " \t\t\t  #e#r #v4000005#  林中小屋  #v4000005##k#n              \r\n"
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
            text += "#d\t角色名称：#b" + cm.getName() + "#k#n\t\t  #d剩余金币：#b" + cm.getMeso() + "#k#n\r\n"	
		
		text += "#L1##b兑换 #r50级#b 助力六件套#k#l\r\n\r\n";
		text += "#L2##b兑换 #r85级#b 助力六件套#k#l\r\n\r\n";
		text += "#L3##b兑换 #r120级#b 助力六件套#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			var text = "#b可兑换六件套：\r\n";
			for(var i = 0; i < 装备50级.length; i++){
				text += "#v" + 装备50级[i] + "#";
			}
			text += "【全属性+3 双攻+3】\r\n";
			text += "#r需要道具：\r\n";
			for(var i = 0; i < 需求50级.length; i++){
				text += "#v" + 需求50级[i][0] + "#x" + 需求50级[i][1];
			}
			text += "\r\n";
			text += "#d是否要兑换？\r\n";
			cm.sendYesNo(text);
			check = 1;
			
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			var text = "#b可兑换六件套：\r\n";
			for(var i = 0; i < 装备85级.length; i++){
				text += "#v" + 装备85级[i] + "#";
			}
			text += "【全属性+6 双攻+6】\r\n";
			text += "#r需要道具：\r\n";
			for(var i = 0; i < 需求85级.length; i++){
				text += "#v" + 需求85级[i][0] + "#x" + 需求85级[i][1];
			}
			text += "\r\n";
			text += "#d是否要兑换？\r\n";
			cm.sendYesNo(text);
			check = 2;
		} else if (selection == 3) {
			//在这里编写选项2要做的事
			var text = "#b可兑换六件套：\r\n";
			for(var i = 0; i < 装备120级.length; i++){
				text += "#v" + 装备120级[i] + "#";
			}
			text += "【全属性+9 双攻+9】\r\n";
			text += "#r需要道具：\r\n";
			for(var i = 0; i < 需求120级.length; i++){
				text += "#v" + 需求120级[i][0] + "#x" + 需求120级[i][1];
			}
			text += "\r\n";
			text += "#d是否要兑换？\r\n";
			cm.sendYesNo(text);
			check = 3;
		} 
		
	} else if(status == 2){
		switch(check){
			case 1:
				if(cm.判断背包装备栏().isFull(5)){
					cm.sendOk("请保证你背包装备栏至少有 6 格空间");
					cm.dispose();
					return;
				}
				for(var i = 0; i < 需求50级.length; i++){
					if(!cm.haveItem(需求50级[i][0], 需求50级[i][1])){
						cm.sendOk("你的#v" + 需求50级[i][0] + "#数量不够。");
						cm.dispose();
						return;
					}
				}
				for(var i = 0; i < 需求50级.length; i++){
					cm.gainItem(需求50级[i][0], -需求50级[i][1]);
				}
				var item;
				for(var i = 0; i < 装备50级.length; i++){
					//cm.gainItem(装备50级[i]);
					item = cm.getNewEquip(装备50级[i]);
					item.setStr(3);
					item.setInt(3);
					item.setLuk(3);
					item.setDex(3);
					item.setWatk(3);
					item.setMatk(3);
					item.setUpgradeSlots(0);
					item.setViciousHammer(2);
					item.setFlag(0x08);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				}
				var text = "#b恭喜你成功兑换：\r\n";
				for(var i = 0; i < 装备50级.length; i++){
					text += "#v" + 装备50级[i] + "#";
				}
				text += "【全属性+3 双攻+3】\r\n";
				cm.sendOk(text);
				//cm.全服道具公告("[助力成长装备]", "玩家 "+cm.getPlayer().getName()+" 成功兑换了。", item);
				cm.dispose();
				return;
			case 2:
				if(cm.判断背包装备栏().isFull(5)){
					cm.sendOk("请保证你背包装备栏至少有 6 格空间");
					cm.dispose();
					return;
				}
				for(var i = 0; i < 需求85级.length; i++){
					if(!cm.haveItem(需求85级[i][0], 需求85级[i][1])){
						cm.sendOk("你的#v" + 需求85级[i][0] + "#数量不够。");
						cm.dispose();
						return;
					}
				}
				for(var i = 0; i < 需求85级.length; i++){
					cm.gainItem(需求85级[i][0], -需求85级[i][1]);
				}
				var item;
				for(var i = 0; i < 装备85级.length; i++){
					//cm.gainItem(装备50级[i]);
					item = cm.getNewEquip(装备85级[i]);
					item.setStr(6);
					item.setInt(6);
					item.setLuk(6);
					item.setDex(6);
					item.setWatk(6);
					item.setMatk(6);
					item.setUpgradeSlots(0);
					item.setViciousHammer(2);
					item.setFlag(0x08);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				}
				var text = "#b恭喜你成功兑换：\r\n";
				for(var i = 0; i < 装备85级.length; i++){
					text += "#v" + 装备85级[i] + "#";
				}
				text += "【全属性+6 双攻+6】\r\n";
				cm.sendOk(text);
				//cm.全服道具公告("[助力成长装备]", "玩家 "+cm.getPlayer().getName()+" 成功兑换了。", item);
				cm.dispose();
				return;
			case 3:
				if(cm.判断背包装备栏().isFull(5)){
					cm.sendOk("请保证你背包装备栏至少有 6 格空间");
					cm.dispose();
					return;
				}
				for(var i = 0; i < 需求120级.length; i++){
					if(!cm.haveItem(需求120级[i][0], 需求120级[i][1])){
						cm.sendOk("你的#v" + 需求120级[i][0] + "#数量不够。");
						cm.dispose();
						return;
					}
				}
				for(var i = 0; i < 需求120级.length; i++){
					cm.gainItem(需求120级[i][0], -需求120级[i][1]);
				}
				var item;
				for(var i = 0; i < 装备120级.length; i++){
					//cm.gainItem(装备50级[i]);
					item = cm.getNewEquip(装备120级[i]);
					item.setStr(9);
					item.setInt(9);
					item.setLuk(9);
					item.setDex(9);
					item.setWatk(9);
					item.setMatk(9);
					item.setUpgradeSlots(0);
					item.setViciousHammer(2);
					item.setFlag(0x08);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				}
				var text = "#b恭喜你成功兑换：\r\n";
				for(var i = 0; i < 装备120级.length; i++){
					text += "#v" + 装备120级[i] + "#";
				}
				text += "【全属性+9 双攻+9】\r\n";
				cm.sendOk(text);
				//cm.全服道具公告("[助力成长装备]", "玩家 "+cm.getPlayer().getName()+" 成功兑换了。", item);
				cm.dispose();
				return;
		}
		
	} else {
		cm.dispose();
		return;
	}
}

