var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var questIcon = "#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n";
var startIcon = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n";
var itemlist = Array(
/*
	Array(4310224, 5, 2049373, 1, 5062024, 5, 50),
        Array(4310224, 10, 2049380, 1, 5062024, 10, 100),
	Array(4310224, 20, 2049380, 2, 5062024, 15, 200),
	Array(4310224, 30, 2049370, 1, 5062024, 20, 300),
	Array(4310224, 45, 2049370, 2, 5062024, 25, 500),
	Array(4310224, 70, 2049397, 1, 5062024, 30, 600),
	Array(4310224, 90, 2049397, 2, 5062024, 35, 800),
	Array(4310224, 110, 2049383, 1, 5062024, 40, 1000)
	*/
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
			text = "  通关#e“无限火力”#n的次数可在我这里兑换奖励哦\r\n";
			text += "  - 当前通关次数为：#r#e"+cm.getBossLog("无限火力积分", 1)+"#n#k 次\r\n\r\n";
			text += questIcon;
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##d领取 #r"+itemlist[i][6]+"#d 次通关积分奖励\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
			var text = "";
			    text += "通关 #r"+itemlist[selects][6]+"#k 次奖励预览：\r\n\r\n";
				text += " - #d#t"+itemlist[selects][0]+"##k x #r"+itemlist[selects][1]+"#k\r\n\r\n";
				text += " - #d#t"+itemlist[selects][2]+"##k x #r"+itemlist[selects][3]+"#k\r\n\r\n";
				text += " - #d#t"+itemlist[selects][4]+"##k x #r"+itemlist[selects][5]+"#k\r\n\r\n";
            cm.sendYesNo(text);
        } else if (a == 2) {
			var itemid = itemlist[selects][0];
			if (cm.getSpace(2)<=2) {
				cm.sendOk("您的背包空间不足，请整理后再兑换。");
				cm.dispose();
				return; 
			}
			if (cm.getSpace(3)<=2) {
				cm.sendOk("您的背包空间不足，请整理后再兑换。");
				cm.dispose();
				return; 
			}
			if (cm.getBossLog("组队通关"+itemlist[selects][6]+"次奖励", 1) > 0) {
				cm.sendOk("该奖励只能领取一次。");
				cm.dispose();
				return; 
			}
            if (cm.getBossLog("无限火力积分", 1) >= itemlist[selects][6]) {
                cm.gainItem(itemlist[selects][0],itemlist[selects][1]);
				cm.gainItem(itemlist[selects][2],itemlist[selects][3]);
				cm.gainItem(itemlist[selects][4],itemlist[selects][5]);
                cm.setBossLog("组队通关"+itemlist[selects][6]+"次奖励", 1);
                cm.sendOk("兑换成功。");
                cm.dispose();
            } else {
                cm.sendOk("当前通关次数不足。( "+cm.getBossLog("无限火力积分", 1)+" / "+itemlist[selects][6]+" )");
                cm.dispose();
            }
        }
    }//mode
}//f