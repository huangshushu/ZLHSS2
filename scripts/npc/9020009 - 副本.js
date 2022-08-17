var status = -1;
var vvv = "#fUI/UIWindow2.img/ValuePack/button/complete/0#"; //领取完成
var pfb = new Array(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6);
var randb = Math.floor(Math.random() * pfb.length);
var pfa = new Array(7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9);
var randa = Math.floor(Math.random() * pfa.length);
var pff = new Array(10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 10, 10, 10, 10);
var randf = Math.floor(Math.random() * pff.length);
var pfs = new Array(13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 14, 13);
var rands = Math.floor(Math.random() * pfs.length);

function action(mode, type, selection) {
	var em = cm.getEventManager("szsl");
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
		}
		status--;
	}
	if (em.getProperty("state1").equals("1") == true) {
		var hccj = "通关评分 #e#rS#k#n";
	} else if (em.getProperty("state1").equals("2") == true) {
		var hccj = "通关评分 #bF#k";
	} else if (em.getProperty("state1").equals("3") == true) {
		var hccj = "通关评分 #bA#k";
	} else if (em.getProperty("state1").equals("4") == true) {
		var hccj = "通关评分 #bB#k";
	} else {
		var hccj = "通关评分 #r无评分#k";
	}
	if (status == 0) {
		if (cm.getPlayer().getMapId() != 940021000) {
			cm.sendOk("次元的结界好像出现了问题");
			cm.dispose();
		} else {
			cm.sendSimple("你们此次小试牛刀：" + hccj + "\r\n通关评分 #bB#k 等级奖励：1 个#t2431716# #t5062002#x1\r\n通关评分 #bA#k 等级奖励：3 个#t2431716# #t5062002#x3\r\n通关评分 #bF#k 等级奖励：5 个#t2431716# #t5062002#x5\r\n通关评分 #e#rS#n#k 等级奖励：10 个#t2431716# #t5062002#x10\r\n#L0##b领取奖励后退出#l");
		}
	} else if (status == 1) {
		if (selection == 0) {
			java.lang.System.out.println("=====================111111111111==================");
			if (cm.getEventCount("szsl") <= 0) {
				p = cm.getChar();
				//java.lang.System.out.println("=====================22222222222222222==================");
				if (em.getProperty("state1").equals("1") == true) {
					cm.gainItem(5062002, 10);
					cm.gainItem(2431716, 10);
					cm.warp(100000000, 0);
					cm.setEventCount("szsl");
					cm.setPQLog("szsl");
					cm.sendOk("" + vvv + "\r\n\r\n此次小试牛刀你获得了 #r 10 #k个 #r#t2431716##k\r\n#t5062002# x 10个");
					cm.channelMessage(0x18, "『小试牛刀』" + " : " + "恭喜" + cm.getChar().getName() + ",和他的队友完成了小试牛刀，试炼评分 < S > 级");
					//cm.sendServerNotice(7, "『神之试炼』" + " : " + "玩家 " + cm.getChar().getName() + " 和他的队友完成了神之试炼，试炼评分等级<S>");
					//java.lang.System.out.println("=====================33333333333333333==================");
					cm.dispose();

				} else if (em.getProperty("state1").equals("2") == true) {
					cm.gainItem(5062002, 5);
					cm.gainItem(2431716, 5);
					cm.warp(100000000, 0);
					cm.setEventCount("szsl");
					cm.setPQLog("szsl");
					cm.sendOk("" + vvv + "\r\n\r\n此次小试牛刀你获得了 #r 5 #k个 #r#t2431716##k\r\n#t5062002# x 5个");
					cm.channelMessage(0x18, "『小试牛刀』" + " : " + "恭喜" + cm.getChar().getName() + ",和他的队友完成了小试牛刀，试炼评分 < F > 级");
					//cm.sendServerNotice(7, "『神之试炼』" + " : " + "玩家 " + cm.getChar().getName() + " 和他的队友完成了神之试炼，试炼评分等级<F>");
					//java.lang.System.out.println("=====================33333333333333333==================");
					cm.dispose();
				} else if (em.getProperty("state1").equals("3") == true) {
					cm.warp(100000000, 0);
					cm.setEventCount("szsl");
					cm.setPQLog("szsl");
					cm.gainItem(5062002, 3);
					cm.gainItem(2431716, 3);
					cm.sendOk("" + vvv + "\r\n\r\n此次小试牛刀你获得了 #r 3 #k个 #r#t2431716##k\r\n#t5062002# x 3个");
					cm.channelMessage(0x18, "『小试牛刀』" + " : " + "恭喜" + cm.getChar().getName() + ",和他的队友完成了小试牛刀，试炼评分  < A > 级");
					//cm.sendServerNotice(7, "『神之试炼』" + " : " + "玩家 " + cm.getChar().getName() + " 和他的队友完成了神之试炼，试炼评分等级<A>");
					//java.lang.System.out.println("=====================33333333333333333==================");
					cm.dispose();
				} else if (em.getProperty("state1").equals("4") == true) {
					cm.gainItem(5062002, 1);
					cm.gainItem(2431716, 1);
					cm.warp(100000000, 0);
					cm.setEventCount("szsl");
					cm.setPQLog("szsl");
					cm.sendOk("" + vvv + "\r\n\r\n此次小试牛刀你获得了 #r 1 #k个 #r#t2431716##k\r\n#t5062002# x 1个");
					cm.channelMessage(0x18, "『小试牛刀』" + " : " + "恭喜" + cm.getChar().getName() + ",和他的队友完成了小试牛刀，试炼评分 < B > 级");
					//cm.sendServerNotice(7, "『神之试炼』" + " : " + "玩家 " + cm.getChar().getName() + " 和他的队友完成了神之试炼，试炼评分等级<B>");
					//java.lang.System.out.println("=====================33333333333333333==================");
					cm.dispose();;
				} else {
					cm.sendOk("很遗憾，无评分，无法获得奖励，请提升自身输出再来挑战。");
					//java.lang.System.out.println("=====================44444444444444444444==================");
					cm.warp(100000000, 0);
					cm.dispose();
				}
			} else {
				cm.warp(100000000, 0);
				//java.lang.System.out.println("=====================55555555555555555==================");
				cm.sendOk("你今天已经完成过试炼了,请明日再来");
				cm.dispose();
			}
		} else if (selection == 1) {
			//java.lang.System.out.println("=====================366666666666666666633==================");
			cm.warp(211070000); //狮子王之城 - 接见室走廊
		}
		//java.lang.System.out.println("=====================3333337777777777777773==================");
		cm.dispose();
	}
}