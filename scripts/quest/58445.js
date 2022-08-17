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
        qm.sendNextSNew("訓練新兵 #h0# 嗎? 從訓練兵團有接收到物品贈送的事項. 請跟我來領支給用品吧。", 0x21, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("支給用品是什麼呢？", 0x38, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("我猜應該是立體機動裝置. 請在近期內收取物品。", 0x21, 1);
    } else if (status == 3) {
        qm.forceStartQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNextSNew("為了支給用品來的嗎? 名稱是…嗯…阿! 在這， #h0# 沒錯吧? 贈送給你立體機動裝置吧。", 0x21, 1);
    } else if (status == 1) {
        if (!qm.canHold(1073010)) {
            qm.topMsg("裝備欄位不足。請空出 1格以上的空位。");
            qm.dispose();
            return;
        }
        qm.gainItem(1073010, 1);
        qm.forceCompleteQuest();
        qm.updateInfoQuest(58445, "clear=1");
        qm.sendOkSNew("請穿用看看是否合身以及功能是否正常。\r\n以防萬一弄不見了還會支配，因此到時來找我。", 0x13, 1);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
