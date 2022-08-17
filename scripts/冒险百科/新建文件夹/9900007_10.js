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
		selStr += "首页 → 关于怪物结晶体\r\n";
        selStr += " #L1##b"+a+"返回上一页#k#l\r\n\r\n";  
		selStr += " 这类晶体都是通过击杀怪物后获得，但是掉落的概率却很小。但是对于某些精英玩家来说，简直是小儿科。\r\n";  
		selStr += " "+cm.显示物品(4260000)+"#k\r\n";  
		selStr += " "+cm.显示物品(4260001)+"#k\r\n";  
		selStr += " "+cm.显示物品(4260002)+"#k\r\n";  
		selStr += " "+cm.显示物品(4260003)+"#k\r\n";  
		selStr += " "+cm.显示物品(4260004)+"#k\r\n";  
		selStr += " "+cm.显示物品(4260005)+"#k\r\n";  
		selStr += " "+cm.显示物品(4260006)+"#k\r\n";  
		selStr += " "+cm.显示物品(4260007)+"#k\r\n";  
		selStr += " "+cm.显示物品(4260008)+"#k\r\n";  
		
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