var Equitype = [
    1142574,
    1142541,
    1142573
];
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var xnew1="★";
var xnew2="★★";
var xnew3="★★★";
var xnew4="★★★★";
var xnew5="★★★★★";
var xnew6="★★★★★★";
var xnew7="25★";
var xnew8="8★";
var xnew9="9★";
var xnew10="10★";
var xold1="★";
var xold2="★★";
var xold3="★★★";
var xold4="★★★★";
var xold5="★★★★★";
var xold6="★★★★★★";
var xold7="7★";
var xold8="8★";
var xold9="9★";
var xold0="";

var rand=Math.floor(Math.random()*100);
//////////////////////////////////////////////////////////
function start() {
status = -1;
action(1, 0, 0);
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
var textz = ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
textz += " \t\t\t   #e#d欢迎来到#r25星币强化系统#k#r#n \r\n"
//textz += "#b   萌新记得好好看说明哦，内含升星系统详细介绍#k#n\r\n"
//textz += "#L0##b" + 红色箭头 + "升星系统说明\r\n";
//textz += "#L1##b" + 红色箭头 + "升级#e#b■#n#r★　　　　#e#b■" + 蓝色角点 + "  需要#v3992025#×20个#l\r\n";
//textz += "#L2##b" + 红色箭头 + "升级#e#b■#n#r★★　　　#e#b■" + 蓝色角点 + "  需要#v3992025#×50个#l\r\n";
//textz += "#L3##b" + 红色箭头 + "升级#e#b■#n#r★★★　　#e#b■" + 蓝色角点 + "  需要#v3992025#×100个#l\r\n";
//textz += "#L4##b" + 红色箭头 + "升级#e#b■#n#r★★★★　#e#b■" + 蓝色角点 + "  需要#v3992025#×200个#l\r\n";
//textz += "#L5##b" + 红色箭头 + "升级#e#b■#n#r★★★★★#e#b■" + 蓝色角点 + "  需要#v3992025#×300个#l\r\n";
//textz += "#L6##b" + 红色箭头 + "升级#e#b■#n#r★★★★★★#e#b■" + 蓝色角点 + "  需要#v3992025#×500个#l\r\n";
textz += "#L7##b" + 红色箭头 + "0星直接升级#e#b#n#r25★#e#b" + 蓝色角点 + "  需要#v4310148#×1个#l\r\n";
//textz += "#L8##b" + 红色箭头 + "升级#e#b■#n#r8★#e#b■" + 蓝色角点 + "  需要#v3992025#×700个#l\r\n";
//textz += "#L9##b" + 红色箭头 + "升级#e#b■#n#r9★#e#b■" + 蓝色角点 + "  需要#v3992025#×800个#l\r\n";
//textz += "#L10##b" + 红色箭头 + "升级#e#b■#n#r10★#e#b■" + 蓝色角点 + "  需要#v3992025#×900个#l\r\n";
cm.sendSimple (textz);   


				
}else if (status == 1) {

var ii = Packages.server.MapleItemInformationProvider.getInstance();
var item = cm.getInventory(1).getItem(1);
 if (selection == 0) {
cm.sendOk("k全属性（升星系统必须到#r10级#k方可使用~\r\n\r\n请把需要升星的装备放在#b背包第一格！！！\r\n\r\n装备必须首先升到#r★#k方可继续升#r★★#k，无法跳跃式升星.#k#n\r\n\r\n成功率90%#r★#k全属性（带双G）+2\r\n成功率80%#r★★#k全属性（带双G）+4\r\n成功率70%#r★★★#k全属性（带双G）+6\r\n成功率60%#r★★★★#k全属性（带双G）+8\r\n成功率50%#r★★★★★#k全属性（带双G）+10\r\n成功率40%#r★★★★★★#k全属性（带双G）+12\r\n成功率30%#r7★#k全属性（带双G）+14\r\n成功率20%#r8★#k全属性（带双G）+16\r\n成功率15%#r9★#k全属性（带双G）+18\r\n成功率10%#r10★#k全属性（带双G）+20#k#n\r\n星星等级越高，概率越低，失败扣除一颗星");
            cm.dispose();
}else if (selection == 1) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold0){//检查是否等于这个物品
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d无需强化！！");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 20)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew1);
item.setLocked(1);
cm.gainItem(3992025,-20);
			if(rand>20){
				var hwchancess= 2;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：恭喜【"+ cm.getChar().getName() +"】的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew1+"");
        cm.dispose();
			}else{
		cm.sendOk("第一颗星升级失败");
        cm.dispose();
			}
     }else{
        cm.sendOk("没有足够的#v3992025#");
        cm.dispose();
}


}else if (selection == 2) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold1){//检查是否等于这个物品
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d未满足强化要求！！");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 50)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew2);
cm.gainItem(3992025,-50);
		if(rand>25){
				var hwchancess= 4;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：恭喜【"+ cm.getChar().getName() +"】的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew2+"");
        cm.dispose();
		}else{
			cm.sendOk("第二颗星升级失败");
			
        cm.dispose();
		}
     }else{
        cm.sendOk("没有足够的#v3992025#");
        cm.dispose();
}


}else if (selection == 3) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold2){//检查是否等于这个物品
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d未满足强化要求！！");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 100)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew3);
cm.gainItem(3992025,-100);
			if(rand>35){
				var hwchancess= 6;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：恭喜【"+ cm.getChar().getName() +"】的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew3+"");
        cm.dispose();
			}else{
		cm.sendOk("第三颗星升级失败");
        cm.dispose();
			}
     }else{
        cm.sendOk("没有足够的#v3992025#");
        cm.dispose();
}

}else if (selection == 4) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold3){//检查是否等于这个物品
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d未满足强化要求！！");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 300)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew4);
cm.gainItem(3992025,-300);
			if(rand>45){
				var hwchancess= 8;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：恭喜【"+ cm.getChar().getName() +"】的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew4+"");
        cm.dispose();
						}else{
		cm.sendOk("第四颗星升级失败");
        cm.dispose();
			}
     }else{
        cm.sendOk("没有足够的#v3992025#");
        cm.dispose();
}


}else if (selection == 5) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold4){
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d未满足强化要求！！");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 300)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew5);
cm.gainItem(3992025,-300);
			if(rand>55){
				var hwchancess= 10;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：恭喜【"+ cm.getChar().getName() +"】的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew5+"");
        cm.dispose();
						}else{
		cm.sendOk("第五颗星升级失败");
        cm.dispose();
			}
     }else{
        cm.sendOk("没有足够的#v3992025#");
        cm.dispose();
}
}else if (selection == 6) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold5){
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d未满足强化要求！！");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 500)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew6);
cm.gainItem(3992025,-500);
			if(rand>65){
				var hwchancess= 12;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：恭喜【"+ cm.getChar().getName() +"】的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew6+"");
        cm.dispose();
			}else{
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew4);

				var hwchancess= 10;
					item.setStr(item.getStr()*1-hwchancess);
					item.setDex(item.getDex()*1-hwchancess);
					item.setInt(item.getInt()*1-hwchancess);
					item.setLuk(item.getLuk()*1-hwchancess);
					item.setWdef(item.getWdef()*1-hwchancess);
					item.setMdef(item.getMdef()*1-hwchancess);
					item.setMatk(item.getMatk()*1-hwchancess);
					item.setWatk(item.getWatk()*1-hwchancess);
					item.setHp(item.getHp()*1-hwchancess);
					item.setMp(item.getMp()*1-hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：很遗憾【"+ cm.getChar().getName() +"】的装备升级失败降为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅降低！");
        cm.sendOk("#e#b成功的将  #v"+a+"#降为至#r "+xnew4+"");
				//cm.sendOk("第六颗星升级失败");
        cm.dispose();
			}
     }else{
        cm.sendOk("没有足够的#v3992025#");
        cm.dispose();
}
}else if (selection == 7) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() >= xold1){ 
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d未满足强化要求！！");
cm.dispose();
return;
}
if(cm.haveItem(4310148, 1)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew7);
item.setLocked(1);
cm.gainItem(4310148,-1);
			if(rand>0){
				var hwchancess= 295;
					item.setStr(item.getStr()*1+462);
					item.setDex(item.getDex()*1+462);
					item.setInt(item.getInt()*1+462);
					item.setLuk(item.getLuk()*1+462);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『25星必成公告』：恭喜【"+ cm.getChar().getName() +"】的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew7+"");
        cm.dispose();
						}else{
		cm.sendOk("第20颗星升级成功");
        cm.dispose();
			}
     }else{
        cm.sendOk("没有足够的#v4310148#");
        cm.dispose();
}
}else if (selection == 8) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold7){ 
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d未满足强化要求！！");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 700)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew8);
cm.gainItem(3992025,-700);
			if(rand>75){
				var hwchancess= 16;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：恭喜【"+ cm.getChar().getName() +"】的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew8+"");
        cm.dispose();
			}else{
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew6);

				var hwchancess= 14;
					item.setStr(item.getStr()*1-hwchancess);
					item.setDex(item.getDex()*1-hwchancess);
					item.setInt(item.getInt()*1-hwchancess);
					item.setLuk(item.getLuk()*1-hwchancess);
					item.setWdef(item.getWdef()*1-hwchancess);
					item.setMdef(item.getMdef()*1-hwchancess);
					item.setMatk(item.getMatk()*1-hwchancess);
					item.setWatk(item.getWatk()*1-hwchancess);
					item.setHp(item.getHp()*1-hwchancess);
					item.setMp(item.getMp()*1-hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：很遗憾【"+ cm.getChar().getName() +"】的装备升级失败降为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅降低！");
        cm.sendOk("#e#b成功的将  #v"+a+"#降为至#r "+xnew6+"");
				//cm.sendOk("第八颗星升级失败");
        cm.dispose();
			}
     }else{
        cm.sendOk("没有足够的#v3992025#");
        cm.dispose();
}
}else if (selection == 9) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold8){ 
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d未满足强化要求！！");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 800)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew9);
cm.gainItem(3992025,-800);
			if(rand>80){
				var hwchancess= 18;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：恭喜【"+ cm.getChar().getName() +"】的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew9+"");
        cm.dispose();
			}else{
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew7);

				var hwchancess= 16;
					item.setStr(item.getStr()*1-hwchancess);
					item.setDex(item.getDex()*1-hwchancess);
					item.setInt(item.getInt()*1-hwchancess);
					item.setLuk(item.getLuk()*1-hwchancess);
					item.setWdef(item.getWdef()*1-hwchancess);
					item.setMdef(item.getMdef()*1-hwchancess);
					item.setMatk(item.getMatk()*1-hwchancess);
					item.setWatk(item.getWatk()*1-hwchancess);
					item.setHp(item.getHp()*1-hwchancess);
					item.setMp(item.getMp()*1-hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：很遗憾【"+ cm.getChar().getName() +"】的装备升级失败降为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅降低！");
        cm.sendOk("#e#b成功的将  #v"+a+"#降为至#r "+xnew7+"");
				//cm.sendOk("第九颗星升级失败");
        cm.dispose();
			}
     }else{
        cm.sendOk("没有足够的#v3992025#");
        cm.dispose();
}
}else if (selection == 10) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold9){ 
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d未满足强化要求！！");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 900)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew10);
cm.gainItem(3992025,-900);
			if(rand>85){
				var hwchancess= 20;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：恭喜【"+ cm.getChar().getName() +"】的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew10+"");
        cm.dispose();
			}else{
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew8);

				var hwchancess= 18;
					item.setStr(item.getStr()*1-hwchancess);
					item.setDex(item.getDex()*1-hwchancess);
					item.setInt(item.getInt()*1-hwchancess);
					item.setLuk(item.getLuk()*1-hwchancess);
					item.setWdef(item.getWdef()*1-hwchancess);
					item.setMdef(item.getMdef()*1-hwchancess);
					item.setMatk(item.getMatk()*1-hwchancess);
					item.setWatk(item.getWatk()*1-hwchancess);
					item.setHp(item.getHp()*1-hwchancess);
					item.setMp(item.getMp()*1-hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("『升星公告』：很遗憾【"+ cm.getChar().getName() +"】的装备升级失败降为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅降低！");
        cm.sendOk("#e#b成功的将  #v"+a+"#降为至#r "+xnew8+"");
				//cm.sendOk("第十颗星升级失败");
        cm.dispose();
			}
     }else{
        cm.sendOk("没有足够的#v3992025#");
        cm.dispose();
}

  }
    }
      }
        }


