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
        qm.sendNextSNew("#e<訓練公告>#n\r\n訓練新兵們請參加立體機動訓練.可以跟訓練生艾連·葉卡一起進行訓練。", 0x21, 1);
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}
