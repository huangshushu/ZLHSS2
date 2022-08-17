/*
 星梦冒险岛(079)游戏服务端
 道具购买
 */
 
//道具id，单次购买数量，消耗材料数量	
var itemlist = [
[2022523,1,35,"10%卷轴自选"],
[2340000,1,100,"祝福卷轴"],
[2049100,1,100,"混沌卷轴"],
];

var costitem = 2430253

//说明文字
var 说明文字 = "碎片商店：";


var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var 文本信息 = "";
        for (var i = 0; i < itemlist.length; i++) {
            文本信息 += "#b#L" + i + "#";
            文本信息 += "#i" + itemlist[i][0] + "#x#r"+itemlist[i][1]+"#b，需要#i"+costitem+"#x#r"+itemlist[i][2]+"#b("+itemlist[i][3]+")#l#k\r\n";
        }

        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else if (status == 1) {
		sels = selection;
		var costItemQuantity = cm.判断背包消耗栏().countById(costitem);
		//cm.playerMessage(6, "costItemQuantity = " + costItemQuantity);//测试
		var maxQuantity = parseInt(costItemQuantity / itemlist[sels][2]);
		if(maxQuantity < 1){
			cm.sendOk("你的材料不够啊，连 #r " + itemlist[sels][1] + " #k 个都换不起。。");
			cm.dispose();
			return;
		}
		var text = "你选择了#v" + itemlist[sels][0] + "##r#z" + itemlist[sels][0] + "##k，单价为#v" + costitem + "##rx" + itemlist[sels][2] + " #k，请选择需要兑换的个数：";
		
		cm.sendGetNumber(text, 1, 1, maxQuantity)
		
    } else if (status == 2){
		var quantity = selection;
		var costItemQuantity = cm.判断背包消耗栏().countById(costitem);
		var needQuantity = quantity * itemlist[sels][2];
		if(needQuantity <= costItemQuantity){
			cm.gainItem(costitem, -needQuantity);
			cm.gainItem(itemlist[sels][0], itemlist[sels][1] * quantity);
			cm.说明文字("购买成功");
			cm.全服黄色喇叭("[碎片商店] : 玩家 "+cm.getPlayer().getName()+" 从碎片商店兑换了卷轴")
			cm.dispose();
		}else{
			cm.sendOk("你的材料不够。");
			cm.dispose();
			return;
		}
		
	}else {
        cm.dispose();
    }
}