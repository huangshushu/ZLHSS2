/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.getQuestStatus(50004) == 0) {
        qm.forceStartQuest();
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("(我再次进入涩谷的2102我看到那里的... #p9120033#!) \n.....你是......!");
        } else if (status == 1) {
            qm.sendNextPrev("...啊，所以你送到这里击败 #o9400296#. 说真的，我很抱歉...\n(如他说出这些话, #p9120033# 不能在熊的眼睛看着我)");
        } else if (status == 2) {
            qm.sendNextPrev("敌人总部位于六本木的中心，在#bR六本木购物中心#k. 当然，你将无法进入面子上。在主大厅，机器人军队被称为#o9400287# 袖手旁观，作为安全性。你的第一个任务是进入大楼诡计伪造的机器人了.\n(正如他所说的这些, #p9120033# 递给我地球的一个副本.)");
        } else if (status == 3) {
            qm.sendNextPrev("事实上，已经有地下通道，从涩谷导致六本木购物中心。使用这将允许你进入大楼未经被发现#o9400287#. 这是会导致你有地图。这只是一条直线，所以你应该没有问题，进入那里，但我仍然会为您提供地图.");
        } else if (status == 4) {
            qm.sendOk("请头部到涩谷在2102年，并使用硐路径进入商场。由于中心是总部，可能会遇到一些你西港岛线从未见过的怪物。请不要低估他们。 祝你好运!");
            qm.forceCompleteQuest();
            qm.safeDispose();
        }
    }
}