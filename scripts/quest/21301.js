var status = -1;

function start(mode, type, selection) {
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.askAcceptDecline("野乌鸦抓到了吗？呵呵呵...果然是我的主人！很好，那么将带来的 红珠玉交出来！我会重新放在本体上...咦...？为什么不回答？该不会...忘记带回来了吧？");
    } else if (status == 1) {
        qm.sendNext("什么？你真的没拿回 红珠玉？为什么？该不会是真的忘了吧？啊啊！怎么会这样...就算被黑魔法师诅咒，经过了这么久冰雪封印都解除了，健忘症倒是还没解除啊...");
    } else if (status == 2) {
        qm.sendNextPrev("不行。真的太不像话了。这个时候我更应该代替主人打起精神...呼呼...呼呼......");
    } else if (status == 3) {
        qm.sendNextPrev("再去看看，反正小偷已经逃走了。那么就重新制作 红珠玉吧！之前曾经做过一次，你知道材料吧？好吧！那么快去蒐集材料吧...");
    } else if (status == 4) {
        qm.sendNextPrev("   #i4001173#");
    } else if (status == 5) {
        qm.sendNextPrev("材料也没有，而且还不知道怎么做.....没有梦也没有希望。啊啊啊！");
    } else if (status == 6) {
        qm.sendNextPrevS("#b(玛哈开始大发雷霆。先逃离这里再说。莉琳可能可以帮我。)");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
