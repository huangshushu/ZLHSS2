var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 几率 = Math.floor(Math.random() * 55);
var B = Math.floor(Math.random() * 5)+5;
var A = Math.floor(Math.random() * 5)+15;
var S = Math.floor(Math.random() * 10)+20;
var SS = Math.floor(Math.random() * 10)+40;
var SSS = Math.floor(Math.random() * 30)+70;
var SSSR = Math.floor(Math.random() * 40)+160;
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
			text += "#v1112444#升为1阶全属性+5需要\r\n#v4031456#x50#v4001126#x50#l\r\n"//3
			text += "#v1112444#升为2阶全属性+5需要\r\n#v4031456#x100#v4001126#x100#l\r\n"//3
			text += "#v1112444#升为3阶全属性+5需要\r\n#v4031456#x150#v4001126#x150#l\r\n"//3
			text += "#v1112444#升为满阶全属性+5需要\r\n#v4031456#x200#v4001126#x200#l\r\n"//3
			text += "#r强化成功之后，会在装备上显示装备等级\r\n";
            text += "#L0##d开始强化(#r请将装备放到背包第一格#d)#l\r\n";
			if (selection == 0) {
				var dmID = cm.getInventory(1).getItem(1).getItemId();
		        if(dmID!=1112444) {
		        cm.sendOk("把#v1112444#放在第一格!");		
			    } 
				if (cm.haveItem(4031456, 1150) && cm.haveItem(4001126, 150) && cm.getInventory(1).getItem(1).getOwner() == "第三阶段") {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 3);
					item.setInt(item.getInt() + 3);
					item.setLuk(item.getLuk() + 3);
					item.setDex(item.getDex() + 3);
					item.setWatk(item.getWatk() + 0);
					item.setMatk(item.getMatk() + 0);
					item.setOwner("满阶");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(4031456, -150);
					cm.gainItem(4001126, -150);
					cm.sendOk("强化成功，当前装备等级为 “#r满阶#k”。\r\n #r#e全属性增加[3]点");
					cm.全服公告("玩家：["+cm.getName()+"]成功强化枫叶戒指为满阶！恭喜恭喜！");
					cm.dispose();
					
				} else {
					cm.sendOk("当前装备无法参与强化。或者材料不足");
					cm.dispose();
				
				}
			}
		}
	}
}