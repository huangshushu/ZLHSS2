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
	
		text += "#r强化成功之后，会在装备上显示装备等级\r\n";
		text += "#r#L1##v1142767#升为学徒全属性+3需要\r\n#k#v1142358#x1#v4000019#x150#v4000016#x150#v4000000#x150+2000点券+4000抵用券+20W金币#l\r\n\r\n"//3
		text += "#r#L2##v1142823#升为学士全属性+3需要\r\n#k#v1142767#x1#v4000019#x300#v4000016#x300#v4000000#x300+4000点券+6000抵用券+50W金币#l\r\n\r\n"//3
		text += "#r#L3##v1142891#升为大师全属性+3需要\r\n#k#v1142823#x1#v4000019#x450#v4000016#x450#v4000000#x450+6000点券+8000抵用券+70W金币#l\r\n\r\n"//3
		text += "#r#L4##v1142839#升为宗师全属性+3需要\r\n#k#v1142891#x1#v4000019#x600#v4000016#x600#v4000000#x600+8000点券+10000抵用券+100W金币#l\r\n\r\n"//3
		text += "#r#L5##v1142908#升为天士全属性+5需要\r\n#k#v1142839#x1#v4000176#x30#v4000040#x30#v4001111#x15+10000点券+20000抵用券+2500W金币#l\r\n\r\n"//3
		text += "#r#L6##v1142714#升为天师全属性+6需要\r\n#k#v1142908#x1#v4001085#x1#v4001084#x1#v3994072#x50#v3994060#x50+15000点券+20000抵用券+5000W金币#l\r\n\r\n"//3
		text += "#r#L7##v1142789#升为天尊全属性+7需要\r\n#k#v1142714#x1#v4001083#x1#v4000175#x20#v4000235#x30#v4000243#x30+20000点券+20000抵用券+1E金币#l\r\n\r\n"//3

		text += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142358) {
				cm.sendOk("把#v1142358#放在第一格!");		
				cm.dispose();
			} else if (cm.haveItem(4000019, 150) && cm.haveItem(4000016, 150) && cm.haveItem(4000000, 150) && cm.getPlayer().getNX() > 2000  && cm.getPlayer().getCSPoints(2) > 4000  && cm.getPlayer().getMeso() > 200000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142767);
				item.setStr(item0.getStr() + 3);
				item.setInt(item0.getInt() + 3);
				item.setLuk(item0.getLuk() + 3);
				item.setDex(item0.getDex() + 3);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("第二阶段");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000019, -150);
				cm.gainItem(4000016, -150);
				cm.gainItem(4000000, -150);
				cm.gainNX(-2000);
				cm.gainDY(-4000);
				cm.gainMeso(-200000);
				cm.sendOk("强化成功，当前装备等级为 “#r学徒#k”。\r\n #r#e全属性增加[3]点");
				cm.全服道具公告("[勋章制作]", "玩家 "+cm.getPlayer().getName()+" 成功制作了学徒勋章。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备无法参与强化。或者材料不足");
				cm.dispose();
			}
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142767) {
				cm.sendOk("把#v1142767#放在第一格!");		
				cm.dispose();
			} else if (cm.haveItem(4000019, 300) && cm.haveItem(4000016, 300) && cm.haveItem(4000000, 300) && cm.getPlayer().getNX() > 4000  && cm.getPlayer().getCSPoints(2) > 6000  && cm.getPlayer().getMeso() > 500000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142823);
				item.setStr(item0.getStr() + 3);
				item.setInt(item0.getInt() + 3);
				item.setLuk(item0.getLuk() + 3);
				item.setDex(item0.getDex() + 3);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("第二阶段");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000019, -300);
				cm.gainItem(4000016, -300);
				cm.gainItem(4000000, -300);
				cm.gainNX(-4000);
				cm.gainDY(-6000);
				cm.gainMeso(-500000);
				cm.sendOk("强化成功，当前装备等级为 “#r学士#k”。\r\n #r#e全属性增加[3]点");
				cm.全服道具公告("[勋章制作]", "玩家 "+cm.getPlayer().getName()+" 成功制作了学士勋章。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备无法参与强化。或者材料不足");
				cm.dispose();
			}
		}else if (selection == 3) {
			//在这里编写选项3要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142823) {
				cm.sendOk("把#v1142823#放在第一格!");		
				cm.dispose();
			} else if (cm.haveItem(4000019, 450) && cm.haveItem(4000016, 450) && cm.haveItem(4000000, 450) && cm.getPlayer().getNX() > 6000  && cm.getPlayer().getCSPoints(2) > 8000  && cm.getPlayer().getMeso() > 700000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142891);
				item.setStr(item0.getStr() + 3);
				item.setInt(item0.getInt() + 3);
				item.setLuk(item0.getLuk() + 3);
				item.setDex(item0.getDex() + 3);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("第二阶段");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000019, -450);
				cm.gainItem(4000016, -450);
				cm.gainItem(4000000, -450);
				cm.gainNX(-6000);
				cm.gainDY(-8000);
				cm.gainMeso(-700000);
				cm.sendOk("强化成功，当前装备等级为 “#r大师#k”。\r\n #r#e全属性增加[3]点");
				cm.全服道具公告("[勋章制作]", "玩家 "+cm.getPlayer().getName()+" 成功制作了大师勋章。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备无法参与强化。或者材料不足");
				cm.dispose();
			}
		} else if (selection == 4) {
			//在这里编写选项4要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142891) {
				cm.sendOk("把#v1142891#放在第一格!");		
				cm.dispose();
			} else if (cm.haveItem(4000019, 600) && cm.haveItem(4000016, 600) && cm.haveItem(4000000, 600) && cm.getPlayer().getNX() > 8000  && cm.getPlayer().getCSPoints(2) > 10000  && cm.getPlayer().getMeso() > 1000000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142839);
				item.setStr(item0.getStr() + 3);
				item.setInt(item0.getInt() + 3);
				item.setLuk(item0.getLuk() + 3);
				item.setDex(item0.getDex() + 3);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("第二阶段");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000019, -600);
				cm.gainItem(4000016, -600);
				cm.gainItem(4000000, -600);
				cm.gainNX(-8000);
				cm.gainDY(-10000);
				cm.gainMeso(-1000000);
				cm.sendOk("强化成功，当前装备等级为 “#r宗师#k”。\r\n #r#e全属性增加[3]点");
				cm.全服道具公告("[勋章制作]", "玩家 "+cm.getPlayer().getName()+" 成功制作了宗师勋章。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备无法参与强化。或者材料不足");
				cm.dispose();
			}
		} else if (selection == 5) {
			//在这里编写选项5要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142839) {
				cm.sendOk("把#v1142839#放在第一格!");		
				cm.dispose();
			} else if (cm.haveItem(4000176, 30) && cm.haveItem(4000040, 30) && cm.haveItem(4001111, 15) && cm.getPlayer().getNX() > 10000  && cm.getPlayer().getCSPoints(2) > 20000  && cm.getPlayer().getMeso() > 25000000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142908);
				item.setStr(item0.getStr() + 5);
				item.setInt(item0.getInt() + 5);
				item.setLuk(item0.getLuk() + 5);
				item.setDex(item0.getDex() + 5);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("第二阶段");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000176, -30);
				cm.gainItem(4000040, -30);
				cm.gainItem(4001111, -15);
				cm.gainNX(-10000);
				cm.gainDY(-20000);
				cm.gainMeso(-25000000);
				cm.sendOk("强化成功，当前装备等级为 “#r天士#k”。\r\n #r#e全属性增加[5]点");
				cm.全服道具公告("[勋章制作]", "玩家 "+cm.getPlayer().getName()+" 成功制作了天士勋章。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备无法参与强化。或者材料不足");
				cm.dispose();
			}
		} else if (selection == 6) {
			//在这里编写选项6要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142908) {
				cm.sendOk("把#v1142908#放在第一格!");		
				cm.dispose();
			} else if (cm.haveItem(4001085, 1) && cm.haveItem(4001084, 1) && cm.haveItem(3994072, 50) && cm.haveItem(3994060, 50) && cm.getPlayer().getNX() > 15000  && cm.getPlayer().getCSPoints(2) > 20000  && cm.getPlayer().getMeso() > 50000000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142714);
				item.setStr(item0.getStr() + 6);
				item.setInt(item0.getInt() + 6);
				item.setLuk(item0.getLuk() + 6);
				item.setDex(item0.getDex() + 6);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("第二阶段");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4001085, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(3994072, -50);
				cm.gainItem(3994060, -50);
				cm.gainNX(-15000);
				cm.gainDY(-20000);
				cm.gainMeso(-50000000);
				cm.sendOk("强化成功，当前装备等级为 “#r天师#k”。\r\n #r#e全属性增加[6]点");
				cm.全服道具公告("[勋章制作]", "玩家 "+cm.getPlayer().getName()+" 成功制作了天师勋章。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备无法参与强化。或者材料不足");
				cm.dispose();
			}
		} else if (selection == 7) {
			//在这里编写选项7要做的事
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142714) {
				cm.sendOk("把#v1142714#放在第一格!");		
				cm.dispose();
			} else if (cm.haveItem(4001083, 1) && cm.haveItem(4000175, 20) && cm.haveItem(4000235, 30) && cm.haveItem(4000243, 30) && cm.getPlayer().getNX() > 20000  && cm.getPlayer().getCSPoints(2) > 20000  && cm.getPlayer().getMeso() > 100000000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142789);
				item.setStr(item0.getStr() + 7);
				item.setInt(item0.getInt() + 7);
				item.setLuk(item0.getLuk() + 7);
				item.setDex(item0.getDex() + 7);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("第二阶段");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4001083, -1);
				cm.gainItem(4000175, -20);
				cm.gainItem(4000235, -30);
				cm.gainItem(4000243, -30);
				cm.gainNX(-20000);
				cm.gainDY(-20000);
				cm.gainMeso(-100000000);
				cm.sendOk("强化成功，当前装备等级为 “#r天尊#k”。\r\n #r#e全属性增加[7]点");
				cm.全服道具公告("[勋章制作]", "玩家 "+cm.getPlayer().getName()+" 成功制作了天尊勋章。", item);
				cm.dispose();
					
			} else {
				cm.sendOk("当前装备无法参与强化。或者材料不足");
				cm.dispose();
			}
		}  
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

