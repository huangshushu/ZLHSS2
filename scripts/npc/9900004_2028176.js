 
status = -1;
var itemList = Array(
		                  
		                       
								Array(2380000, 100, 1, 1), //蜗牛卡片
Array(2380001, 100, 1, 1), //脸
Array(2380002, 100, 1, 1), //脸
Array(2380003, 100, 1, 1), //脸
Array(2380004, 100, 1, 1), //脸
Array(2380005, 100, 1, 1), //脸
Array(2380006, 100, 1, 1), //脸
Array(2380007, 100, 1, 1), //脸
Array(2380008, 100, 1, 1), //脸
Array(2380009, 100, 1, 1), //脸
Array(2380010, 100, 1, 1), //脸
Array(2380011, 100, 1, 1), //脸
Array(2380012, 100, 1, 1), //脸
Array(2380013, 100, 1, 1), //脸
Array(2380014, 100, 1, 1), //脸
Array(2380015, 100, 1, 1), //脸
Array(2380016, 100, 1, 1), //脸
Array(2380017, 100, 1, 1), //脸
Array(2380018, 100, 1, 1), //脸
Array(2380019, 100, 1, 1) //呆呆雪精灵卡片
		                       

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
			if(cm.haveItem(2028176,1)) {
				
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("打开第1页卡片箱可获得以下卡片之一:" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "第1页卡片箱", notice);
            if (item != -1) {
                cm.gainItem(2028176, -1);//获得物品
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.safeDispose();
        }
    }
}
















