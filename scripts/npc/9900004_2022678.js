
status = -1;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var itemList = Array(
Array(1012319, 2, 1, 1), //点点红
Array(1122000, 30, 1, 1), //龙链
Array(1113084, 30, 1, 1), //黑龙戒指
Array(1042243, 200, 1, 1), //黑龙T裇
Array(2043003, 150, 1, 1), //必成
Array(2043103, 150, 1, 1), //必成
Array(2043203, 150, 1, 1), //必成
Array(2043303, 150, 1, 1), //必成
Array(2043703, 150, 1, 1), //必成
Array(2043803, 150, 1, 1), //必成
Array(2044003, 150, 1, 1), //必成
Array(2044103, 150, 1, 1), //必成
Array(2044203, 150, 1, 1), //必成
Array(2044303, 150, 1, 1), //必成
Array(2044403, 150, 1, 1), //必成
Array(2044503, 150, 1, 1), //必成
Array(2044603, 150, 1, 1),//必成
Array(2044703, 150, 1, 1),//必成
Array(2044815, 150, 1, 1),//必成
Array(2044908, 150, 1, 1), //必成
Array(4011008, 10, 1, 1), //锂
Array(4011007, 20, 1, 1), //月石

Array(4002000, 300, 1, 1), //邮票
Array(4002001, 300, 1, 1), //邮票
Array(4002002, 300, 1, 1), //邮票
Array(4002003, 300, 1, 1), //邮票
Array(4000463, 100, 1, 1), //中介
Array(3010183, 300, 1, 1), //胡萝卜
Array(3010195, 300, 1, 1), //无价之宝
Array(3010180, 300, 1, 1), //HP椅子
Array(3010181, 300, 1, 1), //MP椅子
Array(3010208, 300, 1, 1), //黑猫
Array(3010222, 300, 1, 1), //兔兔伴读
Array(3010224, 300, 1, 1), //年糕冰淇淋
Array(3010298, 300, 1, 1), //白熊抱抱
Array(3010306, 300, 1, 1), //生如夏花
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
			if(cm.haveItem(2022678,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo(""+小烟花+"#r欢迎来到黑龙箱子#v2022678#抽奖!\r\n\r\n"+小烟花+"#e以下是奖池内容的全部物品:\r\n\r\n" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk(""+小烟花+"#r欢迎来到黑龙箱子#v2022678#抽奖!\r\n\r\n"+小烟花+"#e以下是奖池内容的全部物品:\r\n\r\n" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "黑龙箱子抽奖", notice);
            if (item != -500) {
			cm.gainItem(2022678, -1);//获得物品
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
