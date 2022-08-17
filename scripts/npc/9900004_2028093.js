
status = -1;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var itemList = Array(
Array(1032191, 20, 1, 1), //外星碎片耳环
Array(1113038, 20, 1, 1), //外星碎片戒指
Array(1122256, 20, 1, 1), //外星碎片项链
Array(1012319, 10, 1, 1), //8周年点点红
Array(1022226, 30, 1, 1), //独眼巨人之眼Lv.3

Array(4310009, 10, 1, 1), //15星必成币

Array(2046913, 30, 1, 1), //星火
Array(2046914, 30, 1, 1), //星火
Array(2046173, 30, 1, 1), //星火
Array(2613000, 30, 1, 1), //宿命
Array(2613001, 30, 1, 1), //宿命
Array(2612010, 30, 1, 1), //宿命

Array(4310143, 500, 1, 1), //BOSS币
//Array(1012170, 10, 1, 1), //恐怖鬼娃
Array(2041136, 300, 1, 1), //戒指
Array(2041139, 300, 1, 1), //戒指
Array(2041142, 300, 1, 1), //戒指
Array(2041145, 300, 1, 1), //戒指
Array(4031504, 300, 1, 1),//蓝色
Array(4031505, 150, 1, 1),//橙色
Array(4031506, 50, 1, 1),//绿色
Array(4002000, 400, 1, 1), //邮票
Array(4002001, 400, 1, 1), //邮票
Array(4002002, 400, 1, 1), //邮票
Array(4002003, 400, 1, 1), //邮票
//Array(4001129, 500, 2, 1), //冒险纪念币
Array(4011008, 30, 1, 1), //锂
Array(4011007, 40, 1, 1), //月石
Array(4250602, 500, 1, 1), //高等黄晶
Array(4170012, 100, 1, 1), //必成币
Array(1003622, 400, 1, 1), //布莱克缤帽子
Array(1052527, 400, 1, 1), //布莱克缤大衣
Array(3010142, 300, 1, 1), //水族馆
Array(3012010, 300, 1, 1), //巧克力恋人
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
Array(3010640, 300, 1, 1), //卡珊德拉之画
Array(2070011, 400, 1, 1), //水晶镖
Array(2070013, 150, 1, 1), //黄金镖
Array(2049100, 500, 1, 1), //混沌卷
Array(4005000, 500, 1, 1), //水晶
Array(4005001, 500, 1, 1), //水晶
Array(4005002, 500, 1, 1), //水晶
Array(4005003, 500, 1, 1), //水晶
Array(4005004, 500, 1, 1), //水晶
Array(4251202, 100, 1, 1), //水晶
Array(2450000, 40, 1, 1) //双倍BUFF



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
			if(cm.haveItem(2028093,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo(""+小烟花+"#r欢迎来到#v2028093#抽奖!\r\n\r\n"+小烟花+"#e以下是奖池内容的全部物品:\r\n\r\n" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk(""+小烟花+"#r欢迎来到#v2028093#抽奖!\r\n\r\n"+小烟花+"#e以下是奖池内容的全部物品:\r\n\r\n" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "钻机BOSS箱子", notice);
            if (item != -500) {
			cm.gainItem(2028093, -1);//获得物品
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
