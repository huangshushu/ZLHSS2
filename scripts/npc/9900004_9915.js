importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[枫叶戒指]-(觉醒系统)";//副本名称
var choose = 1000;
var itempass = false;
var xnew = Array("蓝蜗牛","绿水灵","刺蘑菇","黑斧木妖","火野猪","小幽灵","星光精灵","小恶魔","木马骑兵","僵尸猴","铁甲猪","月光精灵","土龙","黑山羊","战甲吹泡泡鱼","小白雪人","石头人","白狼","企鹅王","怪猫","白雪人","月牙牛魔王");
var xold = Array("","蓝蜗牛","绿水灵","刺蘑菇","黑斧木妖","火野猪","小幽灵","星光精灵","小恶魔","木马骑兵","僵尸猴","铁甲猪","月光精灵","土龙","黑山羊","战甲吹泡泡鱼","小白雪人","石头人","白狼","企鹅王","怪猫","白雪人","月牙牛魔王");
var itemList = 1112673
var costitem1 = 4001126;
var costitem2 = 4000313;
var itemCount1 = 800
var add1 = 100
var add2 = 15
var itemCount2 = 100
var update = 30
var cost1 = 0
var cost2 = 0
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
			var string1 = "可以觉醒：#i"+1112673+"#\r\n觉醒每次增加#b#e"+update+"#n#k全属性\r\n"
			for(var i =0 ; i < xnew.length;i++){
				cost1 = itemCount1 + add1 * i
				cost2 = itemCount2 + add2 * i
				string1 += "【"+xnew[i]+"】需要：#b#e"+cost1+"#n#k个#v"+costitem1+"##b#e"+cost2+"#n#k个#v"+costitem2+"#\r\n"
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
		if(itemid == itemList){
			itempass = true;
		}
		if(itempass == false){
			cm.sendOk("只能觉醒#i"+1112673+"#哟");
			cm.dispose();
			return;
		}
		var name = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner();
		for(var i = 0; i < xold.length - 1; i++){
			if(name == xold[i]){
				cost1 = itemCount1 + add1 * i
				cost2 = itemCount2 + add2 * i
				choose = i;
				break;
			}
		};
		if(choose ==1000){
		cm.sendOk("#e#d您的装备#r觉醒等级#d为#k【#b"+ name +"#k】#d无需觉醒！！");
		cm.dispose();
		return;
		}
		if(cm.haveItem(costitem1, cost1) && cm.haveItem(costitem2, cost2)){ 
			var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
			var statup = new java.util.ArrayList();
			item.setOwner(xnew[choose]);
			cm.gainItem(costitem1,0 - cost1);
			cm.gainItem(costitem2,0 - cost2);
			var hwchancess = update
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
			cm.全服黄色喇叭("[枫叶戒指觉醒] : 玩家["+cm.getPlayer().getName()+"]将[枫叶戒指]觉醒为["+xnew[choose]+"]！肝真好。。。");
			cm.sendOk("#e#b成功的将  #v"+a+"#提升至#r "+xnew[choose]+"");
			cm.dispose();
		}else{
			cm.sendOk("没有足够的#v"+costitem1+"#或#v"+costitem2+"#");
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


