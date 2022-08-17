﻿/*
 Made by Pungin
 */
        var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 5) {
            qm.sendOkSNew("不想要這個徽章嗎？", 0x13, 1);
            qm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        qm.sendNextSNew("K 城牆崩潰了! 村民陷入危險耶!！", 0x38, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("我也知道 #h0#..但是這是 異世界的事情. 還有已經無法再旅行異世界了. 但是你隨時可以再旅行到你記憶裡存在的那個時間點. 因為那不是穿越時空，而是追隨你的記憶的關係.。", 0x13, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("雖然這個時間非常依依不捨…但是只能放棄。", 0x38, 1);
    } else if (status == 3) {
        qm.sendNextPrevSNew("看在你這麼依依不捨，我特別給你一個禮物吧. 異世界的徽章! 但是我不能免費給你. 帶來跟這徽章交換的物品時，我會再跟你交換喔。", 0x13, 1);
    } else if (status == 4) {
        qm.sendNextPrevSNew("想跟哪一種道具交換呢？  ", 0x38, 1);
    } else if (status == 5) {
        qm.sendYesNoSNew("我想一下~ 小小的東西就可以了! 去看看雜貨商店如何? 應該會有跟這徽章能交換的道具吧? 那我在這裡等你把東西找到吧?。", 0x13, 1);
    } else if (status == 6) {
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
        if (!qm.haveItem(1182140)) {
            qm.dispose();
            return;
        }
        qm.sendNextSNew("那，就用這徽章交換沒有問題嗎？", 0x38, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("好吧 。#h0#…獻給你 異世界最後的回憶吧。", 0x13, 1);
    } else if (status == 2) {
        if (!qm.canHold(1182141)) {
            qm.topMsg("裝備欄位不足。請空出 1格以上的空位。");
            qm.dispose();
            return;
        }
        qm.gainItem(1182140, -1);
        qm.gainItem(1182141, 1);
        qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}
