var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
	Array(4310088, 5), 
	Array(4033356, 50),
	Array(2049323, 80),
	Array(2049168, 80),
	Array(2048300, 100),
	Array(2048301, 150),
	Array(2430893, 300),
	Array(2048306, 400),
	Array(2046913, 200),
	Array(2046173, 200), 
	Array(2046914, 200), 
	Array(1113070, 3880), 
	Array(1152155, 3880), 
	Array(1032216, 3880),  
	Array(2436245, 6880),
	Array(1162035, 25000),
	Array(1190301, 25000) 
	
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
            text = "#h0#，你当前的积分为：#r" + cm.getPlayerPoints() + "#k点\r\n请选择你想要兑换的物品：\r\n\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				var extraName = "";
				if (itemlist[i][2]!=null) {
					extraName="("+itemlist[i][2]+")";
				}
				text += "#L" + i + "##i" + itemlist[i][0] + ":##t" + itemlist[i][0] + "#"+extraName+" - #r"+itemlist[i][1]+"#b 积分  \r\n";
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
            cm.sendYesNo("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "积分。");
        } else if (a == 2) {
			var itemid = itemlist[selects][0];
			var itemType = Math.floor(itemid/1000000);
			
			var costPoints = buynum * itemlist[selects][1];
            if (cm.getPlayerPoints()>=costPoints) {
				if (cm.getSpace(itemType)<1) {
					cm.sendOk("兑换失败，包裹空间不足！");
					cm.dispose();
					return;
				}
                cm.gainPlayerPoints(-costPoints);
				cm.gainItem(itemlist[selects][0], buynum);
				cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的积分。");
                cm.dispose();
            }
        }
    }//mode
}//f