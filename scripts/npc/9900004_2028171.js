 
status = -1;
var itemList = Array(
		                  
		                        //Array(1902401,1,1,1),//100枫叶装
								Array(1012319,5,1,1),//戒指
								Array(1102041,5,1,1),//戒指
								Array(1102042,5,1,1),//戒指
		                        Array(1052470,10,1,1),//戒指
/*Array(1382049, 20, 1, 0), //朱雀
Array(1382050, 20, 1, 0), //玄武
Array(1382051, 20, 1, 0), //白虎			
Array(1382052, 20, 1, 1),
Array(1492073, 100, 1, 1), //枫叶大将
Array(1452100, 100, 1, 0), //末代枪
Array(1302142, 100, 1, 0), //至尊拳
Array(1462085, 100, 1, 1), //堰月
Array(1402085, 100, 1, 1), //温度
Array(1482073, 100, 1, 1), //樱花
Array(1432075, 100, 1, 1), //至尊弓
Array(1442104, 100, 1, 1), //弩
Array(1322084, 100, 1, 1), //短枪
Array(1472111, 100, 1, 1), //短刀
Array(1422057, 100, 1, 1), //矛
Array(1332114, 100, 1, 1), //指节
Array(1372071, 100, 1, 1), //斧*/
Array(2043003, 200, 1, 1), //单手剑100
			Array(2044003, 200, 1, 1), //双手剑100
			Array(2044303, 200, 1, 1), //枪100
			Array(2044503, 200, 1, 1), //弓
			Array(2044603, 200, 1, 1), //弩  
			Array(2043303, 200, 1, 1), //短剑
			Array(2043703, 200, 1, 1), //短杖
			Array(2043803, 200, 1, 1), //长杖
			Array(2044703, 200, 1, 1), //拳套
			Array(2044908, 200, 1, 1), //短枪
			Array(2044815, 200, 1, 1), //指节
			Array(2044403, 200, 1, 1), //矛
			Array(2044203, 200, 1, 1), //双钝
	        Array(2044103, 200, 1, 1), //双斧
			Array(2043203, 200, 1, 1), //单钝
			Array(2043103, 200, 1, 1), //单斧
								
								Array(2450000,50,1,1),//双倍
								Array(4031504,100,1,1),//1000
		                        Array(4031505,50,1,1),//2000
								Array(4031506,10,1,1),//3000
								Array(4251202,150,1,1),//五彩
		                        Array(4011008,50,1,1),//锂
								Array(4011007,50,1,1),//月石
								Array(4310012,100,1,1),//必成
								Array(4310009,5,1,1),//15星强化
								Array(4310010,1,1,1),//20星强化
		                        Array(4000463,100,1,1),//国庆
								
								Array(4002000,100,1,1),//邮票
								Array(4002001,100,1,1),//邮票
								Array(4002002,100,1,1),//邮票
								Array(4002003,100,1,1),//邮票
								
								Array(4005000,200,1,1),//邮票
								Array(4005001,200,1,1),//邮票
								Array(4005002,200,1,1),//邮票
								Array(4005003,200,1,1),//邮票
								Array(4005004,200,1,1),//邮票
								
								Array(2530004,100,1,1),//幸运日
								Array(2022002,200,1,1),//雪碧
								Array(4001126,300,100,1),//枫叶
								
								
								Array(4000313,300,20,1),//枫叶
								
								
								
		                        Array(3992025,300,20,1)//强化星

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
			if(cm.haveItem(2028171,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("打开跑环箱子可获得以下道具之一:" + str1);
				}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 300);
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
            item = cm.gainGachaponItem(itemId, quantity, "跑环箱子", notice);
            if (item != -1) {
                cm.gainItem(2028171, -1);//获得物品
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
















