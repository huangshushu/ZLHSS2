var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getPlayer().getMapId() == 863010600) {
            cm.sendYesNo("哇哇哇!!!你既然成功平息了贝勒德的愤怒,请让我为勇士颁发奖励吧!!!");
        } else {
            cm.sendOk("哼！旁边的老头抢了我的货物，我非常气愤。");
            cm.safeDispose();
        }
    } else if (status == 1) {
        if ((cm.getSpace(1) > 1||cm.getSpace(2) > 1||cm.getSpace(3) > 1||cm.getSpace(4) > 1)) {
            var item;
		var chance1 = Math.floor(Math.random() * 500);
		if(chance1 >= 0 && chance1 <= 440){
 		var itemList = new Array(
1113072, //低级贝勒德戒指
1032220, //低级贝勒德耳环
1122264, //低级贝勒德吊坠
1132243  //低级贝勒德腰带
		    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "贝勒德", 3);
		} else if(chance1 >= 441 && chance1 <= 470){
 		var itemList = new Array(
1113073, //中级贝勒德戒指
1032221, //中级贝勒德耳环
1122265, //中级贝勒德吊坠
1132244  //中级贝勒德腰带
		    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "贝勒德", 3);
		} else if(chance1 >= 471 && chance1 <= 490){
 		var itemList = new Array(
1113074, //高级贝勒德戒指
1032222, //高级贝勒德耳环
1122266, //高级贝勒德吊坠
1132245  //高级贝勒德腰带
		    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "贝勒德", 3);
		}else{
 		var itemList = new Array(
1113075, //最高级贝勒德戒指
1032223, //最高级贝勒德耳环
1122267, //最高级贝勒德吊坠
1132246  //最高级贝勒德腰带
		    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "贝勒德", 3);
}
            if (item != -1) {
		cm.warp(863000100);
		cm.dispose();
            } else {
                cm.sendOk("请你确认在背包的装备,消耗,其他窗口中是否有一格以上的空间?");
            }
        } else {
            cm.sendOk("xx错误");
        }
        cm.safeDispose();
    }
}
