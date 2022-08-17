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
		selStr += "首页 → 关于钓鱼\r\n";
        selStr += " #L1##b"+a+"返回上一页#k#l\r\n";
		selStr += "\r\n   在每个城镇，找#b于夫#k进入渔场，准备好 #v3011000# #v5340001# #v2300001# 既可以钓鱼了，垂钓的成功率和时间，和钓鱼等级相关。\r\n\r\n\t\t\t等级    时间(m)    成功率(%)\r\n\t\t\t 1        300        30\r\n\t\t\t 2        270        35\r\n\t\t\t 3        240        40\r\n\t\t\t 4        200        50\r\n\t\t\t 5        150        60\r\n\t\t\t 6        120        70";
		
		
		

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