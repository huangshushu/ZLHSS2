var status = -1;
var 毒雾副本通关经验 = java.lang.Math.floor(Math.random() * 50000 + 100000);

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    switch (cm.getPlayer().getMapId()) {
        case 930000000:
            cm.sendNext("请进入左边的门,开始挑战吧!");
            break;
        case 930000100:
            cm.sendNext("我们必须消除所有这些怪物的污染！");
            break;
        case 930000200:
            cm.sendNext("我们必须消除这里的怪物,请注意你要把怪物引到中间的污水池杀死,然后掉出稀释的毒素丢在最右边的灌木丛方可过关！");
            break;
        case 930000300:
            cm.warpParty(930000400);
            break;
        case 930000400:
            if (cm.haveItem(4001169, 10)) {
                cm.warpParty(930000500, 0);
                cm.gainItem(4001169, -10);
            } else if (!cm.haveItem(2270004)) {
                cm.gainItem(2270004, 10);
                cm.sendOk("请净化这些怪物");
            } else {
                cm.sendOk("请给我10个怪物株!");
            }
            break;
        case 930000600:
            cm.sendNext("就是这个,请丢在祭坛召唤怪物!");
            break;
        case 930000700:
            if (cm.canHold(4001198, 1)) {
                cm.getPlayer().endPartyQuest(1206);
                cm.removeAll(4001161);
                cm.removeAll(4001162);
                cm.removeAll(4001163);
                cm.removeAll(4001164);
                cm.removeAll(4001169);
                cm.removeAll(2270004);

                var a = cm.getBossLogC("每日毒雾副本次数");
                if (a <= 1) {
                    cm.givePartyLevelItems(1, 54, 1, 4000313, 2);
                    cm.setBossLog('每日毒雾副本次数');
                }


                if (cm.getPlayer().getLevel() <= 120) {//毒物带副本奖励
                    cm.gainExp(毒雾副本通关经验);
                    if (a <= 1) {
                        cm.gainExp(毒雾副本通关经验);
                    }
                    cm.playerMessage(5, "恭喜你完成毒物副本！");

                } else {
                    cm.givePartyLevelItems(1, 54, 1, 4001229, 1);
                    cm.setBossRankCount("越级毒雾副本总次数");
                }
                //阿尔泰碎片
                cm.gainItem(4001198, 1);
                if (a <= 1) {
                    cm.gainItem(4001198, 1);
                }
                cm.playerMessage(5, "恭喜您获得1点毒雾副本通关点数！");
                cm.setBossRankPoints("毒雾副本总点数", 1);
                cm.setBossRankCount("毒雾副本总次数");
                cm.setBossRankCount("所有副本总次数");
                var eim = cm.getEventInstance();
                var 通关时间 = 20 * 60000;
                if (eim == null) {
                    var 消耗时间 = 999999999;
                } else {
                    var 消耗时间 = (通关时间 - eim.getTimeLeft()) / 1000;
                }
                if (eim != null) {
                    cm.worldMessage(2, "[副本-毒雾] : 恭喜 " + cm.getPlayer().getName() + " 完成毒雾副本。，消耗时间 " + formatSeconds(消耗时间) + "。");
                }
                cm.warp(930000800, 0);
            } else {
                cm.getPlayer().dropMessage(5, "请确认你的其他栏有没有满");
            }
            break;
    }
    cm.dispose();
}

function formatSeconds(value) {
    var theTime = parseInt(value);
    var theTime1 = 0;
    var theTime2 = 0;
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        }
    }
    var result = "" + parseInt(theTime) + " 秒 ";
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + " 分 " + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + " : " + result;
    }
    return result;
} 