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

/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓设置区↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
var 装备列表 = Array(//ID、前缀、攻击、魔攻、力量、敏捷、智力、运气、物防、魔防、命中、回避、速度、跳跃、可升级次数
	Array(1072447, "一阶段", 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 5),
	Array(1072455, "二阶段", 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 5),
	Array(1072463, "三阶段", 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 5),
	Array(1072660, "满阶段", 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 5),
	Array(1072768, "史诗", 15, 15, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 5),
	Array(1073057, "传说", 23, 23, 23, 23, 23, 23, 0, 0, 0, 0, 30, 30, 5)
);

var 材料列表 = Array(
	Array(//一阶段
		Array(0, 20000000),//道具ID（0为金币，1为点券，2为抵用）、数量
		Array(4000012, 9999),
		Array(4000041, 9999),
		Array(4000031, 9999),
		Array(4031456, 100),
		Array(4005003, 200),
		Array(4002000, 100),
		Array(4011007, 20),
		Array(4021009, 20)
	),
	Array(//二阶段
		Array(0, 40000000),//道具ID（0为金币，1为点券，2为抵用）、数量
		Array(4000171, 9999),
		Array(4000112, 9999),
		Array(4000115, 9999),
		Array(4031456, 100),
		Array(4005002, 200),
		Array(4002003, 100),
		Array(4011007, 40),
		Array(4021009, 40)
	),
	Array(//三阶段
		Array(0, 60000000),//道具ID（0为金币，1为点券，2为抵用）、数量
		Array(4000180, 9999),
		Array(4000184, 9999),
		Array(4000183, 9999),
		Array(4031456, 100),
		Array(4005000, 200),
		Array(4002002, 100),
		Array(4011007, 60),
		Array(4021009, 60)
	),
	Array(//满阶段
		Array(0, 80000000),//道具ID（0为金币，1为点券，2为抵用）、数量
		Array(4000061, 9999),
		Array(4000060, 9999),
		Array(4000059, 9999),
		Array(4002001, 100),
		Array(4005001, 200),
		Array(4031456, 100),
		Array(4011007, 80),
		Array(4021009, 80),
		Array(4002001, 100)
	),
	Array(//史诗
		Array(0, 100000000),//道具ID（0为金币，1为点券，2为抵用）、数量
		Array(4000074, 9999),
		Array(4000071, 9999),
		Array(4000072, 9999),
		Array(4000070, 9999),
		Array(4031456, 100),
		Array(4031561, 100),
		Array(4031559, 100),
		Array(4011007, 100),
		Array(4021009, 100),
		Array(4031997, 500)
	),
	Array(//传说
		Array(0, 200000000),//道具ID（0为金币，1为点券，2为抵用）、数量
		Array(4251100, 10),
		Array(4251000, 10),
		Array(4250900, 10),
		Array(4250800, 10),
		Array(4310081, 200)
	)
);
/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑设置区↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/


var choosed = -1;
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
            text += "#d角色名称：#b" + cm.getName() + "#k#n\t\t  #d剩余金币：#b" + cm.getMeso() + "#k#n\r\n"	
			for(var i = 0; i < 装备列表.length; i++){
				text += "#L" + i + "##b[#r" + 装备列表[i][1] + "#b]#v" + 装备列表[i][0] + "##d#z" +  + 装备列表[i][0] + "##bx1\r\n";
				if(装备列表[i][2] > 0){
					text += " #r" + 装备列表[i][2] + "#b攻";
				}
				if(装备列表[i][3] > 0){
					text += " #r" + 装备列表[i][3] + "#b魔";
				}
				if(装备列表[i][4] > 0){
					text += " #r" + 装备列表[i][4] + "#b力";
				}
				if(装备列表[i][5] > 0){
					text += " #r" + 装备列表[i][5] + "#b敏";
				}
				if(装备列表[i][6] > 0){
					text += " #r" + 装备列表[i][6] + "#b智";
				}
				if(装备列表[i][7] > 0){
					text += " #r" + 装备列表[i][7] + "#b运";
				}
				if(装备列表[i][8] > 0){
					text += " #r" + 装备列表[i][8] + "#b物防";
				}
				if(装备列表[i][9] > 0){
					text += " #r" + 装备列表[i][9] + "#b魔防";
				}
				if(装备列表[i][10] > 0){
					text += " #r" + 装备列表[i][10] + "#b命";
				}
				if(装备列表[i][11] > 0){
					text += " #r" + 装备列表[i][11] + "#b回";
				}
				if(装备列表[i][12] > 0){
					text += " #r" + 装备列表[i][12] + "#b速";
				}
				if(装备列表[i][13] > 0){
					text += " #r" + 装备列表[i][13] + "#b跳";
				}
				if(装备列表[i][14] > 0){
					text += " #r" + 装备列表[i][14] + "#b可升级次数";
				}
				text += "#l\r\n\r\n"
			}
		text += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		choosed = selection;
		var text = "要制作#b[#r" + 装备列表[choosed][1] + "#b]#v" + 装备列表[choosed][0] + "##d#z" +  + 装备列表[choosed][0] + "##bx1\r\n";

		if(装备列表[choosed][2] > 0){
			text += " #r" + 装备列表[choosed][2] + "#b攻";
		}
		if(装备列表[choosed][3] > 0){
			text += " #r" + 装备列表[choosed][3] + "#b魔";
		}
		if(装备列表[choosed][4] > 0){
			text += " #r" + 装备列表[choosed][4] + "#b力";
		}
		if(装备列表[choosed][5] > 0){
			text += " #r" + 装备列表[choosed][5] + "#b敏";
		}
		if(装备列表[choosed][6] > 0){
			text += " #r" + 装备列表[choosed][6] + "#b智";
		}
		if(装备列表[choosed][7] > 0){
			text += " #r" + 装备列表[choosed][7] + "#b运";
		}
		if(装备列表[choosed][8] > 0){
			text += " #r" + 装备列表[choosed][8] + "#b物防";
		}
		if(装备列表[choosed][9] > 0){
			text += " #r" + 装备列表[choosed][9] + "#b魔防";
		}
		if(装备列表[choosed][10] > 0){
			text += " #r" + 装备列表[choosed][10] + "#b命";
		}
		if(装备列表[choosed][11] > 0){
			text += " #r" + 装备列表[choosed][11] + "#b回";
		}
		if(装备列表[choosed][12] > 0){
			text += " #r" + 装备列表[choosed][12] + "#b速";
		}
		if(装备列表[choosed][13] > 0){
			text += " #r" + 装备列表[choosed][13] + "#b跳";
		}
		if(装备列表[choosed][14] > 0){
			text += " #r" + 装备列表[choosed][14] + "#b可升级次数";
		}
		
		text += "\r\n\r\n#r需要：#b";
		for(var i = 0; i < 材料列表[choosed].length; i++){
			if(材料列表[choosed][i][0] == 0){
				text += "#b金币#rx" + 材料列表[choosed][i][1] + " ";
			}else if(材料列表[choosed][i][0] == 1){
				text += "#b点券#rx" + 材料列表[choosed][i][1] + " ";
			}else if(材料列表[choosed][i][0] == 2){
				text += "#b抵用券#rx" + 材料列表[choosed][i][1] + " ";
			}else{
				text += "#r#v" + 材料列表[choosed][i][0] + "#x" + 材料列表[choosed][i][1] + " ";
			}
			
		}
		if(choosed > 0){
			text += "\r\n\t#k以及 #b[#r" + 装备列表[choosed - 1][1] + "#b]#v" + 装备列表[choosed - 1][0] + "##d#z" +  + 装备列表[choosed - 1][0] + "##bx1\r\n";
		}
		text += "\r\n";
		text += "你确定要制作么？\r\n";
		cm.sendYesNo(text);
		
	} else if(status == 2){
		for(var i = 0; i < 材料列表[choosed].length; i++){
			if(材料列表[choosed][i][0] == 0){
				if(cm.判断金币() < 材料列表[choosed][i][1]){
					cm.sendOk("你身上的金币不够!");
					cm.dispose();
					return;
				}
			}else if(材料列表[choosed][i][0] == 1){
				if(cm.判断点券() < 材料列表[choosed][i][1]){
					cm.sendOk("你身上的点券不够!");
					cm.dispose();
					return;
				}
			}else if(材料列表[choosed][i][0] == 2){
				if(cm.判断抵用券() < 材料列表[choosed][i][1]){
					cm.sendOk("你身上的抵用券不够!");
					cm.dispose();
					return;
				}
			}else{
				if(!cm.haveItem(材料列表[choosed][i][0], 材料列表[choosed][i][1])){
					cm.sendOk("你身上的#i" + 材料列表[choosed][i][0] + "#不够!");
					cm.dispose();
					return;
				}
			}
		}
		if(choosed > 0){
			var item0 = cm.getInventory(1).getItem(1);
			if(item0.getItemId() != 装备列表[choosed - 1][0]){
				cm.sendOk("请保证你的装备栏第 #r1#k 格的装备为#v" + 装备列表[choosed - 1][0] + " #!");
				cm.dispose();
				return;
			}else if(!item0.getOwner().equals(装备列表[choosed - 1][1])){
				cm.sendOk("请保证你的装备栏第 #r1#k 格的装备前缀为[#r" + 装备列表[choosed - 1][1] + "#k]!");
				cm.dispose();
				return;
			}
		}
		if(cm.判断背包装备栏().isFull()){
			cm.sendOk("请保证你的装备栏至少有 #r1#k 格空位!");
			cm.dispose();
			return;
		}
		
		for(var i = 0; i < 材料列表[choosed].length; i++){
			if(材料列表[choosed][i][0] == 0){
				if(cm.判断金币() < 材料列表[choosed][i][1]){
					cm.sendOk("你身上的金币不够!");
					cm.dispose();
					return;
				}
				cm.收金币(材料列表[choosed][i][1]);
			}else if(材料列表[choosed][i][0] == 1){
				if(cm.判断点券() < 材料列表[choosed][i][1]){
					cm.sendOk("你身上的点券不够!");
					cm.dispose();
					return;
				}
				cm.收点券(材料列表[choosed][i][1]);
			}else if(材料列表[choosed][i][0] == 2){
				if(cm.判断抵用券() < 材料列表[choosed][i][1]){
					cm.sendOk("你身上的抵用券不够!");
					cm.dispose();
					return;
				}
				cm.收抵用券(材料列表[choosed][i][1]);
			}else{
				if(!cm.haveItem(材料列表[choosed][i][0], 材料列表[choosed][i][1])){
					cm.sendOk("你身上的#i" + 材料列表[choosed][i][0] + "#不够!");
					cm.dispose();
					return;
				}
				cm.gainItem(材料列表[choosed][i][0], -材料列表[choosed][i][1]);
			}
		}
		if(choosed > 0){
			var item0 = cm.getInventory(1).getItem(1);
			if(item0.getItemId() != 装备列表[choosed - 1][0]){
				cm.sendOk("请保证你的装备栏第 #r1#k 格的装备为#v" + 装备列表[choosed - 1][0] + " #!");
				cm.dispose();
				return;
			}else if(!item0.getOwner().equals(装备列表[choosed - 1][1])){
				cm.sendOk("请保证你的装备栏第 #r1#k 格的装备前缀为[#r" + 装备列表[choosed - 1][1] + "#k]!");
				cm.dispose();
				return;
			}
			Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
		}
		var item = cm.getNewEquip(装备列表[choosed][0]);
		item.setOwner(装备列表[choosed][1]);
		item.setWatk(装备列表[choosed][2]);
		item.setMatk(装备列表[choosed][3]);
		item.setStr(装备列表[choosed][4]);
		item.setDex(装备列表[choosed][5]);
		item.setInt(装备列表[choosed][6]);
		item.setLuk(装备列表[choosed][7]);
		item.setWdef(装备列表[choosed][8]);
		item.setMdef(装备列表[choosed][9]);
		item.setAcc(装备列表[choosed][10]);
		item.setAvoid(装备列表[choosed][11]);
		item.setSpeed(装备列表[choosed][12]);
		item.setJump(装备列表[choosed][13]);
		// item.setHp(item0.getHp());
		// item.setMp(item0.getMp());
		item.setUpgradeSlots(装备列表[choosed][14]);
		//item.setLevel(item0.getLevel());
		//item.setViciousHammer(item0.getViciousHammer());
		//item.setOwner(item0.getOwner());
		Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		cm.sendOk("恭喜你成功制作了#v" + 装备列表[choosed][0] + "#\r\n");
		cm.全服道具公告("[装备制作]", "玩家 "+cm.getPlayer().getName()+" 辛勤收集材料，经过不懈努力，终于制作了强大的装备。", item);
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

