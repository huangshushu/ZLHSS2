﻿/*
 Made by Pungin
 */
        var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendOkSNew("不是說想幫助飢餓的小孩嗎？變心了嗎？", 0x13, 1);
            qm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        qm.sendYesNoSNew("第一次嘗試的關係，先選擇簡單的東西吧…可以從楓之谷世界怪物中取得的馬鈴薯如何呢？請打倒楓之谷怪物收集50個馬鈴薯。", 0x13, 1);
    } else if (status == 1) {
        qm.sendOkSNew("希望這事情可以順利完成.。", 0x13, 1);
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
        if (!qm.haveItem(4034246, 50)) {
            qm.dispose();
            return;
        }
        qm.sendNextSNew("來，先吃點這些東西吧。  ", 0x38, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("哇! 馬鈴薯! 謝謝你! 剛剛肚子真的超級餓. 你怎麼獲得這些的呢?  ", 0x13, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("呃…就去隨便找一下…跟媽媽一起吃喔。", 0x38, 1);
    } else if (status == 3) {
        qm.sendNextPrevSNew("好! 真得很感謝你！", 0x13, 1);
    } else if (status == 4) {
        qm.sendNextPrevSNew("(那小孩會喜歡真是太好了。)", 0x38, 1);
    } else if (status == 5) {
        qm.gainItem(4034246, -50);
        qm.forceCompleteQuest();
        qm.warp(814000000);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
