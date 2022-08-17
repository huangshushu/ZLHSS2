var status = -1;

function start() {
    if (!cm.isQuestActive(58447)) {
        cm.sendOkSNew("大家，幸好沒有演變成最壞的狀況…", 0x24, 1, 9137202);
        cm.dispose();
    }
    cm.sendNextSNew("#b#h0##k，知道莎夏嗎？入團式時吃馬鈴薯的那個孩子。", 0x25, 1, 9137202);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOkSNew("如果想法改變了再跟我說喔！", 0x25, 1, 9137202);
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNoSNew("與要與莎夏進行敏捷性訓練，你也要一起參加敏捷性訓練嗎？", 0x25, 1, 9137202);
    } else if (status == 1) {
        if (!cm.canHoldSlots(1)) {
            cm.sendNextSNew("消耗背包欄位空出一格。", 0x24, 1, 9137202);
            cm.dispose();
            return;
        }
        cm.updateInfoQuest(58466, "rMap=814000400");
        cm.updateInfoQuest(58447, "con=1");
        cm.warp(814012100, 0);
        cm.forceCompleteQuest(58447);
        cm.dispose();
    }
}