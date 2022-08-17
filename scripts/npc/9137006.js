var status = -1;

function start() {
    if (!cm.isQuestActive(58448)) {
        cm.sendOkSNew("啊…完全不行，真的不行", 0x24, 1, 9137006);
        cm.dispose();
    } else if (!cm.canHoldSlots(1)) {
        cm.sendNextSNew("消耗背包欄位空出一格。", 0x24, 1, 9137006);
        cm.dispose();
    } else {
        cm.sendYesNoSNew("啊啊，#b#h0##k。要開始決勝負嗎？", 0x25, 1, 9137006);
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == -1) {
            cm.sendOkSNew("恩恩，有了自信再來吧。", 0x25, 1, 9137006);
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendNextSNew("猜拳開始。", 0x25, 1, 9137006);
    } else if (status == 1) {
        cm.updateInfoQuest(58448, "con=1");
        cm.updateInfoQuest(58502, "draw=0;lose=0;pass=0;win=0");
        cm.sendNextSNew("這，第一回合就贏囉。雖然不好意思不過可以再挑戰一次嗎？", 0x25, 1, 9137212);
    } else if (status == 2) {
        cm.forceCompleteQuest(58448);
        cm.dispose();
    }
}