 
status = -1;
var itemList = Array(
		                  
		                        Array(2290011,50,1,1),//蓝调
		                        Array(2290021,50,1,1),//项链
								Array(2290023,50,1,1),//衣服
								Array(2290031,100,1,1),//卷
								Array(2290042,100,1,1),//卷
								Array(2290049,100,1,1),//卷
							    Array(2290061,100,1,1),//卷
								Array(2290074,100,1,1),//衣服
								Array(2290084,100,1,1),//卷
								Array(2290083,100,1,1),//卷
								Array(2290107,100,1,1),//卷
							    Array(2290118,100,1,1),//卷
								Array(2290133,100,1,1)
								

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
			if(cm.haveItem(2028009,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("打开随即进阶技能书可获得以下道具之一:" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "随即进阶技能书箱子", notice);
            if (item != -1) {
                cm.gainItem(2028009, -1);//获得物品
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
















