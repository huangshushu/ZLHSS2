/*
 ZEVMS冒险岛(079)游戏服务端
 道具制作
 */
var 装备 = [
    /*************
     手套
     *************/
1492245,
1482232,
1472275,
1462252,
1452266,
1442285,
1432227,
1422197,
1412189,
1402268,
1382274,
1332289,
1372237


    //
];
//说明文字
var 说明文字 = "   hi #b#h ##k 请选择你要的创世武器吧\r\n";


var status = -1;
var sels;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.对话结束();
        return;
    }
    if (status == 0) {
        var 文本信息 = "";
        for (var i = 0; i < 装备.length; i++) {
            文本信息 += "#b#L" + i + "#";
            文本信息 += "#i" + 装备[i] + "##z" + 装备[i] + "##l#k\r\n";
         
        }

        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else if (status == 1) {
        sels = selection;
        cm.gainItem(装备[sels], 1);
	//	cm.haveItem(2022466)
        cm.gainItem(2022336, -1);
        cm.说明文字("恭喜你获得 " + cm.显示物品(装备[sels]) + "");
		cm.全服黄色喇叭("[创世自选] : 土豪幸运玩家 "+cm.getPlayer().getName()+" 从创世自选中选择了一把终极武器")
		//cm.输出记录("礼包兑换记录/重生套装兑换记录.txt",""+cm.时间()+" : "+cm.getChar().getName()+" 兑换了 "+cm.getItemName(装备[sels])+" \r\n");
        cm.对话结束();
    } else {
        cm.说明文字("#r发生错误: mode : " + mode + " 脚本执行 : " + status);
        cm.对话结束();
    }
}