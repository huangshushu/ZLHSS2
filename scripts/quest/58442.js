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
        qm.sendNextSNew("那個…有可以吃的嗎？真的好餓…", 0x13, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("現在我也沒有什麼能吃的東西耶…等我一下喔. 我去找找看有沒有可以吃的東西。", 0x38, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("真的嗎…？謝謝！ ", 0x13, 1);
    } else if (status == 3) {
        qm.sendNextPrevSNew("(在這裡不管多努力，還是很難找到ㄧ些食物. 是不是要回到楓之谷看看呢? 去找 K 獲得ㄧ些建議吧。)", 0x38, 1);
    } else if (status == 4) {
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
        qm.sendNextSNew("怎麼了呢？", 0x13, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("K！異世界的村民在飢餓中. 不能這樣下去. 把楓之谷世界的食糧搬到異世界如何?", 0x38, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("把楓之谷世界的物品搬到異世界? 從其他時空搬移東西，還真是第一次聽到的事情。 ", 0x13, 1);
    } else if (status == 3) {
        qm.sendNextPrevSNew("不管如何必須要的事情。", 0x38, 1);
    } else if (status == 4) {
        qm.sendNextPrevSNew("沒有辦法了…會幫忙把楓之谷的食糧移動到異世界。", 0x13, 1);
    } else if (status == 5) {
        qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}
