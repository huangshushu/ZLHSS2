var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 几率 = Math.floor(Math.random() * 55);
var B = Math.floor(Math.random() * 5)+5;
var A = Math.floor(Math.random() * 10)+10;
var S = Math.floor(Math.random() * 15)+15;
var SS = Math.floor(Math.random() * 25)+25;
var SSS = Math.floor(Math.random() * 50)+50;
var SSSR = Math.floor(Math.random() * 10)+190;
var xnew1="★";
var xnew2="★★";
var xnew3="★★★";
var xnew4="★★★★";
var xnew5="★★★★★";
var xold1="★";
var xold2="★★";
var xold3="★★★";
var xold4="★★★★";
var xold5="★★★★★";
var xold0="";
function start() {
	a = -1;
	action(1, 0, 0);
}

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
			text = "#b装备潜能需消耗#v2460005##r失败依旧扣材料1,2,3,5,10,20,30#k\r\n";
			text += "#e#k普通装备升级为C级全属性最多+5#l\r\n"//3
			text += "#e#kC级装备100%升级为B级随机添加最多#r10#k点全属性#l\r\n"//3
			text += "#e#kB级装备90%升级为A级随机添加最多#r20#k点全属性#l\r\n"//3
			text += "#e#kA级装备80%升级为S级随机添加最多#r30#k点全属性#l\r\n"//3
            text += "#e#kS级装备30%升级为SS级随机添加最多#r50#k点全属性#l\r\n"//3
            text += "#e#kSS级装备10%升级为SSS级随机添加最多#r100#k点全属性#l\r\n"//3
			text += "#e#kSSS级装备8%升级为SSSR级随机添加最多#r200#k点全属性#l\r\n"//3
			text += "#r潜能成功之后，会在装备上显示装备潜能等级\r\n";
			text += "#L0##d开始潜能(#r请将装备放到背包第一格#d)#l\r\n";
			//text += "#L1#兑换#v2460005#需要：#v4251202#10个 - #v3994731#2个 - #v4000464#10个#l\r\n"

			cm.sendSimple(text);
		} else if (a == 1) {
			if (selection == 0) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("请将潜能的装备放置第一格~");
					cm.dispose();
				} else if (cm.haveItem(2460005, 1) == false) {
					cm.sendOk("#v2460005#道具不足。");
					cm.dispose();
				} else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == true) {
					cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 属于#r点装类#k，无法潜能。");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "") {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 5);
					item.setInt(item.getInt() + 5);
					item.setLuk(item.getLuk() + 5);
					item.setDex(item.getDex() + 5);
					item.setWatk(item.getWatk() + 5);
					item.setMatk(item.getMatk() + 5);
					item.setOwner("C");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2460005, -1);
					cm.sendOk("潜能成功，当前装备潜能等级为 “#rC级#k”。\r\n #r#e全属性增加[5]点");
					cm.全服公告("玩家：["+cm.getName()+"]成功鉴定出C级装备！恭喜恭喜！");
					cm.dispose();
					} else if (cm.haveItem(2460005, 2) == false) {
					cm.sendOk("#v2460005#道具不足。");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "C") {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + B);
					item.setInt(item.getInt() + B);
					item.setLuk(item.getLuk() + B);
					item.setDex(item.getDex() + B);
					item.setWatk(item.getWatk() + B);
					item.setMatk(item.getMatk() + B);
					item.setOwner("B");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2460005, -2);
					cm.sendOk("潜能成功，当前装备潜能等级为 “#rB级#k”。\r\n #r#e全属性增加["+B+"]点");
					cm.全服公告("玩家：["+cm.getName()+"]成功鉴定出B级装备！恭喜恭喜！");
					cm.dispose();
					} else if (cm.haveItem(2460005, 3) == false) {
					cm.sendOk("#v2460005#道具不足。");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "B") {
					if (几率 < 85) {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + A);
					item.setInt(item.getInt() + A);
					item.setLuk(item.getLuk() + A);
					item.setDex(item.getDex() + A);
					item.setWatk(item.getWatk() + A);
					item.setMatk(item.getMatk() + A);
					item.setOwner("A");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2460005, -3);
					cm.sendOk("潜能成功，当前装备潜能等级为 “#rA级#k”。\r\n #r#e全属性增加["+A+"]点");
					cm.全服公告("玩家：["+cm.getName()+"]成功鉴定出A级装备！恭喜恭喜！");
					cm.dispose();
					} else {
						cm.gainItem(2460005, -3);
						cm.sendOk("强化失败");
						cm.dispose();
					}
					} else if (cm.haveItem(2460005, 5) == false) {
					cm.sendOk("#v2460005#道具不足。");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "A") {
					if (几率 < 65) {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + S);
					item.setInt(item.getInt() + S);
					item.setLuk(item.getLuk() + S);
					item.setDex(item.getDex() + S);
					item.setWatk(item.getWatk() + S);
					item.setMatk(item.getMatk() + S);
					item.setOwner("S");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2460005, -5);
					cm.sendOk("潜能成功，当前装备潜能等级为 “#rS级#k”。\r\n #r#e全属性增加["+S+"]点");
					cm.全服公告("玩家：["+cm.getName()+"]成功鉴定出S级装备！恭喜恭喜！");
					cm.dispose();
					} else {
						cm.gainItem(2460005, -5);
						cm.sendOk("强化失败");
						cm.dispose();
					}
					} else if (cm.haveItem(2460005, 10) == false) {
					cm.sendOk("#v2460005#道具不足。");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "S") {
					if (几率 < 15) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SS);
						item.setInt(item.getInt() + SS);
						item.setLuk(item.getLuk() + SS);
						item.setDex(item.getDex() + SS);
						item.setWatk(item.getWatk() + SS);
						item.setMatk(item.getMatk() + SS);
						item.setOwner("SS");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2460005, -10);
						cm.sendOk("潜能成功，当前装备潜能等级为 “#rSS级#k”。\r\n #r#e全属性增加["+SS+"]点");
						cm.全服公告("玩家：["+cm.getName()+"]成功鉴定出SS级装备！恭喜恭喜！");
						cm.dispose();
					} else {
						cm.gainItem(2460005, -10);
						cm.sendOk("强化失败");
						cm.dispose();
					}
				} else if (cm.haveItem(2460005, 20) == false) {
					cm.sendOk("#v2460005#道具不足。");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "SS") {
					if (几率 < 10) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSS);
						item.setInt(item.getInt() + SSS);
						item.setLuk(item.getLuk() + SSS);
						item.setDex(item.getDex() + SSS);
						item.setWatk(item.getWatk() + SSS);
						item.setMatk(item.getMatk() + SSS);
						item.setOwner("SSS");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2460005, -20);
						cm.sendOk("潜能成功，当前装备潜能等级为 “#rSSS级#k”。\r\n #r#e全属性增加["+SSS+"]点");
						cm.全服公告("玩家：["+cm.getName()+"]成功鉴定出SSS级装备！恭喜恭喜！");
						cm.dispose();
					} else {
						cm.gainItem(2460005, -20);
						cm.sendOk("强化失败");
						cm.dispose();
					}
					} else if (cm.getInventory(1).getItem(1).getOwner() == "SSS") {
					if (几率 < 8) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSSR);
						item.setInt(item.getInt() + SSSR);
						item.setLuk(item.getLuk() + SSSR);
						item.setDex(item.getDex() + SSSR);
						item.setWatk(item.getWatk() + SSSR);
						item.setMatk(item.getMatk() + SSSR);
						item.setOwner("SSSR");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2460005, -30);
						cm.sendOk("潜能成功，当前装备潜能等级为 “#rSSSR级#k”。\r\n #r#e全属性增加["+SSSR+"]点");
						cm.全服黄色喇叭("【神级玩家】：玩家["+cm.getName()+"]成功鉴定出SSSR级装备！恭喜恭喜！");
						cm.dispose();
					} else {
						cm.gainItem(2460005, -30);
						cm.sendOk("强化失败");
						cm.dispose();
					}
				
				} else {
					cm.sendOk("当前装备无法参与强化。");
					cm.dispose();
				}
			} else if(selection == 1) {
				if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
				if (cm.haveItem(3994731,5) == false) {
					cm.sendOk("抱歉,#v3994731#道具数量不足。");
					cm.dispose();
				} else if (cm.haveItem(4000464,10) == false){
					cm.sendOk("抱歉，#v4000464#道具数量不足");
					cm.dispose();
				} else if (cm.haveItem(4251202,10) == false){
					cm.sendOk("抱歉，#v4251202#道具数量不足");
					cm.dispose();
				} else {
					if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
					cm.gainItem(4251202, -10);
					cm.gainItem(3994731, -2);
					cm.gainItem(4000464,-10);
					cm.gainItem(2460005, 1);
					cm.sendOk("兑换成功。")
					cm.setBossLog("放大镜")
					cm.dispose();
				}
			}
		}
	}
}