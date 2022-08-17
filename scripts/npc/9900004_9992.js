importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[暴君饰品]-(升级系统)";//副本名称
var choose = 100;
var itempass = false;
var xnew = Array("稀有","传承","异次元","神器","传说","战神天袭","时空主宰","金镶玉翠","风华绝世","冰雪公主","无尽贪食","星空旅行","恍惚之境","黑洞湮灭","江山如画");
var xold = Array("","稀有","传承","异次元","神器","传说","战神天袭","时空主宰","金镶玉翠","风华绝世","冰雪公主","无尽贪食","星空旅行","恍惚之境","黑洞湮灭","江山如画");
var itemList = Array(1102481,1102482,1102483,1102484,1102485,1082543,1082544,1082545,1082546,1082547,1072743,1072744,1072745,1072746,1072747,1132174,1132175,1132176,1132177,1132178);
var itemList2 = [1132174,1132175,1132176,1132177,1132178]
var costitem = 4310060;
var itemCount = Array(1,1,1,2,2,3,3,4,4,5,5,6,6,7,7);
var update = Array(10,10,15,15,20,20,25,25,30,30,35,35,40,45,50);
var update2 = 50;
var chance = Array(100,80,70,60,50,40,30,25,20,15,15,10,10,8,5);
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
	textz += "#b   萌新记得好好看说明哦，内含升级系统详细介绍#k#n\r\n"
	textz += "#L0##b暴君升级说明\r\n";
	textz += "#L1##b#e开始升级#n#l\r\n";
	 
	cm.sendSimple (textz);   
	}else if (status == 1) {
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
		
		if(selection == 0) {
			var string1 = "可以为#i"+1102481+"##i"+1082543+"##i"+1072743+"##i"+1132174+"#这样的饰品升级\r\n\r\n其中#i1132174#暴君腰带第一次升星比较特殊，需要消耗#i1132246#\r\n增加#b#e"+update2+"#n#k全属性，#b#e必定成功#n#k\r\n\r\n其他等级：\r\n"
			for(var i =0 ; i < xnew.length;i++){
				string1 += "【"+xnew[i]+"】增加#b#e"+update[i]+"#n#k全属性，成功率#b#e"+chance[i]+"#n#k%需要：#b#e"+itemCount[i]+"#n#k个#v"+costitem+"#\r\n"
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
			cm.sendOk("只能觉醒#i"+1102481+"##i"+1082543+"##i"+1072743+"##i"+1132174+"#哟");
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
		cm.sendOk("#e#d您的装备#r等级#d为#k【#b"+ name +"#k】#d无需升级！！");
		cm.dispose();
		return;
		}
		var statup = new java.util.ArrayList();
		var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
		var itemid = item.getItemId();
		for(var i = 0;i<itemList2.length;i++){
			if(itemid==itemList2[i] && choose == 0){
				if(cm.haveItem(1132246,1)){
					item.setOwner(xnew[choose]);
					cm.gainItem(1132246,-1);
					var hwchancess = update2;
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
					cm.全服黄色喇叭("[暴君升星] : 玩家["+cm.getPlayer().getName()+"]将[暴君腰带]升级为["+xnew[choose]+"]！！！好厉害鸭！！！");
					cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew[choose]+"");
					cm.dispose();
					return
				}else{
					cm.sendOk("第一次升级#v"+itemid+"#需要使用#v1132246#，没有就无法升级喔");
					cm.dispose();
					return;
				}
			}	
		}
		if(cm.haveItem(costitem, itemCount[choose])) { 
			var random = Math.floor(Math.random() * +99)+1;
			var roll = 100 - chance[choose]
			if(random < roll){
				cm.sendOk("你roll了#b#e"+random+"#n#k点，#b#e升级失败#n#k\r\n当前成功率#b#e"+chance[choose]+"%#n#k\r\n至少roll#b#e"+roll+"#n#k点才能成功");
				cm.gainItem(costitem,0 - itemCount[choose]);
				cm.dispose();
				return;
			}
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
			cm.全服黄色喇叭("[暴君升星] : 玩家["+cm.getPlayer().getName()+"]将[暴君饰品]升级为["+xnew[choose]+"]！！！好厉害鸭！！！");
			if(xnew[choose]=="江山如画"){
				cm.getPlayer().setOneTimeLog("江山如画成就");
				cm.getPlayer().dropMessage(5,"江山如画成就进度："+cm.getPlayer().getOneTimeLog("江山如画成就")+"");
			}
			cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew[choose]+"");
			cm.dispose();
			return
		}else{
			cm.sendOk("没有足够的#v"+costitem+"#");
			cm.dispose();
			return;
		}


		}else if (selection == 2) {


		}else if (selection == 3) {
			
		}else if (selection == 4) {
		}else if (selection == 5) {
		}
    }
      }
        }


