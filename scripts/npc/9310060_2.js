var QuestName = "『 #r每 日 副 本 奖 励#k 』";//任务ID
var Meso = 100000;//奖励金币
var Exp = 10000;//奖励经验
var ItemID = 3991029;//奖励道具ID
var QuestItemID = 4000008;//任务所需道具ID
var QuestItemNum = 100;//任务所需道具数量

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;

		if (status == 0) {
			var textz = "              #e" + QuestName + "#n#k\r\n\r\n";

			textz += "  #b每日副本达到一定要求可领取以下奖励哦：#k\r\n\r\n";

			textz += " - 废弃副本：[" + cm.getPlayer().getBossLog("废弃组队",0) + " / 2]\r\n\r\n";

			textz += " - 玩具副本：[" + cm.getPlayer().getBossLog("玩具组队",0) + " / 2]\r\n\r\n";

			textz += " - 天空副本：[" + cm.getPlayer().getBossLog("天空组队",0) + " / 1]\r\n\r\n";

			textz += " - 海盗副本：[" + cm.getPlayer().getBossLog("海盗组队",0) + " / 1]\r\n\r\n";

			textz += "#v4031250#x1#v4310174#x10#v2550007#x5#v4031179#x2#v4002003#x5#v4002000#x5获得抵用：20000获得点券：5000获得金币：50000000#v4000463#x5#v4000186#x2#v4310196#x5\r\n\r\n";

			textz += "#L0#领取副本奖励\r\n\r\n";

			cm.sendNext(textz);

		} else if (status == 1) {
			if (selection == 0) {
				if (cm.getPlayer().getBossLog("废弃组队",0) < 2) {
					cm.sendOk("未完成相应次数，无法领取。");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("玩具组队",0) < 2) {
					cm.sendOk("未完成相应次数，无法领取。");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("天空组队",0) < 1) {
					cm.sendOk("未完成相应次数，无法领取。");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("海盗组队",0) < 1) {
					cm.sendOk("未完成相应次数，无法领取。");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("副本一条龙奖励") > 0) {
					cm.sendOk("每日仅能领取 1 次，请明日再来。");
					cm.dispose();
				} else {
					cm.getPlayer().setBossLog("副本一条龙奖励");
					cm.gainItem(4310174, 10);
					cm.gainItem(2550007, 5);
					cm.gainItem(4031179, 2);
					cm.gainItem(4002003, 5);
					cm.gainItem(4002000, 5);
					cm.gainDY(20000);
					cm.gainNX(5000);
					cm.gainMeso(50000000);
					cm.gainItem(4000463, 5);
					cm.gainItem(4000186, 2);
					cm.gainItem(4031250, 1);
					cm.gainItem(4310196, 5);
					cm.sendNext("领取成功。");
					cm.dispose();
				}

			} else if (selection == 1) {
				if (cm.getPlayer().getBossLog("玩具副本") < 2) {
					cm.sendOk("未完成相应次数，无法领取。");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("玩具副本_奖励") > 0) {
					cm.sendOk("今日奖励已领取，请明日再来。");
					cm.dispose();

				} else {
					cm.getPlayer().setBossLog("玩具副本_奖励");
					cm.gainNX(10000);
					cm.sendNext("领取成功。");
					cm.dispose();
				}

			} else if (selection == 2) {
				if (cm.getPlayer().getBossLog("毒物副本") < 3) {
					cm.sendOk("未完成相应次数，无法领取。");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("毒物副本_奖励") > 0) {
					cm.sendOk("今日奖励已领取，请明日再来。");
					cm.dispose();

				} else {
					cm.getPlayer().setBossLog("毒物副本_奖励");
					cm.gainItem(4001028, 5);
					cm.sendNext("领取成功。");
					cm.dispose();
				}

			} else if (selection == 3) {
				if (cm.getPlayer().getBossLog("海盗副本") < 3) {
					cm.sendOk("未完成相应次数，无法领取。");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("海盗副本_奖励") > 0) {
					cm.sendOk("今日奖励已领取，请明日再来。");
					cm.dispose();

				} else {
					cm.getPlayer().setBossLog("海盗副本_奖励");
					cm.gainMeso(100000000);
					cm.sendNext("领取成功。");
					cm.dispose();
				}

			} else if (selection == 4) {
				if (cm.getPlayer().getBossLog("男女副本") < 3) {
					cm.sendOk("未完成相应次数，无法领取。");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("男女副本_奖励") > 0) {
					cm.sendOk("今日奖励已领取，请明日再来。");
					cm.dispose();

				} else {
					cm.getPlayer().setBossLog("男女副本_奖励");
					cm.gainItem(4031456, 10);
					cm.sendNext("领取成功。");
					cm.dispose();
				}

			} else if (selection == 5) {
				if (cm.getPlayer().getBossLog("女神副本") < 1) {
					cm.sendOk("未完成相应次数，无法领取。");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("女神副本_奖励") > 0) {
					cm.sendOk("今日奖励已领取，请明日再来。");
					cm.dispose();

				} else {
					cm.getPlayer().setBossLog("女神副本_奖励");
					cm.gainItem(4002000, 10);
					cm.sendNext("领取成功。");
					cm.喇叭(1,"恭喜玩家["+cm.getName()+"]完成了每日一条龙");
					cm.dispose();
				}

			}
		}
	}
}
