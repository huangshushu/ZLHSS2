var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;

function start() {
	if (cm.getInventory(1).getItem(1) == null)  {
		cm.sendOk("请保证装备栏“第一格”有装备。");
		cm.dispose();
	}else{
    a = -1;
    action(1, 0, 0);
}}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
			
		 } else if (a == 0) {
			/* cm.gainItem(4310027,cm.itemQuantity(4310003));
			 cm.removeAll(4310003);*/
			 var ItemID = cm.getInventory(1).getItem(1).getItemId();
			if (parseInt(ItemID / 10000) == 114) {
				text = "          	月光冒险岛 - 徽章强化系统\r\n\r\n";
				text += "在这里可以帮你把“#b奖牌#k”进行强化增幅，快来试试吧。\r\n";
				text += " - 当前强化的徽章为：#e#d#v"+ItemID+"##z"+ItemID+"##n";
				cm.sendYesNo(text);
			} else {
				cm.sendOk("请将“#r奖牌#k”放置在“#b装备栏 - 第一格#k”");
				cm.dispose();
				}
				
        } else if (a == 1) {
				    if (cm.getInventory(1).getItem(1).getOwner() == "") {						
                      var selStr = "当前装备强化阶段为：“#r零阶#k”\r\n\r\n";
				          selStr += " - 强化所需道具：#r#z4310003# x 5  #k当前拥有 - #b#c4310003#\r\n";
						  selStr += " - #k装备增幅属性：#d全属性 + 10 #k||#d 双攻 + 10";
                          cm.sendYesNo(selStr);
						  nx = 1;
					} else if (cm.getInventory(1).getItem(1).getOwner() == "一 ★ 阶") {						
                      var selStr = "当前装备强化阶段为：“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”\r\n\r\n";
				          selStr += " - 强化所需道具：#r#z4310003# x 10 #k当前拥有 - #b#c4310003#\r\n";
						  selStr += " - #k装备增幅属性：#d全属性 + 10 #k||#d 双攻 + 5";
                          cm.sendYesNo(selStr);
						  nx = 2;
					} else if (cm.getInventory(1).getItem(1).getOwner() == "二 ★ 阶") {						
                      var selStr = "当前装备强化阶段为：“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”\r\n\r\n";
				          selStr += " - 强化所需道具：#r#z4310003# x 20  #k当前拥有 - #b#c4310003#\r\n";
						  selStr += " - #k装备增幅属性：#d全属性 + 10 #k||#d 双攻 + 5";
                          cm.sendYesNo(selStr);
						  nx = 3;
					} else if (cm.getInventory(1).getItem(1).getOwner() == "三 ★ 阶") {						
                      var selStr = "当前装备强化阶段为：“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”\r\n\r\n";
				          selStr += " - 强化所需道具：#r#z4310003# x 30  #k当前拥有 - #b#c4310003#\r\n";
						  selStr += " - #k装备增幅属性：#d全属性 + 10 #k||#d 双攻 + 5";
                          cm.sendYesNo(selStr);
						  nx = 4;
					} else if (cm.getInventory(1).getItem(1).getOwner() == "四 ★ 阶") {						
                      var selStr = "当前装备强化阶段为：“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”\r\n\r\n";
				          selStr += " - 强化所需道具：#r#z4310003# x 55  #k当前拥有 - #b#c4310003#\r\n";
						  selStr += " - #k装备增幅属性：#d全属性 + 10 #k||#d 双攻 + 5 \r\n";
                          cm.sendYesNo(selStr);
						  nx = 5;
					} else if (cm.getInventory(1).getItem(1).getOwner() == "五 ★ 阶") {						
                      var selStr = "当前装备强化阶段为：“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”\r\n\r\n";
				          selStr += " - 强化所需道具：#r#z4310003# x 90  #k当前拥有 - #b#c4310003#\r\n";
						  selStr += " - #k装备增幅属性：#d全属性 + 25 #k||#d 双攻 + 10 || BOSS伤害 + 5% \r\n";
                          cm.sendYesNo(selStr);
						  nx = 6;
					} else {
						cm.sendOk("当前装备以增幅至“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”，无法继续增幅。");
						cm.dispose();
					}
					
        } else if (a == 2) {
		            if (nx == 1) {
				    if (cm.haveItem(4310003,5)) {
						var weaponItem = cm.getInventory(1).getItem((1));
						var toDrop = weaponItem.copy();
						toDrop.setStr(toDrop.getStr()+10); //装备力量
						toDrop.setDex(toDrop.getDex()+10); //装备敏捷
						toDrop.setInt(toDrop.getInt()+10); //装备智力
						toDrop.setLuk(toDrop.getLuk()+10); //装备运气
						toDrop.setWatk(toDrop.getWatk()+5); //物理攻击
						toDrop.setMatk(toDrop.getMatk()+5); //魔法攻击
						toDrop.setOwner("一 ★ 阶");
						cm.removeItem(1, 1, 1);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);
						cm.gainItem(4310003, -5);
						cm.sendOk("成功将装备提高至“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”。");
						cm.dispose();
					} else {
						cm.sendOk("道具不足，请确认后再来。");
						cm.dispose();
					}
					} else if (nx == 2) {
				    if (cm.haveItem(4310003,10)) {
						var weaponItem = cm.getInventory(1).getItem((1));
						var toDrop = weaponItem.copy();
						toDrop.setStr(toDrop.getStr()+10); //装备力量
						toDrop.setDex(toDrop.getDex()+10); //装备敏捷
						toDrop.setInt(toDrop.getInt()+10); //装备智力
						toDrop.setLuk(toDrop.getLuk()+10); //装备运气
						toDrop.setWatk(toDrop.getWatk()+10); //物理攻击
						toDrop.setMatk(toDrop.getMatk()+10); //魔法攻击
						toDrop.setOwner("二 ★ 阶");
						cm.removeItem(1, 1, 1);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);
						cm.gainItem(4310003, -10);
						cm.sendOk("成功将装备提高至“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”。");
						cm.dispose();
					} else {
						cm.sendOk("道具不足，请确认后再来。");
						cm.dispose();
					}
					} else if (nx == 3) {
				    if (cm.haveItem(4310003,20)) {
						var weaponItem = cm.getInventory(1).getItem((1));
						var toDrop = weaponItem.copy();
						toDrop.setStr(toDrop.getStr()+10); //装备力量
						toDrop.setDex(toDrop.getDex()+10); //装备敏捷
						toDrop.setInt(toDrop.getInt()+10); //装备智力
						toDrop.setLuk(toDrop.getLuk()+10); //装备运气
						toDrop.setWatk(toDrop.getWatk()+5); //物理攻击
						toDrop.setMatk(toDrop.getMatk()+5); //魔法攻击
						toDrop.setOwner("三 ★ 阶");
						cm.removeItem(1, 1, 1);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, true);
						cm.gainItem(4310003, -20);
						cm.sendOk("成功将装备提高至“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”。");
						cm.dispose();
					} else {
						cm.sendOk("道具不足，请确认后再来。");
						cm.dispose();
					}
					} else if (nx == 4) {
				    if (cm.haveItem(4310003,30)) {
						var weaponItem = cm.getInventory(1).getItem((1));
						var toDrop = weaponItem.copy();
						toDrop.setStr(toDrop.getStr()+10); //装备力量
						toDrop.setDex(toDrop.getDex()+10); //装备敏捷
						toDrop.setInt(toDrop.getInt()+10); //装备智力
						toDrop.setLuk(toDrop.getLuk()+10); //装备运气
						toDrop.setWatk(toDrop.getWatk()+5); //物理攻击
						toDrop.setMatk(toDrop.getMatk()+5); //魔法攻击
						toDrop.setOwner("四 ★ 阶");
						cm.removeItem(1, 1, 1);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, true);
						cm.gainItem(4310003, -30);
						cm.sendOk("成功将装备提高至“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”。");
						cm.dispose();
					} else {
						cm.sendOk("道具不足，请确认后再来。");
						cm.dispose();
					}
					} else if (nx == 5) {
				    if (cm.haveItem(4310003,55)) {
						var weaponItem = cm.getInventory(1).getItem((1));
						var toDrop = weaponItem.copy();
						toDrop.setStr(toDrop.getStr()+10); //装备力量
						toDrop.setDex(toDrop.getDex()+10); //装备敏捷
						toDrop.setInt(toDrop.getInt()+10); //装备智力
						toDrop.setLuk(toDrop.getLuk()+10); //装备运气
						toDrop.setWatk(toDrop.getWatk()+5); //物理攻击
						toDrop.setMatk(toDrop.getMatk()+5); //魔法攻击
						toDrop.setOwner("五 ★ 阶");
						cm.removeItem(1, 1, 1);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, true);
						cm.gainItem(4310003, -55);
						cm.sendOk("成功将装备提高至“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”。");
						cm.dispose();
					} else {
						cm.sendOk("道具不足，请确认后再来。");
						cm.dispose();
					}
					} else if (nx == 6) {
				    if (cm.haveItem(4310003,90)) {
						var weaponItem = cm.getInventory(1).getItem((1));
						var toDrop = weaponItem.copy();
						toDrop.setStr(toDrop.getStr()+25); //装备力量
						toDrop.setDex(toDrop.getDex()+25); //装备敏捷
						toDrop.setInt(toDrop.getInt()+25); //装备智力
						toDrop.setLuk(toDrop.getLuk()+25); //装备运气
						toDrop.setWatk(toDrop.getWatk()+10); //物理攻击
						toDrop.setMatk(toDrop.getMatk()+10); //魔法攻击
						toDrop.setBossDamage(toDrop.getBossDamage()+5);//boss伤害
						toDrop.setOwner("六 ★ 阶");
						cm.removeItem(1, 1, 1);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, true);
						cm.gainItem(4310003, -90);
						cm.sendOk("成功将装备提高至“#r"+cm.getInventory(1).getItem(1).getOwner()+"#k”。");
						cm.dispose();
					} else {
						cm.sendOk("道具不足，请确认后再来。");
						cm.dispose();
					}

   
}
}

}

}