/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：9000156 - 幸运怪物乐透
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
            cm.sendSimple("请问需要什么服务?\r\n#b#L4#查看说明#l\r\n#L0#购买彩票#l\r\n#L1#查看已购买的彩票#l\r\n#L2#开奖结果查询#l\r\n#L3#中奖查询#l");
            break;
        case 1: //
            switch (selection) {
                case 0:
                    cm.dispose();
                    cm.openNpc(9000156, "购买彩票");
                    break;
                case 1:
                    cm.dispose();
                    cm.openNpc(9000156, "查看彩票");
                    break;
                case 2:
                    cm.dispose();
                    cm.openNpc(9000156, "彩票结果");
                    break;
                case 3:
                    cm.dispose();
                    cm.openNpc(9000156, "中奖查询");
                    break;
                case 4:
                    cm.dispose();
                    cm.openNpc(9000156, "彩票说明");
                    break;
                default:
                    cm.dispose();
                    break;
            }
            break;
        default:
            cm.dispose();
            break;
    }
}