/*
 活跃系统
 */

var status = 0;
var typed = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，想选择什么样的活力值兑换:\r\n#r#L1##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#活力值兑换简介#l\r\n\r\n   #k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#积分：#r" + cm.getPlayerPoints() + "#k 点  #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#活力值：#r" + cm.getPlayerEnergy() + "#k 点 \r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#今天在线：#r" + cm.getGamePoints() + "#k 分钟#b\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[活力值]兑换卷轴        (#k目前状态： #r推荐内容#b)#l\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[活力值]兑换饰品        (#k目前状态： #r推荐内容#b)#l\r\n#L4##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[活力值]兑换装备        (#k目前状态： #r推荐内容#b)#l\r\n#L5##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[活力值]兑换副手        (#k目前状态： #r推荐内容#b)#l");
        } else if (status == 1) {
            if (selection == 1) {
                cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到活力值简介:\r\n  活力值可以兑换 武器 饰品 卷轴 副手 心动了吗?\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#通过天天日常[组队]任务.\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：活力值通过[日常]组队任务快速获得.");
                cm.dispose();
            } else if (selection == 2) {
                typed = 3;
                cm.dispose();
                cm.openNpc(9900001, 201);
            } else if (selection == 3) {
                typed = 4;
                cm.dispose();
                cm.openNpc(9900001, 204);
            } else if (selection == 4) {
                typed = 5;
                cm.dispose();
                cm.openNpc(9900001, 203);
            } else if (selection == 5) {
                typed = 6;
                cm.dispose();
                cm.openNpc(9900001, 202);
            }
        }
    }
}
