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
        var selStr = "┏                                                  ┓";
		selStr += "\r\n     #d只有穿戴在身上，才能发挥效果。#k\r\n";
        selStr += "  #L1#返回目录#l\r\n\r\n";
		selStr += "\r\n     #b永恒套装:#k";
		selStr += "\r\n     #d2件#k 必杀机率 + #r10%#k";
		selStr += "\r\n     #d3件#k 必杀机率 + #r30%#k";
		selStr += "\r\n     #d4件#k 必杀机率 + #r50%#k 必杀值 + #r20%#k";
		selStr += "\r\n     #d5件#k 必杀机率 + #r70%#k 必杀值 + #r50%#k\r\n         最终真实伤害 + #r100000#k";
		selStr += "\r\n\r\n\r\n\r\n┗                                                  ┛\r\n";
        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
                cm.openNpc(9900007, 5);
                break;
            
        }
    }
}