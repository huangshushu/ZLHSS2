/*
SnailMS脚本生成器
*/
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
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
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	
	if (status == 0) {
		
		// var level = item.getLevel();
		// var upgradeSlots = item.getUpgradeSlots();
		var text = ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n";
		text += "\t\t#v1114403#\t\t#v1114403#\t\t#v1114403#\t\t\r\n";
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n\r\n";
		text += "合成需要："
		text += "#r满阶#v1113090#x1\t满阶#v1114303#x1\t满阶#v1112444#x1\t\t满阶#v1114226#x1"
		text += "\t#r#v4310129#x30\t#b金币#rx200000000\r\n"
		text += "#k#v1114403#成品属性: #b#v1113090# #v1114303# #v1112444# #v1114226#属性之和\r\n";
		text += "\t\t\t\t\t#L1##d[合成]\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		if(selection == 1){

			if(cm.判断金币() < 200000000){
				cm.sendOk("你的金币不够啊！");
				cm.dispose();
				return;
			}else if(!cm.haveItem(4310129, 30)){
				cm.sendOk("你的#v4310129#不够啊！");
				cm.dispose();
				return;
			}
			
			var rings1 = new ArrayList(); //1113090
			var rings2 = new ArrayList(); //1114303
			var rings3 = new ArrayList(); //1112444
			var rings4 = new ArrayList(); //1114226
			var ring1 = null;
			var ring2 = null;
			var ring3 = null;
			var ring4 = null;
			var 戒指满足条件 = false;
			for (var i = 0; i < 96; i++) {
				var item = cm.getInventory(1).getItem(i);
				if(item != null){
					switch(item.getItemId()){
						case 1113090:
							rings1.add(item);
							break;
						case 1114303:
							rings2.add(item);
							break;
						case 1112444:
							rings3.add(item);
							break;
						case 1114226:
							rings4.add(item);
							break;
					}
				}
			}
			
			if(rings1.size() > 0 && rings2.size() > 0 && rings3.size() > 0 && rings4.size() > 0){
				var it = rings1.iterator();
				while(it.hasNext()){
					var ring = it.next();
					if(ring.getOwner().equals("满阶")){
						ring1 = ring;
						break;
					}
				}
				it = rings2.iterator();
				while(it.hasNext()){
					var ring = it.next();
					if(ring.getOwner().equals("满阶")){
						ring2 = ring;
						break;
					}
				}
				it = rings3.iterator();
				while(it.hasNext()){
					var ring = it.next();
					if(ring.getOwner().equals("满阶")){
						ring3 = ring;
						break;
					}
				}
				it = rings4.iterator();
				while(it.hasNext()){
					var ring = it.next();
					if(ring.getOwner().equals("满阶")){
						ring4 = ring;
						break;
					}
				}
				// if(ring1 != null){
					// cm.getPlayer().dropMessage("戒指1满阶");
				// }
				// if(ring2 != null){
					// cm.getPlayer().dropMessage("戒指2满阶");
				// }
				// if(ring3 != null){
					// cm.getPlayer().dropMessage("戒指3满阶");
				// }
				// if(ring4 != null){
					// cm.getPlayer().dropMessage("戒指4满阶");
				// }
				if(ring1 != null && ring2 != null && ring3 != null && ring4 != null){
					if(!删装备(ring1)){
						cm.sendOk("错误,你身上没有符合条件的#v" + ring1.getItemId() + "#");
						cm.dispose();
						return;
					}
					if(!删装备(ring2)){
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring1, false);
						cm.sendOk("错误,你身上没有符合条件的#v" + ring2.getItemId() + "#");
						cm.dispose();
						return;
					}
					if(!删装备(ring3)){
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring2, false);
						cm.sendOk("错误,你身上没有符合条件的#v" + ring3.getItemId() + "#");
						cm.dispose();
						return;
					}
					if(!删装备(ring4)){
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring2, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring3, false);
						cm.sendOk("错误,你身上没有符合条件的#v" + ring4.getItemId() + "#");
						cm.dispose();
						return;
					}
					cm.gainItem(4310129, -30);
					cm.收金币(200000000);
					
					
					var level = ring1.getLevel() + ring2.getLevel() + ring3.getLevel() + ring4.getLevel();
					var upgradeSlot = ring1.getUpgradeSlots() + ring2.getUpgradeSlots() + ring3.getUpgradeSlots() + ring4.getUpgradeSlots();
					var str = ring1.getStr() + ring2.getStr() + ring3.getStr() + ring4.getStr();
					var dex = ring1.getDex() + ring2.getDex() + ring3.getDex() + ring4.getDex();
					var _int = ring1.getInt() + ring2.getInt() + ring3.getInt() + ring4.getInt();
					var luk = ring1.getLuk() + ring2.getLuk() + ring3.getLuk() + ring4.getLuk();
					var hp = ring1.getHp() + ring2.getHp() + ring3.getHp() + ring4.getHp();
					var mp = ring1.getMp() + ring2.getMp() + ring3.getMp() + ring4.getMp();
					var watk = ring1.getWatk() + ring2.getWatk() + ring3.getWatk() + ring4.getWatk();
					var matk = ring1.getMatk() + ring2.getMatk() + ring3.getMatk() + ring4.getMatk();
					var wdef = ring1.getWdef() + ring2.getWdef() + ring3.getWdef() + ring4.getWdef();
					var mdef = ring1.getMdef() + ring2.getMdef() + ring3.getMdef() + ring4.getMdef();
					var avoid = ring1.getAvoid() + ring2.getAvoid() + ring3.getAvoid() + ring4.getAvoid();
					var acc = ring1.getAcc() + ring2.getAcc() + ring3.getAcc() + ring4.getAcc();
					var jump = ring1.getJump() + ring2.getJump() + ring3.getJump() + ring4.getJump();
					var speed = ring1.getSpeed() + ring2.getSpeed() + ring3.getSpeed() + ring4.getSpeed();
					var ring_s = cm.getNewEquip(1114403);
					ring_s.setLevel(ring_s.getLevel() + level);
					ring_s.setUpgradeSlots(ring_s.getUpgradeSlots() + upgradeSlot);
					ring_s.setStr(ring_s.getStr() + str);
					ring_s.setInt(ring_s.getInt() + _int);
					ring_s.setLuk(ring_s.getLuk() + luk);
					ring_s.setDex(ring_s.getDex() + dex);
					ring_s.setWatk(ring_s.getWatk() + watk);
					ring_s.setMatk(ring_s.getMatk() + matk);
					ring_s.setHp(ring_s.getHp() + hp);
					ring_s.setMp(ring_s.getMp() + mp);
					ring_s.setWdef(ring_s.getWdef() + wdef);
					ring_s.setMdef(ring_s.getMdef() + mdef);
					ring_s.setAvoid(ring_s.getAvoid() + avoid);
					ring_s.setAcc(ring_s.getAcc() + acc);
					ring_s.setJump(ring_s.getJump() + jump);
					ring_s.setSpeed(ring_s.getSpeed() + speed);
					
					// Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring_s, false);
					cm.全服道具公告("[装备制作]", "恭喜 " + cm.getPlayer().getName() + " 制作了烈焰领域戒指~", ring_s);
					cm.sendOk("恭喜你合成了#v1114403#");
					cm.dispose();
					return;
				}else{
					cm.sendOk("你的戒指不是满阶的啊！");
					cm.dispose();
					return;
				}
			}else{
				cm.sendOk("你的戒指不够啊！");
				cm.dispose();
				return;
			}
			
		}
		return;
		
	} else if(status == 2){
		cm.safeDispose();
		cm.openNpc(9000038, 1);
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