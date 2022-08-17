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
		selStr += "\r\n     #d小小石头，竟然蕴含着这么强大的能力。#k\r\n";
        selStr += "  #L1#返回目录#l\r\n\r\n";
		selStr += "\r\n"+cm.显示物品(4004000)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b力量#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4004001)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b智力#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4004002)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b敏捷#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4004003)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b运气#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4004004)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b升级次数#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4020000)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b命中#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4020001)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b移动速度#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4020002)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b跳跃力#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4020003)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#bMaxMP#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4020004)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b回避率#k属性。";
			
		selStr += "\r\n"+cm.显示物品(4020005)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b魔法攻击力#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4020006)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#bMaxHP#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4020007)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b物理攻击力#k属性。";
		
		selStr += "\r\n"+cm.显示物品(4020008)+"，在魔法密林易德处，通过合成制作后，可以增到装备的#b物理，魔法防御#k属性。";
		
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