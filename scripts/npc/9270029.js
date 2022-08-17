/*
 ZEVMS冒险岛(079)游戏服务端脚本
 类型：装备附魔类类型
 时间：2019-01-03
 作者：ZEV，坐和放宽
 */
 //时间引用
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
function start() {
    status = -1;
    action(1, 0, 0)
}
function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--

    }
    if (status <= 0) {
        var selStr = "   Hi~#b#h ##k，我是来自#r异世界#k的道具制作者，我可以打造非凡的道具效果，你想给你的道具增加特殊效果吗？附魔的道具通过移动，可以在信息栏查看详细信息。\r\n#r附魔的装备不能进行强化，放置拍卖等。#n\r\n\r\n";
		
		selStr += " #L1##b装备打孔#k#l  #L2##b装备附魔#k#l  #L8##r高阶附魔#k#l  #L3##b装备清洗#k#l\r\n";
		selStr += " #L6##b装备洗练#k#l  #L4##b宝石洗练#k#l  #L5##b宝石镶嵌#k#l  #L7##r指定清洗#k#l\r\n";
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
        case 1:
			cm.dispose();
            cm.openNpc(1032002,1);
            break;
		case 2:
			cm.dispose();
            cm.openNpc(1032002,2);
            break;
		case 3:
			cm.dispose();
            cm.openNpc(1032002,3);
            break;
		case 4:
			cm.dispose();
            cm.openNpc(1032002,4);
            break;
		case 5:
			cm.dispose();
            cm.openNpc(1032002,5);
            break;
		case 6:
			cm.dispose();
            cm.openNpc(1032002,6);
            break; 
		case 7:
			cm.dispose();
            cm.openNpc(1032002,7);
            break;
		case 8:
			cm.dispose();
            cm.openNpc(1032002,8);
            break;
        }
    }
}