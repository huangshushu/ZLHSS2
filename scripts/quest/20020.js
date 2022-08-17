/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	qm.sendNext("我可以告诉你已经被看到，你真的很努力工作已经在10级。我认为这是时间，现在你来闯作为一个贵族，并正式成为骑士在训练。在这之前，但是，我想求你一件事。你决定，你会希望beome奈特?");
    } else if (status == 1) {
	qm.sendNext("还有就是不要成为一个骑士的单一路径。事实上，有五他们奠定了你。它是由你来选择你想要走的路，但它绝对应该是你不会后悔。这就是为什么......我提供给你看你的样子，一旦你成为骑士.");
    } else if (status == 2) {
	qm.sendNext("你怎么看？您是否有兴趣在看到自己作为骑士的领袖？如果你已经决定你想要什么样的骑士成为，那么你不一定会看它...#b#L0#告诉我我该怎么会看起来像作为骑士的领袖.#l ..#b#L1#不，我没事.");
    } else if (status == 3) {
	qm.sendYesNo("你想看到它自己的权利吗？短片即将问世。为你即将看到哪些准备.");
    // IF selected no
    //Talk to me after you have decided what you really want to do. Whatever you choose, you will not miss out or lose privileges, so don't take this too seriously...
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.playerSummonHint(false);
	qm.MovieClipIntroUI(true);
	qm.warp(913040100, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	qm.sendNextPrev("测试");
	qm.dispose();
    }
}