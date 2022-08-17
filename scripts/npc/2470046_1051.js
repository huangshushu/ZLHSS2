/*
NPC: 闪耀礼包
*/

var status = 0;
var giftContent = Array(
	Array("管家套装（男）", 250000, Array(
		Array(1000071, 1),
		Array(1050315, 1),
		Array(1702491, 1),
		Array(1102672, 1),
		Array(1072913, 1)
	)), 
	Array("女仆套装（女）", 250000, Array(
		Array(1001094, 1),
		Array(1051386, 1),
		Array(1702491, 1),
		Array(1102672, 1),
		Array(1072913, 1)
	)), 
	Array("无敌啦啦队队长套装（男）", 250000, Array(
		Array(1004327, 1),
		Array(1050346, 1),
		//Array(1051415, 1),
		Array(1073011, 1),
		Array(1702549, 1),
		Array(1102005, 1)
	)), 
	Array("无敌啦啦队队长套装（女）", 250000, Array(
		Array(1004327, 1),
		//Array(1050346, 1),
		Array(1051415, 1),
		Array(1073011, 1),
		Array(1702549, 1),
		Array(1102005, 1)
	)), 
	Array("彩虹糖套装", 200000, Array(
		Array(1004126, 1),
		Array(1042311, 1),
		Array(1062204, 1),
		Array(1702509, 1),
		Array(1072395, 1)
	)), 
	Array("明星熊套装", 120000, Array(
		Array(1042263, 1),
		Array(1072820, 1),
		Array(1062173, 1),
		Array(1702422, 1),
		Array(1003861, 1)
	)),
	
	Array("蝴蝶之恋（男）", 200000, Array(
		Array(1102729,1),
		Array(1050339,1),
		Array(1702538, 1),
		Array(1072978, 1),
		Array(1000076,1)
	)),
	Array("蝴蝶之恋（女）", 200000, Array(
		Array(1102729,1),
		Array(1051408,1),
		Array(1702538, 1),
		Array(1072978, 1),
		Array(1001098,1)
	)),
	Array("巴尼兔套装（男）", 250000, Array(
		Array(1004300,1),
		Array(1102757,1),
		//1051414
		Array(1050342,1),
		//1071079
		Array(1070063,1),
		Array(1702503,1)
		
	)),
	Array("巴尼兔套装（女）", 250000, Array(
		Array(1004300,1),
		Array(1102757,1),
		//1051414
		Array(1051414,1),
		//1071079
		Array(1071079,1),
		Array(1702503,1)
		
	)),
	Array("购物狂套装（男）", 280000, Array(
		Array(1050310,1),
		//Array(1051382,1),
		Array(1102669,1),
		Array(1702485,1),
		//Array(1001095,1),
		Array(1000072,1),
		Array(1072862,1)
	)),
	Array("购物狂套装（女）", 280000, Array(
		//Array(1050310,1),
		Array(1051382,1),
		Array(1102669,1),
		Array(1702485,1),
		Array(1001095,1),
		//Array(1000072,1),
		Array(1072862,1)
	)),
	Array("清爽夏日套", 80000, Array(
		Array(1003594,1),
		Array(1052503,1),
		Array(1072708,1),
		Array(1702366,1)
	)),
	Array("巧克力棒棒糖礼包（男）", 200000, Array(
		Array(1004094,1),
		Array(1050314,1),
		//Array(1051385,1),
		Array(1072910,1),
		Array(1082581,1),
		Array(1702489,1)
	)),
	Array("巧克力棒棒糖礼包（女）", 200000, Array(
		Array(1004094,1),
		//Array(1050314,1),
		Array(1051385,1),
		Array(1072910,1),
		Array(1082581,1),
		Array(1702489,1)
	)),
	
	Array("夏日海洋套装", 220000, Array(
		Array(1003636,1),
		Array(1702375,1),
		Array(1052536,1),
		Array(1102491,1)
	)),
	
	Array("蝴蝶礼包", 280000, Array(
		Array(1102453,1),
		Array(1003581,1),
		Array(1042241,1),
		Array(1062156,1),
		Array(1702367,1)
	)),
	
	Array("蓝色雪糕套装（男）", 200000, Array(
		Array(1102619,1),
		Array(1004038,1),
		Array(1050300,1),
		//Array(1051367,1),
		Array(1072894,1),
		Array(1702457,1)

	)),
	Array("蓝色雪糕套装（女）", 200000, Array(
		Array(1102619,1),
		Array(1004038,1),
		//Array(1050300,1),
		Array(1051367,1),
		Array(1072894,1),
		Array(1702457,1)

	)),
	Array("快乐的主旋律", 200000, Array(
		Array(1004192,1),
		Array(1050335,1),
		Array(1051405,1),
		Array(1702528,1),
		Array(1072943,1)
	)),
	Array("派对日记礼包（男）", 250000, Array(
		Array(1004158,1),
		Array(1050322,1),
		Array(1702512, 1),
		//Array(1051392,1),
		Array(1102688,1),
		Array(1070061,1)
		//Array(1071078,1)
	)),
	Array("派对日记礼包（女）", 250000, Array(
		Array(1004158,1),
		//Array(1050322,1),
		Array(1702512, 1),
		Array(1051392,1),
		Array(1102688,1),
		//Array(1070061,1)
		Array(1071078,1)
	)),
	Array("小蜜蜂套装", 80000, Array(
		Array(1052417,1),
		Array(1102391,1),
		Array(1003392,1),
		Array(1072658,1)
	)),
	Array("死亡之刃套装（男）", 200000, Array(
		Array(1702565, 1),
		Array(1004450,1),
		Array(1050356,1),
		Array(1073041,1),
		Array(1102809,1)
	)),
	Array("死亡之刃套装（女）", 200000, Array(
		Array(1702565, 1),
		Array(1004450,1),
		Array(1051426,1),
		Array(1073041,1),
		Array(1102809,1)
	)),
	
	Array("海鸥套装", 280000, Array(
		Array(1004190, 1),
		Array(1102705, 1),
		Array(1042320, 1),
		Array(1072942, 1),
		Array(1062210, 1)
	))
	
);
var giftId = -1;
var gifts = null;
var price = 999;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var gender = cm.getPlayerStat("GENDER");
		var searchKey = (gender==0) ? "（女）" : "（男）";
		var text = "";
		text += "欢迎来到闪耀套装礼包商城，点击可以查看礼包内容哦！#n\r\n";
		for(var key in giftContent) {
			var giftName = giftContent[key][0];
			if (giftName.indexOf(searchKey) != -1) 
				continue;
			text+="#b#L"+key+"#购买【#r#e"+giftName+"#n#b】 #e#d"+giftContent[key][1]+"点卷#n#b\r\n";
			var currentGifts = giftContent[key][2];
			for(var key in currentGifts) {
				var itemId = currentGifts[key][0];
				//var itemQuantity = gifts[key][1];
				text+="#i"+itemId+":#";
			}
			text+="#l#k\r\n\r\n";
			//text+="==============================================\r\n";
		}
		//cm.sendOk("暂无活动礼包销售，请等待GM发布活动通知！");
		//cm.dispose();
		
		//return;
		cm.sendSimple(text);
	} else if (status == 1) {
		giftId = parseInt(selection);
		price = giftContent[giftId][1];
		gifts = giftContent[giftId][2];
		var text="#r#e"+giftContent[giftId][0]+"#n#b内容：\r\n";
		for(var key in gifts) {
			var itemId = gifts[key][0];
			var itemQuantity = gifts[key][1];
			text+="#i"+itemId+":##b#z"+itemId+"##k #rx "+itemQuantity+"#k\r\n";
		}
		text+="\r\n#d是否花费#e#r"+price+"#n#d点卷购买该礼包？#k";
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (giftId!=-1 && gifts != null) {
			if (cm.getSpace(1) < gifts.length) {
				cm.sendOk("您的装备栏空间不足，请保证每个栏位至少"+gifts.length+"格的空间，以避免领取失败。");
				cm.dispose();
				return ;
			}
			var quantity = price;
			
            if (cm.getPlayer().getCSPoints(1) >= quantity) {
              	cm.gainNX(1, -quantity);
				for(var key in gifts) {
					var itemId = gifts[key][0];
					var itemQuantity = gifts[key][1];
					cm.gainItem(itemId, itemQuantity);
				}
				//cm.worldSpouseMessage(0x0F, "[闪耀新星] : 玩家 " + cm.getName() + " 在闪耀商城中花费"+quantity+"点卷购买了<"+giftContent[giftId][0]+">！");
				cm.sendOk("恭喜您，购买成功！");
				cm.dispose();
			} else {
				cm.sendOk("点卷不足。");
				cm.dispose();
			}
		} else {
			cm.sendOk("购买错误！请联系管理员！");
			cm.dispose();
		}
	}
}
