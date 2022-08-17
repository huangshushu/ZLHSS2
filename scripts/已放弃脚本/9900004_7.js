/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：反馈专区
 */
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var 蘑菇 = "#fUI/UIWindow.img/Minigame/Common/mark#";
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
    var MC = cm.getServerName();

    if (status == 0) {
        var
        selStr = "\t\t\t#d" + 心 + "#e< ZEVMS服务端反馈专区 >#k#n" + 心 + "\r\n\r\n";
        selStr += "    #r说明:#d本反馈系统会将您的反馈信息直接发送至作者，如果大家在游戏中遇到问题或者BUG，记得反馈一下哦，欢迎大家的反馈和建议。#k\r\n";
        selStr += "    #r说明:#d每个功能后续都会开放反馈功能。\r\n\r\n";
        selStr += "" + 蘑菇 + "#d冒险区域:#r" + MC + "#k\r\n";
        selStr += "" + 蘑菇 + "#d反馈账号:#r" + cm.getClient().getAccountName() + "#k\r\n";
        selStr += "\t\t\t\t     #b#L0#返回页面#l\r\n";
		selStr += "\t\t\t\t     #b#L1#提供建议#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 0:
                cm.dispose();
                cm.openNpc(9900004, 0);
                break
            case 1:
                cm.dispose();
                cm.openNpc(9900004, 71);
                break
            }
    }
}