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
		selStr += "首页 → 关于魔鬼入口\r\n";
        selStr += " #L1##b"+a+"返回上一页#k#l\r\n";
		selStr += "\r\n   #r魔鬼入口#k，位于金银岛内#b#m102020300#，#m101010102#，#m103030200#，#m104040002#，#m100030000##k。在这5个地方分别都有一个哦。";
		
		selStr += "\r\n   而更黑暗的入口，在#b迷宫 黑暗通道#k。";

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