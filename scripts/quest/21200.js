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
	if (status == 0) {
	    qm.sendNext("这真的很紧急，如果你拒绝，你会后悔. #b它与你的极手臂有关,#k这意味着它与你的过去有关。 谁知道...？ 也许杆臂是唤醒你的能力的关键...?");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("培训如何进行？ 哇，看着你，我可以告诉你的水平射过屋顶。 这是惊人的...好吧，反正，我看到你的忙，但你必须回到岛上一点.");
    } else if (status == 1) {
	qm.forceStartQuest();//开始任务
	//qm.forceStartQuest(21201);
	
	//qm.forceStartQuest(21202); //skip just in case
	//qm.forceStartQuest(21203, "0");
	qm.sendOk("你的 #b巨型臂#k这是保持在#bRien#k 突然间变得奇怪。 根据这本书，当它要求它的主人时，极臂像这样反应. #b也许它在呼唤你?#k? 请回到岛上找出来.");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 11) {
	    qm.sendNext("嘿，至少你告诉我你试过!");
	    qm.dispose();
	    return;
	} else if (status == 13) {
	    qm.MovieClipIntroUI(true);
	    //qm.warp(914090200, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("嗯嗯嗯....", 2);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(巨人的胳膊是嗡嗡声，但谁是那个男孩站在那里?)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("#b(我从来没有见过他。 他不看人.)#k", 2);
    } else if (status == 3) {
	qm.sendNextPrev("嘿Aran！ 你还是听不到我吗？ 说真的，你不能听到我吗？ 啊，这是令人沮丧的!");
    } else if (status == 4) {
	qm.sendNextPrevS("#b(哇，是谁？ 听起来像一个生气的男孩。..)#k", 2);
    } else if (status == 5) {
	qm.sendNextPrev("真的，一个大师我原来是被困在冰上几百年，放弃了武器，现在的“主人”甚至不能听到我?");
    } else if (status == 6) {
	qm.sendNextPrevS("你是谁?", 2);
    } else if (status == 7) {
	qm.sendNextPrev("Aran？ 你现在听到我吗？ 这是我，是我！ 我是你的武器#b玛哈的手臂!#k!");
    } else if (status == 8) {
	qm.sendNextPrevS("#b(...玛哈？ 巨人手臂实际上在说什么？)#k", 2);
    } else if (status == 9) {
	qm.sendNextPrev("你为什么在你的脸上看起来像你不能相信？ 我看到你失去了所有的回忆，但...你也忘记了我吗？ 你怎么能这样对我??");
    } else if (status == 10) {
	qm.sendNextPrevS("对不起，但严重...我不记得一件事.", 2);
    } else if (status == 11) {
	qm.sendYesNo("这是所有这些年后可以说的吗？ 对不起？ 你明白我为什么无聊我自己几百年了吗？ 把它带出来，如果可以的话。 把你的回忆出来！ 把他们全部！ 如果你需要，挖它们!");
    } else if (status == 12) {
	qm.sendNextS("#b(声称是玛哈巨人之臂的声音似乎很受干扰。 这个对话没有了。 我最好先和Lirin谈谈.)#k", 2);
	qm.forceCompleteQuest();
    } else if (status == 13) {
	qm.sendYesNo("您要跳过视频剪辑吗？ 即使你跳过现场，游戏也不会受到影响.");
    } else if (status == 14) {
	qm.dispose();
    }
}