/*
	Name: Gachapon12
	Place: Singapore and Kampung
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.haveItem(5220000)) {
	   cm.sendYesNo("你有一些 #bGachapon门票#k 那里.\r\n你想试试你的运气?");
	} else {
	    c cm.sendOk("你没有跟你一票。回来之前我买的，请在百货公司票. 谢谢.");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var item;
	if (Math.floor(Math.random() * 300) == 0) {
	    var rareList = new Array(2049100, 2340000, 1372040, 3010029, 3010030, 3010031, 3010032, 3010033);

	    item = cm.gainGachaponItem(rareList[Math.floor(Math.random() * rareList.length)], 1);
	} else {
	    var itemList = new Array(2044110, 2000004, 2000005, 2022025, 2022027, 4001014, 1442013, 1302022, 1432017, 1302027, 1402013, 1332020,
		1032006, 1302014, 1432048, 1102086, 1402044, 1032002, 1442014, 1402009, 1442009, 1442025, 1442007, 1422007, 1432005, 1372007, 1372000, 1372031, 1372036,
		1372011, 1472023, 1472054, 1332012, 1462002, 2044903, 2044904, 2044803, 2044804);

	    item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	}

	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("您已获得 #b#t" + item + "##k.");
	} else {
	    cm.sendOk("请检查您的项目库存看你是否有票，或者如果库存已满.");
	}
	cm.safeDispose();
    }
}