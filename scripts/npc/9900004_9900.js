importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[装备还原]-(还原系统)";//副本名称
var costitem = 4000463;
var itemCount = 10;

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
var name5 = ["可爱品克缤","狂乱品克缤","疯狂品克缤","疯癫品克缤","疯魔品克缤","魔怔品克缤","混沌品克缤"];
var itemList5 = [1012532,1022144];
var costitem5 = 4310038;
var itemCount5 = [1,5,13,25,41,61,121];
var choose5 = 0

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
	textz += "#b   萌新记得好好看说明哦，内含超级还原详细介绍#k#n\r\n"
	textz += "#L0##b超级还原说明\r\n";
	textz += "#L1##b#e开始超级还原#n#l\r\n";
	 
	cm.sendSimple (textz);   
	}else if (status == 1) {
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
		
		if(selection == 0) {
			var string1 = "超级还原一次消耗"+itemCount+"个#v"+costitem+"#\r\n目前支持#b：\r\n#v1312037#永恒武器、盾牌、防具；\r\n#v1113072#贝勒德首饰；\r\n#v1432167##v1003801#FFN武器、防具；\r\n#v1012532#PB饰品；\r\n#v1112743#累计赞助赠送戒指；\r\n#v1113096#狐狸戒指\r\n#k觉醒过的装备返还觉醒材料"
			
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
			
			if(cm.haveItem(costitem, itemCount)) {
				for(var i = 0;i < itemlist1.length;i++){
					if(itemid == itemlist1[i]){
						cm.gainItem(costitem,0 - itemCount);
						name22 = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner();
						cm.gainItem(itemid,-1);
						choose = old1[i]
						if(choose == 0){
							cm.gainItem(itemid,1);
						}
						if(choose == 1){
							cm.给属性装备(itemid,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
						}
						if(choose == 2){
							cm.给属性装备(itemid,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
						}
						if(choose == 3){
							cm.给属性装备(itemid,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
							for(var i = 0;i < name2.length;i++){
								if(name22 == name1[i]){
									cm.gainItem(costitem1,itemCount1[i])
									choose = itemCount1[i]
									break
								}
							}	
						}
						haveitem = true
						cm.sendOk("还原#v"+itemid+"#成功");
						cm.全服黄色喇叭("[超级还原] : ["+cm.getPlayer().getName()+"]还原[贝勒德饰品]成功！")
						cm.dispose();
						return;
					}
				}
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
						cm.gainItem(itemid,1)
						cm.sendOk("还原#b#e"+name22+"#n#k#v"+itemid+"#成功，返还#v"+costitem2+"#x#b#e"+choose2+"#n#k");
						cm.全服黄色喇叭("[超级还原] : ["+cm.getPlayer().getName()+"]还原[永恒装备]成功！")
						cm.dispose();
						return;
					}
				}
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
						cm.全服黄色喇叭("[超级还原] : ["+cm.getPlayer().getName()+"]还原[法弗纳武器]成功！")
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
						cm.全服黄色喇叭("[超级还原] : ["+cm.getPlayer().getName()+"]还原[法弗纳防具]成功！")
						cm.dispose();
						return;
					}
				}
				for(var i = 0;i < itemList5.length;i++){
					if(itemid == itemList5[i]){	
						cm.gainItem(costitem,0 - itemCount);
						name22 = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner();
						for(var i = 0;i < name5.length;i++){
							if(name22 == name5[i]){
								cm.gainItem(costitem5,itemCount5[i])
								choose5 = itemCount5[i]
								break
							}
						}
						cm.gainItem(itemid,-1)
						cm.gainItem(itemid,1)
						cm.sendOk("还原#b#e"+name22+"#n#k#v"+itemid+"#成功，返还#v"+costitem5+"#x#b#e"+choose5+"#n#k");
						cm.全服黄色喇叭("[超级还原] : ["+cm.getPlayer().getName()+"]还原[PB饰品]成功！")
						cm.dispose();
						return;
					}
				}
				if(itemid == 1142679){
					cm.gainItem(1142679,-1)
					cm.给属性装备(1142679, 0, 0, 150, 150, 150, 150, 5000, 5000, 150, 150,0, 0, 0, 0, 0, 0, 0);
					cm.sendOk("#v"+itemid+"#调整属性成功");
					cm.dispose();
					return
				}
				if(itemid == 1142544){
					cm.gainItem(1142544,-1)
					cm.给属性装备(1142544, 0, 0, 300, 300, 300, 300, 8000, 8000, 300, 300,0, 0, 0, 0, 20, 20, 0);
					cm.sendOk("#v"+itemid+"#调整属性成功");
					cm.dispose();
					return
				}
				if(itemid == 1142409){
					cm.gainItem(1142409,-1)
					cm.给属性装备(1142409, 0, 0, 500, 500, 500, 500, 10000, 10000, 500, 500,0, 0, 0, 0, 40, 40, 0);
					cm.sendOk("#v"+itemid+"#调整属性成功");
					cm.dispose();
					return
				}
				if(itemid == 1142557){
					cm.gainItem(1142557,-1)
					cm.给属性装备(1142557, 0, 0, 1000, 1000, 1000, 1000, 15000, 15000, 1000, 1000,0, 0, 0, 0, 40, 40, 0);
					cm.sendOk("#v"+itemid+"#调整属性成功");
					cm.dispose();
					return
				}
				if(itemid == 1112743){
					cm.gainItem(1112743,-1)
					cm.gainItem(costitem,0 - itemCount);
					cm.给属性装备(1112743, 0, 0, 200, 200, 200, 200, 500, 500, 200, 200,0, 0, 0, 0, 20, 20, 0);
					cm.sendOk("#v"+itemid+"#还原成功");
					cm.全服黄色喇叭("[超级还原] : ["+cm.getPlayer().getName()+"]还原[赞助戒指]成功！")
					cm.dispose();
					return
				}
				if(itemid == 1113034){
					cm.gainItem(1113034,-1)
					cm.gainItem(costitem,0 - itemCount);
					cm.给属性装备(1113034, 0, 0, 300, 300, 300, 300, 500, 500, 300, 300,0, 0, 0, 0, 40, 40, 0);
					cm.sendOk("#v"+itemid+"#还原成功");
					cm.全服黄色喇叭("[超级还原] : ["+cm.getPlayer().getName()+"]还原[赞助戒指]成功！")
					cm.dispose();
					return
				}
				if(itemid == 1113070){
					cm.gainItem(1113070,-1)
					cm.gainItem(costitem,0 - itemCount);
					cm.给属性装备(1113070, 0, 1, 500, 500, 500, 500, 500, 500, 500, 500,0, 0, 0, 0, 40, 40, 0);
					cm.sendOk("#v"+itemid+"#还原成功");
					cm.全服黄色喇叭("[超级还原] : ["+cm.getPlayer().getName()+"]还原[赞助戒指]成功！")
					cm.dispose();
					return
				}
				if(itemid == 1113096){
					cm.gainItem(1113096,-1)
					cm.gainItem(costitem,0 - itemCount);
					cm.给属性装备(1113096,0,0,110,110,110,110,200,200,110,110,0,0,0,0,0,0,0);
					cm.sendOk("#v"+itemid+"#还原成功");
					cm.全服黄色喇叭("[超级还原] : ["+cm.getPlayer().getName()+"]还原[狐狸戒指]成功！")
					cm.dispose();
					return
				}
				if(haveitem == false){
					cm.sendOk("#v"+itemid+"#暂时不支持还原");
					cm.dispose();
				}
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


