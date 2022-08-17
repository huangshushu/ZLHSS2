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
        if (cm.getPlayer().getMapId() == 706041715) {
            cm.sendYesNo("果然长江后浪推前浪，世上新人赶旧人。 请让我为少年颁发奖励吧!!!");
        } else {
            cm.sendOk("哼！旁边的老头抢了我的货物，我非常气愤。");
            cm.dispose();
        }
    } else if (status == 1) {
        if ((cm.getSpace(1) > 1||cm.getSpace(2) > 1||cm.getSpace(3) > 1||cm.getSpace(4) > 1)) {
            var item;
		var chance1 = Math.floor(Math.random() * 500);
		if(chance1 >= 0 && chance1 <= 440){
 		var itemList = new Array(
		2049116, //大师附加
		2049122, //大师附加
		2049323, //大师附加
		5062010, //大师附加
5062500, //大师附加
5062002, //高级神奇魔方	
5062009//超级神奇魔方
		    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "卧虎藏龙", 3);
		} else if(chance1 >= 441 && chance1 <= 450){
 		var itemList = new Array(
			2431994,//祥龙100&
1122265, //中级贝勒德吊坠
1142745,
	1142746,
1132244  //中级贝勒德腰带
		    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "卧虎藏龙", 3);
		} else if(chance1 >= 471 && chance1 <= 480){
 		var itemList = new Array(
2432669, //1
		2431989, //星火
2431992,//随机暴君防具
1113074, //高级贝勒德戒指
1032222, //高级贝勒德耳环
1122266, //高级贝勒德吊坠
2431988,//150防具
1132245  //高级贝勒德腰带
		    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "卧虎藏龙", 3);
		}else{
 		var itemList = new Array(
			2431991, //随机冒险心
		//2431995,// 惊人的武器卷100%
		2431938,// --法弗纳武器箱   材料150武器
1113075, //最高级贝勒德戒指
1032223, //最高级贝勒德耳环
1122267, //最高级贝勒德吊坠
1132246  //最高级贝勒德腰带
		    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "卧虎藏龙", 3);
}
            if (item != -1) {
		cm.warp(101050000);
		cm.dispose();
            } else {
                cm.sendOk("请你确认在背包的装备,消耗,其他窗口中是否有一格以上的空间?");
            }
        } else {
            cm.sendOk("xx错误");
        }
        cm.dispose();
    }
}