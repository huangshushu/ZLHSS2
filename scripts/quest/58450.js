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
        qm.sendNextSNew("#h0#、該要到回去的時間了。", 0x13, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("是嗎…了解了。", 0x38, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("很難得，所以最後去向想要到別的人打個招呼如何？", 0x13, 1);
    } else if (status == 3) {
        qm.sendNextPrevSNew("去跟最初給馬鈴薯的孩子們打個招呼吧，去製作最後的回憶吧。", 0x38, 1);
    } else if (status == 4) {
        qm.sendNextPrevSNew("那去打個招呼後再來吧. 我在視野良好的城牆上等你。", 0x13, 1);
    } else if (status == 5) {
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
        qm.sendNextSNew("唷~好久不見！", 0x38, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("哇! 你好! 好久不見耶!", 0x13, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("最近也常常肚子餓嗎？", 0x38, 1);
    } else if (status == 3) {
        qm.sendNextPrevSNew("不. 現在我開始幫我母親. 父親回來前，因為我要保護我媽媽阿", 0x13, 1);
    } else if (status == 4) {
        qm.sendNextPrevSNew("哇! 很勇敢呢! 話說我晚點會離開這裡. 所以我來跟你告別了. 你要保重喔。", 0x38, 1);
    } else if (status == 5) {
        qm.sendNextPrevSNew("是去旅行嗎? 有點羨慕呢. 哪時候會回來呢? 你會回來吧？", 0x13, 1);
    } else if (status == 6) {
        qm.sendNextPrevSNew("嗯…我回來的話，我一定會再來看你的. 要保重喔。", 0x38, 1);
    } else if (status == 7) {
        qm.sendNextPrevSNew("(感到有點依依不捨的心情. 到跟 K要見面的城牆上吧。)", 0x38, 1);
    } else if (status == 8) {
        qm.forceCompleteQuest();
        qm.warp(814000900, 1);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
