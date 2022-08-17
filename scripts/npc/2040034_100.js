var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
	Array(5062002, 1),
	Array(5062500, 1),
	Array(2613000, 60), // 星火单手武器攻击力卷轴 - 为单手武器附加提升攻击力的属性。
	Array(2613001, 60), // - 星火单手武器魔法力卷轴 - 为单手武器附加提升魔力的属性。
	Array(2612010, 60), // - 星火双手武器攻击力卷轴 - 为双手武器附加提升攻击力的属性。
	Array(4009053, 5),
	Array(4009054, 10),
	Array(4009055, 15),
	Array(4009056, 20),
	Array(4009057, 30),
	Array(4009058, 40),
	Array(4009059, 50),
	Array(2431988, 300, "150级防具箱子")
	
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
		cm.sendOk("好吧，等你考虑清楚了再来找我。");
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "#h0#，你当前的#b玩具城奖牌#k数量为：#r"+cm.getItemQuantity(4031169)+"#k个\r\n请选择你想要兑换的物品：\r\n\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				var extraName = "";
				if (itemlist[i][2]!=null) {
					extraName="("+itemlist[i][2]+")";
				}
				text += "#L" + i + "##i" + itemlist[i][0] + ":##t" + itemlist[i][0] + "#"+extraName+" - #r"+itemlist[i][1]+"#b 玩具城奖牌  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
			/*
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "个#b雪花币#k", 0, 0, 999999);*/
        } else if (a == 1) {
            selects = selection;
			buynum = 1;
            cm.sendYesNo("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "个#b玩具城奖牌#k。");
        } else if (a == 2) {
			var itemid = itemlist[selects][0];
			var itemType = Math.floor(itemid/1000000);
			
			var costPoints = buynum * itemlist[selects][1];
            if (cm.haveItem(4031169,costPoints)) {
				if (cm.getSpace(itemType)<1) {
					cm.sendOk("兑换失败，包裹空间不足！");
					cm.dispose();
					return;
				}
                cm.gainItem(4031169,-costPoints);
				cm.gainItem(itemlist[selects][0], buynum);
				cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的玩具城奖牌。");
                cm.dispose();
            }
        }
    }//mode
}//f