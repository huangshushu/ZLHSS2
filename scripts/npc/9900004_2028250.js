 
status = -1;
var itemList = Array(
		                  
Array(2028041, 100, 1, 1), //任务
Array(2028042, 100, 1, 1), //脸
Array(2028043, 100, 1, 1), //脸
Array(2028049, 100, 1, 1), //脸
Array(2028050, 100, 1, 1), //脸
Array(2028051, 100, 1, 1), //脸
Array(2028055, 100, 1, 1), //脸
Array(2028056, 100, 1, 1), //脸
Array(2028057, 100, 1, 1), //脸
Array(2028044, 100, 1, 1), //脸
Array(2028045, 100, 1, 1), //脸
Array(2028046, 100, 1, 1), //脸
Array(2028052, 100, 1, 1), //脸
Array(2028053, 100, 1, 1), //脸
Array(2028054, 100, 1, 1), //脸
Array(2028058, 100, 1, 1), //脸
Array(2028059, 100, 1, 1), //脸
Array(2028060, 100, 1, 1)


);

function start() {
    action(1, 0, 0);
}

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
			if(cm.haveItem(2028250,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("打开箱子可获得以下任务之一:" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "世界任务", notice);
            if (item != -1) {
                cm.gainItem(2028250, -1);//获得物品
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
















