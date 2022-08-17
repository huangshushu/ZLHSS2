/*
SnailMS脚本生成器
*/
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";

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
	var item = cm.getInventory(1).getItem(1);
	if (status == 0) {
		
		if(item == null){
			cm.sendOk("你背包第一格没有装备啊！");
			cm.dispose();
			return;
		}
		var itemID = item.getItemId();
		if(itemID == 1112469){
			cm.sendOk("你的戒指已升至满级，无法再继续升级!");
			cm.dispose();
			return;
		} else if (itemID < 1112446 || itemID > 1112468) {
			cm.sendOk("请将#v1112446#放在第一格!");
			cm.dispose();
			return;
		}
		var level = itemID - 1112445;
		var text = ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n";
		text += "\t\t\t#v1112446#\t\t#v1112446#\t\t#v1112446#\t\t\r\n";
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n\r\n";
		text += "#d目前等级:#r " + level + " #k\r\n";
		text += "#d消耗: #v4001126##bx20000\t\t#v2340000#x10\t\t#v2049100#x10\t\r\n\t   #d点券#bx2W\t\t#d金币#bx1000W#k\r\n\r\n";
		if(level >= 1 && level <= 7){
			text += "#d进阶效果: #b全属性+#r2#b 攻击力+#r2#b 魔法力+#r2\r\n\t\t  #r100%成功率#b\r\n";
		}else if (level >= 8 && level <= 15){
			text += "#d进阶效果: #b全属性+#r3#b 攻击力+#r3#b 魔法力+#r3\r\n\t\t  #r50%成功率,失败保留装备等级#b\r\n";
		}else if (level >= 16 && level <= 23){
			text += "#d进阶效果: #b全属性+#r5#b 攻击力+#r5#b 魔法力+#r5\r\n\t\t   #r33%成功率,失败时50%概率装备等级-1#b\r\n";
		}
		text += "\t\t\t\t\t#L1##d[强化]\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		if(selection == 1){
			if(cm.haveItem(4001126, 20000) && cm.haveItem(2340000, 10) && cm.haveItem(2049100, 10) && cm.判断金币() >= 10000000 && cm.判断点券() >= 20000){
				var itemID = item.getItemId();
				var level = itemID - 1112445;
				if(cm.haveItem(itemID + 1) || cm.判断背包穿戴栏().countById(itemID + 1) > 0){
					cm.sendOk("你的身上已经有#v" + (itemID + 1) + "#了!");
					cm.dispose();
					return;
				}
				if(level >= 1 && level <= 7){
					if(!删装备(item)){
						cm.sendOk("错误，你身上的戒指不符合条件！");
						cm.dispose();
						return;
					}
					cm.gainItem(4001126, -20000);
					cm.gainItem(2340000, -10);
					cm.gainItem(2049100, -10);
					cm.收金币(10000000);
					cm.收点券(20000);
					
					var ring_s = cm.getNewEquip(itemID + 1);
					// ring_s.setLevel(ring_s.getLevel() + level);
					// ring_s.setUpgradeSlots(ring_s.getUpgradeSlots() + upgradeSlot);
					ring_s.setStr(item.getStr() + 2);
					ring_s.setInt(item.getInt() + 2);
					ring_s.setLuk(item.getLuk() + 2);
					ring_s.setDex(item.getDex() + 2);
					ring_s.setWatk(item.getWatk() + 2);
					ring_s.setMatk(item.getMatk() + 2);
					ring_s.setHp(item.getHp());
					ring_s.setMp(item.getMp());
					ring_s.setWdef(item.getWdef());
					ring_s.setMdef(item.getMdef());
					ring_s.setAvoid(item.getAvoid());
					ring_s.setAcc(item.getAcc());
					ring_s.setJump(item.getJump());
					ring_s.setSpeed(item.getSpeed());
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring_s, false);
					//cm.全服道具公告("高级装备进阶", "恭喜 " + cm.getPlayer().getName() + "进阶到了 " + (level + 1) + " 级", ring_s);
					cm.sendOk("装备上亮起了一道光，恭喜你将#v" + itemID + "#进阶为#v" + (itemID + 1) + "#");
					
				}else if (level >= 8 && level <= 15){
					var number = Math.random() * 100;
					if(number >= 67){
						var success = true;
					}else{
						var success = false;
					}
					if(!success){
						cm.gainItem(4001126, -20000);
						cm.gainItem(2340000, -10);
						cm.gainItem(2049100, -10);
						cm.收金币(10000000);
						cm.收点券(20000);
						cm.sendOk("装备上亮起了一道光，但又很快暗淡了下去，很遗憾，进阶失败了！");
						cm.dispose();
						return;
					}
					if(!删装备(item)){
						cm.sendOk("错误，你身上的戒指不符合条件！");
						cm.dispose();
						return;
					}
					cm.gainItem(4001126, -20000);
					cm.gainItem(2340000, -10);
					cm.gainItem(2049100, -10);
					cm.收金币(10000000);
					cm.收点券(20000);
					
					var ring_s = cm.getNewEquip(itemID + 1);
					// ring_s.setLevel(ring_s.getLevel() + level);
					// ring_s.setUpgradeSlots(ring_s.getUpgradeSlots() + upgradeSlot);
					ring_s.setStr(item.getStr() + 3);
					ring_s.setInt(item.getInt() + 3);
					ring_s.setLuk(item.getLuk() + 3);
					ring_s.setDex(item.getDex() + 3);
					ring_s.setWatk(item.getWatk() + 3);
					ring_s.setMatk(item.getMatk() + 3);
					ring_s.setHp(item.getHp());
					ring_s.setMp(item.getMp());
					ring_s.setWdef(item.getWdef());
					ring_s.setMdef(item.getMdef());
					ring_s.setAvoid(item.getAvoid());
					ring_s.setAcc(item.getAcc());
					ring_s.setJump(item.getJump());
					ring_s.setSpeed(item.getSpeed());
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring_s, false);
					//cm.全服道具公告("高级装备进阶", "恭喜 " + cm.getPlayer().getName() + "进阶到了 " + (level + 1) + " 级", ring_s);
					cm.sendOk("装备上亮起了一道光，恭喜你将#v" + itemID + "#进阶为#v" + (itemID + 1) + "#");
				}else if (level >= 16 && level <= 23){
					var number = Math.random() * 100;
					if(number >= 67){
						var success = true;
					}else{
						var success = false;
					}
					if(!success){
						var number2 = Math.random() * 100;
						if(number >= 50){
							var lossLevel = true;
						}else{
							var lossLevel = false;
						}
						
						if(lossLevel){
							if(!删装备(item)){
								cm.sendOk("错误，你身上的戒指不符合条件！");
								cm.dispose();
								return;
							}
							cm.gainItem(4001126, -20000);
							cm.gainItem(2340000, -10);
							cm.gainItem(2049100, -10);
							cm.收金币(10000000);
							cm.收点券(20000);
							var ring_s = cm.getNewEquip(itemID - 1);
							// ring_s.setLevel(ring_s.getLevel() + level);
							// ring_s.setUpgradeSlots(ring_s.getUpgradeSlots() + upgradeSlot);
							if(level == 16){
								ring_s.setStr(item.getStr() - 3);
								ring_s.setInt(item.getInt() - 3);
								ring_s.setLuk(item.getLuk() - 3);
								ring_s.setDex(item.getDex() - 3);
								ring_s.setWatk(item.getWatk() - 3);
								ring_s.setMatk(item.getMatk() - 3);
							}else{
								ring_s.setStr(item.getStr() - 5);
								ring_s.setInt(item.getInt() - 5);
								ring_s.setLuk(item.getLuk() - 5);
								ring_s.setDex(item.getDex() - 5);
								ring_s.setWatk(item.getWatk() - 5);
								ring_s.setMatk(item.getMatk() - 5);
							}
							
							ring_s.setHp(item.getHp());
							ring_s.setMp(item.getMp());
							ring_s.setWdef(item.getWdef());
							ring_s.setMdef(item.getMdef());
							ring_s.setAvoid(item.getAvoid());
							ring_s.setAcc(item.getAcc());
							ring_s.setJump(item.getJump());
							ring_s.setSpeed(item.getSpeed());
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring_s, false);
							//cm.全服道具公告("高级装备进阶", cm.getPlayer().getName() + "进阶失败，装备下降了1级。", ring_s);
							cm.sendOk("装备上突然亮起了一道诡异的绿光，随后一阵白烟升起，遮挡住了视线，你着急的驱散开白雾，却发现你的#v" + itemID + "#下降了一级！");
							cm.dispose();
							return;
						}else{
							cm.gainItem(4001126, -20000);
							cm.gainItem(2340000, -10);
							cm.gainItem(2049100, -10);
							cm.收金币(10000000);
							cm.收点券(20000);
							cm.sendOk("装备上亮起了一道光，但又很快暗淡了下去，很遗憾，进阶失败了！");
							cm.dispose();
							return;
						}
					}
					if(!删装备(item)){
						cm.sendOk("错误，你身上的戒指不符合条件！");
						cm.dispose();
						return;
					}
					cm.gainItem(4001126, -20000);
					cm.gainItem(2340000, -10);
					cm.gainItem(2049100, -10);
					cm.收金币(10000000);
					cm.收点券(20000);
					
					var ring_s = cm.getNewEquip(itemID + 1);
					// ring_s.setLevel(ring_s.getLevel() + level);
					// ring_s.setUpgradeSlots(ring_s.getUpgradeSlots() + upgradeSlot);
					ring_s.setStr(item.getStr() + 5);
					ring_s.setInt(item.getInt() + 5);
					ring_s.setLuk(item.getLuk() + 5);
					ring_s.setDex(item.getDex() + 5);
					ring_s.setWatk(item.getWatk() + 5);
					ring_s.setMatk(item.getMatk() + 5);
					ring_s.setHp(item.getHp());
					ring_s.setMp(item.getMp());
					ring_s.setWdef(item.getWdef());
					ring_s.setMdef(item.getMdef());
					ring_s.setAvoid(item.getAvoid());
					ring_s.setAcc(item.getAcc());
					ring_s.setJump(item.getJump());
					ring_s.setSpeed(item.getSpeed());
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring_s, false);
					//cm.全服道具公告("高级装备进阶", "恭喜 " + cm.getPlayer().getName() + "进阶到了 " + (level + 1) + " 级", ring_s);
					cm.sendOk("装备上亮起了一道光，恭喜你将#v" + itemID + "#进阶为#v" + (itemID + 1) + "#");
				}

			}else{
				cm.sendOk("你的材料不足!");
				cm.dispose();
				return;
			}
			
		}
		
	} else if(status == 2){
		cm.safeDispose();
		cm.openNpc(1061015, 2);
		return;
	} else {
		cm.safeDispose();
		return;
	}
}

function 删装备(item0){
	for (var i = 0; i < 96; i++) {
		var item = cm.getInventory(1).getItem(i);
		if(item != null){
			if(item.getItemId() == item0.getItemId()){
				if(item.getStr() == item0.getStr() && item.getInt() == item0.getInt() && item.getLuk() == item0.getLuk() && item.getDex() == item0.getDex() && item.getLevel() == item0.getLevel() && item.getUpgradeSlots() == item0.getUpgradeSlots() && item.getWatk() == item0.getWatk() && item.getMatk() == item0.getMatk() && item.getHp() == item0.getHp() && item.getMp() == item0.getMp() && item.getWdef() == item0.getWdef() && item.getMdef() == item0.getMdef() && item.getAvoid() == item0.getAvoid() && item.getAcc() == item0.getAcc() && item.getJump() == item0.getJump() && item.getSpeed() == item0.getSpeed()){
					// cm.getPlayer().dropMessage("找到了！" + item0.getItemId() + " i= " + i);//调试用
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, i, 1, false);
					return true;
				}
			}
		}
	}
	return false;
}