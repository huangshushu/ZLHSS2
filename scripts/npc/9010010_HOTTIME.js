//获得物品列表
//物品ID, 概率, 数量, 广播
var itemList = Array(
	//第一样物品
	Array(
		[
		5062006//白金神奇魔方
		], 
		10000, 5, 1
	),
	//第二样物品
	Array(
		[
		1112427, //冒险家的残酷之戒
		1112428, //冒险家的暴击之戒
		1112429//冒险家的魔法之戒
		], 
		3500, 1, 1
	)
);

function start() {
	if (cm.getLevel() < 30) {
		cm.dispose();
		return;
	}
	var random = new java.util.Random();
	var finalitem = Array();
	for (var i = 0; i < itemList.length; i++) {
		if (itemList[i][1] >= random.nextInt(10000)) {
			var num = 0;
			if (itemList[i][0].length > 1) {
				num = random.nextInt(itemList[i][0].length);
			}
			var list = Array(itemList[i][0][num],itemList[i][2],itemList[i][3]);
			finalitem.push(
				Array(
				itemList[i][0][num], 
				itemList[i][2],
				itemList[i][3]
				)
			);
		}
	}
	if (finalitem.length == 0) {
		cm.sendOk("很遗憾，本次HOTTIME什么都没获得。");
	} else {
		var str = "";
		for (var i = 0; i < finalitem.length; i++) {
			if (finalitem[i][2] == 1) {
				if (cm.gainGachaponItem(finalitem[i][0], finalitem[i][1], " HOTTIME活动 ") == -1) {
					continue;
				}
			} else {
				cm.gainItem(finalitem[i][0], finalitem[i][1]);
			}
			str += "#i" + finalitem[i][0] + ":# #z" + finalitem[i][0] + "# " + finalitem[i][1] + "个\r\n";
		}
		cm.sendOk("恭喜你本次HOTTIME获得以下物品：\r\n" + str);
	}
	cm.dispose();
}
