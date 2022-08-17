/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：为别人点赞
 */
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 任务简介 = "#fUI/UIWindow.img/Quest/summary#";
var 奖励 = "#fUI/UIWindow.img/Quest/reward#";
var 人气度 = "#fUI/UIWindow.img/QuestIcon/6/0#";
var 几率获得 = "#fUI/UIWindow.img/Quest/prob#";
var 神秘道具 = "#fUI/UIWindow.img/QuestIcon/5/0#";
var 感叹号 = "#fUI/UIWindow.img/Quest/icon0#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    var 要求任务 = 1;
    var 完成进度 = cm.getBossLog("日常加人气1");
    var 日常加人气1完成 = cm.getBossLog("日常加人气1完成");
    if (status == 0) {
        var
        selStr = "\r\n";
        selStr += " " + 任务简介 + " 任务进度:[#r " + 要求任务 + " #k/ #b" + 完成进度 + "#k ]\r\n\r\n";
        selStr += "   为其他玩家增加 #b" + 要求任务 + "#k 点人气即可完成该任务。\r\n\r\n";
        selStr += " " + 奖励 + "\r\n";
		selStr += " " + cm.显示物品(4032135) + " x 10\r\n";
		selStr += "  #v5200000# #b10W#k\r\n";
		
        selStr += " \t\t\t\t    #L0#" + 箭头 + "#b#e返回#l\r\n";
        if (日常加人气1完成 <= 0 && 　完成进度 >= 要求任务) {
            selStr += " \t\t\t     #L1#" + 箭头 + "#b#e完成任务#l\r\n";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                if (完成进度 >= 要求任务) {
                    //设置奖励的区域
					cm.给物品(4032135,10);
					cm.给金币(100000);
                    ////
                    cm.setBossLog("日常加人气1完成");
					cm.setBossLog("为别人点赞2");
                    cm.sendNext("恭喜你，任务完成。");
                    cm.dispose();

                } else {
                    cm.sendNext("未达到任务要求。");
                    cm.dispose();
                }
                break;
			case 0:
                cm.dispose();
                cm.openNpc(9330042, 0);
                break;
        }
    }
}