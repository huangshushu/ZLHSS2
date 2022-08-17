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
		selStr += "首页 → 关于道具制造者\r\n";
        selStr += " #L1##b"+a+"返回上一页#k#l\r\n";
		selStr += "\r\n   道具制造者，可以制造一般得不到的道具，他们每个人都有不一样的手艺，都有自己的特长。他们分布在冒险岛不同的位置：\r\b#d   射手村集市 - 比修斯\r\n   废弃都市 - 吉姆\r\n   勇士部落 - 辛德，斯密斯\r\n   林中之城 - 克利斯拉玛";
		
		selStr += "\r\n\r\n#k";
		selStr += "#e斯密斯#n，擅长#r合成母矿，金属#k等材料。\r\n";
		selStr += "#e易德#n，擅长将道具#r附魔，强化#k等。\r\n";
		selStr += "#e辛德#n，擅长制作高#r等级装备#k。\r\n";
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