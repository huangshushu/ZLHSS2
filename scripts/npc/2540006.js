/* 
 *
 *  
 *  功能：起源之塔 第38层 NPC 
 *  
 *
 */

/* global cm, java */

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

    var em = cm.getEventManager("LobbyQuest");
    var eim = cm.getEventInstance();
    if (em != null && eim != null) {
        switch (status) {
            case 0:
                if ("0".equals(eim.getProperty("stage38_check"))) {
                    cm.sendNext("想通过这一关需要帮我收集到黑暗点！按照我指定的怪物，击杀怪物收集黑暗点吧！");
                } else {
                    cm.sendNext("快点去消灭怪物收集黑暗点吧！");
                }
                break;
            case 1: //
                if ("0".equals(eim.getProperty("stage38_check"))) {
                    cm.sendNext("现在我将告诉你需要击杀的怪物是什么。准备好了吗？");
                } else {
                    cm.dispose();//这是结束脚本，请按照实际情况使用
                }
                break;
            case 2:
                eim.schedule("changeMobS38", 100);
                cm.dispose();//这是结束脚本，请按照实际情况使用
                break;
            default:
                cm.dispose();//这是结束脚本，请按照实际情况使用
                break;
        }
    } else {
        cm.dispose();
    }
}
