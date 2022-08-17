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
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("是不是你曾经是在一个#m101000000# 直到不久以前？ 我终于找到你了！你知不知道过了多长时间，我终于找到你？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("你是谁?", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("我？如果你想知道的，停止我的山洞。我甚至可以向你发送邀请。你只要你接受直接发送到我的山洞。期待与您相见.");
    } else if (status == 3) {
	qm.forceStartQuest(21719); //开始任务
	qm.warp(910510200, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}

