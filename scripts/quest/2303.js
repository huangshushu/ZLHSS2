/*
 ZEVMS冒险岛(079)游戏服务端
 */

var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0)
            status -= 2;
        else {
            if (status == 0) {
                qm.sendOk("真的？这是当务之急，所以如果你有时间，请来看我。");
                qm.dispose();
                return;
            } else if (status == 3) {
                qm.sendNext("可以。那样的话，我就给你介绍蘑菇王国的路线。在Henesys的西入口附近，你会发现一个空荡荡的房子。进入房子，然后向左拐，进入“B”主题地牢：蘑菇城堡> K。这是蘑菇Kingdom的入口。时间不多了！");
                qm.forceStartQuest();
                return;
            }
        }
    }
    if (status == 0)
        qm.sendAcceptDecline("既然你已经获得了这份工作，你看起来已经准备好了。我有件事想请你帮忙。你愿意倾听吗？");
    if (status == 1)
        qm.sendNext("发生的事情是蘑菇王国K目前处于混乱状态。蘑菇王国位于Henesys附近，以爱好和平、聪明的King Mush为特色。最近，他开始感到不舒服，所以他决定任命他唯一的女儿维奥列塔公主\k。从那时起，王国一定发生了一些事情，才能保持现在的状态。");
    if (status == 2)
        qm.sendNext("我不知道确切的细节，但是很明显发生了可怕的事情，所以我认为如果你亲自去那里评估损失会更好。像你这样的探险家似乎比拯救蘑菇王国更有能力。我刚给你写了一封“推荐信”，所以我建议你马上去蘑菇王国找巡警。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#");
    if (status == 3)
        qm.sendYesNo("顺便问一下，你知道蘑菇王国在哪里吗？如果你能找到你的路，那就好了，但是如果你不介意的话，我可以把你带到入口处。");
    if (status == 4) {
        qm.gainItem(4032375, 1);
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0)
            status -= 2;
        else {
            qm.dispose();
            return;
        }
    }
    if (status == 0)
        qm.sendNext("六羟甲基三聚氰胺六甲醚？这是作业指导老师的一封推荐信吗？？！这是什么，你是来拯救我们的，蘑菇王国吗？");
    if (status == 1)
        qm.sendNextPrev("六羟甲基三聚氰胺六甲醚。。。可以。既然这封信是从职业指导老师那里来的，我想你就是真正的那个人了。我很抱歉没有早点向你介绍我自己。我是负责保护King Mush的保安员。正如你所看到的，这个临时藏身地是由安全和士兵队伍保护的。我们的处境可能是可怕的，但无论如何，欢迎来到蘑菇王国。");
    if (status == 2) {
        qm.gainItem(4032375, -1);
        qm.forceCompleteQuest();
        qm.forceStartQuest(2312);
        qm.dispose();
    }
}
