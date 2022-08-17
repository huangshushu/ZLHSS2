﻿/*
 Made by Pungin
 */
        var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNextSNew("有一段時間，透過你的記憶查看到至今體驗的所有事情。\r\n完成「異世界的記憶」任務就可以開啟章節的UI，請選擇想要進行的章節。\r\n想要參加訓練兵團的日課的羅塞之牆戰鬥時需要進擊的巨人活動中獲得的遊戲硬幣。", 0x13, 1);
    } else if (status == 1) {
        qm.openUI(0x163);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
