 
status = -1;
var itemList = Array(
		                  
		                        Array(2510060,10,1,1),//彩虹裤子公式
                                Array(2510061,10,1,1),//彩虹手套公式
                                Array(2510062,10,1,1),//彩虹鞋子公式
                                Array(2510063,10,1,1),//内裤公式
                                Array(2510064,10,1,1),//手表公式
                                Array(2510065,10,1,1),//羽毛鞋公式
								Array(2510000,50,1,1),//蓝调
		                        Array(2510001,50,1,1),//项链
								Array(2510002,50,1,1),//衣服
								Array(2510003,100,1,1),//卷
								Array(2510004,100,1,1),//卷
								Array(2510005,100,1,1),//卷
							    Array(2510006,100,1,1),//卷
								Array(2510007,100,1,1),//衣服
								Array(2510008,100,1,1),//卷
								Array(2510009,100,1,1),//卷
								Array(2510010,100,1,1),//卷
							    Array(2510011,100,1,1),//卷
								Array(2510012,100,1,1),//卷
							    Array(2510013,100,1,1),//卷
								Array(2510014,100,1,1),//卷
								Array(2510015,100,1,1),//卷
								Array(2510016,100,1,1),//卷
								Array(2510017,100,1,1),//卷
								Array(2510018,100,1,1),//卷
								Array(2510019,100,1,1),//卷
								Array(2510020,100,1,1),//卷
								Array(2510021,100,1,1),//卷
								Array(2510022,100,1,1),//卷
								Array(2511000,20,1,1),//坐骑
                                Array(2511001,20,1,1),
                                Array(2511002,20,1,1),
                                Array(2511003,20,1,1)
								

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
			if(cm.haveItem(2028158,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("打开随即公式箱子可获得以下道具之一:" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "公式随机箱子", notice);
            if (item != -1) {
                cm.gainItem(2028158, -1);//获得物品
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
















