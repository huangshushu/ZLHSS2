
status = -1;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var itemList = Array(
Array(1072672, 2, 1, 1), //鞋子
Array(1082438, 2, 1, 1), //手套
Array(1102467, 2, 1, 1), //披风
Array(1132161, 2, 1, 1), //腰带
Array(4001129, 400, 1, 1), //纪念币
Array(2043030, 40, 1, 1), //单手剑
Array(2043125, 40, 1, 1), //单手斧
Array(2043225, 40, 1, 1), //单手钝器
Array(2043319, 40, 1, 1), //短剑
Array(2043819, 40, 1, 1), //长杖
Array(2044033, 40, 1, 1),//双手剑
Array(2044125, 40, 1, 1),//双手斧
Array(2044225, 40, 1, 1),//双手钝器
Array(2044325, 40, 1, 1), //枪
Array(2044425, 40, 1, 1), //矛
Array(2044518, 40, 1, 1), //弓
Array(2044618, 40, 1, 1), //弩
Array(2044718, 40, 1, 1), //拳套
Array(2044825, 40, 1, 1), //指节
Array(2044918, 40, 1, 1), //手枪
Array(4011008, 10, 1, 1), //锂
Array(4011007, 20, 1, 1), //月石
Array(4250602, 500, 1, 1), //高等黄晶
Array(4002000, 350, 1, 1), //邮票
Array(4002001, 350, 1, 1), //邮票
Array(4002002, 350, 1, 1), //邮票
Array(4002003, 350, 1, 1), //邮票
Array(4000463, 100, 1, 1), //中介
Array(3010718, 300, 1, 1), //初恋云朵
Array(3010594, 300, 1, 1), //蓝莓蛋糕
Array(3010454, 300, 1, 1), //爱心云朵
Array(3010511, 300, 1, 1), //猫咪公园
Array(3010206, 300, 1, 1), //梦想画家
Array(3010209, 300, 1, 1), //香草冰淇淋
Array(3010448, 300, 1, 1), //泡泡浴
Array(3010591, 300, 1, 1), //漫画书
Array(3010658, 300, 1, 1), //夏日西瓜
Array(3010286, 300, 1, 1), //诺特勒斯
Array(3010660, 300, 1, 1), //梦幻公主城堡
Array(3010661, 300, 1, 1), //欢乐相框
Array(3010417, 300, 1, 1), //巨无霸
Array(3010416, 300, 1, 1), //巨无霸
Array(3010070, 300, 1, 1), //巨无霸
Array(3010643, 300, 1, 1), //10周年蛋糕
Array(3010608, 300, 1, 1), //完美的名画
Array(2070011, 300, 1, 1), //水晶镖
Array(2070013, 100, 1, 1), //黄金镖
Array(2340000, 500, 1, 1), //祝福卷
Array(2049100, 500, 1, 1), //混沌卷
Array(4005000, 500, 1, 0), //水晶
Array(4005001, 500, 1, 0), //水晶
Array(4005002, 500, 1, 0), //水晶
Array(4005003, 500, 1, 0), //水晶
Array(4005004, 500, 1, 1), //水晶
Array(4251202, 80, 1, 1), //水晶
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
			if(cm.haveItem(2028180,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo(""+小烟花+"#r欢迎来到风暴BOSS箱子#v2028180#抽奖!\r\n\r\n"+小烟花+"#e以下是奖池内容的全部物品:\r\n\r\n" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk(""+小烟花+"#r欢迎来到风暴BOSS箱子#v2028180#抽奖!\r\n\r\n"+小烟花+"#e以下是奖池内容的全部物品:\r\n\r\n" + str1);
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
			cm.gainItem(2028180, -1);//获得物品
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
