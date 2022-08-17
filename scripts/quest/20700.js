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
	    qm.sendNext("你什么时候意识到你是多么的无力......当你自己在维多利亚岛的麻烦?");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("你终于成为骑士在训练。我想给你一个任务马上，但你还是看看英里远离甚至能够处理你自己的任务。你确定你甚至可以去维多利亚岛这样的?");
    } else if (status == 1) {
	qm.askAcceptDecline("这是给你头部到维多利亚岛，但骑士在训练不能照顾之一“的自我在战斗中很可能造成伤害女皇”的显赫名声。由于这个岛的负责人战术家，我不能让这种情况发生，期限。我希望你能坚持训练，直到合适的时机到来.");
    } else if (status == 2) {
	qm.forceCompleteQuest();
	qm.sendNext("#p1102000#, 该培训讲师，会帮你培养成一个维修骑士。一旦你到达13级，我会为您分配一个或两个任务。所以在那之前，坚持训练.");
    } else if (status == 3) {
	qm.sendPrev("哦，你知道，如果你挥动#p1101001#对话，她会给你一个祝福？祝福一定会帮助你在你的旅程.");
    } else if (status == 4) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}