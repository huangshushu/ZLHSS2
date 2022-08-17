var status = -1;

function start() {
    cm.sendYesNoSNew("現在要結束敏傑性訓練後出去嗎？", 0x25, 1, 9137210);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == -1) {
            cm.sendNextSNew("不, 還沒！", 0x39, 1);
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.warp(parseInt(cm.getInfoQuest(58466).split("=")[1]), 0);
        if (!cm.isQuestFinished(58447)) {
            cm.forceCompleteQuest(58447);
        }
        cm.dispose();
    }
}