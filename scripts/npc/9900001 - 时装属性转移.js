/*
SnailMS脚本生成器
*/
importClass(Packages.server.MapleItemInformationProvider);

var 消耗道具 = 4310088;
var 消耗数量 = 20;

//账号底下只允许转移限制次数的道具
var 限制次数名单 = Array(
	Array(1005491, 1),//道具ID，限制次数
	Array(1012057, 1),
	Array(1022048, 1),
	Array(1702224, 1)
);

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
		var text = "你好，这里是时装属性转移中心，在这里你可以消费#v" + 消耗道具 + "#转移时装属性，但有以下几条要求需注意：\r\n";
		text += "1、#r必须是相同部位才能进行转换#k;\r\n";
		text += "2、#r有时限的时装无法进行转换#k;\r\n";
		text += "3、#r请将被转移的#b旧时装#r放到物品栏第 #b1#r 格#k。\r\n";
		text += "4、#r请将要转移过去的#b新时装#r放到物品栏第 #b2#r 格#k。\r\n";
		text += "5、#r#b旧时装#r的属性会叠加到#b新时装#r上，且#b旧时装#r的属性会消失#k;\r\n";
		text += "6、#r每次转移需要#v" + 消耗道具 + "##bx" + 消耗数量 + "#k。\r\n";
		if(限制次数名单.length > 0){
			text += "7、#r以下道具，同一账号下只能转移指定次数：#b\r\n\t";
			for(var i = 0; i < 限制次数名单.length; i++){
				text += "#v" + 限制次数名单[i][0] + "#" + 限制次数名单[i][1] + "次 ";
			}
			text += "\r\n";
		}
		
		text += "\r\n";
		text += "\t\t\t\t#L1##b[开始转移]#l#k\r\n\r\n";
		//text += "#L2#选项2内容\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			if(!cm.haveItem(消耗道具, 消耗数量)){
				cm.sendOk("你的#v" + 消耗道具 + "#不够啊！");
				cm.dispose();
				return;
			}
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("你背包第一格没有装备啊！");
				cm.dispose();
				return;
			}
			if(cm.getInventory(1).getItem(2) == null){
				cm.sendOk("你背包第二格没有装备啊！");
				cm.dispose();
				return;
			}
			var item1 = cm.getInventory(1).getItem(1);
			var item2 = cm.getInventory(1).getItem(2);
			var itemId1 = item1.getItemId();
			var itemId2 = item2.getItemId();
			if(!MapleItemInformationProvider.getInstance().isCash(itemId1) || !MapleItemInformationProvider.getInstance().isCash(itemId2) ) {
				cm.sendOk("请保证装备栏第1、2格均为时装!");	
				cm.dispose();
				return;
			}
			if((item1.getExpiration() >= 0 && item1.getExpiration() < 4700000000000) || (item2.getExpiration() >= 0 && item2.getExpiration() < 4700000000000)) {
				//cm.getPlayer().dropMessage("item1:" + item1.getExpiration());//测试
				//cm.getPlayer().dropMessage("item2:" + item2.getExpiration());//测试
				cm.sendOk("请保证两件时装都没有时间期限!");	
				cm.dispose();
				return;
			}
			if(itemId1 < 1200000){
				var itemId1S = itemId1 + "";
				var itemId2S = itemId2 + "";
				itemId1S = itemId1S.substr(0, 3) + "";
				itemId2S = itemId2S.substr(0, 3) + "";
				// cm.getPlayer().dropMessage("itemId1S:" + itemId1S);//测试
				// cm.getPlayer().dropMessage("itemId2S:" + itemId2S);//测试
				if(!itemId1S.equals(itemId2S)){
					cm.sendOk("请保证两件时装为同一部位!");	
					cm.dispose();
					return;
				}
				if(限制次数名单.length > 0){
					for(var i = 0; i < 限制次数名单.length; i++){
						if(限制次数名单[i][0] == itemId1){
							if(cm.getPlayer().getOneTimeLoga("时装限制" + itemId1) < 限制次数名单[i][1]){
								cm.getPlayer().setOneTimeLoga("时装限制" + itemId1);
								break;
							}else{
								cm.sendOk("#v" + itemId1 + "#已转移过 " + 限制次数名单[i][1] + " 次，无法再进行转移!");	
								cm.dispose();
								return;
							}
						}
					}
				}
				
				cm.gainItem(消耗道具, -消耗数量);
/* 				var item3 = cm.getNewEquip(itemId1);//中间商
				item3.setStr(item1.getStr());
				item3.setInt(item1.getInt());
				item3.setLuk(item1.getLuk());
				item3.setDex(item1.getDex());
				item3.setWatk(item1.getWatk());
				item3.setMatk(item1.getMatk());
				item3.setWdef(item1.getWdef());
				item3.setMdef(item1.getMdef());
				item3.setAcc(item1.getAcc());
				item3.setAvoid(item1.getAvoid());
				item3.setSpeed(item1.getSpeed());
				item3.setJump(item1.getJump());
				item3.setHp(item1.getHp());
				item3.setMp(item1.getMp());
				item3.setUpgradeSlots(item1.getUpgradeSlots());
				item3.setLevel(item1.getLevel());
				item3.setViciousHammer(item1.getViciousHammer());
				//item3.setOwner(item1.getOwner()); */
				
				
				//item1.setOwner(item2.getOwner());
				
				item2.setStr(item2.getStr() + item1.getStr());
				item2.setInt(item2.getInt() + item1.getInt());
				item2.setLuk(item2.getLuk() + item1.getLuk());
				item2.setDex(item2.getDex() + item1.getDex());
				item2.setWatk(item2.getWatk() + item1.getWatk());
				item2.setMatk(item2.getMatk() + item1.getMatk());
				item2.setWdef(item2.getWdef() + item1.getWdef());
				item2.setMdef(item2.getMdef() + item1.getMdef());
				item2.setAcc(item2.getAcc() + item1.getAcc());
				item2.setAvoid(item2.getAvoid() + item1.getAvoid());
				item2.setSpeed(item2.getSpeed() + item1.getSpeed());
				item2.setJump(item2.getJump() + item1.getJump());
				item2.setHp(item2.getHp() + item1.getHp());
				item2.setMp(item2.getMp() + item1.getMp());
				item2.setUpgradeSlots(item2.getUpgradeSlots() + item1.getUpgradeSlots());
				item2.setLevel(item2.getLevel() + item1.getLevel());
				item2.setViciousHammer(item2.getViciousHammer() + item1.getViciousHammer());
				//item2.setOwner(item3.getOwner());
				item1.setStr(0);
				item1.setInt(0);
				item1.setLuk(0);
				item1.setDex(0);
				item1.setWatk(0);
				item1.setMatk(0);
				item1.setWdef(0);
				item1.setMdef(0);
				item1.setAcc(0);
				item1.setAvoid(0);
				item1.setSpeed(0);
				item1.setJump(0);
				item1.setHp(0);
				item1.setMp(0);
				item1.setUpgradeSlots(0);
				item1.setLevel(0);
				item1.setViciousHammer(0);
				
				item1 = item1.copy();
				item2 = item2.copy();
				
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
				
				cm.sendOk("已成功将两件时装转移了属性!");	
				//cm.全服道具公告("[时装属性转移]", "玩家 "+cm.getPlayer().getName()+" 将旧时装的属性转移到了新时装上。", item2);
				cm.dispose();
				return;
			}else if(itemId1 >= 1200000 && itemId1 < 1800000){
				if(itemId2 >= 1200000 && itemId2 < 1800000){
					if(限制次数名单.length > 0){
						for(var i = 0; i < 限制次数名单.length; i++){
							if(限制次数名单[i][0] == itemId1){
								if(cm.getPlayer().getOneTimeLoga("时装限制" + itemId1) < 限制次数名单[i][1]){
									cm.getPlayer().setOneTimeLoga("时装限制" + itemId1);
									break;
								}else{
									cm.sendOk("#v" + itemId1 + "#已转移过 " + 限制次数名单[i][1] + " 次，无法再进行转移!");	
									cm.dispose();
									return;
								}
							}
						}
					}
					cm.gainItem(消耗道具, -消耗数量);
	/* 				var item3 = cm.getNewEquip(itemId1);//中间商
					item3.setStr(item1.getStr());
					item3.setInt(item1.getInt());
					item3.setLuk(item1.getLuk());
					item3.setDex(item1.getDex());
					item3.setWatk(item1.getWatk());
					item3.setMatk(item1.getMatk());
					item3.setWdef(item1.getWdef());
					item3.setMdef(item1.getMdef());
					item3.setAcc(item1.getAcc());
					item3.setAvoid(item1.getAvoid());
					item3.setSpeed(item1.getSpeed());
					item3.setJump(item1.getJump());
					item3.setHp(item1.getHp());
					item3.setMp(item1.getMp());
					item3.setUpgradeSlots(item1.getUpgradeSlots());
					item3.setLevel(item1.getLevel());
					item3.setViciousHammer(item1.getViciousHammer());
					//item3.setOwner(item1.getOwner()); */
					
					
					//item1.setOwner(item2.getOwner());
					
					item2.setStr(item2.getStr() + item1.getStr());
					item2.setInt(item2.getInt() + item1.getInt());
					item2.setLuk(item2.getLuk() + item1.getLuk());
					item2.setDex(item2.getDex() + item1.getDex());
					item2.setWatk(item2.getWatk() + item1.getWatk());
					item2.setMatk(item2.getMatk() + item1.getMatk());
					item2.setWdef(item2.getWdef() + item1.getWdef());
					item2.setMdef(item2.getMdef() + item1.getMdef());
					item2.setAcc(item2.getAcc() + item1.getAcc());
					item2.setAvoid(item2.getAvoid() + item1.getAvoid());
					item2.setSpeed(item2.getSpeed() + item1.getSpeed());
					item2.setJump(item2.getJump() + item1.getJump());
					item2.setHp(item2.getHp() + item1.getHp());
					item2.setMp(item2.getMp() + item1.getMp());
					item2.setUpgradeSlots(item2.getUpgradeSlots() + item1.getUpgradeSlots());
					item2.setLevel(item2.getLevel() + item1.getLevel());
					item2.setViciousHammer(item2.getViciousHammer() + item1.getViciousHammer());
					//item2.setOwner(item3.getOwner());
					
					item1.setStr(0);
					item1.setInt(0);
					item1.setLuk(0);
					item1.setDex(0);
					item1.setWatk(0);
					item1.setMatk(0);
					item1.setWdef(0);
					item1.setMdef(0);
					item1.setAcc(0);
					item1.setAvoid(0);
					item1.setSpeed(0);
					item1.setJump(0);
					item1.setHp(0);
					item1.setMp(0);
					item1.setUpgradeSlots(0);
					item1.setLevel(0);
					item1.setViciousHammer(0);
					
					item1 = item1.copy();
					item2 = item2.copy();
					
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
					
					cm.sendOk("已成功将两件时装转移了属性!");	
					//cm.全服道具公告("[时装属性转移]", "玩家 "+cm.getPlayer().getName()+" 将旧时装的属性转移到了新时装上。", item2);
					cm.dispose();
					return;
				}else{
					cm.sendOk("请保证两件时装为同一部位!");	
					cm.dispose();
					return;
				}
			}else if(itemId1 >= 1800000 && itemId1 < 1900000){
				var itemId1S = itemId1 + "";
				var itemId2S = itemId2 + "";
				itemId1S = itemId1S.substr(0, 3) + "";
				itemId2S = itemId2S.substr(0, 3) + "";
				// cm.getPlayer().dropMessage("itemId1S:" + itemId1S);//测试
				// cm.getPlayer().dropMessage("itemId2S:" + itemId2S);//测试
				if(!itemId1S.equals(itemId2S)){
					cm.sendOk("请保证两件时装为同一部位!");	
					cm.dispose();
					return;
				}
				if(限制次数名单.length > 0){
					for(var i = 0; i < 限制次数名单.length; i++){
						if(限制次数名单[i][0] == itemId1){
							if(cm.getPlayer().getOneTimeLoga("时装限制" + itemId1) < 限制次数名单[i][1]){
								cm.getPlayer().setOneTimeLoga("时装限制" + itemId1);
								break;
							}else{
								cm.sendOk("#v" + itemId1 + "#已转移过 " + 限制次数名单[i][1] + " 次，无法再进行转移!");	
								cm.dispose();
								return;
							}
						}
					}
				}
				cm.gainItem(消耗道具, -消耗数量);
/* 				var item3 = cm.getNewEquip(itemId1);//中间商
				item3.setStr(item1.getStr());
				item3.setInt(item1.getInt());
				item3.setLuk(item1.getLuk());
				item3.setDex(item1.getDex());
				item3.setWatk(item1.getWatk());
				item3.setMatk(item1.getMatk());
				item3.setWdef(item1.getWdef());
				item3.setMdef(item1.getMdef());
				item3.setAcc(item1.getAcc());
				item3.setAvoid(item1.getAvoid());
				item3.setSpeed(item1.getSpeed());
				item3.setJump(item1.getJump());
				item3.setHp(item1.getHp());
				item3.setMp(item1.getMp());
				item3.setUpgradeSlots(item1.getUpgradeSlots());
				item3.setLevel(item1.getLevel());
				item3.setViciousHammer(item1.getViciousHammer());
				//item3.setOwner(item1.getOwner()); */
				
				
				//item1.setOwner(item2.getOwner());
				
				item2.setStr(item2.getStr() + item1.getStr());
				item2.setInt(item2.getInt() + item1.getInt());
				item2.setLuk(item2.getLuk() + item1.getLuk());
				item2.setDex(item2.getDex() + item1.getDex());
				item2.setWatk(item2.getWatk() + item1.getWatk());
				item2.setMatk(item2.getMatk() + item1.getMatk());
				item2.setWdef(item2.getWdef() + item1.getWdef());
				item2.setMdef(item2.getMdef() + item1.getMdef());
				item2.setAcc(item2.getAcc() + item1.getAcc());
				item2.setAvoid(item2.getAvoid() + item1.getAvoid());
				item2.setSpeed(item2.getSpeed() + item1.getSpeed());
				item2.setJump(item2.getJump() + item1.getJump());
				item2.setHp(item2.getHp() + item1.getHp());
				item2.setMp(item2.getMp() + item1.getMp());
				item2.setUpgradeSlots(item2.getUpgradeSlots() + item1.getUpgradeSlots());
				item2.setLevel(item2.getLevel() + item1.getLevel());
				item2.setViciousHammer(item2.getViciousHammer() + item1.getViciousHammer());
				//item2.setOwner(item3.getOwner());
				
				item1.setStr(0);
				item1.setInt(0);
				item1.setLuk(0);
				item1.setDex(0);
				item1.setWatk(0);
				item1.setMatk(0);
				item1.setWdef(0);
				item1.setMdef(0);
				item1.setAcc(0);
				item1.setAvoid(0);
				item1.setSpeed(0);
				item1.setJump(0);
				item1.setHp(0);
				item1.setMp(0);
				item1.setUpgradeSlots(0);
				item1.setLevel(0);
				item1.setViciousHammer(0);
				
				item1 = item1.copy();
				item2 = item2.copy();
				
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
				
				cm.sendOk("已成功将两件时装转移了属性!");	
				//cm.全服道具公告("[时装属性转移]", "玩家 "+cm.getPlayer().getName()+" 将旧时装的属性转移到了新时装上。", item2);
				cm.dispose();
				return;
			}  else {
				cm.sendOk("你的时装不在支持范围内!");	
				cm.dispose();
				return;
			}
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			
		} 
		
	} else {
		cm.dispose();
		return;
	}
}

