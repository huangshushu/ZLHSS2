
status = -1;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var itemList = Array(
Array(1022144, 10, 1, 1), //瞳印
Array(1003450, 300, 1, 1), //PB帽子
Array(1052198, 300, 1, 1), //PB大衣
Array(2041232, 150, 1, 1), //项链
Array(2041233, 150, 1, 1), //项链
Array(2041234, 150, 1, 1), //项链
Array(2041235, 150, 1, 1), //项链
Array(4011008, 20, 1, 1), //锂
Array(4011007, 30, 1, 1), //月石
Array(4250602, 500, 1, 1), //高等黄晶
Array(4002000, 350, 1, 1), //邮票
Array(4002001, 350, 1, 1), //邮票
Array(4002002, 350, 1, 1), //邮票
Array(4002003, 350, 1, 1), //邮票
Array(4000463, 100, 1, 1), //中介
Array(3010357, 300, 1, 1), //美容
Array(3010360, 300, 1, 1), //光之骑士
Array(3010361, 300, 1, 1), //购物车
Array(3010373, 300, 1, 1), //马桶
Array(3010374, 300, 1, 1), //闪耀星星
Array(3010375, 300, 1, 1), //超级药水椅子
Array(3010406, 300, 1, 1), //迷你神兽
Array(3010411, 300, 1, 1), //鱼尾狮
Array(3010438, 300, 1, 1), //爱心音符
Array(2070011, 300, 1, 1), //水晶镖
Array(2070013, 100, 1, 1), //黄金镖
Array(2340000, 500, 1, 1), //祝福卷
Array(2049100, 500, 1, 1), //混沌卷
Array(4005000, 500, 1, 0), //水晶
Array(4005001, 500, 1, 0), //水晶
Array(4005002, 500, 1, 0), //水晶
Array(4005003, 500, 1, 0), //水晶
Array(4005004, 500, 1, 1), //水晶
Array(4251202, 100, 1, 1), //水晶
Array(2022530, 50, 1, 1),//双倍爆率
Array(2450000, 40, 1, 0) //双倍BUFF



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
			if(cm.haveItem(2022564,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo(""+小烟花+"#r欢迎来到品克缤BOSS箱子#v2022564#抽奖!\r\n\r\n"+小烟花+"#e以下是奖池内容的全部物品:\r\n\r\n" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk(""+小烟花+"#r欢迎来到品克缤BOSS箱子#v2022564#抽奖!\r\n\r\n"+小烟花+"#e以下是奖池内容的全部物品:\r\n\r\n" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "品克缤BOSS箱子抽奖", notice);
            if (item != -500) {
			cm.gainItem(2022564, -1);//获得物品
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
