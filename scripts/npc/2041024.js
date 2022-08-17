/*
 ZEVMS冒险岛(079)游戏服务端
 道具制作
 */
var 装备 = [

    //重生定边手套
    4031172,
    //重生逍遥手套
    4031179
];
//说明文字
var 说明文字 = "兑换需要10个#v4031196#";


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

        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else if (脚本执行 == 1) {
		if(cm.haveItem(4031196, 10)){
		
        sels = selection;
        cm.gainItem(装备[sels], 1);
		cm.gainItem(4031196, -10);
        cm.说明文字("兑换成功快滚");
		//cm.输出记录("礼包兑换记录/重生套装兑换记录.txt",""+cm.时间()+" : "+cm.getChar().getName()+" 兑换了 "+cm.getItemName(装备[sels])+" \r\n");
        cm.dispose();
		}
		cm.说明文字("你没有材料不要骗我");
    } else {
        cm.dispose();
    }
}