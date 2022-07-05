/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：等级送礼
 *  @Author Kent
 */

var A1 = "#fUI/UIWindow/Quest/icon2/7#";
var A2 = "#fUI/UIWindow/Quest/icon2/7#";
var TX = A1;
var tx1 = "#fUI/UIWindow/Quest/icon2/7#";
var tx2 = "#fUI/UIWindow/Quest/icon2/7#";

var status = 0;
var bossid = "等级礼包";
var giftLevel = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120);
var giftContent = Array(

//10
Array(5000066, 1, 0), //虎年宠物啊呜啊呜
Array(5180000, 1, 0), //生命水

//20
Array(1022233, 1, 1), //新手赏金猎人太阳眼镜

//30
Array(1032242, 1, 2), //新手赏金猎人耳环

//40
Array(1113164, 1, 3), //新手赏金猎人戒指

//50
Array(1102612, 1, 4), //革命披风

//60
Array(1072853, 1, 5), //革命鞋子

//70
Array(1082540, 1, 6), //革命手套

//80
Array(1003946, 1, 7), //革命帽子

//90
Array(1142404, 1, 8), //英雄意志勋章+
Array(1132242, 1, 8), //革命腰带

//100
Array(1052647, 1, 9), //革命战斗服

//110
Array(1113034, 1, 10), //10周年黑色枫叶戒指

//120
Array(2290096, 1, 11), //冒险岛勇士
Array(5050000, 100, 11) //洗能力点卷轴


);
var giftId = -1;
var giftToken = Array();
var gifts = null;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		cm.openNpc(0, "福利中心");
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		var text = "    " + tx1 + "\r\n";
		text += "#e#d-  等级奖励中心:#n#k\r\n可领取等级为：#e#d每10级一次#n#k\r\n";
		for (var key in giftLevel) {

			//检查等级是否满足
			if (cm.getChar().getLevel() < giftLevel[key]) {
				TX = A2;
			} else {
				TX = A1;
			}

			var tips = "";
			giftToken[key] = false;
			if (cm.getChar().getLevel() >= giftLevel[key]) {
				if (cm.getPQLog(bossid + key, 1) == 0) {
					tips = 0; //未领取
					giftToken[key] = true;
				} else {
					tips = 1; //已领取
				}
			}
			if (tips == 0) {
				text += "#b#L" + (parseInt(key)) + "#领取#r#e" + giftLevel[key] + "#n#b级等级礼包 " + "#l#k\r\n";
			}
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		giftId = parseInt(selection);
		var text = "#r#e" + giftLevel[giftId] + "#n#b级礼包内容：\r\n";
		gifts = getGift(giftId);
		for (var key in gifts) {
			var itemId = gifts[key][0];
			var itemQuantity = gifts[key][1];
			text += "#v" + itemId + "##b#z" + itemId + "##k #rx " + itemQuantity + "#k\r\n";
		}
		text += "\r\n#d是否现在就领取该礼包？#k";
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (giftId != -1 && gifts != null) {
			if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
				cm.sendOk("您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。");
				cm.dispose();
				return;
			}
			var job = cm.getChar().getJob();
			if ((job == 10000 || job == 10100 || job == 10110 || job == 10111 || job == 10112) && cm.getChar().getLevel() < 140) {
				cm.sendOk("神之子需要到140才能领取！");
				cm.dispose();
				return;
			}
			if (giftToken[giftId] && cm.getPQLog(bossid + key, 1) == 0) {
				cm.setPQLog(bossid + (giftId), 1, 1);
				for (var key in gifts) {
					var itemId = gifts[key][0];
					var itemQuantity = gifts[key][1];
					cm.gainItem(itemId, itemQuantity);
				}
				cm.sendOk("恭喜您，领取成功！快打开包裹看看吧！");
				cm.dispose();
			} else {
				status = -1;
				cm.playerMessage(-1, "领取失败!等级未达到要求!!");
				cm.sendNextS(" #e#b哎呀,我的等级好像不够呢!!#n#k", 3);
			}
		} else {
			cm.sendOk("领取错误！请联系管理员！");
			cm.dispose();
		}
	}
}

function getGift(id) {
	var lastGiftContent = Array();
	for (var key in giftContent) {
		if (giftContent[key][2] == id) lastGiftContent.push(giftContent[key]);
	}
	return lastGiftContent;
}