
/**
 * 功能脚本JavaScript
 * 编写者:情缘少珍惜
 * QQ:1364317
 */


var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		   var	txts  = "";
		   		txts += "#b#您好,勇士,怪物试炼是考验各位玩家基础的地方，分为三个阶段如下：                                                               一阶段：猪猪庄园（迷宫）                                               二阶段：忍苦跳跳（跳不过的玩家可花金币飞跃）                                            三阶段：收集材料，不用一直打，材料够了就可推出来\r\n\r\n"; 
		   		txts += "#L1#开启个人任务(需一张幸运车票#v4000475#)\r\n\r\n";
		   		txts += "#L2##r领取奖励(每日一次)";
            cm.sendSimple(txts);
    } else if (selection == 2){
        cm.openNpc(9010010, 13);//打开脚本
        } else if(status == 1) {
            if(selection == 1) {
                 if (cm.haveItem(4000475, 1)){
                     cm.gainItem(4000475, -1);
            		cm.warp(900000000);
            		cm.getPlayer().setOneTimeLog("VIP");
			cm.喇叭(2,"欢迎玩家：["+cm.getName()+"]开始了每日个人任务大家为他加油，祝您游戏愉快！！！");
            		cm.dispose();
            	}else{
            		cm.sendOk("对不起，您没有幸运车票#v4000475#，不能再进入了，#r幸运车票获取方法在线30分钟奖励一张#k！");
            		cm.dispose();

            	}
            }
        }
    }
}