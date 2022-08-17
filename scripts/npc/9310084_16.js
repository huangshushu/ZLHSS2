var status = 0;
var itemList = 
Array(     
            Array(2290022,500,1, 1),
			Array(2290009,500,1, 1),//周年枫叶
			Array(2290008,500,1, 1),
			Array(2290031,500,1, 1),
			Array(2290030,500,1, 1),
			Array(2290033,500,1, 1),
			Array(2290032,500,1, 1),
			Array(2290049,500,1, 1),
            Array(2290048,500,1, 1),
			Array(2290053,500,1, 1),
			Array(2290052,500,1, 1),
			Array(2290086,500,1, 1),
			Array(2290087,500,1, 1),
			Array(2290061,500,1, 1),
			Array(2290060,500,1, 1),
			Array(2290011,500,1, 1),
			Array(2290010,500,1, 1),
			Array(2290091,500,1, 1),
			Array(2290090,500,1, 1),
			Array(2290085,500,1, 1),
			Array(2290084,500,1, 1),
			Array(2290093,500,1, 1),
			Array(2290092,500,1, 1),
			Array(2290101,500,1, 1),
			Array(2290125,500,1, 1),
			Array(2290096,500,1, 1),
			Array(2290120,500,1, 1),
			Array(2290119,500,1, 1),
			Array(2290077,500,1, 1),
			Array(2290076,500,1, 1),
			Array(2290127,500,1, 1),
			Array(2290126,500,1, 1),
			Array(2290128,500,1, 1),
			Array(2290129,500,1, 1),
			Array(2290122,500,1, 1),
			Array(2290121,500,1, 1),
			Array(2290113,500,1, 1),
			Array(2290112,500,1, 1),
			Array(2290118,500,1, 1),
			Array(2290117,500,1, 1),
			Array(2290007,500,1, 1),
			Array(2290006,500,1, 1),
			Array(2290037,500,1, 1),
			Array(2290036,500,1, 1),
			Array(2290099,500,1, 1),
			Array(2290100,500,1, 1),
			Array(2290023,500,1, 1),
			Array(2290098,500,1, 1),
			Array(2290097,500,1, 1),
			Array(2290066,500,1, 1),
			Array(2290067,500,1, 1),
			Array(2290012,500,1, 1),
			Array(2290013,500,1, 1),
			Array(2290050,500,1, 1),
			Array(2290051,500,1, 1),
			Array(2290043,500,1, 1),
			Array(2290042,500,1, 1),
			Array(2290046,500,1, 1),
			Array(2290047,500,1, 1),
			Array(2290088,500,1, 1),
			Array(2290089,500,1, 1),
			Array(2290040,500,1, 1),
			Array(2290041,500,1, 1),
			Array(2290070,500,1, 1),
			Array(2290071,500,1, 1),
			Array(2290132,500,1, 1),
			Array(2290133,500,1, 1),
			Array(2290018,500,1, 1),
			Array(2290019,500,1, 1),
			Array(2290031,500,1, 1),
			Array(2290030,500,1, 1),
			Array(2290119,500,1, 1)


			//Array(1012171,400,1,1), //GWW
			//Array(1012171,400,1,1) //gww
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("这里是闹钟技能书抽奖处。\r\n\r\n奖品包含：#v4310003#所有70%/50%技能书等.\r\n");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4310003, 1)) {
            cm.sendYesNo("这里是闹钟技能书抽奖处。\r\n\r\n.");
        } else {
            cm.sendOk("这里是闹钟技能书抽奖处。\r\n\r\n.\r\n你背包里有1个#b#t4310003##k吗?");
            cm.safeDispose();
        }
    } else if (status == 1) {
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
            item = cm.gainGachaponItem(itemId, quantity, "闹钟技能书抽奖", notice);
            if (item != -1) {
                cm.gainItem(4310003, -1);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("你确实有#b#t4310003##k吗？如果是，请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "闹钟技能书抽奖", notice);
            if (item != -1) {
                cm.gainItem(4310003, -1);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("你确实有#b#t4310003##k吗？如果是，请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        }
    }
}