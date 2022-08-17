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
		var text = "你好，这里是宠物装备属性转移中心，在这里你可以消费#v4310088#转移宠物装备属性，但有以下几条要求需注意：\r\n";
		text += "1、#r有时限的宠物装备无法进行转换#k;\r\n";
		text += "2、#r请将被转移的#b旧宠物装备#r放到物品栏第 #b1#r 格#k。\r\n";
		text += "3、#r请将要转移过去的#b新宠物装备#r放到物品栏第 #b2#r 格#k。\r\n";
		text += "4、#r旧的宠物装备会消失，新的宠物装备的升级记录将被覆盖，且将继承旧宠物装备的升级次数与升级属性#k;\r\n";
		text += "5、#r转移后，新宠装可升级次数 = 新宠装天然升级次数 - 旧宠装已升级次数#k;\r\n";
		text += "6、#r每次转移需要#v4310088##bx20#k。\r\n";
		text += "\r\n";
		text += "\t\t\t\t#L1##b[开始转移]#l#k\r\n\r\n";
		//text += "#L2#选项2内容\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			var item1 = cm.getInventory(1).getItem(1);
			var item2 = cm.getInventory(1).getItem(2);
			var itemId1 = item1.getItemId();
			var itemId2 = item2.getItemId();
				if(!MapleItemInformationProvider.getInstance().isCash(itemId1) || !MapleItemInformationProvider.getInstance().isCash(itemId2) ) {
				cm.sendOk("请保证装备栏第1、2格均为宠物装备!");	
				cm.dispose();
				return;
			}
			if((item1.getExpiration() >= 0 && item1.getExpiration() < 4700000000000) || (item2.getExpiration() >= 0 && item2.getExpiration() < 4700000000000)) {
				//cm.getPlayer().dropMessage("item1:" + item1.getExpiration());//测试
				//cm.getPlayer().dropMessage("item2:" + item2.getExpiration());//测试
				cm.sendOk("请保证两件宠物装备都没有时间期限!");	
				cm.dispose();
				return;
			}
			if(itemId1 < 1800000 || itemId1 >= 1900000 || itemId2 < 1800000 || itemId2 >= 1900000){
				cm.sendOk("你的装备不在支持范围内!");	
				cm.dispose();
				return;
			}
			var text = "确认要将#v" + itemId1 + "#的属性转移到#v" + itemId2 + "#吗？\r\n#r转移过后，#v" + itemId1 + "#将会消失，这一过程不可逆。\r\n由于天然属性存在±1~2的波动，因此转移后的属性也会对应出现±1~2的波动，这是正常现象。\r\n";
			cm.sendYesNo(text);
		}else{
			cm.sendOk("欢迎下次再来");
			cm.dispose();
			return;
		}
		
	} else if (status == 2){
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
			cm.sendOk("请保证装备栏第1、2格均为宠物装备!");	
			cm.dispose();
			return;
		}
		if((item1.getExpiration() >= 0 && item1.getExpiration() < 4700000000000) || (item2.getExpiration() >= 0 && item2.getExpiration() < 4700000000000)) {
			//cm.getPlayer().dropMessage("item1:" + item1.getExpiration());//测试
			//cm.getPlayer().dropMessage("item2:" + item2.getExpiration());//测试
			cm.sendOk("请保证两件宠物装备都没有时间期限!");	
			cm.dispose();
			return;
		}
		if(itemId1 >= 1800000 && itemId1 < 1900000 && itemId2 >= 1800000 && itemId2 < 1900000){
			/* var itemId1S = itemId1 + "";
			var itemId2S = itemId2 + "";
			itemId1S = itemId1S.substr(0, 3) + "";
			itemId2S = itemId2S.substr(0, 3) + "";
			// cm.getPlayer().dropMessage("itemId1S:" + itemId1S);//测试
			// cm.getPlayer().dropMessage("itemId2S:" + itemId2S);//测试
			if(!itemId1S.equals(itemId2S)){
				cm.sendOk("请保证两件宠物装备为同一部位!");	
				cm.dispose();
				return;
			} */
			cm.gainItem(4310088, -20);
			var item3 = cm.getNewEquip(itemId1);//中间商1
			var item4 = cm.getNewEquip(itemId2);//中间商2
			
			
			
			item2.setStr(item4.getStr() + item1.getStr() - item3.getStr());
			item2.setInt(item4.getInt() + item1.getInt() - item3.getInt());
			item2.setLuk(item4.getLuk() + item1.getLuk() - item3.getLuk());
			item2.setDex(item4.getDex() + item1.getDex() - item3.getDex());
			item2.setWatk(item4.getWatk() + item1.getWatk() - item3.getWatk());
			// cm.playerMessage(6, "item4.getWatk()" + item4.getWatk());//测试
			// cm.playerMessage(6, "item1.getWatk()" + item1.getWatk());//测试
			// cm.playerMessage(6, "item3.getWatk()" + item3.getWatk());//测试
			// cm.playerMessage(6, "item2.getWatk()" + item2.getWatk());//测试
			item2.setMatk(item4.getMatk() + item1.getMatk() - item3.getMatk());
			item2.setWdef(item4.getWdef() + item1.getWdef() - item3.getWdef());
			item2.setMdef(item4.getMdef() + item1.getMdef() - item3.getMdef());
			item2.setAcc(item4.getAcc() + item1.getAcc() - item3.getAcc());
			item2.setAvoid(item4.getAvoid() + item1.getAvoid() - item3.getAvoid());
			item2.setSpeed(item4.getSpeed() + item1.getSpeed() - item3.getSpeed());
			item2.setJump(item4.getJump() + item1.getJump() - item3.getJump());
			item2.setHp(item4.getHp() + item1.getHp() - item3.getHp());
			item2.setMp(item4.getMp() + item1.getMp() - item3.getMp());
			var upgrade = item4.getUpgradeSlots() - item1.getLevel();
			if(upgrade < 0){
				upgrade = 0;
			}
			item2.setUpgradeSlots(upgrade);
			// cm.playerMessage(6, "item2.getUpgradeSlots()" + item2.getUpgradeSlots());//测试
			item2.setLevel(item1.getLevel());
			//item2.setViciousHammer(item3.getViciousHammer());
			//item2.setOwner(item3.getOwner());
			
			//item1 = item1.copy();
			item2 = item2.copy();
			
			Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
			Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
			//Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
			Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
			
			cm.sendOk("已成功将#v" + itemId1 + "#的属性转移到了#v" + itemId2 + "#!");	
			cm.全服道具公告("[宠物装备属性转移]", "玩家 "+cm.getPlayer().getName()+" 将旧宠物装备的属性转移到了新宠物装备上。", item2);
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的装备不在支持范围内!");	
			cm.dispose();
			return;
		}
	} else {
		cm.dispose();
		return;
	}
}

