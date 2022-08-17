/*
@	Name: GMS-like Gachapon
	Kerning City
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
	var itemList = new Array(2040402, 2022130, 4130014, 2000004, 2000005, 2022113, 1322008, 1302021, 1322022, 1302013, 1051010, 1060079, 1002005, 1002023, 1002085, 1332017, 1322010, 1051031, 1002212, 1002117, 1040081, 1051037, 1472026, 1332015, 1041060, 1472003, 1060086, 1060087, 1472009, 1060051, 1041080, 1041106, 1092018);

	var item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("您已获得 #b#t" + item + "##k.");
	} else {
	    cm.sendOk("请检查您的项目库存看你是否有票，或者如果库存已满.");
	}
	cm.safeDispose();
    }
}