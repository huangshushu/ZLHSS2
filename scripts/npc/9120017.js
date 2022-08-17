

var choose = 0;
var doublechoose = Array(Array(),Array(),Array()); // all choose

// potential system.
var faildele = 0; // 失败后装备消失可能性
var stone = Array(
	//Array("低等", 4251200, 0.4, Array(30, 30, 30, 10)),
	//Array("中等", 4251201, 0.6, Array(10, 25, 45, 20)),
	Array("高等", 4251202, 0.8, Array(0 ,  5, 65, 30))
);
var clearstone = 4251202; //潜能重置物品
var primary = 0.8; // 装备主要潜能开发概率，总为1，其余是次要属性概率
var provelist = Array("力量", "敏捷", "智力", "运气", "物理攻击力", "魔法攻击力", "物理防御力", "魔法防御力", "命中率", "回避率", "HPmax", "MPmax");
var powerlist = Array("B级", "A级", "S级", "L级", "M级", "K级");
var mirroritem = [1442078, 1402062, 1472086, 1452071, 1492037, 1002926, 1002927, 1132004, 1022060, 1112426, 1002895, 1002902, 1032032, 1082179, 1042076, 1062074, 1122018, 1102207, 1051172, 1050127, 1092035]; // mirror
var mirrortop = 2; // 镜像最大等级
var mtop = 2; // M属性 最大等级
var cashitem = [1062073, 1062053, 1042107, 1012131, 1032034, 1702155, 1040132, 1042103, 1042150, 1042077, 1042076, 1112119, 1112229, 1062074, 1102218, 1002888, 1002890]; // 可潜点装
var ringitem = [1112907, 1112426]; // 可潜戒指
var protect = 4031868;// 防护宝石
var powersum = Array(
	Array(20, 50, 30 ),
	Array( 0, 40, 60 ),
	Array( 0,  0, 100),
	Array( 0,  0, 100)
);
var property = Array(
	Array(  // general
		Array( // 首要的
			Array( 8, 15), // b
			Array(18, 25), // a
			Array(25, 32), // s
			Array(43, 50)  // l
		),
		Array( // secondary
			Array( 5, 8),
			Array( 8, 12),
			Array(12, 15),
			Array(18, 20)
		),
		Array( // thirdary
			Array( 200,  500),
			Array( 500, 1500),
			Array(1000, 3000),
			Array(3000, 5000)
		)
	),
	Array( // cashitem
		Array( // 首要的
			Array( 3,  5), // b
			Array( 8, 10), // a
			Array(12, 15), // s
			Array(18, 25)  // l
		),
		Array( // secondary
			Array(1,  3),
			Array(2,  5),
			Array(5,  8),
			Array(8, 10)
		),
		Array( // thirdary
			Array(200,  500),
			Array(300,  800),
			Array(500, 1000),
			Array(800, 1500)
		)
	),
	Array( // ringitem
		Array( // 首要的
			Array( 3,  5), // b
			Array( 8, 10), // a
			Array(12, 15), // s
			Array(18, 25)  // l
		),
		Array( // secondary
			Array( 1,  3),
			Array( 2,  5),
			Array( 5, 10),
			Array(10, 15)
		),
		Array( // thirdary
			Array(100,  300),
			Array(200,  500),
			Array(400,  800),
			Array(600, 1200)
		)
	)
);
var mirrchans = 1;
var mirrcombi = 4001001; // 镜子
var crystal = [
	[4251200,  8, 4251201,  1],
	[4251200, 75, 4251201, 10],
	[4251201,  3, 4251202,  1],
	[4251201, 25, 4251202, 10],
	[4251202,  1, 4031868,  1]
];

var getmax = -1;
function showquantity(quantity) {
	if (getmax == -1) {
		for(var i = 0; i < crystal.length; i++) {
			if (crystal[i][1] > getmax) {
				getmax = crystal[i][1];
			}
		}
	}
	var len = number_format(getmax).length;
	var shw = number_format(quantity);
	var nle = shw.length;
	if (nle < len) {
		var ch = len - nle;
		for(var j = 0; j < ch; j++) {
			shw += " ";
		}
	}
	return shw;
}

function rand( min, max ) {
	
	if ( !max ) {
		max = min;
		min = 0;
	}
	
	var mint = Math.floor(min + Math.random() * (max - min + 1));
	return mint;
}

function isMirror( itemid ) {
	for( var i = 0; i < mirroritem.length; i++ ) {
		if ( itemid == mirroritem[i] ) {
			return true;
		}
	}
	return false;
}

function isRingItem( itemid ) {
	for( var i = 0; i < ringitem.length; i++ ) {
		if ( itemid == ringitem[i] ) {
			return true;
		}
	}
	return false;
}

function isCashItem( itemid ) {
	for( var i = 0; i < cashitem.length; i++ ) {
		if ( itemid == cashitem[i] ) {
			return true;
		}
	}
	return false;
}

function getrandom( arrayitem ) {

	var totalsum = 0;
	for( var i = 0; i < arrayitem.length; i++ ) {
		totalsum += arrayitem[i];
	}
	
	var cur = 0;
	var randsum = rand(1, totalsum);
	for ( var j = 0; j < arrayitem.length; j++) {
		if ( randsum > cur && randsum <= cur + arrayitem[j]) {
			return j;
		}
		cur += arrayitem[j];
	}
	
	return 0;
}

function makeEquip( sum, type, equip ) {
	
	switch( type ) {
		case 0:
			var sum = equip.getStr() + sum;
			equip.setStr(sum < 0 ? 0 : sum);
			break;
		case 1:
			var sum = equip.getDex() + sum;
			equip.setDex(sum < 0 ? 0 : sum);
			break;
		case 2:
			var sum = equip.getInt() + sum;
			equip.setInt(sum < 0 ? 0 : sum);
			break;
		case 3:
			var sum = equip.getLuk() + sum;
			equip.setLuk(sum < 0 ? 0 : sum);
			break;
		case 4:
			var sum = equip.getWatk() + sum;
			equip.setWatk(sum < 0 ? 0 : sum);
			break;
		case 5:
			var sum = equip.getMatk() + sum;
			equip.setMatk(sum < 0 ? 0 : sum);
			break;
		case 6:
			var sum = equip.getWdef() + sum;
			equip.setWdef(sum < 0 ? 0 : sum);
			break;
		case 7:
			var sum = equip.getMdef() + sum;
			equip.setMdef(sum < 0 ? 0 : sum);
			break;
		case 8:
			var sum = equip.getAcc() + sum;
			equip.setAcc(sum < 0 ? 0 : sum);
			break;
		case 9:
			var sum = equip.getAvoid() + sum;
			equip.setAvoid(sum < 0 ? 0 : sum);
			break;
		case 10:
			var sum = equip.getHp() + sum;
			equip.setHp(sum < 0 ? 0 : sum);
			break;
		case 11:
			var sum = equip.getMp() + sum;
			equip.setMp(sum < 0 ? 0 : sum);
			break;
		default: 
			break;
	}
	return;
}

function canChaos(items) {
	var MapleItem = MapleItemInformationProvider.getInstance();
	for (var i in items) {
		var itemid = items[i];
		if ( isMirror(itemid)) { //  || MapleItem.MPower(itemid) || MapleItem.KPower(itemid) 
			return false;
		}
	}
	return true;
}

function number_format(num) {
    num = num == null ? "" : num.toString();
    num = num.split("").reverse();
    var res = "";
    var n = 0;
    for(var i = 0; i < num.length; i++) {
        n++
        res += (n % 3 == 0 && num[i + 1] != null) ? num[i]+ "," : num[i] ;
    }
    res = res.split("").reverse().join("");
    return res;
}

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
		if (mode == 1) {
			status++;
		} else {
			cm.dispose();
			return;
		}
		if (status == 0) {
			cm.sendSimple("亲爱的#h #，你需要我提供什么服务：#b\r\n\r\n#L0#装备潜能#l\r\n#L1#混沌镜像#l\r\n");//#L1#混沌镜像(更改道具外观) #L2#水晶锻造#l
		} else if (status == 1) {
			choose = selection;
			if ( choose == 0 ) {
				cm.sendSimple("哈，也许你需要对自己的装备进行一些强化呢...\r\n\r\n#r注意：把需要操作的装备放在装备栏第一格。#b\r\n\r\n#L0#潜能开发#l\r\n#L1#潜能重置#l\r\n#L2#查看潜能#l\r\n");//#L3#特殊潜能 #r[new]#b#l
			} else if ( choose == 1 ) {
				cm.sendNext("也许你对新型技术特别有兴趣呢？最新的技术#b混沌镜像#k。它是面对#b两个同种类装备#k的技术，它将#r次要装备#k的属性生成镜像，并且#b重置#k到#r主要装备#k上去。#b[成功率："+(mirrchans * 100)+"%]#k\r\n若成功，主要装备属性得到重置并且次要装备将消失。\r\n这项技术需要使用 #v"+mirrcombi+"# #b#t"+mirrcombi+"##k来生成装备属性镜像。\r\n\r\n#b注意：将#r主要装备#b放在装备栏#r第一格#b且#r次要装备#b放在#r第二格#b。");
			} else if ( choose == 2 ) {
				var str = "";
				for( var i = 0; i < crystal.length; i++ ) {
					str += "#L"+i+"##b#z"+crystal[i][0]+"##k#r x "+ showquantity(crystal[i][1]) +"#k 锻造 #b#z"+crystal[i][2]+"##k#r x "+ showquantity(crystal[i][3]) +"#k#l\r\n";
				}
				cm.sendSimple("哈哈，你想用你的水晶来锻造些什么东西呢？\r\n\r\n"+ str);
			}
		} else if (status == 2) {
			if ( choose == 0 ) {
				doublechoose[choose][0] = selection;
				var dc = doublechoose[choose][0];
				if ( dc == 0 ) { // potential develop
					var options = "";
					for( var i = 0; i < stone.length; i++  ) {
						options += "#L"+i+"#["+ stone[i][0] +"] 使用 #r#t"+stone[i][1]+"##b 开发装备潜能#l\r\n";
					}
					cm.sendSimple("你想用什么方法开发装备潜能呢？#b\r\n\r\n"+options);
				} else if ( dc == 1 ) { // potential clear
					var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
					if ( !item ) {
						cm.sendOk("请将需要操作的装备放到装备栏 #b第一格#k");
						cm.dispose();
						return;
					}
					var itemid = item.getItemId();
					cm.sendYesNo("需要消耗1个 #v"+ clearstone +"# #b#t"+ clearstone +"##k 了吗？\r\n它将会将你的装备栏#r第一格#k装备#r[#t"+ itemid +"#]#k的潜能清除。\r\n\r\n#v"+itemid+"# #b#t"+ itemid +"##k");
				} else if ( dc == 2 ) { // potential query
					var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
					if ( !item ) {
						cm.sendOk("请将需要操作的装备放到装备栏 #b第一格#k");
					} else {
						var equip = item.copy();
						var power = equip.getEnhance();
						if ( power < 1 ) {
							cm.sendOk("暂未潜能的装备");
						} else if (power == 5 || power == 6) {
							cm.sendOk("装备道具被一股强大的力量覆盖着，无法查看潜能属性...");
						} else {
							var str = "";
							var parray = (equip.getPotential() + "").split("|");
							var itemid = item.getItemId();
							var plst = new Array(Array(parray[0],parray[1]),Array(parray[2],parray[3]),Array(parray[4],parray[5]));
							var mirror = false;
							for( var i = 0; i < plst.length; i++ ) {
								if ( plst[i][0] != 0 && plst[i][1] != 0 ) {
									var linestr = "增加 "+ provelist[plst[i][0] - 1] +"："+ plst[i][1];
									str += "#r"+linestr+"#k\r\n";
									if ( isMirror(itemid) ) {
										mirror = true;
										str += "#b"+linestr+"#k\r\n";
									}
								}
							}
							cm.sendOk("#v"+ itemid +"# #b#t"+ itemid +"##k #r["+ powerlist[power - 1] +"]#k "+(mirror ? "#b镜像潜能#k" : "")+"\r\n\r\n"+str);
						}
					}
					cm.dispose();
				} else if ( dc == 3 ) { // potential describe
					cm.sendSimple("潜能系统可以对装备物品进行潜能，但不包括现金装备、戒指以及骑宠的潜能。但在部分装备物品的力量下，其中有部分特殊的现金装备或戒指可以进行潜能。另外还有更加疯狂的镜像潜能。#b\r\n\r\n#L0#点装潜能#l\r\n#L1#戒指潜能#l\r\n#L2#镜像潜能#l");
				}
			} else if ( choose == 1 ) {
				var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
				var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2);
				if ( !item1 || !item2 ) {
					cm.sendOk("请将主要装备放在装备栏第一格，次要装备放在第二格。");
					cm.dispose();
					return;
				}
				var equip1 = item1.copy();
				var equip2 = item2.copy();
				var itemid1 = item1.getItemId();
				var itemid2 = item2.getItemId();
				var itemid = [itemid1, itemid2];
				if ( equip1.getLocked() + equip2.getLocked() > 0 ) {
					cm.sendOk("你的装备之一处于锁定装备，无法混沌镜像。");
					cm.dispose();
					return;
				}
				if ( itemid1 == itemid2 ) {
					cm.sendOk("两个相同的装备无法混沌镜像。");
					cm.dispose();
					return;
				}
				if ( !canChaos([itemid1, itemid2]) ) {
					cm.sendOk("你所操作的装备拥有特殊能力，无法混沌镜像。");
					cm.dispose();
					return;
				}
				if ( Math.floor(itemid1 / 1000) != Math.floor(itemid2 / 1000) ) {
					cm.sendOk("两个不同种类的装备无法混沌镜像。");
					cm.dispose();
					return;
				}
				for( var i = 0; i < itemid.length; i++ ) {
					if ( GameConstants.isDrive(itemid[i]) || GameConstants.isRing(itemid[i]) || MapleItemInformationProvider.getInstance().isCash(itemid[i])) {// || GameConstants.isPachInko(itemid[i]) 
						cm.sendOk("你所操作的装备无法#b混沌镜像#k");
						cm.dispose();
						return;
					}
				}
				cm.sendYesNo("你确定要将#b#t"+ itemid2 +"##k的属性镜像重置到#b#t"+ itemid1 +"##k上吗？\r\n若#b混沌镜像#k成功，#b#t"+ itemid2 +"##k将消失。\r\n#v"+ itemid1 +"# #r[主] #b#t"+ itemid1 +"##k   #v"+ itemid2 +"# #r[次] #b#t"+ itemid2 +"##k");
			} else if ( choose == 2 ) {
				doublechoose[choose][0] = selection;
				var dc = doublechoose[choose][0];
				cm.sendYesNo("你确定要用#r#e"+ crystal[dc][1] +"#n#k个#b#t"+ crystal[dc][0] +"##k来锻造#r#e"+ crystal[dc][3] +"#n#k个#b#t"+ crystal[dc][2] +"##k吗？");
			}
		} else if ( status == 3 ) {
			if ( choose == 0 ) {
				var dc = doublechoose[choose][0];
				if ( dc == 0 ) { // potential develop
					doublechoose[choose][1] = selection;
					var ds = doublechoose[choose][1];
					var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
					if ( !item ) {
						cm.sendOk("请将需要操作的装备放到装备栏 #b第一格#k");
						cm.dispose();
						return;
					}
					var itemid = item.getItemId();
					var pretext = "你确定要使用4个#b#t"+ stone[ds][1] +"##k来开发#r[#t"+ itemid +"#]#k的潜能吗？\r\n#b[成功率："+ (stone[ds][2] * 100) +"%]#k\r\n";
					//pretext += cm.getPlayer().hasProphecy("potengood") ? "#d装备周围笼罩着预言的力量，将不会被损坏。" : "#r注意：潜能开发失败时，有"+ (faildele * 100) +"%概率导致装备消失。#k";hasProphecy没有
					pretext += "#r注意：潜能开发失败时，有"+ (faildele * 100) +"%概率导致装备消失。#k";
					pretext += "\r\n\r\n#v"+ itemid +"# #b#t"+ itemid +"##k";
					if (cm.haveItem(protect)) {//if ( cm.haveItem(protect) && !cm.getPlayer().hasProphecy("potengood") ) {
						cm.sendSimple(pretext +"\r\n\r\n#b系统检测到你拥有 #v"+protect+"# #r#t"+protect+"##b，它可以防止你的装备消失。你是否要使用呢？\r\n\r\n#L0#使用#l\r\n#L1#不使用#l");
					} else {
						cm.sendYesNo(pretext);
					}
				} else if ( dc == 1 ) { // potential clear
					var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
					equip = item.copy();
					if ( equip.getEnhance() < 1 ) {
						cm.sendOk("暂未潜能的装备，无法重置潜能。");
					//} else if ( equip.getPotential1lock() ) {
						//cm.sendOk("你的装备潜能已被锁定，无法进行潜能操作。");
					//} else if ( equip.getLocked() > 0 ) {
						//cm.sendOk("你的装备处于锁定状态下，无法重置潜能。");
					} else if ( !cm.haveItem(clearstone,1) ) {
						cm.sendOk("你还没有#b#z"+ clearstone +"##k，无法重置潜能。");
					} else {
						cm.gainItem(clearstone, -1);
						MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
						equip.setEnhance(0);
						var parray = (equip.getPotential() + "").split("|");
						var plst = new Array(Array(parray[0],parray[1]),Array(parray[2],parray[3]),Array(parray[4],parray[5]));
						var itemid = item.getItemId();
						for( var i = 0; i < plst.length; i++ ) {
							if ( plst[i][0] != 0 && plst[i][1] != 0 ) {
								var sum  = parseInt(plst[i][1]);
								var type = parseInt(plst[i][0]) - 1;
								makeEquip( -(isMirror(itemid) ? sum * 2 : sum),  type, equip);
							}
						}
						equip.setPotential("");
						MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), equip, true);
						cm.sendOk("装备重置潜能成功！");
					}
					cm.dispose();
				} else if ( dc == 3 ) { // potential describe
					if ( selection == 0 ) {
						var str = "";
						for( var i  = 0; i < cashitem.length; i++ ) {
							str += "#v"+ cashitem[i] +"# ";
						}
						cm.sendOk("以下现金装备可以开发潜能：\r\n\r\n"+ str);
					} else if ( selection == 1 ) {
						var str = "";
						for( var i  = 0; i < ringitem.length; i++ ) {
							str += "#v"+ ringitem[i] +"# ";
						}
						cm.sendOk("以下戒指可以开发潜能：\r\n\r\n"+ str);
					} else if ( selection == 2 ) {
						var str = "";
						for( var i  = 0; i < mirroritem.length; i++ ) {
							str += "#v"+ mirroritem[i] +"# ";
						}
						cm.sendOk("你相信时光机吗？但它的确是事实。在冒险世界的远古时期，冒险家们通过玩具塔底的时间裂缝，使得时间颠倒，从而复制装备的属性。这种技术一直沿用到现在，装备可以完整得开发出#b镜像能力#k，但是由于拥有镜像属性的装备并不能强化到现代技术，所以镜像潜能最高级别只能定格到#b"+powerlist[mirrortop]+"#k。\r\n以下装备可以开发镜像潜能：\r\n\r\n"+ str);
					}
					cm.dispose();
				}
			} else if ( choose == 1 ) {
				if ( !cm.haveItem(mirrcombi) ) {
					cm.sendOk("你还没有#b#t"+mirrcombi+"##k，无法混沌镜像。");
				} else {
					cm.gainItem(mirrcombi, -1);
					if ( Math.random() >= mirrchans ) {
						cm.sendOk("次要装备在属性镜像时发生错误，导致混沌失败。");
					} else {
						var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
						var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2);
						var equip1 = item1.copy();
						var equip2 = item2.copy();
						MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
						MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2, 1, true);
						equip1.setStr(equip2.getStr());
						equip1.setDex(equip2.getDex());
						equip1.setInt(equip2.getInt());
						equip1.setLuk(equip2.getLuk());
						equip1.setHp(equip2.getHp());
						equip1.setMp(equip2.getMp());
						equip1.setWatk(equip2.getWatk());
						equip1.setMatk(equip2.getMatk());
						equip1.setWdef(equip2.getWdef());
						equip1.setMdef(equip2.getMdef());
						equip1.setAcc(equip2.getAcc());
						equip1.setAvoid(equip2.getAvoid());
						equip1.setHands(equip2.getHands());
						equip1.setSpeed(equip2.getSpeed());
						equip1.setJump(equip2.getJump());
						equip1.setViciousHammer(equip2.getViciousHammer());
						equip1.setUpgradeSlots(equip2.getUpgradeSlots());
						equip1.setLevel(equip2.getLevel());
						equip1.setEnhance(equip2.getEnhance());
						equip1.setPotential(equip2.getPotential());
						MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), equip1, true);
						cm.sendOk("混沌成功");
					}
				}
				cm.dispose();
			} else if ( choose == 2 ) {
				var dc = doublechoose[choose][0];
				var gc = crystal[dc];
				if ( cm.haveItem(gc[0],gc[1]) ) {
					cm.gainItem(gc[0], -gc[1]);
					cm.gainItem(gc[2], gc[3]);
					cm.sendOk("锻造成功，欢迎下次再来！");
				} else {
					cm.sendOk("锻造失败，你的#b#t"+ gc[0] +"##k数量不够。");
				}
				cm.dispose();
			}
		} else if ( status == 4 ) {
			if ( choose == 0 ) {
				var dc = doublechoose[choose][0];
				if ( dc == 0 ) { // potential develop final
					var ds = doublechoose[choose][1];
					var pc = selection == 0 ? true : false ;
					var item = item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1);
					if ( !item ) {
						cm.getPlayer().dropMessage("System error.");
						cm.dispose();
						return;
					}
					var equip = item.copy();
					var itemid = item.getItemId();
					if ( !cm.haveItem(stone[ds][1],4) ) {
						cm.sendOk("你还没有#b#t"+ stone[ds][1] +"##k，无法开发潜能。");
					} else if ( cm.getMeso() <= 20000000 ) {
						cm.sendOk("你的钱不够。");
					} else if ( equip.getEnhance() > 0 ) {
						cm.sendOk("你的装备已经开发了潜能。");
					//} else if ( equip.getPotential1lock() ) {
						//cm.sendOk("你的装备潜能已被锁定，无法进行潜能操作。");
					} else if ( GameConstants.isDrive(itemid) || (GameConstants.isRing(itemid) && !isRingItem(itemid)) || (MapleItemInformationProvider.getInstance().isCash(itemid) && !isCashItem(itemid))) {// || ii.isPachInko(itemid) 
						cm.sendOk("你所操作的装备无法开发潜能。");
					
					} else {
						cm.gainItem(stone[ds][1], -4);
						cm.gainMeso(-20000000);
						if ( pc ) {
							cm.gainItem(protect, -1);
						}
						MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
						var randsuccess = Math.random();
						if ( randsuccess >= stone[ds][2] ) { // fail
							if ( pc ) {//if ( pc || cm.getPlayer().hasProphecy("potengood") ) {
								MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), equip, true);
								cm.sendOk( pc ? "装备潜能开发失败，但#b#t"+ protect +"##k保护了你的装备。" : "装备潜能开发失败。但预言实现了，装备没有损坏。");
							} else {
								if ( Math.random() > faildele ) {
									MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), equip, true);
									cm.sendOk("装备潜能开发失败，但装备没有消失。");
								} else {
									cm.sendOk("装备潜能开发失败，装备消失了。");
								}
							}
						} else { // success
							var getpower = getrandom(stone[ds][3]);
							var suminpow = getrandom(powersum[getpower]);
							var properti = Array();
							var weapon = GameConstants.isWeapon(itemid) ? true : false;
							var getpropt = Array(Array(0, 0), Array(0, 0), Array(0, 0));
							if ( isMirror(itemid) && getpower > mirrortop ) {
								getpower = mirrortop;
							}
							if ( getpower > mtop) { //MapleItemInformationProvider.getInstance().MPower(itemid) &&
								getpower = mtop;
							}
							if ( isCashItem(itemid) ) {
								properti[0] = property[1][0][getpower];
								properti[1] = property[1][1][getpower];
								properti[2] = property[1][2][getpower];
							} else if ( isRingItem(itemid) ) {
								properti[0] = property[2][0][getpower];
								properti[1] = property[2][1][getpower];
								properti[2] = property[2][2][getpower];
							} else {
								properti[0] = property[0][0][getpower];
								properti[1] = property[0][1][getpower];
								properti[2] = property[0][2][getpower];
							}
							for( var i = 0; i <= suminpow; i++ ) {
								// watk:4 matk:5
								var lrand = rand(0, weapon ? 9 : 11);
								var gesum = 0;
								if ( Math.random() <= primary ) { // getprimary
									if ( weapon ) { // weapon
										lrand = 4;
									} else {
										// get in (0,3) (6,11)
										var tmprand = rand(0, 9);
										if ( tmprand >= 4 ) {
											tmprand += 2;
										}
										lrand = tmprand;
									}
								} else {
									if ( weapon ) { // weapon
										// get in (0,3) (6,7)
										var tmprand = rand(0, 7);
										if ( tmprand >= 4 ) {
											tmprand += 2;
										}
										lrand = tmprand;
									} else {
										lrand = rand(4, 5);
									}
								}
								if ( lrand >= 4 && lrand <= 5 && weapon ) {
									if ( equip.getWatk() >= equip.getMatk() ) {
										lrand = 4;
									} else {
										lrand = 5;
									}
								}
								if ( weapon ) {
									if ( lrand >= 4 && lrand <= 5 ) {
										gesum = rand(properti[0][0], properti[0][1]);
									} else {
										gesum = rand(properti[1][0], properti[1][1]);
									}
								} else {
									if ( lrand >= 4 && lrand <= 5 ) {
										gesum = rand(properti[1][0], properti[1][1]);
									} else if ( lrand > 9 ) {
										gesum = rand(properti[2][0], properti[2][1]);
									} else {
										gesum = rand(properti[0][0], properti[0][1]);
									}
								}
								getpropt[i][0] = lrand;
								getpropt[i][1] = gesum;
							}
							var output = "";
							var pteam  = Array(Array(0, 0), Array(0, 0), Array(0, 0));
							for( var j = 0; j < getpropt.length; j++ ) {
								if ( getpropt[j][1] > 0 ) {
									//if (ii.isOverall(itemid)) {
									//	getpropt[j][1] *= 2;
									//}
									var mirror = isMirror(itemid);
									makeEquip( mirror ? getpropt[j][1] * 2 : getpropt[j][1], getpropt[j][0], equip );
									var linestr = "增加 "+ provelist[getpropt[j][0]] +"："+ getpropt[j][1];
									output += "#r"+ linestr +"#k\r\n";
									if ( mirror ) {
										output += "#b"+ linestr +"#k\r\n";
									}
									pteam[j] = Array(getpropt[j][0] + 1, getpropt[j][1]);
								}
							}
							equip.setEnhance(getpower + 1);
							equip.setPotential(pteam[0].join("|")+"|"+pteam[1].join("|")+"|"+pteam[2].join("|"));
							MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), equip, true);
							cm.sendOk("装备"+ (mirror ? "#b镜像潜能#k" : "潜能") +"成功！开发的潜能如下：#r["+ powerlist[getpower] +"]#k\r\n\r\n\r\n"+ output);
						}
					}
					cm.dispose();
				}
			}
		}
	}
}	