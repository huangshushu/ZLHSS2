/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendOk("真？这是一个迫切的问题，所以如果你有一段时间了，请我.");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        if (qm.getMapId() == 180000001) {
            qm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
            qm.dispose();
        } else {
            qm.sendAcceptDecline("现在你的强大了许多，我有一件事情想找你帮忙，你是否愿意听听？");
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
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.dispose();
            return;
        }
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