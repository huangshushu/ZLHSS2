/*
 ZEVMS冒险岛(079)游戏服务端
蝙蝠怪系列
 */
var 装备 = [
    1432055,
	1402058,
	1332086,
	1322069,
	1412039,
	1302113,
	1372050,
	1462063,
	1452070,
	1332087,
	1442075,
	1472084,
	1402059,
	1492036,
	1482031,
	1482032,
	1422043

];
//材料设置
var 材料 = [
    [4001261, 500],
	[4021007, 5],
    [4011001, 10],
	[4011000, 10],
    [4004001, 20],
    [4004002, 20],
    [4004003, 20],
	[4004000, 20]
];
var 金币 = 100;
var 点券 = 100;
//说明文字
var 说明文字 = "   hi #b#h ##k 蝙蝠怪是一种很强力的怪物，用它的材料制作的装备也是很强力的。";


var sels;
var 脚本执行 = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        脚本执行++;
    } else if (mode == 0) {
        脚本执行--;
    } else {
        cm.dispose();
        return;
    }
    if (脚本执行 == 0) {
        var 文本信息 = "";
        for (var i = 0; i < 装备.length; i++) {
            文本信息 += "#b#L" + i + "#";
            文本信息 += "#i" + 装备[i] + "##z" + 装备[i] + "##l#k\r\n";
        }
        文本信息 += "\r\n";
        文本信息 += "#d所需材料；————————————————————#k\r\n";
        for (var ii = 0; ii < 材料.length; ii++) {
            文本信息 += "    #i" + 材料[ii][0] + "#  #b#t" + 材料[ii][0] + "##k [" + 材料[ii][1] + " / #r#c " + 材料[ii][0] + "##k]\r\n";
            if (ii % 3 == 0) {
                文本信息 += "";
            }
        }
        文本信息 += "\r\n";
        if (金币 > 0 || 点券 > 0) {
            文本信息 += "#d所需费用；————————————————————#k\r\n";
            if (金币 > 0) {
                文本信息 += "    #v5200000##b  金币 #k[" + 金币 + " / #r" + cm.getMeso() + "#k]\r\n";
            }
            if (点券 > 0) {
                文本信息 += "    #v5440000##b  点券 #k[" + 点券 + " / #r" + cm.getPlayer().getCSPoints(1) + "#k]\r\n";
            }
        }
        文本信息 += "\r\n—————————————————————————#k\r\n";
        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else if (脚本执行 == 1) {
        sels = selection;
        if (cm.getInventory(1).isFull()) {
			cm.sendNext("装备栏必须有一个空位。");
			cm.dispose();
        return;
    }
        if (cm.getMeso() < 金币 || cm.getPlayer().getCSPoints(1) < 点券) {
            cm.sednOk("制作费用不够。");
            cm.dispose();
            return;
        }
        for (var i = 0; i < 材料.length; i++) {
            if (!cm.haveItem(材料[i][0], 材料[i][1])) {
                cm.sednOk("#i" + 材料[i][0] + "#  #b#t" + 材料[i][0] + "##k 需要 #r" + 材料[i][1] + "#k 个");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b确定制作 #b #i" + 装备[sels] + "##k 吗? \r\n");
    } else if (脚本执行 == 2) {
        for (var i = 0; i < 材料.length; i++) {
            cm.gainItem(材料[i][0], 材料[i][1]);
        }
        cm.给物品(装备[sels], 1);
        cm.说明文字("#b成功制作 #i" + 装备[sels] + "#");
        cm.对话结束();
    } else {
        cm.说明文字("#r发生错误: mode : " + mode + " 脚本执行 : " + 脚本执行);
        cm.对话结束();
    }
}