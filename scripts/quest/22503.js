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
	if (status == 2) {
	    qm.sendNext("你怎么能饿死我这个样子。我只是一个孩子。这是错误的!");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("不不不。这不是我所需要的。我需要更多的东西有营养，主!");
    } else if (status == 1) {
	qm.sendNextPrevS("#b嗯......所以你不是食草动物。你可能是一个食肉动物。你是龙，毕竟。如何做一些猪肉声音?#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("什么是...猪肉？从来没有听说过它，但如果它的美味，我接受！只给我的东西好吃。什么，但植物!");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendOkS("#b(试着给我一些猪肉。你必须在农场打猎几头猪。十应该有充足...)#k", 2);
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
	qm.sendOk("呵呵，这就是你给我吃？因此，这是你在谈论的猪肉？ 让我尝试.");
    } else if (status == 1) {
	qm.gainExp(1850);
	qm.gainItem(4032453, -10);
	qm.sendNext("(格格，格格，一饮而尽...)");
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendPrev("呃......这不好吃太糟糕了，但我不认为我能消化它。这不适合我...");
	qm.dispose();
    }
}