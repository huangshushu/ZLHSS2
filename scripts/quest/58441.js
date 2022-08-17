﻿/*
 Made by Pungin
 */
        var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendOkSNew("喔不…也許會真的哭出來…", 0x38, 1);
            qm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        qm.sendYesNoSNew("果然大家的表情都很沉悶…那個孩子現在也是快要哭出來的表情…要去跟他說說話嗎？", 0x38, 1);
    } else if (status == 1) {
        qm.sendNextSNew("你還好嗎？一個人嗎？", 0x38, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("媽媽為了我去找食物了…因為肚子餓無法使出力量…", 0x13, 1);
    } else if (status == 3) {
        qm.sendNextPrevSNew("...\r\n#b(真是讓人難過…沒有我能幫忙的事情嗎？)", 0x38, 1);
    } else if (status == 4) {
        qm.gainExp(1000);
        qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}
