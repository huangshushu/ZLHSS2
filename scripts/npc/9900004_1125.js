
status = -1;
var itemList = Array(
Array(1902411, 5, 1, 1), //属性坐骑鞍子
Array(1902401, 10, 1, 1), //属性坐骑鞍子
Array(1902405, 15, 1, 1), //属性坐骑鞍子
Array(1902350, 30, 1, 1), //属性坐骑鞍子
Array(1902407, 30, 1, 1), //属性坐骑鞍子
Array(1902404, 40, 1, 1), //属性坐骑鞍子
Array(1902403, 40, 1, 1), //属性坐骑鞍子
Array(1902402, 60, 1, 1), //属性坐骑鞍子
Array(1902311, 60, 1, 1), //属性坐骑鞍子
Array(1112597, 30, 1, 1), //希纳斯钻戒
Array(1012170, 30, 1, 1), //鬼娃
Array(2022510, 80, 1, 1), //金猪蛋
Array(2022735, 60, 1, 1), //新世界箱子
Array(4031504, 400, 1, 1),//蓝色
Array(4031505, 300, 1, 1),//橙色
Array(4031506, 200, 1, 1),//绿色
Array(2613000, 200, 1, 1), //星火
Array(2613001, 200, 1, 1), //星火
Array(2612010, 200, 1, 1), //星火
//Array(2041136, 300, 1, 1), //戒指
//Array(2041139, 300, 1, 1), //戒指
//Array(2041142, 300, 1, 1), //戒指
Array(4021009, 40, 1, 1), //星石
Array(4011008, 80, 1, 1), //锂
Array(4011007, 80, 1, 1), //月石
Array(4002000, 400, 3, 1), //邮票
Array(4002001, 400, 3, 1), //邮票
Array(4002002, 400, 3, 1), //邮票
Array(4002003, 400, 3, 1), //邮票
Array(4001129, 200, 5, 1), //冒险纪念币
Array(2070013, 400, 1, 1), //黄金镖
Array(4310012, 400, 2, 1), //必成币
Array(2049100, 500, 5, 1), //混沌卷
Array(2049116, 400, 4, 1), //强化混沌卷
Array(1122017, 50, 1, 1), //经验
Array(1122059, 100, 1, 1), //邪神证物
Array(3010718, 300, 1, 1), //初恋云朵
Array(3010594, 300, 1, 1), //蓝莓蛋糕
Array(3010658, 300, 1, 1), //夏日西瓜
Array(3010286, 300, 1, 1), //诺特勒斯
Array(3010660, 300, 1, 1), //梦幻公主城堡
Array(3010661, 300, 1, 1), //欢乐相框
Array(3010643, 300, 1, 1), //10周年蛋糕
Array(3010608, 300, 1, 1), //完美的名画
Array(4011000, 500, 8, 1), //矿
Array(4011001, 500, 8, 1), //矿
Array(4011002, 500, 8, 1), //矿
Array(4011003, 500, 8, 1), //矿
Array(4011004, 500, 8, 1), //矿
Array(4011005, 500, 8, 1), //矿
Array(4011006, 500, 8, 1), //矿
Array(4021000, 500, 8, 1), //矿
Array(4021001, 500, 8, 1), //矿
Array(4021002, 500, 8, 1), //矿
Array(4021003, 500, 8, 1), //矿
Array(4021004, 500, 8, 1), //矿
Array(4021005, 500, 8, 1), //矿
Array(4021006, 500, 8, 1), //矿
Array(4021007, 500, 8, 1), //矿
Array(4021008, 500, 8, 1), //矿
Array(4005000, 500, 20, 1), //水晶
Array(4005001, 500, 20, 1), //水晶
Array(4005002, 500, 20, 1), //水晶
Array(4005003, 500, 20, 1), //水晶
Array(4005004, 400, 10, 1), //水晶
Array(4251202, 200, 2, 1), //水晶
Array(2022530, 400, 1, 1),//双倍爆率
Array(2450000, 200, 1, 1) //双倍BUFF




);

function start() {
	if (cm.canHold(1002677,1) == false || cm.canHold(2290017,1) == false || cm.canHold(4001126,1) == false){
	cm.sendOk("请保证有充足的背包空间");
    cm.dispose();	
	}else{
    action(1, 0, 0);
}}

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
			if(cm.haveItem(5490006,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("#r欢迎来到金钥匙抽奖！\r\n#k消耗1个#v5490006#抽取以下物品！#k当前拥有:#c5490006# 个\r\n\r\n以下是全部物品:\r\n\r\n" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("#r欢迎来到金钥匙抽奖！\r\n#k消耗1个#v5490006#抽取以下物品！#k当前拥有:#c5490006# 个\r\n\r\n以下是全部物品:\r\n\r\n" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "七七金钥匙抽奖", notice);
            if (item != -500) {
				cm.gainItem(5490006, -1);
				//cm.gainItem(4170007, 1);//获得物品
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("怎么没接住球啊，算了还你宝石吧。");
            cm.safeDispose();
        }
    }
}
