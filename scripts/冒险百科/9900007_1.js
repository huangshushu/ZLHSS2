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
		selStr += "\r\n     #d这个世界有许许多多神奇的物品，它们都有自己的作用，每一个都是那么独特，或者还未发现用途，但总有一天会发出耀眼的光芒，哪怕一个小小的蜗牛壳。#k\r\n";
        selStr += "  #L1#返回目录#l\r\n\r\n";
		selStr += "\r\n"+cm.显示物品(4006000)+"，有魔法力的魔法石头，可用于#r高级技能，空间传送，道具附魔，仙人模式修炼#k等。";
		
		selStr += "\r\n"+cm.显示物品(4006001)+"，有召回力的魔法石头，可用于#r高级技能，空间标记，召唤技术#k等。";

		selStr += "\r\n"+cm.显示物品(4001005)+"，神秘的魔法卷轴，能够在特定的地点，召唤出#r死神#k。但现在似乎还没有人能够领悟如何使用。";
		
		selStr += "\r\n\r\n\r\n\r\n┗                                                  ┛\r\n";
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