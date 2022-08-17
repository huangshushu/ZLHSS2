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
			if (selection == 0) {
				var dmID = cm.getInventory(1).getItem(1).getItemId();
		        if(dmID!=1102039) {
		        cm.sendOk("把#v1102039#放在第一格!");				   
				cm.dispose();
				}  
				if(cm.getPlayer().getOneTimeLoga("透明披风超越") > 0){
					cm.sendOk("一个账号只允许进阶1次!");
					cm.dispose();
					return;
				}
			else	if (cm.haveItem(4310081, 30) && cm.haveItem(4031997, 150) && cm.getPlayer().getNX() > 14000  && cm.getPlayer().getCSPoints(2) > 29000  && cm.getPlayer().getMeso() > 99999999 &&cm.getInventory(1).getItem(1).getOwner() == "传说") {
				cm.getPlayer().setOneTimeLoga("透明披风超越");
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 7);
					item.setInt(item.getInt() + 7);
					item.setLuk(item.getLuk() + 7);
					item.setDex(item.getDex() + 7);
					item.setWatk(item.getWatk() + 0);
					item.setMatk(item.getMatk() + 0);
					item.setOwner("超越");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(4310081, -30);
					cm.gainItem(4031997, -150);
					cm.gainNX(-15000);
                    cm.gainDY(-30000);
                    cm.gainMeso(-100000000)
					cm.sendOk("强化成功，当前装备等级为 “#r超越#k”。\r\n #r#e全属性增加[7]点");
					cm.全服公告("玩家：["+cm.getName()+"]成功强化透明披风为超越！恭喜恭喜！");
					cm.dispose();
				} else {
					cm.sendOk("当前装备无法参与强化。或者材料不足");
					cm.dispose();
				
				}
			}
		}
	}
}