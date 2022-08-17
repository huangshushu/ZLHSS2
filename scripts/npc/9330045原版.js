/* Kedrick
	Fishking King NPC
*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	cm.sendSimple("你想做什么?\n\r #b#L0#进入到钓鱼场#v4220084##l \n\r #L1#购买普通鱼饵#v2300000##l \n\r #L2#购买钓鱼椅子#v3011000##l \n\r #L3#使用鱼饵罐头#v5350000##l \n\r #L4#钓鱼说明攻略#v4161004##l \n\r");//#L5##i2210006:#贸易500金蛋 (钓鱼王奖章 [期限：30天])#l
    } else if (status == 1) {
	sel = selection;
	if (sel == 0) {
	    if (cm.haveItem(5340000) || cm.haveItem(5340001)) {
		if (cm.haveItem(3011000)) {
		    cm.saveLocation("FISHING");
		    cm.warp(741000200);
		    cm.dispose();
		} else {
		    cm.sendNext("你必须有钓鱼椅才能钓鱼!");
		    cm.safeDispose();
		}
	    } else {
		cm.sendNext("你必须有钓鱼竿才能钓鱼!");
		cm.safeDispose();
	    }
	} else if (sel == 1) {
	    cm.sendYesNo("需要3000金币购买120个鱼饵。你想购买?");
	} else if (sel == 2) {
	    if (cm.haveItem(3011000)) {
		cm.sendNext("你已经有一把钓鱼椅了。每个角色都只能有1个钓鱼椅.");
	    } else {
		if (cm.canHold(3011000) && cm.getMeso() >= 50000) {
		    cm.gainMeso(-50000);
		    cm.gainItem(3011000, 1);
		    cm.sendNext("快乐钓鱼~");
		} else {
		    cm.sendOk("请检查是否有足够的金币或足够的背包栏.");
		}
	    }
	    cm.safeDispose();
	} else if (sel == 3) {
	    if (cm.canHold(2300001,120) && cm.haveItem(5350000,1)) {
		if (!cm.haveItem(2300001)) {
		    cm.gainItem(2300001, 120);
		    cm.gainItem(5350000,-1);
		    cm.sendNext("快乐钓鱼~");
		} else {
		    cm.sendNext("你已经有了钓鱼的诱饵.");
		}
	    } else {
		cm.sendOk("请检查背包空间或你没有高级鱼饵罐头请从商城购买.");
	    }
	    cm.safeDispose();
	} else if (sel == 4) {
	    cm.sendOk("你需要10级以上，有鱼竿、鱼饵，钓椅进入钓鱼场。你将在每1分钟一次。跟渔场记录人余明看看你捕捉记录!");
	    cm.safeDispose();
	} else if (sel == 5) {
	    if (cm.haveItem(4000518, 500)) {
		if (cm.canHold(1142146)) {
		    cm.gainItem(4000518, -500);
		    cm.gainItemPeriod(1142146, 1, 30);
		    cm.sendOk("哦，我猜你一定花了不少这些蛋在钓鱼湖捕鱼。在这里，拿它。这个 #b钓鱼王勋章#k!")
		} else {
		    cm.sendOk("请检查是否有足够背包空间.");
		}
	    } else {
		cm.sendOk("请给我 500 #i4000518:# 黄金鱼蛋换取一个钓鱼王奖章!")
	    }
	    cm.safeDispose();
	}
    } else if (status == 2) {
	if (sel == 1) {
	    if (cm.canHold(2300000,120) && cm.getMeso() >= 3000) {
		if (!cm.haveItem(2300000)) {
		    cm.gainMeso(-3000);
		    cm.gainItem(2300000, 120);
		    cm.sendNext("快乐钓鱼~");
		} else {
		    cm.sendNext("你已经有了钓鱼的诱饵.");
		}
	    } else {
		cm.sendOk("请检查是否有足够背包空间.");
	    }
	    cm.safeDispose();
	}
    }
}