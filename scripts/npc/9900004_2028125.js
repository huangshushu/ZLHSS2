
status = -1;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var itemList = Array(
Array(1302297, 10, 1, 1), //终极戒指
Array(1312173, 10, 1, 1), //终极戒指
Array(1322223, 10, 1, 1), //终极戒指
Array(1332247, 10, 1, 1), //终极戒指
Array(1382231, 10, 1, 1), //终极戒指
Array(1402220, 10, 1, 1), //终极戒指
Array(1412152, 10, 1, 1), //终极戒指
Array(1422158, 10, 1, 1), //终极戒指
Array(1432187, 10, 1, 1), //终极戒指
Array(1442242, 10, 1, 1), //终极戒指
Array(1452226, 10, 1, 1), //终极戒指
Array(1462213, 10, 1, 1), //终极戒指
Array(1472235, 10, 1, 1), //终极戒指
Array(1482189, 10, 1, 1), //终极戒指
Array(1492199, 10, 1, 1), //终极戒指

Array(1302275, 15, 1, 1), //单手剑
Array(1312153, 15, 1, 1), //单手斧
Array(1322203, 15, 1, 1), //单手锤
Array(1332225, 15, 1, 1), //短刀
Array(1382208, 15, 1, 1), //长杖
Array(1402196, 15, 1, 1), //双手剑
Array(1412135, 15, 1, 1), //双手斧
Array(1422140, 15, 1, 1), //双手钝器
Array(1432167, 15, 1, 1), //龙骑枪
Array(1442223, 15, 1, 1), //矛
Array(1452205, 15, 1, 1), //弓
Array(1462193, 15, 1, 1), //弩
Array(1472214, 15, 1, 1), //拳套
Array(1482168, 15, 1, 1), //指节
Array(1492179, 15, 1, 1), //短枪

Array(1052314, 20, 1, 1), //战衣
Array(1052315, 20, 1, 1), //法
Array(1052316, 20, 1, 1), //弓
Array(1052317, 20, 1, 1), //飞
Array(1052318, 20, 1, 1), //海

Array(1003797, 20, 1, 1), //战头
Array(1003798, 20, 1, 1), //法
Array(1003799, 20, 1, 1), //弓
Array(1003800, 20, 1, 1), //飞
Array(1003801, 20, 1, 1), //海

Array(2046913, 40, 10, 1), //宿命
Array(2613000, 40, 15, 1), //星火
Array(2028158, 40, 1, 1), //随机公式
Array(2040815, 40, 15, 1), //手套卷轴
Array(2041315, 40, 15, 1), //腰带卷轴
Array(4310009, 40, 1, 1), //10X
Array(4310010, 40, 1, 1), //15X
Array(4001255, 40, 1, 1), //15X蛋
Array(3700051, 45, 1, 1), //修仙


Array(2290011, 30, 1, 1), //25  qingwu
Array(2290021, 30, 1, 1), //25  联欢缓坡	
Array(2290023, 30, 1, 1), //25    黑棋
Array(2290031, 30, 1, 1), //25	火独
Array(2290042, 30, 1, 1), //25    饼类
Array(2290049, 30, 1, 1), //25   助教
Array(2290061, 30, 1, 1), //25
Array(2290074, 30, 1, 1), //25
Array(2290084, 30, 1, 1), //25
Array(2290083, 30, 1, 1), //25
Array(2290107, 30, 1, 1), //25
Array(2290118, 30, 1, 1), //25
 
 
Array(2511000, 20, 1, 1), //火鸟坐骑
Array(2511001, 20, 1, 1), //火鸟鞍子
Array(2510060, 20, 1, 1), //彩虹裤子公式
Array(2510061, 20, 1, 1), //彩虹手套公式
Array(2510062, 20, 1, 1), //彩虹鞋子公式
Array(2510063, 20, 1, 1), //内裤公式
Array(2510064, 20, 1, 1), //手表公式
Array(2510065, 20, 1, 1), //羽毛鞋公式
Array(2510000, 20, 1, 1), //25
Array(2510001, 20, 1, 1), //25
Array(2510002, 40, 1, 1), //25
Array(2510003, 40, 1, 1), //25
Array(2510004, 40, 1, 1), //25
Array(2510005, 40, 1, 1), //25
Array(2510006, 40, 1, 1), //25
Array(2510007, 40, 1, 1), //25
Array(2510008, 40, 1, 1), //25
Array(2510009, 40, 1, 1), //25
Array(2510010, 40, 1, 1), //25
Array(2510011, 40, 1, 1), //25
Array(2510012, 40, 1, 1), //25
Array(2510013, 40, 1, 1), //25
Array(2510014, 40, 1, 1), //25
Array(2510015, 40, 1, 1), //25
Array(2510016, 40, 1, 1), //25
Array(2510017, 40, 1, 1), //25
Array(2510018, 40, 1, 1), //25
Array(2510019, 40, 1, 1), //25
Array(2510020, 40, 1, 1), //25
Array(2510021, 40, 1, 1), //25
Array(2510022, 40, 1, 1), //25

Array(4251202, 40, 50, 1), //万能水晶
Array(2049100, 40, 50, 1), //混沌卷轴
Array(4005004, 40, 500, 1), //黑水晶
Array(4011008, 40, 4, 1), //锂
Array(4011007, 40, 4, 1), //月石
Array(2450000, 40, 80, 1) //双倍BUFF



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
			if(cm.haveItem(2028125,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo(""+小烟花+"#r欢迎来到元宵节抽奖礼包#v2022510#抽奖!\r\n\r\n"+小烟花+"#e以下是奖池内容的全部物品:\r\n\r\n" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk(""+小烟花+"#r欢迎来到元宵节抽奖礼包#v2022510#抽奖!\r\n\r\n"+小烟花+"#e以下是奖池内容的全部物品:\r\n\r\n" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 0);
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
            item = cm.gainGachaponItem(itemId, quantity, "元宵节抽奖礼包", notice);
            if (item != -0) {
			cm.gainItem(2028125, -1);//获得物品
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
