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
	    qm.sendNext("没有用试图找到我自己的答案。我会为更好看#b年长的人比主更聪明!#k");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("啊。这是行不通的。我需要别的东西。没有植物。 没有肉。什么，你不知道？但你是主人，你比我大，太。你必须知道什么了对我好!");
    } else if (status == 1) {
	qm.sendNextPrevS("#b但我不知道。这不是如年龄有什么与此...", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("既然你长大，你必须在世界上更有经验了。是有道理的，你会知道的比我多。哦，挺好的。我会问别人谁比你更老，主!");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendOkS("#b(你已经问老爸一次，但你没有任何更好的想法。时间再请他!)#k", 2);
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
	qm.sendOk("什么？你还在试图养活蜥蜴？嗯，所以它不会吃干草或猪肉的一把？挑剔的小家伙。 哦？蜥蜴仍然是一个婴儿?");
    } else if (status == 1) {
	qm.gainExp(260);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}