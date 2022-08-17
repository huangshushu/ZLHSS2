/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：冒险百科
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
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
		var selStr = "\t\t\t" + 心 + "  " + 心 + " #r#e < 冒险百科 > #k#n " + 心 + "  " + 心 + "\r\n\r\n";
	    selStr += " [#e#b公益赞助#k#n] : #d赞助自由冒险岛既可以获取。#k\r\n";
		selStr += " [#e#b群 活 跃#k#n] : #d在自由冒险岛群内保持活跃。#k\r\n";
		selStr += " [#e#b家族领地#k#n] : #d家族占领的地图。#k\r\n";
		selStr += " [#e#b助人为乐#k#n] : #d接受来自其他玩家的助人认可。#k\r\n";


        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
			default:
                cm.dispose();
                cm.openNpc(9900007,0);
                break;
        }
    }
}