/* 
 5th Job Quests.
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.sendOk("考虑好后再来找我吧。");
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("如果说冒险岛世界是井然有序的，那绯红就是混乱、充满未知的。我们从很久前开始就充当着这个世界的影子。");
        } else if (status == 1) {
            qm.sendNextPrev("其实，我并不想帮助冒险岛世界。不过，如果冒险岛世界消失，我们的世界也会受到威胁。就算是为我们自己考虑，我们也要尽全力阻止黑魔法师。");
        } else if (status == 2) {
            qm.sendNextPrevS("那你愿意帮忙喽？");
        } else if (status == 3) {
            qm.sendNextPrev("嗯？我好像没那么说吧？");
        } else if (status == 4) {
            qm.sendNextPrevS("……");
        } else if (status == 5) {
            qm.sendNextPrev("……");
        } else if (status == 6) {
            qm.sendNextPrevS("……");
        } else if (status == 7) {
            qm.askMenu("我知道了。你不要露出这种表情。我帮你不就行了嘛。不过，在此之前，我想进行梦幻的测试！\r\n\r\n#L0#测试？");
        } else if (status == 8) {
            qm.askMenu("嗯，是非常梦幻的运气测试。我会把你赶走，你只要重新回来就行了。不过，入口将会被转移到其他地方，而不是原来的地方。\r\n\r\n#L0#等等，怎么能这样...");
        } else if (status == 9) {
            qm.sendNextPrev("我不会等你太久的，让我看看你的运气吧。\r\n\r\n#b(5分钟内，在世界树上端找到传送口吧！)#k");
        } else if (status == 10) {
            /*qm.forceStartQuest();
             qm.setQuestCustomData("find=0;r=1");
             qm.startQuestTimeLimitTask(1464, 5 * 60 * 1000);
             qm.warp(105300000);
             qm.dispose();*/
            if (qm.canHold(2435736)) {
                qm.sendOkS("见到了女神，集齐了3个神秘石。旁观者好像说他会重新联络我的…等等看他的消息吧。");
                qm.gainItem(2435736, 1);
                qm.forceCompleteQuest();
            } else {
                qm.sendNext("背包空间不足！请清理");
            }
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            qm.sendNext("我开玩笑的。你想要的是这东西吧？其实，我从一开始就打算给你了，快拿走吧。\r\n\r\n#b#i2435736:# #t2435736:# 1个");
        } else if (status == 1) {
            if (qm.canHold(2435736)) {
                qm.sendOkS("见到了女神，集齐了3个神秘石。旁观者好像说他会重新联络我的…等等看他的消息吧。");
                qm.gainItem(2435736, 1);
                qm.forceCompleteQuest();
            } else {
                qm.sendNext("背包空间不足！请清理");
            }
            qm.dispose();
        }
    }
}
