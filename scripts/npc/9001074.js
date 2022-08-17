/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：9001079 - [商人]卡乐卡萨
 *  
 *  @Author Jackson 
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
            cm.openTradeKingShop();
            cm.dispose();
            break;
        case 1: //
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
