var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var status = -1;
var oncePrice = 20;
var itemList = Array(
     
	1004422,1004423,1004424,1004425,1004426,1102775,1102794,1102795,1102796,1102797,1082636,
	1082637,1082638,1082639,1082640,1052882,1052887,1052888,1052889,1052890,1073030,1073032,
	1073033,1073034,1073035,1152174,1152176,1152177,1152178,1152179
		)

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想抽奖吗！");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {

		var text1 = "您好！这里是元宝转蛋屋，是否花费#r"+oncePrice+"元宝#k抽取物品呢？\r\n#g您的元宝剩余:#r"+cm.getHyPay(1)+"\r\n"
		text1 +="#b本期奖品如下:\r\n";
		for(var i =0;i<itemList.length;i++){
			text1 += "#i"+itemList[i]+"#,"
		}

        if (cm.getHyPay(1) >= oncePrice) {
			cm.sendYesNo(text1+"\r\n#r#e是否抽奖?");
        } else {	
			cm.sendOk(text1+"\r\n#r元宝不足，无法进行抽取！");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * itemList.length);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
                finalitem.push(itemList[i]);
        }
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance];
            var quantity = 1;
            var notice = 1;
            if (cm.canHold()) {
                if (notice == 1) {
                    cm.gainGachaponItem(itemId, quantity, "元宝转蛋屋");
                } else {
                    cm.gainItem(itemId, quantity);
                }
                cm.gainItem(2431945, -1);
                cm.sendOk("你获得了 #b#t" + itemId + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
			
			cm.addHyPay(oncePrice);
            cm.safeDispose();
        } else {
            cm.sendOk("#r(获得了安慰奖：星星 20 个。)\r\n今天的运气可真差，什么都没有拿到。");
            cm.gainItem(2431945, -1);
            cm.gainItem(4001839, 20);
            cm.safeDispose();
        }
    } else {
        cm.dispose();
    }
}















