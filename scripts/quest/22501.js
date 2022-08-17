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
	if (status == 3) {
	    qm.sendNext("*喘气*你怎么能拒绝养活你的龙？这是虐待儿童!");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("呦，硕士。现在，我已经向你展示我能做些什么，轮到你了。证明给我看......你能找到的食物！ 我饿了。现在，您可以用我的力量，所以你要照顾我.");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendNextPrevS("嗯，我还是不明白这是怎么回事，但我不能让一个可怜的小动物，像你饿死吧？食品，你说呢？ 你想吃什么?", 2);
    } else if (status == 2) {
	qm.sendNextPrev("嗨，我刚出生几分钟前。我怎么知道我吃什么？我所知道的是，我是龙......我是你的龙。而你是我的主人。你要对我好!");
    } else if (status == 3) {
	qm.askAcceptDecline("我想我们应该共同学习。但是，我饿了。主人，我要食物。请记住，我是一个婴儿！我将很快开始哭了！");
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.sendOkS("#b(米尔龙出现在宝宝是饿极了。你必须喂他。也许你爸爸可以给你龙吃什么忠告.)", 2);
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("这是什么，即使是？你想知道龙吃什么？你为什么......咦？你发现了一个龙?");
    } else if (status == 1) {
	qm.sendNextS("#b(告诉你秘耳爸爸.)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrev("嗯......这是一个龙？你确定它不只是一个大蜥蜴？好了，所有的生命是宝贵的，所以我想你可以把它...");
    } else if (status == 3) {
	qm.sendNextS("#b(爸爸似乎并不相信先生是一位龙。嗯，他是非常小的。将爸爸相信，如果他听到米尔谈话?)", 2);
    } else if (status == 4) {
	qm.sendNextPrev("如果它是一个真正的龙，那就太危险了保持。如果它呼吸火？我真的不认为这是一个龙，但也许我们应该问一个冒险家来杀死它，以防万一.");
    } else if (status == 5) {
	qm.sendNextS("#b(What?! Kill Mir?! But he didn't do anything wrong!!)", 2);
    } else if (status == 6) {
	qm.sendNextPrev("当然，我敢肯定它不是一个龙。龙只出现在Leafre在Ossyria大陆.");
    } else if (status == 7) {
	qm.sendNextS("#b哈...哈...你是绝对正确的！我怀疑他是一个龙。他可能只是一只蜥蜴！无疑!#k", 2);
    } else if (status == 8) {
	qm.sendNextPrev("是啊，我敢肯定。这是一个奇怪的前瞻性蜥蜴，但它看起来并不危险。猜猜你可以把它.");
    } else if (status == 9) {
	qm.sendNextS("#b(对于他自己的安全，你最好不要让任何人知道，米拉是一个龙.)#k", 2);
    } else if (status == 10) {
	qm.sendOk("哦，你说你要找的东西喂蜥蜴？我不知道...让我想想了一会儿.");
    } else if (status == 11) {
	qm.gainExp(180);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}