var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var yb = 4031332;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var questIcon = "#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n";
var startIcon = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n";
var itemlist = Array(
//终极
Array(2612078, 30, 1),
Array(2612079, 30, 1),
Array(2613066, 30, 1),
Array(2613067, 30, 1),
Array(2615049, 30, 1),
Array(2615050, 30, 1),
Array(2616214, 30, 1),
Array(2048823, 30, 1),
Array(2048824, 30, 1),
Array(2616215, 30, 1),
//V
Array(2048821, 20, 1),
Array(2048822, 20, 1),
Array(2616075, 20, 1),
Array(2616074, 20, 1),
Array(2615043, 20, 1),
Array(2615044, 20, 1),
Array(2612076, 20, 1),
Array(2612077, 20, 1),
Array(2613065, 20, 1),
Array(2613064, 20, 1),
//X
Array(2048817, 10, 1),
Array(2048818, 10, 1),
Array(2612061, 10, 1),
Array(2612062, 10, 1),
Array(2613050, 10, 1),
Array(2613051, 10, 1),
Array(2615031, 10, 1),
Array(2615032, 10, 1),
Array(2616061, 10, 1),
Array(2616062, 10, 1)

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
			text = "  尊敬的#r#h0##k,您好！在这里可以使用“#b#z"+yb+"##k”兑换你想要的物品。\r\n";
			text += "  - 您当前剩余的连胜卷轴为：#r#e#c"+yb+"##n #k个\r\n\r\n";
			text += questIcon;
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##d#v"+itemlist[i]+"##z"+itemlist[i]+"##l\r\n\r\n#k   - 所需#z"+yb+"#：#r"+itemlist[i][1]+"个#k  购买数量：#r"+itemlist[i][2]+"#k个\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("您想要兑换#v"+itemlist[selects][0]+"##t"+itemlist[selects][0]+"#\r\n请你输入想要兑换的数量\r\n\每件需要#r" + itemlist[selects][1] + "#k个“#b#z"+yb+"##k”", 1, 1, 10);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想兑换#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉#r " + itemlist[selects][1] * buynum + " #k个“#b#z"+yb+"##k”。");
        } else if (a == 3) {
			var itemid = itemlist[selects][0];
			if (cm.getSpace(Math.floor(itemid/1000000))<=2) {
				cm.sendOk("您的背包空间不足，请整理后再兑换。");
				cm.dispose();
				return; 
			}
            if (cm.haveItem(yb,itemlist[selects][1] * buynum) == true) {
                cm.gainItem(yb, -itemlist[selects][1] * buynum);
                cm.gainItem(itemlist[selects][0], itemlist[selects][2] * buynum);
				//cm.setBossLog("消费值" ,1 ,itemlist[selects][1] * buynum)
                cm.sendOk("购买成功。");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的连胜卷轴。");
                cm.dispose();
            }
        }
    }//mode
}//f