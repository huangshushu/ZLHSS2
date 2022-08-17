/*
SnailMS½Å±¾Éú³ÉÆ÷
*/
var Òô·û = "#fEffect/CharacterEff/1003276/0/0#";
importClass(java.util.regex.Pattern);
importClass(java.util.ArrayList);
importClass(java.lang.Integer);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("¶Ô»°½áÊøÓï");
			cm.dispose();
			return;
		}
		status--;
	}
	
	if (status == 0) {
		
		// var level = item.getLevel();
		// var upgradeSlots = item.getUpgradeSlots();
		var text = ""+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+"\r\n";
		text += "\t\t#v2070024#\t\t#v2070024#\t\t#v2070024#\t\t\r\n";
		text += ""+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+"\r\n\r\n";
		text += "#dÇëÑ¡ÔñÄãÒª¶Ò»»µÄµÀ¾ß£º\r\n"
		text += "#L2070024##v2070024##bx1#d\tĞèÒª:#v2070024##rx1#d#l\r\n";
		text += "#L2070026##v2070026##bx1#d\tĞèÒª:#v2070026##rx1#d#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		var itemid = selection;
		switch(itemid){
			case 2070024:
				for (var i = 0; i < 96; i++) {
					var item = cm.getInventory(2).getItem(i);
					if(item != null && item.getItemId() == 2070024){
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.USE, i, 1, false);
						cm.gainItem(2070024, 1, true);
						cm.sendOk("¶Ò»»³É¹¦£¡");
						return;
					}
				}
				cm.sendOk("ÄãµÄµÀ¾ß²»¹»£¡")
				cm.safeDispose();
				break;
			case 2070026:
				for (var i = 0; i < 96; i++) {
					var item = cm.getInventory(2).getItem(i);
					if(item != null && item.getItemId() == 2070026){
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.USE, i, 1, false);
						cm.gainItem(2070026, 1, true);
						cm.sendOk("¶Ò»»³É¹¦£¡");
						return;
					}
				}
				cm.sendOk("ÄãµÄµÀ¾ß²»¹»£¡");
				cm.safeDispose();
				break;
		}
		return;
		
	} else if(status == 2){
		cm.safeDispose();
		cm.openNpc(9000038, 2);
		return;
	} else {
		cm.safeDispose();
		return;
	}
}

function É¾×°±¸(item0){
	for (var i = 0; i < 96; i++) {
		var item = cm.getInventory(1).getItem(i);
		if(item != null){
			if(item.getItemId() == item0.getItemId()){
				if(item.getStr() == item0.getStr() && item.getInt() == item0.getInt() && item.getLuk() == item0.getLuk() && item.getDex() == item0.getDex() && item.getLevel() == item0.getLevel() && item.getUpgradeSlots() == item0.getUpgradeSlots() && item.getWatk() == item0.getWatk() && item.getMatk() == item0.getMatk() && item.getHp() == item0.getHp() && item.getMp() == item0.getMp() && item.getWdef() == item0.getWdef() && item.getMdef() == item0.getMdef() && item.getAvoid() == item0.getAvoid() && item.getAcc() == item0.getAcc() && item.getJump() == item0.getJump() && item.getSpeed() == item0.getSpeed()){
					// cm.getPlayer().dropMessage("ÕÒµ½ÁË£¡" + item0.getItemId() + " i= " + i);//µ÷ÊÔÓÃ
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, i, 1, false);
					return true;
				}
			}
		}
	}
	return false;
}