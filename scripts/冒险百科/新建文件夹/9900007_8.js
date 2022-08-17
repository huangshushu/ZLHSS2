/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：冒险百科
 */
var a = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
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
    if (status == 0) {
        var selStr = "#e冒险百科，助你玩转#b"+cm.开服名称()+"#k#n：\r\n";
		selStr += "首页 → 关于签到，在线奖励\r\n";
        selStr += " #L1##b"+a+"返回上一页#k#l\r\n";  
		selStr += "\r\n   在星缘那里，可以进行#r每日签到#k，在线奖励，来领取奖励哦，而在线奖励又可分为，#b个人在线奖励，家族在线奖励，全服在线奖励#k，当在线时长累计到一定值，就可以解锁奖励。"; 
		

        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
                cm.openNpc(9900007, 0);
                break;
        }
    }
}