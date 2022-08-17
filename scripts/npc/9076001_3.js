var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var questIcon = "#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n";
var startIcon = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n";
var itemlist = Array(
   // Array(1112941, 0, 1),//土豪戒指 
	Array(4011008, 1, 1),//锂
    Array(4021021, 1, 1),//贤者之石	
	Array(4021020, 1, 1),//混沌碎片
	Array(4025003, 1, 1),//最高级研磨剂
	Array(4005001, 1, 1),//智慧水晶
	Array(4021016, 1, 1),//最高级物品结晶
    Array(4007005, 1, 1) //魔法粉末紫色
	
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "  通关#e“废弃副本”#n和#e“御龙魔副本”#n获得的#e“#b#z4310232##k”#n可在我这里兑换奖励哦\r\n";
			text += "  - 您当前剩余的道具数目为：#r#e#c4310232##n #k个\r\n\r\n";
			text += questIcon;
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##d#v"+itemlist[i]+"##z"+itemlist[i]+"##l\r\n\r\n#k   - 所需道具：#r"+itemlist[i][1]+"个#k  购买数量：#r"+itemlist[i][2]+"个#k\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("您想要兑换#v"+itemlist[selects][0]+"##t"+itemlist[selects][0]+"#\r\n请你输入想要兑换的数量\r\n#r每种需要" + itemlist[selects][1] + "个#e“#b#z4310232##k”#n", 1, 1, 1);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想兑换" + itemlist[selects][2] + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "个#e“#b#z4310232##k”#n。");
        } else if (a == 3) {
			var itemid = itemlist[selects][0];
			if (cm.getSpace(Math.floor(itemid/1000000))<=2) {
				cm.sendOk("您的背包空间不足，请整理后再兑换。");
				cm.dispose();
				return; 
			}
			if (itemlist[selects][0] == 1112941) {
				cm.dispose();
				cm.openNpc(9010010,"土豪戒指_兑换")
				return; 
			}
            if (cm.haveItem(4310232,itemlist[selects][1]) == true) {
                cm.gainItem(4310232, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], itemlist[selects][2]);
                cm.sendOk("兑换成功。");
                cm.dispose();
            } else {
                cm.sendOk("当前所需道具不足");
                cm.dispose();
            }
        }
    }//mode
}//f