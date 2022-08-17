var petList = Array(
	Array(5000424, 500000),
	Array(5000324, 100000),
	Array(5000288, 50000),
	Array(5000287, 50000),
	Array(5000289, 50000),
	Array(5000054, 30000),
	Array(5000408, 30000),
	Array(5000409, 30000),
	Array(5000391, 30000),
	Array(5000433, 50000),
	Array(5000434, 50000),
	Array(5000435, 50000),
	Array(5000402, 50000),
	Array(5000403, 50000),
	Array(5000404, 50000),
	Array(5000405, 50000),
	Array(5000406, 50000),
	Array(5000407, 50000),
	Array(5001006, 50000),
	Array(5001007, 50000),
	Array(5001008, 50000),
	Array(5001009, 50000),
	Array(5001010, 50000),
	Array(5001011, 50000),
	Array(5000300, 50000),
	Array(5000301, 50000),
	Array(5000302, 50000),
	Array(5000303, 50000),
	Array(5000304, 50000),
	Array(5000305, 50000),
	Array(5000306, 50000),
	Array(5000307, 50000),
	Array(5000308, 50000)
);
var status = 0;
var petid = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var text = "我驯养了这么多神兽，少侠，搞两只呗！\r\n";
			for(var key in petList) {
				var pet = petList[key];
				text+="#L"+key+"##i"+pet[0]+":##b#z"+pet[0]+":#\t#r"+pet[1]+"点卷#k#l\r\n";
			}
			cm.sendSimple(text);
		} else if (status == 1) {
			petid = selection;
			var pet = petList[petid];
			var petname = cm.getItemName(pet[0]);
			var petprice = pet[1];
			cm.sendYesNo("是否要花费#r"+petprice+"#k点卷购买宠物#b<"+petname+">#k？");
		} else if (status == 2) {
			if (!cm.haveSpace(5)) {
				cm.sendOk("特殊栏空间不足，无法购买！");
				cm.dispose();
				return;
			}
			var idx = petid;
			var pet = petList[idx];
			var petprice = pet[1];
			var itemid = pet[0];
			if (cm.getPlayer().getCSPoints(1)<petprice) {
				cm.sendOk("点卷不足，购买失败！");
				cm.dispose();
				return;
			}
			cm.gainNX(1, -petprice);
			cm.gainPet(itemid, cm.getItemName(itemid), 1, 0, 100, 30*86400, 0); 
			cm.sendOk("恭喜，成功购买了一只#b#v"+itemid+"##t"+itemid+"##k。");
			cm.dispose();
		}
	}
}