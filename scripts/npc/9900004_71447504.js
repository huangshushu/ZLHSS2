/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = 0;
var 战士 = 80;
var 弓箭手 = 100;
var 魔法师 = 100;
var 海盗 = 100;
var 飞侠 = 100;
//物品ID，抽奖概率，物品数量，(0/不广播，1广播)
var itemList =
        Array(	
				Array(1003172, 战士/2, 1, 1),
                Array(1052314, 战士/2, 1, 1),
				Array(1072485, 战士/2, 1, 1),
				Array(1082295, 战士/2, 1, 1),
				Array(1102275, 战士/2, 1, 1),
				Array(1302152, 战士, 1, 1),
				Array(1312065, 战士, 1, 1),
				Array(1322096, 战士, 1, 1),
				Array(1402095, 战士, 1, 1),
				Array(1412065, 战士, 1, 1),
				Array(1422066, 战士, 1, 1),
				Array(1432086, 战士, 1, 1),
				Array(1442116, 战士, 1, 1),
				Array(1302152, 战士, 1, 1),
				Array(1312065, 战士, 1, 1),
				Array(1322096, 战士, 1, 1),
				Array(1402095, 战士, 1, 1),
				Array(1412065, 战士, 1, 1),
				Array(1422066, 战士, 1, 1),
				Array(1432086, 战士, 1, 1),
				Array(1442116, 战士, 1, 1),
				Array(1003174, 弓箭手/2, 1, 1),
				Array(1052316, 弓箭手/2, 1, 1),
				Array(1072487, 弓箭手/2, 1, 1),
				Array(1082297, 弓箭手/2, 1, 1),
				Array(1102277, 弓箭手/2, 1, 1),
				Array(1452111, 弓箭手, 1, 1),
				Array(1462099, 弓箭手, 1, 1),
				Array(1452111, 弓箭手, 1, 1),
				Array(1462099, 弓箭手, 1, 1),
				Array(1452111, 弓箭手, 1, 1),
				Array(1462099, 弓箭手, 1, 1),
				Array(1003173, 魔法师/2, 1, 1),
				Array(1052315, 魔法师/2, 1, 1),
				Array(1072486, 魔法师/2, 1, 1),
				Array(1082296, 魔法师/2, 1, 1),
				Array(1102276, 魔法师/2, 1, 1),
				Array(1372084, 魔法师, 1, 1),
				Array(1382104, 魔法师, 1, 1),
				Array(1372084, 魔法师, 1, 1),
				Array(1382104, 魔法师, 1, 1),
				Array(1372084, 魔法师, 1, 1),
				Array(1382104, 魔法师, 1, 1),
				Array(1003175, 飞侠/2, 1, 1),
				Array(1052317, 飞侠/2, 1, 1),
				Array(1072488, 飞侠/2, 1, 1),
				Array(1082298, 飞侠/2, 1, 1),
				Array(1102278, 飞侠/2, 1, 1),
				Array(1332130, 飞侠, 1, 1),
				Array(1472122, 飞侠, 1, 1),
				Array(1332130, 飞侠, 1, 1),
				Array(1472122, 飞侠, 1, 1),
				Array(1332130, 飞侠, 1, 1),
				Array(1472122, 飞侠, 1, 1),
				Array(1003176, 海盗/2, 1, 1),
				Array(1052318, 海盗/2, 1, 1),
				Array(1072489, 海盗/2, 1, 1),
				Array(1082299, 海盗/2, 1, 1),
				Array(1102279, 海盗/2, 1, 1),
				Array(1482084, 海盗, 1, 1),
				Array(1482084, 海盗, 1, 1),
				Array(1482084, 海盗, 1, 1),
				Array(1482084, 海盗, 1, 1),
				Array(1492085, 海盗, 1, 1),
				Array(1492085, 海盗, 1, 1),
				Array(1492085, 海盗, 1, 1),
				Array(1492085, 海盗, 1, 1)
                );

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	var 战士 = 100;
	var 弓箭手 = 100;
	var 魔法师 = 100;
	var 海盗 = 100;
	var 飞侠 = 100;	
	if((cm.判断职业()>=100 && cm.判断职业()<200) || (cm.判断职业()>=1100 && cm.判断职业()<1200) || (cm.判断职业()>=2000 && cm.判断职业()<=2112)){
		var 战士 = 5;
	} else if((cm.判断职业()>=200 && cm.判断职业()<300) || (cm.判断职业()>=1200 && cm.判断职业()<1300)){
		var 魔法师 = 5;	
	} else if((cm.判断职业()>=300 && cm.判断职业()<400) || (cm.判断职业()>=1300 && cm.判断职业()<1400)){
		var 弓箭手 = 5;	
	} else if((cm.判断职业()>=400 && cm.判断职业()<500) || (cm.判断职业()>=1400 && cm.判断职业()<1500)){	
		var 飞侠 = 5;		
	} else if((cm.判断职业()>=500 && cm.判断职业()<600) || (cm.判断职业()>=1500 && cm.判断职业()<1600)){	
		var 海盗 = 5;	
	}
	if (status == 0) {
        var chance = Math.floor(Math.random() * 100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            if (finalitem.length == 0) {
                return 1;
            }
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
			var itemId = finalitem[finalchance][0];
			cm.gainItem(itemId,1,3650);
			cm.sendOk("你获得了 " + cm.显示物品(itemId) + "");
            cm.safeDispose();
        } else {
            cm.dispose();
			cm.openNpc(9900004,71447504);
        }
        cm.dispose();
    }
}