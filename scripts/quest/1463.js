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
            qm.sendNext("你来啦，陌生人。\r\n\r\n虽然你并不属于我们世界，但如果你愿意守护我们的世界，我肯定会尽全力帮助你的。");
        } else if (status == 1) {
            qm.sendNext("如果你想获得我的帮助，应该向我证明你的强大和勇猛吧。你能对抗#r麦格纳斯#k吗？");
        } else if (status == 2) {
            qm.sendNext("我相信你肯定能做到的。\r\n\r\n#b(消灭麦格纳斯1次后，再回来吧。)#k");
        } else if (status == 3) {
            qm.forceStartQuest();
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
            qm.sendNext("你这么快就回来啦。你果然不是一般的强大。\r\n\r\n#b#i2435735:# #t2435735:# 1个");
        } else if (status == 1) {
            if (qm.canHold(2435735)) {
                qm.sendOkS("通过了女神的考验，获得了神秘石。现在去找其他女神吧。\r\n\r\n#b#p1540944##k : 堕落世界树的#b#m105300000##k");
                qm.gainItem(2435735, 1);
                qm.forceCompleteQuest();
            } else {
                qm.sendNext("背包空间不足！请清理");
            }
            qm.dispose();
        }
    }
}
