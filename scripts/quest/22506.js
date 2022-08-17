/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    qm.sendOk("#b(你不敢接近。回来以后的牛奶.)");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("#b(你问的奶牛给你一些牛奶.");
    } else if (status == 1) {
	qm.askAcceptDecline("哞哞...");
    } else if (status == 2) {
	qm.sendOk("#b(奶牛给你一些牛奶。去喂牛奶秘耳.)#k");
	qm.gainItem(4032454, 1);
	qm.forceStartQuest();
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendOk("我太饿了，我已经没有力气......师傅，我太饿了，我可能枯萎，并成为一个真正的蜥蜴。 这是什么？ 水？你要我填我的肚子里的水？如果你这么说，主...\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#fUI/UIWindow.img/QuestIcon/10/0# 1 sp\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#1420 exp");
    } else if (status == 1) {
	qm.forceCompleteQuest();
	qm.gainExp(1420);
	qm.getPlayer().gainSP(1, 0);
	qm.gainItem(4032454, -1);
	qm.sendNext("(咕嘟咕嘟一饮而尽，一饮而尽)");
    } else if (status == 2) {
	qm.sendNextPrev("哇，这是这么好！什么叫这水？ 牛奶？百胜！我觉得现在这么强!");
    } else if (status == 3) {
	qm.sendPrev("嘿，它看起来就像你变得更强，硕士。你的HP和MP比，当我第一次见到你高得多.");
	qm.dispose();
    }
}