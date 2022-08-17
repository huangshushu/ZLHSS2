importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[永恒武器]-(觉醒系统)";//副本名称
var choose = 100;
var itempass = false;
var xnew = Array("荒古遗尘","圣耀救赎","苍穹幕落","夜语黑瞳");
var xold = Array("","荒古遗尘","圣耀救赎","苍穹幕落","夜语黑瞳");
var itemList = Array(1312037,1322060,1332073,1332074,1372044,1382057,1402046,1412033,1422037,1432047,1442063,1452057,1462050,1472068,1482023,1492023,1302081,1092057,1092058,1092059);
var costitem = 4310002;
var itemCount = Array(5,10,15,20);
var update = Array(5,10,15,20);
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

	//textz += " \t\t\t #e#d欢迎来到#r永恒觉醒系统#k#r#n \r\n"
	textz = "#k\t\t\t   #r#v4030001#" + fbmc + "#v4030001##k#l\r\n\r\n";
	textz += "#b   萌新记得好好看说明哦，内含觉醒系统详细介绍#k#n\r\n"
	textz += "#L0##b觉醒系统说明\r\n";
	textz += "#L1##b#e开始觉醒#n#l\r\n";
	//textz += "#L2##b升级#e#b■#n#r★★　　　#e#b■  需要#v4000463#×30个#l\r\n";
	//textz += "#L3##b升级#e#b■#n#r★★★　　#e#b■  需要#v4000463#×50个#l\r\n";
	//textz += "#L4##b升级#e#b■#n#r★★★★　#e#b■  需要#v4000463#×70个#l\r\n";
	//textz += "#L5##b升级#e#b■#n#r★★★★★#e#b■  需要#v4000463#×100个#l\r\n";
	 
	cm.sendSimple (textz);   
	}else if (status == 1) {
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
		
		if(selection == 0) {
			cm.sendOk("可以觉醒：#i"+1312037+"##i"+1322060+"##i"+1332074+"##i"+1372044+"#这样的武器\r\n永恒觉醒材料打#e#b暴力熊#n#k和#e#b心疤狮王#n#k获得\r\n\r\n请把需要觉醒的武器放在#b背包第一格！！！\r\n\r\n觉醒100%成功，拥有四个等级#k#n\r\n\r\n#r荒古遗尘#k--六维 +5-----需要#v"+costitem+"#×"+itemCount[0]+"个\r\n#r圣耀救赎#k--六维 +10----需要#v"+costitem+"#×"+itemCount[1]+"个\r\n#r苍穹幕落#k--六维 +15----需要#v"+costitem+"#×"+itemCount[2]+"个\r\n#r夜语黑瞳#k--六维 +20----需要#v"+costitem+"#×"+itemCount[3]+"个\r\n");
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
			cm.sendOk("只能觉醒永恒武器哟");
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
			cm.全服公告("恭喜："+cm.getName()+" 将【永恒武器】觉醒为【"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"】 一刀一个小盆友！");
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


