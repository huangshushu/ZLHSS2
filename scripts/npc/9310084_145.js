
status = -1;
var itemList = Array(
Array(2370006, 200, 1, 1), //经验3000
Array(2370007, 200, 1, 1), //经验2000
Array(2370008, 200, 1, 1), //经验1000
Array(2370002, 200, 1, 1), //经验30000
Array(2370003, 200, 1, 1), //经验20000
Array(2370004, 200, 1, 1), //经验10000
Array(2370005, 200, 1, 1), //经验5000
Array(2370000, 200, 1, 1), //经验100000
Array(2370001, 200, 1, 1), //经验50000
Array(4005003, 100, 1, 1), //水晶
Array(4005000, 100, 1, 1), //水晶
Array(4005002, 100, 1, 1), //水晶
Array(4005001, 100, 1, 1), //水晶
Array(4005004, 50, 1, 1), //水晶
Array(4002003, 50, 1, 1), //邮票
Array(4002000, 50, 1, 1), //邮票
Array(4002001, 50, 1, 1), //邮票
Array(4002002, 50, 1, 1), //邮票

			
			Array(2049100,100, 1, 1), //????????
			Array(2340000,100, 1, 1), //????????
			//Array(1402036,500, 1, 1), //????????
			//Array(1432038,500, 1, 1), //????????
			//Array(1442045,500, 1, 1), //????????
			//Array(1382036,500, 1, 1), //????????
			//Array(1452044,500, 1, 1), //????????
			//Array(1472051,500, 1, 1), //????????
			//Array(1332050,500, 1, 1), //????????
			//Array(1462039,500, 1, 1), //????????
			//Array(1482013,500, 1, 1), //????????
			//Array(1492013,500, 1, 1), //????????
			
//Array(1032031, 500, 1, 0), //???????
//Array(1302056, 500, 1, 0), //???????
//Array(1402035, 500, 1, 0), //???????
//Array(1432030, 500, 1, 0), //???????
//Array(1442044, 500, 1, 0), //???????
//Array(1372010, 500, 1, 0), //???????
//Array(1382035, 500, 1, 0), //???????
//Array(1452019, 500, 1, 0), //???????
//Array(1462015, 500, 1, 0), //???????
//Array(1332051, 500, 1, 0), //???????
//Array(1472053, 500, 1, 0), //???????
//Array(1482012, 500, 1, 0), //???????
//Array(1492012, 500, 1, 0), //???????
Array(2370006, 200, 1, 0) //???????
//-----????-----

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("????e????");
            cm.dispose();
        }
        status--;
    }
		if (status == 0) {
			if(cm.haveItem(4001114,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("消耗1个#v4001114#抽取下面物品!" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("消耗1个#v4001114#抽取下面物品!\r\n " + str1);
				cm.dispose();
			}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 200);
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
            item = cm.gainGachaponItem(itemId, quantity, "蛋糕活动蓝蛋蛋", notice);
            if (item != -1) {
				//cm.setmoneyb(-5);
cm.gainItem(4001114, -1);//??????
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("重新点一下");
           // cm.setmoneyb(-5);
//cm.gainItem(4170005, 5);//??????
			//cm.gainNX(1000);	//??????
            cm.safeDispose();
        }
    }
}









