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
		selStr += "首页 → 我要赚钱\r\n";
        selStr += " #L1##b"+a+"返回上一页#k#l\r\n";
		selStr += "\r\n   你可以选择#b野外打怪#k赚钱，也可以选择和其他玩家组队刷#b副本#k赚钱，也可以选择在#b渔场#k挂机赚钱。还有在#b中介商人#k那里贩售道具赚钱，或者可以打劫#b管理#k。";
		

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