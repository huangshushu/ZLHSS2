 
status = -1;
var itemList = Array(
Array(1003797, 40, 1, 1), //高贵战士头盔
Array(1003798, 40, 1, 1), //高贵流丹维奇帽
Array(1003799, 40, 1, 1), //高贵游侠贝雷帽
Array(1003800, 40, 1, 1),//?????高贵刺客软帽
Array(1003801, 40, 1, 1),//?????高贵流浪者帽

Array(1062168, 40, 1, 1),//?????魔术师刺客短裤
Array(1062169, 40, 1, 1),//?????魔术师流浪者短裤
Array(1062167, 40, 1, 1),//?????魔术师游侠短裤
Array(1062166, 40, 1, 1),//?????魔术师丹维奇短裤10★
Array(1062165, 40, 1, 1),//?????魔术师战士短裤

Array(1042258, 40, 1, 1),//?????鹰眼流浪者外衣
Array(1042257, 40, 1, 1),//?????鹰眼刺客衬衣
Array(1042256, 40, 1, 1),//?????鹰眼游侠斗篷
Array(1042254, 40, 1, 1),//?????鹰眼战士盔甲
Array(1042255, 40, 1, 1),//?????鹰眼丹维奇长袍

Array(4031504, 100, 1, 1),//?????蓝
Array(4031504, 100, 1, 1),//?????蓝
Array(4031504, 100, 1, 1),//?????蓝
Array(4031504, 100, 1, 1),//?????蓝
Array(4031505, 90, 1, 1),//?????黄
Array(4031505, 90, 1, 1),//?????黄
Array(4031505, 90, 1, 1),//?????黄
Array(4031506, 90, 1, 1),//?????绿
Array(4031506, 60, 1, 1),//?????绿
Array(4031506, 60, 1, 1),//?????绿
Array(3992025, 100, 100, 1),//?????强化
Array(3992025, 50, 300, 1),//?????强化
Array(3992025, 40, 500, 1),//?????强化
Array(2049100, 100, 5, 1),//?????混沌
Array(2049100, 50, 10, 1),//?????混沌
Array(2022529, 90, 1, 1),//?????双爆
Array(2450000, 90, 1, 1),//?????双倍
Array(2070013, 80, 1, 1),//?????黄金标
Array(4005004, 100, 5, 1),//?????黑暗
Array(4005004, 50, 10, 1),//?????黑暗
Array(4000463, 90, 1, 1),//?????国庆
Array(4000463, 80, 3, 1),//?????国庆
Array(4000463, 60, 5, 1),//?????国庆
Array(4000463, 40, 10, 1),//?????国庆
Array(4251202, 100, 1, 1),//?????五彩
Array(4251202, 100, 3, 1),//?????五彩
Array(4251202, 100, 5, 1),//?????五彩
Array(4011008, 30, 1, 1),//?????锂
Array(4011008, 5, 2, 1),//?????锂
Array(4310012, 100, 1, 1),//必成
Array(4310012, 60, 2, 1),//必成
Array(4310012, 50, 3, 1)//必成


);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("再见得把油。");
            cm.dispose();
        }
        status--;
    }
		if (status == 0) {
			if(cm.haveItem(4031470,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("消耗1个#v4031470#抽取以下物品!\r\n#k当前拥有:#c4031470# 个。 以下是全部物品:" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("消耗1个#v4031470#抽取以下物品!\r\n#k当前拥有:#c4031470# 个。 以下是全部物品:" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "FFN", notice);
            if (item != -1) {
				//cm.setmoneyb(-5);
cm.gainItem(4031470, -1);//获得物品
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("怎么没接住球啊，算了还你宝石吧。");
           // cm.setmoneyb(-5);
//cm.gainItem(4170011, 5);//获得物品
			//cm.gainNX(1000);	//加减点券
            cm.safeDispose();
        }
    }
}
















