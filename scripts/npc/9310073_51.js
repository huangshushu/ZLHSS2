var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
status = -1;
var itemList = Array(
Array(2290011, 3, 1, 1), //书
Array(2290021, 3, 1, 1), //书
Array(2290023, 3, 1, 1), //书
Array(2290042, 3, 1, 1), //书
Array(2290049, 3, 1, 1), //书
Array(2290061, 3, 1, 1), //书
Array(2290074, 3, 1, 1), //书
Array(2290084, 3, 1, 1), //书
Array(2290083, 3, 1, 1), //书
Array(2290107, 3, 1, 1), //书
Array(2290118, 3, 1, 1), //书
Array(2290133, 3, 1, 1), //书
Array(1402014, 10, 1, 1), //温度计
Array(1122017, 5, 1, 1), //精灵吊坠
//Array(2028004, 20, 1, 1), //神秘时装坐骑随机箱
Array(4031504, 80, 1, 1),//蓝色
Array(2070005, 400, 1, 1), //金钱镖
Array(2070006, 300, 1, 1), //齿轮镖
//Array(4170012, 200, 1, 1), //必成币
Array(2049100, 200, 1, 1), //混沌卷
Array(4001165, 100, 1, 1), //太阳神的赐福
Array(4310057, 300, 1, 1), //跑商纪念币
Array(4031456, 300, 1, 1), //枫叶珠
//Array(4001129, 300, 1, 1), //冒险岛纪念币
Array(4002000, 200, 1, 1), //邮票
Array(4002001, 200, 1, 1), //邮票
Array(4002002, 200, 1, 1), //邮票
Array(4002003, 200, 1, 1), //邮票
Array(3010014, 500, 1, 1), //月亮弯
Array(3010018, 500, 1, 1), //椰子树沙滩椅
Array(3010019, 500, 1, 1), //寿司椅
Array(3010021, 500, 1, 1), //暖暖桌
Array(3010025, 500, 1, 1), //枫叶纪念凳
Array(3010026, 500, 1, 1), //恶灵附身的娃娃椅子
Array(3010028, 500, 1, 1), //海盗的俘虏
Array(3010036, 400, 1, 1), //浪漫秋千
Array(3010037, 400, 1, 1), //猪猪凳
Array(3010038, 400, 1, 1), //空气沙发
Array(3010043, 400, 1, 1), //魔女的飞扫把
Array(3010044, 400, 1, 1), //同一红伞下
Array(3010048, 400, 1, 1), //圣诞树椅子
Array(3010053, 400, 1, 1), //兔子纪念版椅子
Array(3010054, 400, 1, 1), //呼噜呼噜床
Array(4010000, 500, 1, 1), //矿
Array(4010001, 500, 1, 1), //矿
Array(4010002, 500, 1, 1), //矿
Array(4010003, 500, 1, 1), //矿
Array(4010004, 500, 1, 1), //矿
Array(4010005, 500, 1, 1), //矿
Array(4010006, 500, 1, 1), //矿
Array(4020000, 500, 1, 1), //矿
Array(4020001, 500, 1, 1), //矿
Array(4020002, 500, 1, 1), //矿
Array(4020003, 500, 1, 1), //矿
Array(4020004, 500, 1, 1), //矿
Array(4020005, 500, 1, 1), //矿
Array(4020006, 500, 1, 1), //矿
Array(4020007, 500, 1, 1), //矿
Array(4020008, 500, 1, 1), //矿
Array(4004000, 500, 1, 1), //水晶
Array(4004001, 500, 1, 1), //水晶
Array(4004002, 500, 1, 1), //水晶
Array(4004003, 500, 1, 1), //水晶
Array(4004004, 400, 1, 1), //水晶
//Array(4251202, 200, 1, 1), //水晶
Array(2022530, 60, 1, 1)//双倍爆率
//Array(2450000, 100, 1, 1) //双倍BUFF




);
var say = "";
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
            cm.sendOk("再见得把油。");
            cm.dispose();
        }
        status--;
    }
	if (status == 0) {
		if(cm.haveItem(4170011,1)) {
			var str1 = "\r\n";	
			for (var i = 0; i < itemList.length; i++){
				str1 += "#v"+itemList[i][0]+"#";
			}
			say = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶;
			say += "\r\n              #r欢迎来月月冒险岛副本抽奖#k\r\n";
			say += 红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶;
			say += "\r\n\r\n          ";
			say += "#r每次抽奖消耗#v4170011#*1，当前拥有:#v4170011#*#c4170011#\r\n\r\n";
			say += "\t\t#L1##e#b单次抽奖#l\t";
			say += "\t\t#L2##e#b五连抽奖#l\r\n#n\r\n\r\n";
			say += "                   #b副本抽奖奖池如下\r\n" + str1;
			
			cm.sendYesNo(say);
		} else {
			var str1 = "\r\n";	
			for (var i = 0; i < itemList.length; i++){
				str1 += "#v"+itemList[i][0]+"#";
			}
			cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n              #r欢迎来到攸攸冒险岛副本抽奖#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n          #r每次抽奖消耗#v4170011#*1，当前拥有:#v4170011#*#c4170011#\r\n\r\n                   #b副本抽奖奖池如下\r\n" + str1);
			cm.dispose();
		}
	} else if (status == 1){	
		if(selection == 1){
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
				item = cm.gainGachaponItem(itemId, quantity, "副本抽奖", notice);
				if (item != -500) {
					cm.gainItem(4170011, -1);
					cm.sendOk("你获得了#b#t"+item+"#*"+quantity+"#k，恭喜你！");
				} else {
					cm.sendOk("请你确认背包的装备，消耗，其他栏是否有足够的空间！");
				}
				cm.safeDispose();
			} else {
				cm.sendOk("你什么都抽到，非常遗憾！");
				cm.safeDispose();
			}
		}else if(selection == 2){
			if (cm.getInventory(1).isFull(5)){
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有 5 格以上的空间。");
                cm.dispose();
            } else if (cm.getInventory(2).isFull(5)){
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有 5 格以上的空间。");
                cm.dispose();
            } else if (cm.getInventory(3).isFull(5)){
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有 5 格以上的空间。");
                cm.dispose();
            } else if (cm.getInventory(4).isFull(5)){
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有 5 格以上的空间。");
                cm.dispose();
            } else if (cm.getInventory(5).isFull(5)){
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有 5 格以上的空间。");
                cm.dispose();
            } else {
				if(!cm.haveItem(4170011,5)){
					cm.sendOk("你没有5个#v4170011#!");
					cm.dispose();
					return;
				}
                var chance = Math.floor(Math.random() * 500);
				var finalitem = Array();
				for (var i = 0; i < itemList.length; i++) {
					if (itemList[i][1] >= chance) {
						finalitem.push(itemList[i]);
					}
				}
				if (finalitem.length != 0) {
					var item;
					for(var i = 0;i<5;i++){
						var random = new java.util.Random();
						var finalchance = random.nextInt(finalitem.length);
						var itemId = finalitem[finalchance][0];
						var quantity = finalitem[finalchance][2];
						var notice = finalitem[finalchance][3];
						item = cm.gainGachaponItem(itemId, quantity, "副本抽奖", notice);
					}
					if (item != -500) {
						cm.gainItem(4170011, -5);
						cm.sendOk("你获得了#b#t"+item+"#*"+quantity+"#k，恭喜你！");
					} else {
						cm.sendOk("请你确认背包的装备，消耗，其他栏是否有足够的空间！");
					}
					cm.safeDispose();
				} else {
					cm.sendOk("你什么都抽到，非常遗憾！");
					cm.safeDispose();
				}
            }
		}
    }
}
