
status = -1;
var itemList = Array(
			Array(1432182,200, 1, 1), //红色枪
			Array(1382226,300, 1, 1), //红色长杖  
			Array(1452220,100, 1, 1), //红色弓                           
			Array(1462208,100, 1, 1), //红色之弩
			Array(1402214,300, 1, 1), //红色双手剑
			Array(1332242,200, 1, 1), //红色切割者
			Array(1472230,50, 1, 1), //红色拳套 
			Array(1482183,300, 1, 1), //红色拳甲  
			Array(1492194,50, 1, 1), //红色短枪 
			Array(1302158,200, 1, 1), //【稀】魔剑 
			//Array(1012135,200, 1, 1), //嘴刀
			//Array(10920048,50, 1, 1), //蓝刀盾 
			Array(1302070,200, 1, 1), //索隆刀                           
			//Array(01002995,2000, 1, 1), //皇家海军帽 
			//Array(010522009,2000, 1, 1), //皇家海军制服
			Array(1072360,300, 1, 1), //限量版沙滩鞋
			Array(1302156,300, 1, 1), //黑刀     
			Array(1402069,200, 1, 1), //红色温度计  
			//Array(13820038,2000, 1, 1), //冰糖葫芦 
			Array(1402067,300, 1, 1), //曦和
			Array(1012513,100, 1, 1), //短笛     
			Array(1402051,100, 1, 1), //巨大龙背
			Array(2640011,500, 1, 1), //RED卷
			Array(2640010,500, 1, 1), //埃苏莱布斯弓箭手套装
			Array(2615001,500, 1, 1), //埃苏莱布斯飞侠套装
			//Array(1012171   ,200, 1, 1),//恐怖鬼娃200G
			Array(1032219      ,50, 1, 1),//遗忘之神话耳环 - (无描述)
			//Array(1052507,50, 1, 1), //埃苏莱布斯魔法师套装
			//Array(1052890,50, 1, 1), //埃苏莱布斯海盗套装
			Array(1132215 ,50, 1, 1), //冒险岛强韧意志黑色腰带
			Array(1102481 ,200, 1, 1),//暴君披风
		    Array(1102482 ,200, 1, 1),//暴君披风
		    Array(1102483 ,200, 1, 1),//暴君披风
		    Array(1102484 ,200, 1, 1),//暴君披风
		    Array(1102485 ,200, 1, 1),//暴君披风
			
		    Array(1072743  ,200, 1, 1),//暴君鞋
		    Array(1072744  ,200, 1, 1),//暴君鞋
		    Array(1072745  ,200, 1, 1),//暴君鞋
		    Array(1072746  ,200, 1, 1),//暴君鞋
		    Array(1072747  ,200, 1, 1),//暴君鞋
			
		    Array(1132174   ,200, 1, 1),//暴君腰带
		    Array(1132175   ,200, 1, 1),//暴君腰带
		    Array(1132176   ,200, 1, 1),//暴君腰带
		    Array(1132177   ,200, 1, 1),//暴君腰带
		    Array(1132178   ,200, 1, 1),//暴君腰带
			
			//Array(14020037,2000, 1, 1), //龙背刀
Array(1072769, 500, 1, 1)

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
			if (cm.haveItem(4310088)){
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("消耗#b1个#v4310088#抽取以下物品!\r\n#k当前拥有:#c4310088# 个。 以下是全部物品:" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("消费#b1个#v4310088#可抽取以下物品.\r\n#k当前拥有:#c4310088# 个。 以下是全部物品:" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 500);
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
            item = cm.gainGachaponItem(itemId, quantity, "RED币", notice);
            if (item != -1) {
				cm.gainItem(4310088, -1);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。\r\n(获得了安慰奖：RED币。)");
            cm.gainItem(4310088, -1);
            cm.gainItem(4310088, 1);
            cm.safeDispose();
        }
    }
}
