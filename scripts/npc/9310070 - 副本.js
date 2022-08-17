importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[冒险岛]-(升星系统)";//副本名称
var xnew1="★";
var xnew2="2★";
var xnew3="3★";
var xnew4="4★";
var xnew5="5★";
var xold1="★";
var xold2="2★";
var xold3="3★";
var xold4="4★";
var xold5="5★";
var xold0="";
var itemList = Array(1132174,1132175,132176,1132177,1132178,1102481,1102482,1102483,1102484,1102485,1082543,1082544,1082545,1082546,1082547,1072743,1072744,1072745,1072746,1072747)
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

//textz += " \t\t\t   #e#d欢迎来到#r升星系统#k#r#n \r\n"
textz = "#k\t\t\t   #r#v4030001#" + fbmc + "#v4030001##k#l\r\n\r\n";
textz += "#b   萌新记得好好看说明哦，内含升星系统详细介绍#k#n\r\n"
textz += "#L0##b升星系统说明\r\n";
textz += "可以强化#i"+1132174+"##i"+132176+"#?"
textz += "#L1##b升级#e#b■#n#r★　　　　#e#b■  需要#v4000463#×10个#l\r\n";
textz += "#L2##b升级#e#b■#n#r★★　　　#e#b■  需要#v4000463#×30个#l\r\n";
textz += "#L3##b升级#e#b■#n#r★★★　　#e#b■  需要#v4000463#×50个#l\r\n";
textz += "#L4##b升级#e#b■#n#r★★★★　#e#b■  需要#v4000463#×70个#l\r\n";
textz += "#L5##b升级#e#b■#n#r★★★★★#e#b■  需要#v4000463#×100个#l\r\n";
 
cm.sendSimple (textz);   


				
}else if (status == 1) {

var ii = Packages.server.MapleItemInformationProvider.getInstance();
var item = cm.getInventory(1).getItem(1);
var itemid = item.getItemId();
 if (selection == 0) {
cm.sendOk("升星系统必须到#r10级#k方可使用~\r\n\r\n请把需要升星的装备放在#b背包第一格！！！\r\n\r\n装备必须首先升到#r★#k方可继续升#r★★#k，无法跳跃式升星.#k#n\r\n\r\n#r★#k全属性（带双G）+10\r\n#r★★#k全属性（带双G）+10\r\n#r★★★#k全属性（带双G）+10\r\n#r★★★★#k全属性（带双G）+10\r\n#r★★★★★#k全属性（带双G）+10#k#n");
            cm.dispose();
}else if (selection == 1) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
cm.dispose();
return;
}
if(itemid != "1382012"){
cm.sendOk("只能强化枫叶杖哟!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() >= xold1){//检查是否等于这个物品
cm.sendOk("#e#d您的装备#r星级#d为#k【#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k】#d无需强化！！");
cm.dispose();
return;
}
if(cm.haveItem(4000463, 10)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew1);
cm.gainItem(4000463,-10);
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
		cm.全服公告("恭喜："+cm.getName()+" 的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew1+"");
        cm.dispose();
     }else{
        cm.sendOk("没有足够的#v4000463#");
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
if(cm.haveItem(4000463, 30)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew2);
cm.gainItem(4000463,-30);
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
cm.全服公告("恭喜："+cm.getName()+" 的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew2+"");
        cm.dispose();
     }else{
        cm.sendOk("没有足够的#v4000463#");
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
if(cm.haveItem(4000463, 50)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew3);
cm.gainItem(4000463,-50);
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
cm.全服公告("恭喜："+cm.getName()+" 的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew3+"");
        cm.dispose();
     }else{
        cm.sendOk("没有足够的#v4000463#");
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
if(cm.haveItem(4000463, 70)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew4);
cm.gainItem(4000463,-70);
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
cm.全服公告("恭喜："+cm.getName()+" 的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew4+"");
        cm.dispose();
     }else{
        cm.sendOk("没有足够的#v4000463#");
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
if(cm.haveItem(4000463, 100)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew5);
cm.gainItem(4000463,-100);
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
cm.全服公告("恭喜："+cm.getName()+" 的装备升为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 战斗力大幅提升！");
        cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew5+"");
        cm.dispose();
     }else{
        cm.sendOk("没有足够的#v4000463#");
        cm.dispose();
}

  }
    }
      }
        }


