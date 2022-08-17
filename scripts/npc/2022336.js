 
status = -1;
var itemList = Array(
		                        Array(1082313,100,1,1),//100枫叶装
		                        Array(1332143,100,1,1),//100枫叶装
		                        Array(1342038,100,1,1),//100枫叶装
		                        Array(1372095,100,1,1),//100枫叶装
		                        Array(1382119,100,1,1),//100枫叶装
		                        Array(1402105,100,1,1),//100枫叶装
		                        Array(1432075,80,1,1),//100枫叶装
		                        Array(1442131,100,1,1),//100枫叶装
		                        Array(1452124,100,1,1),//100枫叶装
		                        Array(1462112,100,1,1),//100枫叶装
		                        Array(1472135,100,1,1),//100枫叶装
		                        Array(1482097,80,1,1),//100枫叶装
		                        Array(1492096,80,1,1)//100枫叶装

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("再见得把油。");
            im.dispose();
        }
        status--;
    }
		if (status == 0) {
			if(im.haveItem(2022336,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				im.sendYesNo("打开宝箱可获得以下道具之一:" + str1);
				}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 100);
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
            item = im.gainGachaponItem(itemId, quantity, "秘密箱子", notice);
            if (item != -1) {
                im.gainItem(2022336, -1);//获得物品
                im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            im.safeDispose();
        } else {
            im.safeDispose();
        }
    }
}
















