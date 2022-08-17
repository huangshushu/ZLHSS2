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
        if (status == 2) {
            qm.sendNext("我知道你犹豫了，但是我可以看到你的勇气，还没有迸发出来……。");
            qm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("你知道吗？冒险岛世界看起来很和平，但是在某些地方却充满了黑暗的力量。暗黑魔法师，那些即将要复活的暗黑魔法师正威胁着冒险岛世界！");
    } else if (status == 1) {
        qm.sendNextPrev("我们不能在这里坐以待毙，我们的敌人越来越强壮。我们需要更加强大！");
    } else if (status == 2) {
        qm.askAcceptDecline("但是我不会太担心，#h#,确定你能保护冒险岛世界吗？如果你相信自己能成为冒险岛骑士团，我相信你可以做到这一切！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142065# #t1142065# - 1");
    } else if (status == 3) {
        if (qm.getQuestStatus(20015) == 0) {
            qm.gainItem(1142065, 1);
            qm.forceCompleteQuest();
        }
        qm.sendNext("呵呵，我就知道你会这么说的。但是你还有很长的路要走，到了巅峰时刻，你就可以保护冒险岛世界了。");
    } else if (status == 4) {
        qm.sendPrev("#p1101002#, 我的谋划师，他就在我的旁边，他会帮助你成为一名冒险岛骑士。希望你成功！");
        qm.safeDispose();
    }
}

function end(mode, type, selection) {
}