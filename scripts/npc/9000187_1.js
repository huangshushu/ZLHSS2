var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var questIcon = "#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n";
var startIcon = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n";
var itemlist = Array(
	Array(4001832, 50),
	Array(3991052, 1000),
	Array(5062024, 5000),
	Array(2049600, 15000),
	Array(2049323, 20000),
	Array(2049116, 20000),
	Array(2049153, 30000),
	Array(2432099, 30000),//巨大公鸡骑宠30天券
	Array(2430993, 30000), //藏獒骑宠30天使用券
	Array(2432328, 30000), //Naver帽子骑宠30天使用券
	Array(1142006, 50000),
	Array(4001715, 99999) 
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
			text = head + "\t#h0#,你好！在这里可以使用#b神秘贡献点#k兑换你想要的物品\r\n\r\n#b";
			text += "\t"+icon + " #d您当前剩余贡献点：#r#e"+cm.getCredit("神秘贡献点")+"#n#d 点\r\n\r\n";
			text += questIcon;
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# #t"+itemlist[i]+"# #r"+itemlist[i][1]+"贡献点#b\r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("您想要兑换#v"+itemlist[selects][0]+"##t"+itemlist[selects][0]+"#\r\n请你输入想要兑换的数量\r\n\r\n#r每1个需要" + itemlist[selects][1] + "贡献点", 0, 0, 700);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "贡献点。");
        } else if (a == 3) {
			var itemid = itemlist[selects][0];
			if (cm.getSpace(Math.floor(itemid/1000000))<=2) {
				cm.sendOk("您的背包空间不足，请整理后再兑换。");
				cm.dispose();
				return; 
			}
            if (cm.getCredit("神秘贡献点") >= buynum * itemlist[selects][1]) {
                cm.gainCredit("神秘贡献点", -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的贡献点。");
                cm.dispose();
            }
        }
    }//mode
}//f