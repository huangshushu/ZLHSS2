/*
 ZEVMS冒险岛(079)游戏服务端
 道具制作
 */
var 卷轴 = [
    /*************
     手套
     *************/
2044908,
2044815,
2044703,
2044603,
2044503,
2044403,
2044303,
2044203,
2044103,
2044003,
2043803,
2043703,
2043303,
2043203,
2043103,
2043003,
1132175

    //
];
//说明文字
var 说明文字 = "   hi #b#h ##k 请选择你要的卷轴吧\r\n选择后是不能反悔的哦，#r进入此页面后请勿不选择#k，箱子已经被消耗。";


var 脚本执行 = -1;
var sels;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        脚本执行++;
    } else if (mode == 0) {
        脚本执行--;
    } else {
        cm.对话结束();
        return;
    }
    if (脚本执行 == 0) {
        var 文本信息 = "";
        for (var i = 0; i < 装备.length; i++) {
            文本信息 += "#b#L" + i + "#";
            文本信息 += "#i" + 装备[i] + "##z" + 装备[i] + "##l#k\r\n";
         
        }

        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else if (脚本执行 == 1) {
        sels = selection;
        cm.gainItem(装备[sels], 1);
        cm.gainItem(2022466, -1);
        cm.说明文字("恭喜你获得 " + cm.显示物品(卷轴[sels]) + "");
		//cm.输出记录("礼包兑换记录/重生套装兑换记录.txt",""+cm.时间()+" : "+cm.getChar().getName()+" 兑换了 "+cm.getItemName(装备[sels])+" \r\n");
        cm.对话结束();
    } else {
        cm.说明文字("#r发生错误: mode : " + mode + " 脚本执行 : " + 脚本执行);
        cm.对话结束();
    }
}