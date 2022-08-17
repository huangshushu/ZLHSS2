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
	    qm.sendOk("嗯......我想大多数孩子都是一样的。想想吧，让你改变了主意，我知道，.");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("他是这么大我不知道他是一个婴儿。他很可能无法消化肉呢。我的猜测是，所有#b宝宝需要牛奶#k 第一");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendNext("你可以从一开始牛奶#b奶牛#k在 #b巨大的路径#k.你为什么不去问她给你一些?");
    } else if (status == 2) {
	qm.sendPrev("哦，一旦你完成喂养蜥蜴，你能回到我身边？我有话要和你谈.");
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
	qm.sendOk("Mooo!");
    } else if (status == 1) {
	qm.gainExp(1150);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}