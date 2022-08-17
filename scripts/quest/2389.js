/* 
	任务: 危机中的蘑菇王国
*/

var status = -1;

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendOk("这件事可以说是蘑菇王国对你的请求……希望你务必再考虑一下。");
            qm.dispose();
            return;
        } else if (status == 3) {
            qm.sendOk("真的不需要我送你去吗？那好你有时间来的话就到蘑菇城堡来找我吧。");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        if (qm.getMapId() == 180000001) {
            qm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
            qm.dispose();
        } else {
            qm.sendYesNo("现在你的强大了许多，我有一件事情想找你帮忙，你是否愿意听听？");
        }
    } else if (status == 1) {
        qm.sendNext("故事发生在蘑菇王国，具体的事情我也不太清楚。但是好像很紧急。");
    } else if (status == 2) {
        qm.sendNext("我不知道事情的细节，所以想找你帮帮忙，你可能会节省更多的时间帮助蘑菇王国，我送你一封信，请你把它交给门卫。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#");
    } else if (status == 3) {
        qm.gainItem(4032375, 1);
        qm.forceStartQuest();
        qm.sendYesNo("如果你现在想去蘑菇城堡的话，我可以送你去。你确定要去吗？");
    } else if (status == 4) {
        qm.warp(106020000);
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
        qm.sendNext("嗯？这个从转职教官那里得来的信件吗？");
    } else if (status == 1) {
        qm.sendNextPrev("我看看……。");
    } else if (status == 2) {
        qm.sendNextPrev("好吧，既然你有转职教官的推荐信，我想你是一个很棒的人，很抱歉我没有自我介绍，我是包围蘑菇城堡的卫兵，正如你所看到的，这里是我们暂时的藏身之地，我们的情况很糟糕，尽管如此，欢迎你来到蘑菇王国！");
    } else if (status == 3) {
        qm.forceCompleteQuest();
        qm.gainItem(4032375, -1);
        qm.forceStartQuest(2312);
        qm.dispose();
    }
}
