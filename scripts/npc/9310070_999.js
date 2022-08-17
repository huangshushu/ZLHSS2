
var a = 0;
var text;
var selects;
var buynum = 0;
var itemlist = Array(
    //道具代码, 所需道具数量;
	Array(101030300, "#i4000621#(威尔武器强化)"),//
    Array(101030200, "#i4000023#(威尔武器强化)"),//
	Array(101030100, "#i4000013#(威尔武器强化)"),//
	Array(101030000, "#i4000007#(威尔武器强化)"),//
    Array(105020100, "#i4001006#(希纳斯翅膀强化)"),
	Array(450003500, "#i4001244#(希纳斯戒指强化)")

);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            text = "#d欢迎来到月光冒险岛材料地图传送区#k\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "##b传送至：#d" + itemlist[i][1] + "#l\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            cm.warp(itemlist[selection][0], 0);//扣除道具
            cm.dispose();

        }
    }
}//mode