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
            qm.sendNext("我一直在这里，如果你改变注意，可以再次来找我。");
            qm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("欢迎来到圣地！你是谁？ 噢，你是 #b#h0##k！ 很高兴见到你！ 我在这里等你好久了， 你将成为一个冒险岛骑士， 对吗？ 我的名字是 #p1102004#。");
    } else if (status == 1) {
        qm.sendNextPrev("如果你想成为冒险岛骑士团中的一员，你可以找我旁边的那位先生，他可以帮助你成为冒险岛骑士团中的一员。");
    } else if (status == 2) {
        qm.sendNextPrev("噢，我提醒你一下，这个是一项任务。你可能偶尔可以注意到，NPC头顶上偶尔会有灯泡，那称之为#b任务（QUEST）#k。完成任务你将可以得到很多丰富的奖励！");
    } else if (status == 3) {
        qm.askAcceptDecline("你愿意见见 #b#p1102005##k吗？ 你想知道怎么打猎吗？你可以找到 #p1102005# 来教你怎么打猎！");
    } else if (status == 4) {
        qm.forceStartQuest();
        qm.summonMsg(2);
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
 qm.sendNext("你是贵族?? 我哥哥 #p1102004# 派来的? 很高兴认识你! 我是 #p1102005#. 我将送你 #p1102004# . 请记得，你可以按你的道具栏 #bI 键#k. 红药水能帮助你恢复HP蓝色药水能帮助你恢复MP，这是一个好主意学习如何使用它们能让你事先充分了解当你处于危险之中使用。. \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000020# 5 #t2000020# \r\n#i2000021# 5 #t2000021# 5 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 15 经验值");
    } else if (status == 1) {
	qm.gainItem(2000020, 5);
	qm.gainItem(2000021, 5);
        qm.forceCompleteQuest();
        qm.gainExp(15);
    //    qm.summonMsg(3);
        qm.dispose();
    }
}