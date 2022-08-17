/*
SnailMS脚本生成器
*/

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
		var text = "这里可以把110级的旧宝石戒指，兑换为50级的新宝石戒指，#r所有属性完全继承!#k\r\n\r\n";
		text += "#L1##b我要兑换#k#l\r\n\r\n";
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
			if(dmID!=1113089) {
				cm.sendOk("把#r110级#k的旧戒指#v1113089#放在第一格!");	
				cm.dispose();
				return;
			}
			var item = cm.getInventory(1).getItem(1).copy();
			var item2 = cm.getNewEquip(1113090);
			item2.setStr(item.getStr());
			item2.setInt(item.getInt());
			item2.setLuk(item.getLuk());
			item2.setDex(item.getDex());
			item2.setWatk(item.getWatk());
			item2.setMatk(item.getMatk());
			item2.setWdef(item.getWdef());
			item2.setMdef(item.getMdef());
			item2.setAcc(item.getAcc());
			item2.setAvoid(item.getAvoid());
			item2.setSpeed(item.getSpeed());
			item2.setJump(item.getJump());
			item2.setHp(item.getHp());
			item2.setMp(item.getMp());
			item2.setUpgradeSlots(item.getUpgradeSlots());
			item2.setLevel(item.getLevel());
			item2.setViciousHammer(item.getViciousHammer());
			item2.setOwner(item.getOwner());
			Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
			Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
			cm.sendOk("兑换成功！");
			cm.dispose();
			return;
			
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

