var 道具1 = 3991026;
var 道具2 = 3991027;
var 道具3 = 3991028;
var 道具4 = 3991029;
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var 神秘之影 = Array(
	1004809,//  神秘之影法师帽	 
	1073159,//  神秘之影法师鞋	 
	1152197,//  神秘之影法师护肩	 
	1082696,//  神秘之影法师手套	 
	1102941,//  神秘之影法师披风	 
	1053064,//  神秘之影法师套装

	1004808,//  神秘之影战士帽	 
	1102940,//  神秘之影战士披风	 
	1152196,//  神秘之影战士护肩	 
	1082695,//  神秘之影战士手套	 
	1053063,//  神秘之影战士套装	 
	1073158,//  神秘之影战士鞋

	1082698,//  神秘之影飞侠手套	 
	1152199,//  神秘之影飞侠护肩	 
	1004811,//  神秘之影飞侠帽	 
	1073161,//  神秘之影飞侠鞋	 
	1102943,//  神秘之影飞侠披风	 
	1053066,//  神秘之影飞侠套装

	1102942,//  神秘之影弓箭手披风	 
	1004810,//  神秘之影弓箭手帽	 
	1073160,//  神秘之影弓箭手鞋	 
	1152198,//  神秘之影弓箭手护肩	 
	1082697,//  神秘之影弓箭手手套	 
	1053065,//  神秘之影弓箭手套装

	1073162,//  神秘之影海盗鞋
	1152200,//  神秘之影海盗护肩	 
	1004812,//  神秘之影海盗帽	 
	1102944,//  神秘之影海盗披风	 
	1082699,//  神秘之影海盗手套	 
	1053067	 //  神秘之影海盗套装
);

var sj;
var 是否为神秘 = false;
var 检测 = true;
var nx;
var status = 0;

function start() {
	if (cm.getInventory(1).getItem(1) == null) {
		cm.sendOk("请将需要强化的装备放置在 装备栏 - 第一格");
		cm.dispose();
	} else {
		status = -1;
		action(1, 0, 0);
	}
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;


		if (status == 0) {
			var 装备代码 = cm.getInventory(1).getItem(1).getItemId();
			/*if (装备代码 == 1082543 || 装备代码 == 1072743 || 装备代码 == 1102481 || 装备代码 == 1082544 || 装备代码 == 1072744 || 装备代码 == 1102482) {
				cm.sendOk("暴君无法参与强化。");
				cm.dispose();
				return;
			}
			if (装备代码 == 1082546 || 装备代码 == 1072746 || 装备代码 == 1102484 || 装备代码 == 1082545 || 装备代码 == 1072745 || 装备代码 == 1102483) {
				cm.sendOk("暴君无法参与强化。");
				cm.dispose();
				return;
			}
			if (装备代码 == 1082547 || 装备代码 == 1072747 || 装备代码 == 1102485) {
				cm.sendOk("暴君无法参与强化。");
				cm.dispose();
				return;
			}*/
			if (parseInt(cm.getInventory(1).getItem(1).getItemId() / 100000) > 11 && parseInt(cm.getInventory(1).getItem(1).getItemId() / 100000) < 18) {
				cm.sendOk("武器无法参与强化。");
				cm.dispose();
				return;
			}
			if (cm.getReqLevel(装备代码) < 140 || cm.getReqLevel(装备代码) == 200) {
				cm.sendOk("只能强化 140 ~ 200级的装备，神秘之影除外！");
				cm.dispose();
				return;
			}
			cm.sendYesNo("是否要对“#r#i" + 装备代码 + "##t" + 装备代码 + "##k”进行进阶强化？");



		} else if (status == 1) {
			if (cm.getInventory(1).getItem(1).getOwner() == "") {
				var selStr = "当前装备强化阶段为：“#r零阶#k”\r\n\r\n";
				selStr += " - 强化所需道具：#r#z4034983# x 6  #k当前拥有 - #b#c4034983#\r\n";
				selStr += " - #k装备增幅属性：#d全属性 + ?? #k||#d 双攻 + ??";
				cm.sendYesNo(selStr);
				nx = 1;
			} else if (cm.getInventory(1).getItem(1).getOwner() == "一 ★ 阶") {
				var selStr = "当前装备强化阶段为：“#r" + cm.getInventory(1).getItem(1).getOwner() + "#k”\r\n\r\n";
				selStr += " - 强化所需道具：#r#z4034983# x 10  #k当前拥有 - #b#c4034983#\r\n";
				selStr += " - #k装备增幅属性：#d全属性 + ?? #k||#d 双攻 + ??";
				cm.sendYesNo(selStr);
				nx = 2;
			} else if (cm.getInventory(1).getItem(1).getOwner() == "二 ★ 阶") {
				var selStr = "当前装备强化阶段为：“#r" + cm.getInventory(1).getItem(1).getOwner() + "#k”\r\n\r\n";
				selStr += " - 强化所需道具：#r#z4034983# x 18  #k当前拥有 - #b#c4034983#\r\n";
				selStr += " - #k装备增幅属性：#d全属性 + ?? #k||#d 双攻 + ??";
				cm.sendYesNo(selStr);
				nx = 3;
			} else if (cm.getInventory(1).getItem(1).getOwner() == "三 ★ 阶") {
				var selStr = "当前装备强化阶段为：“#r" + cm.getInventory(1).getItem(1).getOwner() + "#k”\r\n\r\n";
				selStr += " - 强化所需道具：#r#z4034983# x 28  #k当前拥有 - #b#c4034983#\r\n";
				selStr += " - #k装备增幅属性：#d全属性 + ?? #k||#d 双攻 + ??";
				cm.sendYesNo(selStr);
				nx = 4;
			} else if (cm.getInventory(1).getItem(1).getOwner() == "四 ★ 阶") {
				var selStr = "当前装备强化阶段为：“#r" + cm.getInventory(1).getItem(1).getOwner() + "#k”\r\n\r\n";
				selStr += " - 强化所需道具：#r#z4034983# x 38  #k当前拥有 - #b#c4034983#\r\n";
				selStr += " - #k装备增幅属性：#d全属性 + ?? #k||#d 双攻 + ?? \r\n";
				cm.sendYesNo(selStr);
				nx = 5;
			} else {
				cm.sendOk("当前装备以增幅至“#r" + cm.getInventory(1).getItem(1).getOwner() + "#k”，无法继续增幅。");
				cm.dispose();
			}

		} else if (status == 2) {
			if (nx == 1) {
				if (cm.haveItem(4034983, 6)) {
					var weaponItem = cm.getInventory(1).getItem((1));
					var toDrop = weaponItem.copy();
					toDrop.setStr(toDrop.getStr() + 10); //装备力量
					toDrop.setDex(toDrop.getDex() + 10); //装备敏捷
					toDrop.setInt(toDrop.getInt() + 10); //装备智力
					toDrop.setLuk(toDrop.getLuk() + 10); //装备运气
					toDrop.setWatk(toDrop.getWatk() + 5); //物理攻击
					toDrop.setMatk(toDrop.getMatk() + 5); //魔法攻击
					toDrop.setOwner("一 ★ 阶");
					cm.removeItem(1, 1, 1);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, true);
					cm.gainItem(4034983, -6);
					cm.sendOk("成功将装备提高至“#r" + cm.getInventory(1).getItem(1).getOwner() + "#k”。");
					cm.dispose();
				} else {
					cm.sendOk("道具不足，请确认后再来。");
					cm.dispose();
				}
			} else if (nx == 2) {
				if (cm.haveItem(4034983, 10)) {
					var weaponItem = cm.getInventory(1).getItem((1));
					var toDrop = weaponItem.copy();
					toDrop.setStr(toDrop.getStr() + 10); //装备力量
					toDrop.setDex(toDrop.getDex() + 10); //装备敏捷
					toDrop.setInt(toDrop.getInt() + 10); //装备智力
					toDrop.setLuk(toDrop.getLuk() + 10); //装备运气
					toDrop.setWatk(toDrop.getWatk() + 5); //物理攻击
					toDrop.setMatk(toDrop.getMatk() + 5); //魔法攻击
					toDrop.setOwner("二 ★ 阶");
					cm.removeItem(1, 1, 1);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, true);
					cm.gainItem(4034983, -10);
					cm.sendOk("成功将装备提高至“#r" + cm.getInventory(1).getItem(1).getOwner() + "#k”。");
					cm.dispose();
				} else {
					cm.sendOk("道具不足，请确认后再来。");
					cm.dispose();
				}
			} else if (nx == 3) {
				if (cm.haveItem(4034983, 18)) {
					var weaponItem = cm.getInventory(1).getItem((1));
					var toDrop = weaponItem.copy();
					toDrop.setStr(toDrop.getStr() + 10); //装备力量
					toDrop.setDex(toDrop.getDex() + 10); //装备敏捷
					toDrop.setInt(toDrop.getInt() + 10); //装备智力
					toDrop.setLuk(toDrop.getLuk() + 10); //装备运气
					toDrop.setWatk(toDrop.getWatk() + 5); //物理攻击
					toDrop.setMatk(toDrop.getMatk() + 5); //魔法攻击
					toDrop.setOwner("三 ★ 阶");
					cm.removeItem(1, 1, 1);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);

					cm.gainItem(4034983, -18);
					cm.sendOk("成功将装备提高至“#r" + cm.getInventory(1).getItem(1).getOwner() + "#k”。");
					cm.dispose();
				} else {
					cm.sendOk("道具不足，请确认后再来。");
					cm.dispose();
				}
			} else if (nx == 4) {
				if (cm.haveItem(4034983, 28)) {
					var weaponItem = cm.getInventory(1).getItem((1));
					var toDrop = weaponItem.copy();
					toDrop.setStr(toDrop.getStr() + 20); //装备力量
					toDrop.setDex(toDrop.getDex() + 20); //装备敏捷
					toDrop.setInt(toDrop.getInt() + 20); //装备智力
					toDrop.setLuk(toDrop.getLuk() + 20); //装备运气
					toDrop.setWatk(toDrop.getWatk() + 10); //物理攻击
					toDrop.setMatk(toDrop.getMatk() + 10); //魔法攻击
					toDrop.setOwner("四 ★ 阶");
					cm.removeItem(1, 1, 1);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);
					cm.gainItem(4034983, -28);
					cm.sendOk("成功将装备提高至“#r" + cm.getInventory(1).getItem(1).getOwner() + "#k”。");
					cm.dispose();
				} else {
					cm.sendOk("道具不足，请确认后再来。");
					cm.dispose();
				}
			} else if (nx == 5) {
				if (cm.haveItem(4034983, 38)) {
					var weaponItem = cm.getInventory(1).getItem((1));
					var toDrop = weaponItem.copy();
					toDrop.setStr(toDrop.getStr() + 30); //装备力量
					toDrop.setDex(toDrop.getDex() + 30); //装备敏捷
					toDrop.setInt(toDrop.getInt() + 30); //装备智力
					toDrop.setLuk(toDrop.getLuk() + 30); //装备运气
					toDrop.setWatk(toDrop.getWatk() + 30); //物理攻击
					toDrop.setMatk(toDrop.getMatk() + 30); //魔法攻击					
					toDrop.setOwner("五 ★ 阶");
					cm.removeItem(1, 1, 1);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);
					cm.gainItem(4034983, -38);
					cm.sendOk("成功将装备提高至“#r" + cm.getInventory(1).getItem(1).getOwner() + "#k”。");
					cm.dispose();
				} else {
					cm.sendOk("道具不足，请确认后再来。");
					cm.dispose();
				}


			}
		}

	}

}
