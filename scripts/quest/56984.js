var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        qm.sendOk("如果你改变了注意，随时告诉我哦。假日还长呢！");
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.askAcceptDecline("你好，#b#h0##k，为了迎接长假，我们准备了一个小游戏，你要参加吗？");
        } else if (status == 1) {
            qm.sendNext("我来介绍让5月的长假能够更加欢乐的#r<假日桌游>#k吧。从现在开始到#b2016年5月15日#k，你可以在画面左边看到#i3994526# #r假日骰子图标#k。");
        } else if (status == 2) {
            qm.sendNext("点击骰子图标就能进入游戏。 在背包设置栏中可以投掷假日骰子。投掷骰子进行移动，就能获得各种任务和礼物。");
        } else if (status == 3) {
            qm.sendNext("完成任务条件时，画面左边的骰子就会发光。点击骰子打开<假日桌游>就能完成任务，如果背包已满，无法完成任务，那么在自己的位置点击#r移动的对话框#k就能完成！");
        } else {
            qm.sendNext("请你好好享受假日桌游吧。下次通过画面左边的活动提示，#r每10分钟就能获得1个#k骰子。");
            qm.setQuestCustomData("endDate=20160525;cell=0;state=2;finish=0");
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        qm.dispose();
    }
}