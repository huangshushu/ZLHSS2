importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[ＰＢ饰品]-(觉醒系统)";//副本名称
var choose = 100;
var itempass = false;
var xnew = Array("可爱品克缤","狂乱品克缤","疯狂品克缤","疯癫品克缤","疯魔品克缤","魔怔品克缤","混沌品克缤");
var xold = Array("","可爱品克缤","狂乱品克缤","疯狂品克缤","疯癫品克缤","疯魔品克缤","魔怔品克缤","混沌品克缤");
var itemList = Array(1012532,1022144);
var costitem = 4310038;
var itemCount = Array(1,4,8,12,16,20,60);
var update = Array(30,20,40,60,80,100,100);
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
			var string1 = "可以觉醒：#i"+1012532+"##i"+1022144+"#这样的饰品\r\n"
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
			cm.sendOk("只能觉醒#i"+1012532+"##i"+1022144+"#哟");
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
			cm.全服黄色喇叭("[PB饰品觉醒] : 玩家["+cm.getPlayer().getName()+"]将[PB饰品]觉醒为["+xnew[choose]+"]！！！简直无敌！！！");
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


