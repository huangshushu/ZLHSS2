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
		selStr += "首页 → 我要变强\r\n";
        selStr += " #L1##b"+a+"返回上一页#k#l\r\n";
		selStr += "\r\n   可以通过#b角色升级，装备强化，装备附魔，装备洗练#k，来使角色变得更加强大。";
		
		selStr += "\r\n\r\n #L2##b"+a+"装备附魔#k#l\r\n";
		
		

        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
                cm.openNpc(9900007, 0);
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9900007, 3001);
                break;
        }
    }
}