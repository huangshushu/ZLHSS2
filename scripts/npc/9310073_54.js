var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
status = -1;
var itemList = Array(
Array(5200000, 50, 1, 1), //浴衣男原概率500
Array(5200001, 10, 1, 1), //浴衣女原概率100
Array(5200002, 2, 1, 1), //蛋原概率20
Array(2028009, 2, 1, 1), 
Array(2028175, 1, 1, 1), 
Array(2028158, 20, 1, 1), 
Array(2028159, 50, 1, 1), 
Array(4310060, 50, 1, 1), 
Array(2028164, 20, 1, 1), 
Array(4001255, 50, 1, 1), 
Array(2511000, 100, 1, 1),
Array(2511001, 100, 1, 1), 
Array(2511002, 100, 1, 1), 
Array(2511003, 100, 1, 1),  
Array(1402196, 50, 1, 1), //武器
Array(1432167, 50, 1, 1), //武器
Array(1472214, 50, 1, 1), //武器
Array(1382208, 50, 1, 1), //武器
Array(1452205, 50, 1, 1), //武器
Array(1462193, 50, 1, 1), //武器
Array(1492179, 50, 1, 1), //武器
Array(1332225, 50, 1, 1), //武器
Array(1442223, 50, 1, 1), //武器
Array(1302275, 50, 1, 1), //武器
Array(1482168, 50, 1, 1), //武器
Array(1312153, 50, 1, 1), //武器
Array(1322203, 50, 1, 1), //武器
Array(4011008, 200, 1, 1), //锂
Array(4011007, 200, 1, 1), //锂
Array(1012319, 200, 1, 1), //8点点红
Array(2041315, 400, 1, 1), //腰带
Array(2040815, 400, 1, 1), //手套
Array(2040903, 400, 1, 1), //盾牌
Array(1102040, 200, 1, 1), //浪人披风(黄)
Array(1102041, 200, 1, 1), //浪人披风(粉)
Array(1102042, 200, 1, 1), //浪人披风(紫)
Array(1102043, 200, 1, 1), //浪人披风(褐)

Array(1082543, 100, 1, 1), //武器
Array(1082544, 100, 1, 1), //武器
Array(1082545, 100, 1, 1), //武器
Array(1082546, 100, 1, 1), //武器
Array(1082547, 100, 1, 1), //武器

Array(1072743, 100, 1, 1), //武器
Array(1072744, 100, 1, 1), //武器
Array(1072745, 100, 1, 1), //武器
Array(1072746, 100, 1, 1), //武器
Array(1072747, 100, 1, 1), //武器

Array(1102481, 100, 1, 1), //武器
Array(1102482, 100, 1, 1), //武器
Array(1102483, 100, 1, 1), //武器
Array(1102484, 100, 1, 1), //武器
Array(1102485, 100, 1, 1), //武器

Array(1132174, 100, 1, 1), //武器
Array(1132175, 100, 1, 1), //武器
Array(1132176, 100, 1, 1), //武器
Array(1132177, 100, 1, 1), //武器
Array(1132178, 100, 1, 1), //武器

Array(1132169, 500, 1, 1), //战士
Array(1132170, 500, 1, 1), //法师
Array(1132171, 500, 1, 1), //
Array(1132172, 500, 1, 1), //火之杖
Array(1132173, 500, 1, 1), //火之杖

Array(1072737, 500, 1, 1), //战士
Array(1072738, 500, 1, 1), //法师
Array(1072739, 500, 1, 1), //
Array(1072740, 500, 1, 1), //火之杖
Array(1072741, 500, 1, 1), //火之杖

Array(1102476, 300, 1, 1), //冒险之心
Array(1102477, 300, 1, 1), //冒险之心
Array(1102478, 300, 1, 1), //绝对
Array(1102479, 300, 1, 1), //绝对
Array(1102480, 300, 1, 1), //雷之杖
//Array(4001227, 100, 1, 1), //冰之杖
//Array(4001228, 100, 1, 1), //毒之杖
Array(2046913, 500, 1, 1), //火之杖
Array(2613000, 500, 1, 1), //火之杖


Array(4000463, 500, 1, 1), //币
Array(2022530, 500, 1, 1), //双爆
Array(2022630, 500, 1, 1), //油条
Array(4002003, 500, 1, 1), //邮票
Array(4002000, 500, 1, 1), //邮票
Array(4002001, 500, 1, 1), //邮票
Array(4002002, 500, 1, 1), //邮票

Array(4005000, 300, 1, 1), //高等力量
Array(4005001, 300, 1, 1), //高等幸运
Array(4005002, 300, 1, 1), //高等智慧
Array(4005003, 300, 1, 1), //高等敏捷
Array(4005004, 300, 1, 1), //高等黑暗
Array(2340000, 300, 1, 1), //祝福卷
Array(2049100, 300, 1, 1), //混沌卷

Array(4021000, 500, 1, 1), //矿
Array(4021001, 500, 1, 1), //矿
Array(4021002, 500, 1, 1), //矿
Array(4021003, 500, 1, 1), //矿
Array(4021004, 500, 1, 1), //矿
Array(4021005, 500, 1, 1), //矿
Array(4021006, 500, 1, 1), //矿
Array(4021007, 500, 1, 1), //矿
Array(4021008, 500, 1, 1), //矿



Array(2043001, 600, 1, 1), //单手剑攻击卷轴60
Array(2043002, 600, 1, 1), //单手剑攻击卷轴10
Array(2043101, 600, 1, 1), //单手斧攻击卷轴60
Array(2043102, 600, 1, 1), //单手斧攻击卷轴10
Array(2043201, 500, 1, 1), //单手钝器攻击卷轴60%
Array(2043101, 600, 1, 1), //单手斧攻击卷轴60
Array(2043102, 600, 1, 1), //单手斧攻击卷轴10
Array(2043201, 500, 1, 1), //单手钝器攻击卷轴60%
Array(2043202, 600, 1, 1), //单手钝器攻击卷轴10%

Array(4031504, 500, 1, 1),//1000W
Array(4031505, 500, 1, 1),//2000W
Array(4031506, 300, 1, 1)//3000W




);

function start() {
	if (cm.canHold(1002677,1) == false || cm.canHold(2290017,1) == false || cm.canHold(4001126,1) == false){
	cm.sendOk("请确保背包有充足的空间！");
    cm.dispose();	
	}else{
    action(1, 0, 0);
}}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("祝你下次好运。");
            cm.dispose();
        }
        status--;
    }
	if (status == 0) {
		if(cm.getmoneyb() >= 20) {
			var str1 = "\r\n";	
			for (var i = 0; i < itemList.length; i++){
				str1 += "#v"+itemList[i][0]+"#";
			}
			cm.sendYesNo("              #k欢迎来到月月冒险岛积分抽奖\r\n        #r每次抽奖消耗20积分，当前拥有:积分:"+cm.getmoneyb()+"\r\n\r\n        #v5200000#=1000W   #v5200001#=2000W  #v5200002#=3000W\r\n\r\n               #b积分抽奖奖池如下\r\n" + str1);
		} else {
			var str1 = "\r\n";	
			for (var i = 0; i < itemList.length; i++){
				str1 += "#v"+itemList[i][0]+"#";
			}
			cm.sendOk("              #k欢迎来到月月冒险岛积分抽奖#k\r\n\r\n    #r每次抽奖消耗20积分，抽中以下道具额外获得奖励\r\n    当前拥有:积分:"+cm.getmoneyb()+"\r\n\r\n         #v5200000#=   #v5200001#  #v5200002#\r\n\r\n#v2028159#=200积分 #v2028158#=50积分 #v4310060#=100积分 #v4310010#=100积分\r\n\r\n                  #b积分抽奖奖池如下\r\n" + str1);
			cm.dispose();
		}
	} else if (status == 1){	
		var chance = Math.floor(Math.random() * 800);
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
			item = cm.gainGachaponItem(itemId, quantity, "积分抽奖", notice);
			if (item != -500) {
				cm.setmoneyb(-20)
				cm.sendOk("你获得了#b#t"+item+"#*"+quantity+"#k，恭喜你！");
			} else {
				cm.sendOk("请你确认背包的装备，消耗，其他栏是否有足够的空间。");
			}
			cm.safeDispose();
		} else {
			cm.sendOk("你什么都抽到，非常遗憾！");
			cm.safeDispose();
        }
    }
}
