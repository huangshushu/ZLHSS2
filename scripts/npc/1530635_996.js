var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var questIcon = "#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n";
var status = 0;
var typed = 0;
var rmb = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) status++;
		else status--;
		if (status == 0) {
			var selStr = head + "亲爱的#r#h0##k，您好，这里可以使用元宝开通超值理财服务套餐，您需要开通多长时间呢？\r\n\r\n";
			selStr += aaa+"#e#d 您当前赞助充值金额为 #r" + cm.getTotalRMB() + "#k#d #e元#n#k\r\n";
			selStr += aaa+"#d#e 您当前的元宝为：#r" + cm.getRMB() + " #d个#k#n\r\n";
			selStr += "#L0##r" + icon + " [简介]查看超级实惠理财服务套餐介绍#l#k\r\n";
			selStr += "#L4##d" + icon + " [挂失]VIP神秘盒子丢失补领#l#k\r\n\r\n";
			
			selStr += questIcon;
			
			selStr += "#L3##b" + icon + " VIP邀请券兑换  #k（目前状态：#r进行中#k）#l#k\r\n";
			selStr += "#L1##b" + icon + " 办理一周套餐   #k（20元宝/周）#l#k\r\n";
			selStr += "#L2##b" + icon + " 办理包月套餐   #k（80元宝/月）#l#k\r\n";
			//selStr += "#L5##b" + icon + " 办理永久套餐   #k（260元宝/无期限）#k\r\n\r\n"
			
			//selStr +="#L3##b"+aaa+" 超级实惠理财服务包800国庆币/年[详情点击查看]#l#k\r\n";
			cm.sendSimple(selStr);
		} else if (status == 1) {
			if (selection == 0) {
				typed = 0;
				var text = head + "\t欢迎来到超值理财中心，理财套餐不仅可以使用元宝购买，也可以通过日常活动获得#rVIP邀请券#k进行兑换。\r\n";
				text += questIcon;
				text += "#e#d服务特权：#n#k\r\n";
				text += icon+" #b[理财福利]#r拥有全服上线提示、独特聊天颜色。\r\n";
				//text += icon+" #b[理财福利]#r享受所有地图三倍泡点奖励。#k\r\n";
				text += icon+" #b[理财福利]#r每日赠送1500点卷，30万金币\r\n";
				//text += icon+" #b[理财福利]#r每日赠送星星500个，绯红钥匙一把\r\n";
				text += icon+" #b[理财福利]#r每日赠送3个[高级][终极][大师]魔方\r\n";
				text += icon+" #b[理财福利]#r每日24小时三倍经验双倍爆率\r\n";
				text += icon+" #b[理财福利]#r每日免费抽奖箱子一个\r\n";
				text += icon+" #b[理财福利]#r每日免费重置副本一次\r\n";
				text += icon+" #b[理财福利]#r可以使用点卷洗血特权\r\n";
				//text += icon+" #b[理财福利]#r快速打开仓库、雇佣管理特权\r\n";
				text += "#e#d特别提示：#n#k\r\n";
				text += icon+" #b办理包月套餐还赠送魔方、防爆卷轴等理财道具哦！\r\n";
				cm.sendOk(text);
				cm.dispose();
			} else if (selection == 1) {
				typed = 1;
				var text = head + "\t您正在办理超级实惠理财服务一周权\r\n";
				text += "\t"+icon + " #b20 元宝/周#k\r\n";
				text += questIcon;
				text += icon + " 办理后会扣掉您#r20元宝#k，并且获得1个#v2430865##b#t2430865##k，通过理财盒子您可以开始享受您的VIP特权生涯。\r\n\r\n";
				text += icon + " 点击#b是#k进行购买，点#r否#k返回上一页";
				cm.sendYesNo(text);
			} else if (selection == 2) {
				typed = 2;
				var text = head + "\t您正在办理超级实惠理财服务一月权\r\n";
				text += "\t"+icon + " #b80 元宝/月#k\r\n";
				text += questIcon;
				text += icon + " 办理后会扣掉您#r80元宝#k，并且获得1个#v2430865##b#t2430865##k，通过理财盒子您可以开始享受您的VIP特权生涯。\r\n";
				text += icon + " 办理后立刻获得20个#v5062000##t5062000#，20个#v5062002##t5062002#\r\n\r\n";
				text += icon + " 点击#b是#k进行购买，点#r否#k返回上一页";
				cm.sendYesNo(text);
			} else if (selection == 5) {
				typed = 5;
				var text = head + "\t您正在办理超级实惠理财服务永久权\r\n";
				text += "\t"+icon + " #b260 元宝#k\r\n";
				text += questIcon;
				text += icon + " 办理后会扣掉您#r260元宝#k，并且获得1个#v2430865##b#t2430865##k，通过理财盒子您可以开始享受您的VIP特权生涯。\r\n";
				text += icon + " 办理后立刻获得20个#v5062009##t5062009#，20个#v5062010##t5062010#\r\n\r\n";
				text += icon + " 点击#b是#k进行购买，点#r否#k返回上一页";
				cm.sendYesNo(text);
			} else if (selection == 3) {
				typed = 3;
				var text = head + "\t您正在办理超级实惠理财服务一周权\r\n";
				text += "\t"+icon + " #b使用VIP邀请券兑换#k\r\n";
				text += questIcon;
				text += icon + " 办理后会扣掉您#r7#k张VIP邀请券，并且获得1个#v2430865##b#t2430865##k，通过理财盒子您可以开始享受您的VIP特权生涯。\r\n\r\n";
				text += icon + " 点击#b是#k进行购买，点#r否#k返回上一页";
				cm.sendYesNo(text);
			} else if (selection == 4) {
				typed = 4;
				if (!cm.getPlayer().isVip()) {
					cm.sendOk("您还未开通VIP。");
					cm.dispose();
					return;
				} else if (cm.haveItem(2430865)){
					cm.sendOk("您的VIP神秘盒子未丢失，无法补领。");
					cm.dispose();
					return;
				} else if (cm.getSpace(2) <= 0) {
					cm.sendOk("请确认您的消耗栏至少有1格以上的空间。");
					cm.dispose();
					return;
				}
				var vipTimestamp = java.sql.Timestamp.valueOf(cm.getPlayer().getViptime()).getTime();
				var currentTimestamp = java.lang.System.currentTimeMillis();
				var lastTimestamp =  parseInt(vipTimestamp) - parseInt(currentTimestamp);
				cm.gainItem(2430865, 1, lastTimestamp);
				cm.sendOk("补领成功！");
				cm.dispose();
			}
		} else if (status == 2) {
			if (typed == 1) {
				if (!cm.getPlayer().isVip() && cm.getSpace(1) > 3 && cm.getSpace(2) > 2 && cm.getRMB() >= 20) {
					cm.removeAll(2430865);
					cm.gainItem(2430865, 1, 7);
					cm.gainItem(1142328, 1, 7);
					cm.gainItem(1112140, 1, 7);
					cm.gainItem(1112247, 1, 7);
					cm.getPlayer().setVip(1);
					cm.getPlayer().setViptime(7);
					//cm.addHyPay(10);
					cm.setBossLog(cm.getPlayer().getName() + "VIP一周");
					cm.gainRMB(-20);
					cm.sendOk("恭喜您成功购买一周随身服务.");
					cm.getMap().startMapEffect("恭喜玩家 " + cm.getChar().getName() + " 成功购买理财服务一周权。", 5120012);
					cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一周理财服务.");
					cm.dispose();
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 您的随身服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里装备栏或消耗栏位已满,请清理.");
					cm.dispose();
				}
			} else if (typed == 2) {
				if (!cm.getPlayer().isVip() && cm.getSpace(2) > 2 && cm.getRMB() >= 80) {
					cm.removeAll(2430865);
					cm.gainItem(2430865, 1, 30);
					cm.gainRMB(-80);
					cm.gainItem(1142328, 1, 30);
					cm.gainItem(1112139, 1, 30);
					cm.gainItem(1112246, 1, 30);
					cm.gainItem(5062000, 20);
					cm.gainItem(5062002, 20);
					cm.getPlayer().setVip(1);
					cm.getPlayer().setViptime(30);
					cm.setBossLog(cm.getPlayer().getName() + "VIP一月");
					//cm.gainNX(1, -50000);
					cm.sendOk("恭喜您成功购买一个月理财服务.");
					cm.getMap().startMapEffect("恭喜玩家 " + cm.getChar().getName() + " 成功购买理财服务一个月权。", 5120012);
					cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一月理财服务.");
					cm.dispose();
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 您的理财服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
					cm.dispose();
				}
			} else if (typed == 5) {
				if (!cm.getPlayer().isVip() && cm.getSpace(2) > 2 && cm.getRMB() >= 260) {
					cm.removeAll(2430865);
					cm.gainItem(2430865, 1, 365);
					cm.gainRMB(-260);
					cm.gainItem(1142328, 1, 365);
					cm.gainItem(1112139, 1, 365);
					cm.gainItem(1112246, 1, 365);
					cm.gainItem(5062010, 20);
					cm.gainItem(5062009, 20);
					cm.getPlayer().setVip(1);
					cm.getPlayer().setViptime(365);
					cm.setBossLog(cm.getPlayer().getName() + "VIP永久权");
					//cm.gainNX(1, -50000);
					cm.sendOk("恭喜您成功购买永久理财服务.");
					cm.getMap().startMapEffect("恭喜玩家 " + cm.getChar().getName() + " 成功购买理财服务永久权。", 5120012);
					cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买终身永久理财服务.");
					cm.dispose();
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 您的理财服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
					cm.dispose();
				}
			} else if (typed == 3) {
				if (!cm.getPlayer().isVip() && cm.getSpace(1) > 3 && cm.getSpace(2) > 2 && cm.haveItem(4032521, 7)) {
					cm.removeAll(2430865);
					cm.gainItem(2430865, 1, 7);
					cm.gainItem(1142328, 1, 7);
					cm.gainItem(1112140, 1, 7);
					cm.gainItem(1112247, 1, 7);
					cm.getPlayer().setVip(1);
					cm.getPlayer().setViptime(7);
					//cm.addHyPay(10);
					cm.setBossLog(cm.getPlayer().getName() + "VIP一周");
					cm.gainItem(4032521, -7);
					cm.sendOk("恭喜您成功购买一周随身服务.");
					cm.getMap().startMapEffect("恭喜玩家 " + cm.getChar().getName() + " 成功购买理财服务一周权。", 5120012);
					cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一周理财服务.");
					cm.dispose();
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 您的随身服务未到期,无法重复办理.\r\n2). #t4032521#数量不足.\r\n3). 背包里装备栏或消耗栏位已满,请清理.");
					cm.dispose();
				}
			}
		}
	}
}