importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[装备回收]-(回收系统)";//副本名称
var costitem = 4000463;
var itemCount = 0;

//贝勒德首饰
var itemlist1 = [1113072,1132243,1122264,1032220,1113073,1132244,1122265,1032221,1113074,1132245,1122266,1032222,1113075,1132246,1122267,1032223];
var old1 =[0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3]
var name1 = ["地灵","天铸","仙赐","神迹","界魂"];
var choose = -1
var costitem1 = 4310097;
var itemCount1 = [4,12,24,40,80];

//永恒武器，盾牌，防具
var itemList2 = [1312037,1322060,1332073,1332074,1372044,1382057,1402046,1412033,1422037,1432047,1442063,1452057,1462050,1472068,1482023,1492023,1302081,1092057,1092058,1092059,1002776,1002777,1002778,1002779,1002780,1052155,1052156,1052157,1052158,1052159,1072355,1072356,1072357,1072358,1072359,1082234,1082235,1082236,1082237,1082238];
var name2 = ["荒古遗尘","圣耀救赎","苍穹幕落","夜语黑瞳"];
var itemCount2 = [5,15,30,50];
var costitem2 = 4310002;
var name22 = ""
var choose2 = 0
var give2 = 10
var count2 = 0
var sumgive = 0
var bugcount2 = 0

//FFN武器
var name3 = ["开山裂地","撕天断海","斩星贯月","陨日破宇","鸿蒙创世","宇宙之心"];
var itemList3 = [1372177,1382208,1402196,1412135,1422140,1432167,1442223,1452205,1462193,1332225,1472214,1482168,1492179,1302275,1312153,1322203];
var costitem3 = 4310091;
var itemCount3 = [4,12,24,40,60,120];
var choose3 = 0

//FFN防具
var name4 = ["黄阶下品","黄阶中品","黄阶上品","玄阶下品","玄阶中品","玄阶上品","地阶下品","地阶中品","地阶上品","天阶下品","天阶中品","天阶上品","天阶极品","亘古神器"];
var itemList4 = [1003797,1003798,1003799,1003800,1003801,1062165,1062166,1062167,1062168,1062169,1042254,1042255,1042256,1042257,1042258];
var costitem4 = 4310091;
var itemCount4 = [2,4,6,8,10,12,16,20,24,28,32,36,40,80];
var choose4 = 0

//PB饰品
var itemList5 = [1012532,1022144];
var costitem5 = 4310038;
var choose5 = 0
var give5 = 5

var haveitem = false
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
	textz += "#b   萌新记得好好看说明哦，内含装备回收详细介绍#k#n\r\n"
	textz += "#L0##b装备回收说明\r\n";
	textz += "#L1##b#e单独回收#n#l\r\n";
	textz += "#L2##b#e回收全部永恒装备(注意不返还觉醒币)#n#l\r\n";
	 
	cm.sendSimple (textz);   
	}else if (status == 1) {
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
		
		if(selection == 0) {
			var string1 = "请把需要回收的装备放在第一格\r\n装备回收会返还觉醒材料\r\n永恒装备#v"+itemList2[0]+"#回收价格:#v"+costitem+"#x"+give2+"\r\nP B 饰品#v"+itemList5[0]+"#回收价格:#v"+costitem5+"#x"+give5+""
			
			cm.sendOk(string1);
			cm.dispose();
		}else if (selection == 1) {
			if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null){
				cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
				cm.dispose();
				return;
			}
			var item = cm.getInventory(1).getItem(1);
			var itemid = item.getItemId();
				for(var i = 0;i < itemList2.length;i++){
					if(itemid == itemList2[i]){	
						cm.gainItem(costitem,0 - itemCount);
						name22 = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner();
						for(var i = 0;i < name2.length;i++){
							if(name22 == name2[i]){
								cm.gainItem(costitem2,itemCount2[i])
								choose2 = itemCount2[i]
								break
							}
						}
						cm.gainItem(itemid,-1)
						if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)!=null){
							cm.sendOk("回收永恒装备失败，这件装备被卡住了。");
							cm.dispose();
							return;
						}
						cm.gainItem(costitem,give2)
						cm.sendOk("回收#b#e"+name22+"#n#k#v"+itemid+"#成功，获得#v"+costitem+"#x#b#e"+give2+"#n#k，返还#v"+costitem2+"#x#b#e"+choose2+"#n#k");
						cm.全服公告("[装备回收] : 玩家 "+cm.getPlayer().getName()+"回收永恒装备成功，获得"+give2+"枚国庆币");
						cm.dispose();
						return;
					}
				}
				for(var i = 0;i < itemList5.length;i++){
					if(itemid == itemList5[i]){	
						cm.gainItem(itemid,-1)
						if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)!=null){
							cm.sendOk("回收永恒装备失败，这件装备被卡住了。");
							cm.dispose();
							return;
						}
						cm.gainItem(costitem5,give5)
						cm.sendOk("回收#v"+itemid+"#成功，获得#v"+costitem5+"#x#b#e"+give5+"#n#k");
						cm.全服公告("[装备回收] : 玩家 "+cm.getPlayer().getName()+"回收PB饰品成功，获得"+give5+"枚PB币");
						cm.dispose();
						return;
					}
				}
				/*
				for(var i = 0;i < itemList3.length;i++){
					if(itemid == itemList3[i]){	
						cm.gainItem(costitem,0 - itemCount);
						name22 = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner();
						for(var i = 0;i < name3.length;i++){
							if(name22 == name3[i]){
								cm.gainItem(costitem3,itemCount3[i])
								choose3 = itemCount3[i]
								break
							}
						}
						cm.gainItem(itemid,-1)
						cm.gainItem(itemid,1)
						cm.sendOk("还原#b#e"+name22+"#n#k#v"+itemid+"#成功，返还#v"+costitem3+"#x#b#e"+choose3+"#n#k");
						cm.dispose();
						return;
					}
				}
				for(var i = 0;i < itemList4.length;i++){
					if(itemid == itemList4[i]){	
						cm.gainItem(costitem,0 - itemCount);
						name22 = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner();
						for(var i = 0;i < name4.length;i++){
							if(name22 == name4[i]){
								cm.gainItem(costitem4,itemCount4[i])
								choose4 = itemCount4[i]
								break
							}
						}
						cm.gainItem(itemid,-1)
						cm.gainItem(itemid,1)
						cm.sendOk("还原#b#e"+name22+"#n#k#v"+itemid+"#成功，返还#v"+costitem4+"#x#b#e"+choose4+"#n#k");
						cm.dispose();
						return;
					}
				}*/
				
				if(haveitem == false){
					cm.sendOk("#v"+itemid+"#暂时不支持回收");
					cm.dispose();
					return
				}
			
			}


		else if (selection == 2) {
			for(var i =0;i<itemList2.length;i++){
				for(var ii=0;ii<20;ii++){
					if(cm.haveItem(itemList2[i],1)){
						cm.gainItem(itemList2[i],-1)
						count2++
						sumgive = sumgive + give2
					}
				}
			}
			for(var i =0;i<itemList2.length;i++){
				for(var ii=0;ii<20;ii++){
					if(cm.haveItem(itemList2[i],ii+1)){
						bugcount2++
					}
				}
			}
			if(count2==0){
				cm.sendOk("你木得永恒装备");
				cm.dispose();
				return
			}else{
				sumgive = sumgive - (bugcount2 * give2)
				cm.gainItem(costitem,sumgive)
				var string2 = "回收成功，获得#v"+costitem+"#x#b#e"+sumgive+"#n#k"
				if(bugcount2 != 0){
					string2 += "\r\n发现"+bugcount2+"件装备卡了bug，请小退游戏"
				}
				cm.sendOk(string2);
				cm.全服公告("[装备回收] : 玩家 "+cm.getPlayer().getName()+"回收了"+count2+"个永恒装备，获得"+sumgive+"枚国庆币");
				cm.dispose();
				return
			}


		}else if (selection == 3) {
			
		}else if (selection == 4) {
		}else if (selection == 5) {
		}
    }
      }
}
        


