var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
//Array(兑换的道具，兑换的数量，需要的道具，需要的道具数量)
     Array(2044815, 1,4310196,1),
	 Array(2044815, 50,4310196,50),
     Array(2044703, 1,4310196,1),
	 Array(2044703, 50,4310196,50),
     Array(2043703, 1,4310196,1),
	 Array(2043703, 50,4310196,50),
     Array(2043803, 1,4310196,1),
	 Array(2043803, 50,4310196,50),
     Array(2044603, 1,4310196,1),
	 Array(2044603, 50,4310196,50),
     Array(2044503, 1,4310196,1),
	 Array(2044503, 50,4310196,50),
     Array(2043003, 1,4310196,1),
	 Array(2043003, 50,4310196,50),
     Array(2044003, 1,4310196,1),
	 Array(2044003, 50,4310196,50),
     Array(2044303, 1,4310196,1),
	 Array(2044303, 50,4310196,50),
     Array(2043103, 1,4310196,1),
	 Array(2043103, 50,4310196,50),
     Array(2044203, 1,4310196,1),
	 Array(2044203, 50,4310196,50),
     Array(2044403, 1,4310196,1),
	 Array(2044403, 50,4310196,50),
     Array(2044908, 1,4310196,1),
	 Array(2044908, 50,4310196,50),
     Array(2043303, 1,4310196,1),
	 Array(2043303, 50,4310196,50)
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
            text = "  选择所要兑换的道具\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "#兑换#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "# 需要#v4310196#x" + itemlist[i][1] + "#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
  //          var txt = " - 当前兑换道具：#r#i" + itemlist[selects][0] + "##t" + itemlist[selects][0] + "#\r\n\r\n"
   //         cm.sendYesNo(txt);
        } else if (a == 2) {
            var itemid = itemlist[selects][0];
            if (cm.canHold(itemid) == false) {
                cm.sendOk("您的背包空间不足，请整理后再兑换。");
                cm.dispose();
                return;
            }
            if (cm.haveItem(itemlist[selects][2], itemlist[selects][3]) == false) {
                cm.sendYesNo("道具不足，是否需要花费 5000 点券兑换一个。");
            } else {
                cm.gainItem(itemlist[selects][2],-itemlist[selects][3]);
                cm.gainItem(itemlist[selects][0], itemlist[selects][1]);
                cm.sendOk("兑换成功。");
                cm.dispose();
            }
        } else if (a == 3) {
            if (cm.getPlayer().getCSPoints(1)>5000){
            cm.gainItem(4310196,1);
            cm.gainNX(-5000);
            cm.sendOk("购买成功。");
            cm.dispose();
            } else {
                cm.sendOk("点券不足");
                cm.dispose();
            }
    }//mode
    }
}
