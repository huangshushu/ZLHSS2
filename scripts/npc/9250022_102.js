/**
 * @触发条件：开拍卖功能
 * @每日签到：领取物品 npc
 * @npcName：回顾冒险岛运营员
 * @npcID：   9900004
 **/
//importPackage(net.sf.cherry.client);
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    var a1 = "#L1#" + 正方箭头 + "#r【升级战士冒险之心】#l\r\n\r\n";
	    var a2 = "#L2#" + 正方箭头 + "#r【升级弓手冒险之心】#l\r\n\r\n";
	    var a3 = "#L4#" + 正方箭头 + "#r【升级飞侠冒险之心】#l\r\n\r\n";
	    var a4 = "#L3#" + 正方箭头 + "#r【升级法师冒险之心】#l\r\n\r\n";
	    var a5 = "#L5#" + 正方箭头 + "#r【升级海盗冒险之心】#l\r\n\r\n";

            cm.sendSimple("#d又一个勇士，一个厉害的勇士，就该有属于自己的装备，我可以帮你制作#r装备#d只要你有材料!!!\r\n点券余额数: #r" + cm.getChar().getNX() + "\r\n"+a1+""+a2+""+a3+""+a4+""+a5+"");

	    } else if (selection == 1) {//战士
		cm.openNpc(9250022, 36);
	    } else if (selection == 2) {//弓手
		cm.openNpc(9250022, 37);
	    } else if (selection == 3) {//法师
		cm.openNpc(9250022, 39);
	    } else if (selection == 4) {//飞侠
		cm.openNpc(9250022, 38);
	    } else if (selection == 5) {//海盗
		cm.openNpc(9250022, 40);
	    }
        
    }
}
