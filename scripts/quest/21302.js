var status = -1;

function start(mode, type, selection) {
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            qm.sendNext("等你想好再来找我。");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("啊！ 这，这个...想起制作 红珠玉 的方法了吗？啊啊...就算你脑袋尚未解冻又兼建忘症的人，我也无法弃你于不顾...啊！我怎么又来了！快点将宝石交出来！");
    } else if (status == 1) {
        qm.askAcceptDecline("很好， 红珠玉的力量也恢复了，在将你的力量唤醒一些。你的等级已经比之前上升许多，应该能唤醒更多力量！");
    } else if (status == 2) {
        if (qm.getPlayerStat("RSP") > (qm.getPlayerStat("LVL") - 70) * 3) {
            qm.sendOk("技能点数没点完。");
            qm.dispose();
            return;
        } else if (!qm.canHold()) {
            qm.sendOk("您的背包栏位不足。");
            qm.dispose();
            return;
        } else {
            qm.changeJob(2111);
            qm.gainItem(1142131, 1);
            qm.worldMessage("『转职快报』：恭喜玩家." + qm.getChar().getName() + "  成功狂狼勇士三转让我们热烈的祝福他/她吧！");
            qm.sendNext("快点将之前的能力找回来。像以前一样一起去冒险...");
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}
