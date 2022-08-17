var status = -1;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var buyId = -1;
var item = null;
var itemList = Array(
	//道具代码，抵用券，数量， 次数：-1为不限制
	Array(5230000, 50, 1, 10),
	Array(2180000, 5000, 100, 10),
	Array(2048307, 50000, 5, 10),
	Array(2049402, 50000, 5, 10),
	Array(5220040, 5999, 100, 20),
	Array(5570000, 3000, 1, 2),
	Array(5537000, 2000, 1, 88),
	Array(5743003, 900, 1, 88),
	Array(5062002, 1200, 1, 99),
	Array(5062009, 1300, 1, 99),
	Array(5062500, 1400, 1, 99),
	Array(5062010, 2200, 1, 99),
	Array(5750002, 1000, 1, 99),
	Array(2702001, 3000, 1, 99),
	Array(5520000, 3500, 1,10),
	Array(5520001, 8000, 1, 10),
	Array(5150040, 1000, 1, 30),
	Array(5152053, 1000, 1, 30),
	Array(5151036, 980, 1, -1),
	Array(5153015, 980, 1, -1)
);
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = "欢迎来到#e#b抵用商城#k#n，请选择你要购买的物品，部分物品有次数限制哦！\r\n";
		for(var key in itemList) {
			var itemid = itemList[key][0];
			var itemquantity = itemList[key][2];
			var limitcount = itemList[key][3];
			var price = itemList[key][1];
			text+="#L"+key+"#"+aaa+" #r"+price+"抵用券#d兑换#b#z"+itemid+"# #d"+itemquantity+"个#k ";
			if (limitcount != -1) {
				var currentTimes = cm.getPQLog("抵用券"+cm.getItemName(itemid));
				if (currentTimes >= limitcount)
					text+="#r("+currentTimes+"/"+limitcount+"次)#k#l\r\n";
				else
					text+="#g("+currentTimes+"/"+limitcount+"次)#k#l\r\n";
			} else {
				text+="#l\r\n";
			}
		}
		cm.sendSimple(text);
		//cm.dispose();
	} else if (status == 1) {
		buyId = selection;
		item = itemList[buyId];
		var itemid = item[0];
		var itemquantity = item[2];
		var price = item[1];
		cm.sendYesNo("是否需要花费#r"+price+"抵用券#k购买"+itemquantity+"个#b#z"+itemid+"##k？");
	} else if (status == 2) {
		var itemid = item[0];
		var itemquantity = item[2];
		var limitcount = item[3];
		var price = item[1];
		var currentTimes = cm.getPQLog("抵用券"+cm.getItemName(itemid));
		var myNx = cm.getPlayer().getCSPoints(2);
		if (myNx < price) {
			cm.sendOk("您的抵用券元宝不足，无法完成购买。");
			cm.dispose();
			return;
		}
		if (limitcount!=-1 && currentTimes>=limitcount) {
			cm.sendOk("您今天无法再购买该物品。");
			cm.dispose();
			return;
		}
		if (cm.getSpace(Math.floor(itemid/1000000))<=2) {
			cm.sendOk("您的背包空间不足，请整理后再购买。");
			cm.dispose();
			return; 
		}
		cm.gainItem(itemid, itemquantity);
		cm.gainNX(2, -price);
		if (limitcount!=-1) {
			cm.setPQLog("抵用券"+cm.getItemName(itemid))
		}
		cm.sendOk("恭喜您购买成功！");
		cm.dispose();
	}
}