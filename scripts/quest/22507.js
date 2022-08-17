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
	if (status == 14) {
	    qm.sendNext("呃，你在跟我开玩笑吧？告诉我你的手指滑落！来吧，接受任务.");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("我就知道！我知道我们相连，主人！当你变得更强壮，我变得更强了。当我变得更强壮，你可以用我的力量！这是我们的协议。我知道我选择了一个好主人!");
    } else if (status == 1) {
	qm.sendNextPrevS("#b我懂了。我们怎么在这个协议结束了呢?#k", 2);
    } else if (status == 2) {
	qm.sendNextPrev("我不知道。我只是一个鸡蛋。我真的不记得......虽然我依稀记得你，师傅，在一个有雾的森林朝我走来。我一看到我记住你的惊喜。我打电话给你的回报.");
    } else if (status == 3) {
	qm.sendNextPrevS("#b(等待！这听起来就像你有一个梦想......难道你们两个人在梦中见面呢？有没有可能是你在梦中见到巨龙是......米尔？#k", 2);
    } else if (status == 4) {
	qm.sendNextPrev("师父，你和我是一体的精神。我知道，我看到你的那一刻。这就是为什么我想使协议与您联系。 没有别人了。你不得不支付，当然我定的价格，.");
    } else if (status == 5) {
	qm.sendNextPrevS("#b我付出了代价?#k", 2);
    } else if (status == 6) {
	qm.sendNextPrev("难道你不记得了吗？当你认出了我，并让我感动？那是一个条件我设置。你摸我的卵子的那一刻，你我成为一家在精神.");
    } else if (status == 7) {
	qm.sendNextPrevS("#在一个精神...?", 2);
    } else if (status == 8) {
	qm.sendNextPrev("是!精神契约！你和我有独立的机构，但我们共享一个精神。这就是为什么你变得更强壮，当我变得更强壮，反之亦然！真棒，对不对？至少，我是这么认为.");
    } else if (status == 9) {
	qm.sendNextPrevS("#b我不知道你在说什么，但它听起来像是一个相当大的交易.#k", 2);
    } else if (status == 10) {
	qm.sendNextPrev("当然，这是一个大问题，傻傻的主人！你再也不必担心怪物。你中有我现在要保护你！来吧，考验我。事实上，我们现在去!");
    } else if (status == 11) {
	qm.sendNextPrevS("#b但它的和平在这里。周围没有危险的怪物.#k", 2);
    } else if (status == 12) {
	qm.sendNextPrev("什么？！这不好玩！你不喜欢冒险，主人？代表你的人战斗的怪物，击败邪恶，拯救无辜的，和所有？你不是到那种事?");
    } else if (status == 13) {
	qm.sendNextPrevS("#b这不是我的五年计划的一部分。我只是在开玩笑，但严重的是，我是一个农民的儿子...#k", 2);
    } else if (status == 14) {
	qm.askAcceptDecline("呸，还有让我告诉你这一点。这是不可能的龙大师过着平静的生活。我将有很多机会来证明我的技能。相信我，我们的生活将是一个很大的冒险。答应我，你和我一起坚持，好吗?");
    } else if (status == 15) {
	qm.forceStartQuest();
	qm.sendNextS("哈哈哈，好吧，师傅。让我们开始吧!", 1);
    } else if (status == 16) {
	qm.sendNextPrevS("#b(你有点困惑，但你现在用热血龙旅行。也许你会一次冒险一起去，他说的那样.)#k", 3);
    } else if (status == 17) {
	qm.sendPrevS("#b(你还有一个差事跑。你爸爸需要和你谈谈，所以去看看他吧。)#k", 2);
	qm.dispose();
    }
}

function end(mode, type, selection) {
}