/*
SnailMS脚本生成器
*/
importClass(Packages.server.MapleItemInformationProvider);

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
		var text = "你好，这里是时装属性转移中心，在这里你可以消费#v4310088#转移时装属性，但有以下几条要求需注意：\r\n";
		text += "1、#r必须是相同部位才能进行转换#k;\r\n";
		text += "2、#r有时限的时装无法进行转换#k;\r\n";
		text += "3、#r请将被转移的#b旧时装#r放到物品栏第 #b1#r 格#k。\r\n";
		text += "4、#r请将要转移过去的#b新时装#r放到物品栏第 #b2#r 格#k。\r\n";
		text += "5、#r两件时装的属性会互相交换#k;\r\n";
		text += "6、#r每次转移需要#v4310088##bx20#k。\r\n";
		text += "\r\n";
		text += "\t\t\t\t#L1##b[开始转移]#l#k\r\n\r\n";
		//text += "#L2#选项2内容\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			if(!cm.haveItem(4310088, 20)){
				cm.sendOk("你的#v4310088#不够啊！");
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
				cm.gainItem(4310088, -20);
				var item3 = cm.getNewEquip(itemId1);//中间商
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
				item3.setOwner(item1.getOwner());
				
				item1.setStr(item2.getStr());
				item1.setInt(item2.getInt());
				item1.setLuk(item2.getLuk());
				item1.setDex(item2.getDex());
				item1.setWatk(item2.getWatk());
				item1.setMatk(item2.getMatk());
				item1.setWdef(item2.getWdef());
				item1.setMdef(item2.getMdef());
				item1.setAcc(item2.getAcc());
				item1.setAvoid(item2.getAvoid());
				item1.setSpeed(item2.getSpeed());
				item1.setJump(item2.getJump());
				item1.setHp(item2.getHp());
				item1.setMp(item2.getMp());
				item1.setUpgradeSlots(item2.getUpgradeSlots());
				item1.setLevel(item2.getLevel());
				item1.setViciousHammer(item2.getViciousHammer());
				item1.setOwner(item2.getOwner());
				
				item2.setStr(item3.getStr());
				item2.setInt(item3.getInt());
				item2.setLuk(item3.getLuk());
				item2.setDex(item3.getDex());
				item2.setWatk(item3.getWatk());
				item2.setMatk(item3.getMatk());
				item2.setWdef(item3.getWdef());
				item2.setMdef(item3.getMdef());
				item2.setAcc(item3.getAcc());
				item2.setAvoid(item3.getAvoid());
				item2.setSpeed(item3.getSpeed());
				item2.setJump(item3.getJump());
				item2.setHp(item3.getHp());
				item2.setMp(item3.getMp());
				item2.setUpgradeSlots(item3.getUpgradeSlots());
				item2.setLevel(item3.getLevel());
				item2.setViciousHammer(item3.getViciousHammer());
				item2.setOwner(item3.getOwner());
				
				item1 = item1.copy();
				item2 = item2.copy();
				
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
				
				cm.sendOk("已成功将两件时装转移了属性!");	
				cm.全服道具公告("[时装属性转移]", "玩家 "+cm.getPlayer().getName()+" 将旧时装的属性转移到了新时装上。", item2);
				cm.dispose();
				return;
			}else if(itemId1 >= 1200000 && itemId1 < 1800000){
				if(itemId2 >= 1200000 && itemId2 < 1800000){
					cm.gainItem(4310088, -20);
					var item3 = cm.getNewEquip(itemId1);//中间商
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
					item3.setOwner(item1.getOwner());
					
					item1.setStr(item2.getStr());
					item1.setInt(item2.getInt());
					item1.setLuk(item2.getLuk());
					item1.setDex(item2.getDex());
					item1.setWatk(item2.getWatk());
					item1.setMatk(item2.getMatk());
					item1.setWdef(item2.getWdef());
					item1.setMdef(item2.getMdef());
					item1.setAcc(item2.getAcc());
					item1.setAvoid(item2.getAvoid());
					item1.setSpeed(item2.getSpeed());
					item1.setJump(item2.getJump());
					item1.setHp(item2.getHp());
					item1.setMp(item2.getMp());
					item1.setUpgradeSlots(item2.getUpgradeSlots());
					item1.setLevel(item2.getLevel());
					item1.setViciousHammer(item2.getViciousHammer());
					item1.setOwner(item2.getOwner());
					
					item2.setStr(item3.getStr());
					item2.setInt(item3.getInt());
					item2.setLuk(item3.getLuk());
					item2.setDex(item3.getDex());
					item2.setWatk(item3.getWatk());
					item2.setMatk(item3.getMatk());
					item2.setWdef(item3.getWdef());
					item2.setMdef(item3.getMdef());
					item2.setAcc(item3.getAcc());
					item2.setAvoid(item3.getAvoid());
					item2.setSpeed(item3.getSpeed());
					item2.setJump(item3.getJump());
					item2.setHp(item3.getHp());
					item2.setMp(item3.getMp());
					item2.setUpgradeSlots(item3.getUpgradeSlots());
					item2.setLevel(item3.getLevel());
					item2.setViciousHammer(item3.getViciousHammer());
					item2.setOwner(item3.getOwner());
					
					item1 = item1.copy();
					item2 = item2.copy();
					
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
					
					cm.sendOk("已成功将两件时装转移了属性!");	
					cm.全服道具公告("[时装属性转移]", "玩家 "+cm.getPlayer().getName()+" 将旧时装的属性转移到了新时装上。", item2);
					cm.dispose();
					return;
				}else{
					cm.sendOk("请保证两件时装为同一部位!");	
					cm.dispose();
					return;
				}
			}/* else if(itemId1 >= 1800000 && itemId1 < 1900000){
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
				cm.gainItem(4310088, -20);
				var item3 = cm.getNewEquip(itemId1);//中间商
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
				//item3.setOwner(item1.getOwner());
				
				item1.setStr(item2.getStr());
				item1.setInt(item2.getInt());
				item1.setLuk(item2.getLuk());
				item1.setDex(item2.getDex());
				item1.setWatk(item2.getWatk());
				item1.setMatk(item2.getMatk());
				item1.setWdef(item2.getWdef());
				item1.setMdef(item2.getMdef());
				item1.setAcc(item2.getAcc());
				item1.setAvoid(item2.getAvoid());
				item1.setSpeed(item2.getSpeed());
				item1.setJump(item2.getJump());
				item1.setHp(item2.getHp());
				item1.setMp(item2.getMp());
				item1.setUpgradeSlots(item2.getUpgradeSlots());
				item1.setLevel(item2.getLevel());
				item1.setViciousHammer(item2.getViciousHammer());
				//item1.setOwner(item2.getOwner());
				
				item2.setStr(item3.getStr());
				item2.setInt(item3.getInt());
				item2.setLuk(item3.getLuk());
				item2.setDex(item3.getDex());
				item2.setWatk(item3.getWatk());
				item2.setMatk(item3.getMatk());
				item2.setWdef(item3.getWdef());
				item2.setMdef(item3.getMdef());
				item2.setAcc(item3.getAcc());
				item2.setAvoid(item3.getAvoid());
				item2.setSpeed(item3.getSpeed());
				item2.setJump(item3.getJump());
				item2.setHp(item3.getHp());
				item2.setMp(item3.getMp());
				item2.setUpgradeSlots(item3.getUpgradeSlots());
				item2.setLevel(item3.getLevel());
				item2.setViciousHammer(item3.getViciousHammer());
				//item2.setOwner(item3.getOwner());
				
				item1 = item1.copy();
				item2 = item2.copy();
				
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
				
				cm.sendOk("已成功将两件时装转移了属性!");	
				cm.全服道具公告("[时装属性转移]", "玩家 "+cm.getPlayer().getName()+" 将旧时装的属性转移到了新时装上。", item2);
				cm.dispose();
				return;
			}  */else {
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

