/* 
 *
 *  
 *  功能：起源之塔排名公告栏
 *  
 *
 */

/* global cm */

﻿var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case 0://上一步
            status--;
            break;
        case 1://下一步
            status++;
            break;
    }

    switch (status) {
        case 0:
            cm.askMenu("#e[起源之塔排名公告栏]\r\n#L0##n#b起源之塔探险排名#l\r\n#L2#我探险到的最深层#l");
            break;
        case 1: //
            switch (selection) {
                case 0:
                    cm.dispose();//这是结束脚本，请按照实际情况使用
                    cm.openUI(211);
                    break;
                case 2:
                    var sData = cm.getQuestInfo(42001, "stage");
                    var best = sData == null ? 0 : parseInt(sData);
                    cm.sendOk("#e[我的累计最佳记录]#n\r\n\r\n累计最佳记录：#e#b" + best + " #k#n层");
                    break;
                default:
                    cm.dispose();//这是结束脚本，请按照实际情况使用
                    break;
            }
            break;
        default:
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
    }
}
