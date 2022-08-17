importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[法弗防具]-(觉醒系统)";//副本名称
var choose = 100;
var itempass = false;
var xnew = Array("黄阶下品","黄阶中品","黄阶上品","玄阶下品","玄阶中品","玄阶上品","地阶下品","地阶中品","地阶上品","天阶下品","天阶中品","天阶上品","天阶极品","亘古神器");
var xold = Array("","黄阶下品","黄阶中品","黄阶上品","玄阶下品","玄阶中品","玄阶上品","地阶下品","地阶中品","地阶上品","天阶下品","天阶中品","天阶上品","天阶极品","亘古神器");
var itemList = Array(1003797,1003798,1003799,1003800,1003801,1062165,1062166,1062167,1062168,1062169,1042254,1042255,1042256,1042257,1042258);
var costitem = 4310091;
var itemCount = Array(2,2,2,2,2,2,4,4,4,4,4,4,4,40);
var update = Array(6,6,6,8,8,8,16,16,16,20,20,20,30,80);
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

	textz = "#k\t\t\t #r#v4030001#" + fbmc + "#v4030001##k#l\r\n\r\n";
	textz += "#b   萌新记得好好看说明哦，内含觉醒系统详细介绍#k#n\r\n"
	textz += "#L0##b觉醒系统说明\r\n";
	textz += "#L1##b#e开始觉醒#n#l\r\n";
	 
	cm.sendSimple (textz);   
	}else if (status == 1) {
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
		
		if(selection == 0) {
			var string1 = "可以觉醒：#i"+1003797+"##i"+1062166+"##i"+1042255+"#这样的防具\r\n"
			for(var i =0 ; i < xnew.length;i++){
				string1 += "【"+xnew[i]+"】增加#b#e"+update[i]+"#n#k全属性，需要：#b#e"+itemCount[i]+"#n#k个#v"+costitem+"#\r\n"
			}
			cm.sendOk(string1);
			cm.dispose();
		}else if (selection == 1) {
			if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null){
			cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
			cm.dispose();
			return;
		}
		var item = cm.getInventory(1).getItem(1);
		var itemid = item.getItemId();
		for(var i = 0; i <itemList.length; i++){
			if(itemid == itemList[i]){
				itempass = true;
				break;
			}
		};
		if(itempass == false){
			cm.sendOk("只能觉醒#i"+1003797+"##i"+1062166+"##i"+1042255+"#哟");
			cm.dispose();
			return;
		}
		var name = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner();
		for(var i = 0; i < xold.length - 1; i++){
			if(name == xold[i]){
				choose = i;
				break;
			}
		};
		if(choose ==100){
		cm.sendOk("#e#d您的装备#r觉醒等级#d为#k【#b"+ name +"#k】#d无需觉醒！！");
		cm.dispose();
		return;
		}
		if(cm.haveItem(costitem, itemCount[choose])) { 
			var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
			var statup = new java.util.ArrayList();
			item.setOwner(xnew[choose]);
			cm.gainItem(costitem,0 - itemCount[choose]);
			var hwchancess = update[choose];
			item.setStr(item.getStr()*1+hwchancess);
			item.setDex(item.getDex()*1+hwchancess);
			item.setInt(item.getInt()*1+hwchancess);
			item.setLuk(item.getLuk()*1+hwchancess);
			//item.setWdef(item.getWdef()*1+hwchancess);
			//item.setMdef(item.getMdef()*1+hwchancess);
			item.setMatk(item.getMatk()*1+hwchancess);
			item.setWatk(item.getWatk()*1+hwchancess);
			//item.setHp(item.getHp()*1+hwchancess);
			//item.setMp(item.getMp()*1+hwchancess);
			Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
			Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
			var a=item.getItemId();
			cm.全服黄色喇叭("[法弗防具觉醒] : 玩家["+cm.getPlayer().getName()+"]将[法弗纳防具]觉醒为["+xnew[choose]+"]！！！即将称霸全岛！！！");
			cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew[choose]+"");
			cm.dispose();
		}else{
			cm.sendOk("没有足够的#v"+costitem+"#");
			cm.dispose();
		}


		}else if (selection == 2) {


		}else if (selection == 3) {
			
		}else if (selection == 4) {
		}else if (selection == 5) {
		}
    }
      }
        }


