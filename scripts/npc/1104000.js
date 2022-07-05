// 狩猎玩偶 and 消灭傀儡师！
var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		if (cm.getQuestStatus(21731) == 1 && cm.getPlayer().isAran() || cm.getQuestStatus(20730) == 1 && cm.getPlayer().isKOC()) {
			cm.sendNextS("我是#p1204001#黑色翅膀的成员，你怎么敢来打扰我呢?? 你害我的老毛病又犯了，我发誓要效忠于黑魔法师，要是我抓住你了，我会让你付出代价的！", 9);
			status++;
		} else {
			cm.sendNext("没事别来妨碍我。");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.sendNextPrevS("#b(黑色翅膀? 他们是谁? 而怎么会又跟黑魔法师扯到关系，也许该报告才对。)#k", 3);
	} else if (status == 2) {
		if (cm.getQuestStatus(21731) == 1 && cm.getPlayer().isAran()) {
			var em = cm.getEventManager("FrancisAran");
			if (em == null) {
				cm.sendOk("当前副本有问题，请联络管理员....");
			} else {
				var prop = em.getProperty("started");

				if (prop.equals("0") || prop == null) {
					em.startInstance(cm.getPlayer());
					cm.dispose();
					return;
				} else {
					cm.sendOk("里面已经有人在挑战...");
				}
			}
			cm.dispose();
		} else if (cm.getQuestStatus(20730) == 1 && cm.getPlayer().isKOC()) {
			var em = cm.getEventManager("Francis");
			if (em == null) {
				cm.sendOk("当前副本有问题，请联络管理员....");
			} else {
				var prop = em.getProperty("started");

				if (prop.equals("0") || prop == null) {
					em.startInstance(cm.getPlayer());
					cm.dispose();
					return;
				} else {
					cm.sendOk("里面已经有人在挑战...");
				}
			}
			cm.dispose();
		}
	}
}
