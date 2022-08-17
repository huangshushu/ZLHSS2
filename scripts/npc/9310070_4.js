/*
  兜兜制作：道具兑换系统
       更新时间：2018/12/05
                  QQ：540328414
                               */	

var a = 0;
var text;
var selects; 
var buynum = 0;
var itemlist = Array(
	//道具代码, 所需道具数量;
	
    Array(4310014, 50, 4310195, 5, 5750000, 5)//蓝色蜗牛壳

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
			text = "  220以上的玩家每日可以完成以下任务~\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "#收集#v"+itemlist[i][0]+"##d#z"+itemlist[i][0]+"##l\r\n\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
			var txt = " - 当前收集道具：#r#i" + itemlist[selects][0] + "##t" + itemlist[selects][0] + "##k\r\n"
			   txt += " - 所需道具数量：#r" + itemlist[selects][1] + "#k 个\r\n\r\n"
			   txt += " - 可获得如下奖励：[ #r#t" + itemlist[selects][2] + "##k ] - [ #b" + itemlist[selects][3] + "#k ]\r\n"
			   txt += "                   [ #r#t" + itemlist[selects][4] + "##k ] - [ #b" + itemlist[selects][5] + "#k ]\r\n"
			   //txt += "                   [ #r#t" + itemlist[selects][6] + "##k ] - [ #b" + itemlist[selects][7] + "#k ]\r\n"
			   cm.sendYesNo(txt);
        } else if (a == 2) {
			var itemid = itemlist[selects][0];
			if (cm.canHold(itemlist[selects][4]) == false && cm.canHold(itemlist[selects][2]) == false) {//判断背包空间是否充足
				cm.sendOk("您的背包空间不足，请整理后再兑换。");
				cm.dispose();
				return; 
			}
			if (cm.haveItem(itemlist[selects][0] , itemlist[selects][1]) == false) {//判断背包空间是否充足
				cm.sendOk("道具不足，无法兑换。");
				cm.dispose();
			} else {
                cm.gainItem(itemlist[selects][0], -itemlist[selects][1]);//扣除道具
                cm.gainItem(itemlist[selects][2], itemlist[selects][3]);//给予道具
				cm.gainItem(itemlist[selects][4], itemlist[selects][5]);//给予道具
                cm.sendOk("任务完成，奖励以发放致背包内。");
                cm.dispose();

            }
        }
    }//mode
}