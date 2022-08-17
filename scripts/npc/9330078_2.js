/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：拍卖主菜单
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
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
        var selStr = "  Hi~ #b#h ##k你要兑换什么呢？只要你给我#v4000463# #b#t4000463##k，我就可以给你想要的哦，我说到做到。\r\n";
        selStr += " #L1#" + cm.显示物品(4000463) + " x 50 #b" + cm.显示物品(1302128) + "#k#l \r\n";
        selStr += " #L2#" + cm.显示物品(4000463) + " x 50 #b" + cm.显示物品(1302084) + "#k#l \r\n";
        selStr += " #L3#" + cm.显示物品(4000463) + " x 70 #b" + cm.显示物品(1302129) + "#k#l \r\n";
        selStr += " #L4#" + cm.显示物品(4000463) + " x 500 #b" + cm.显示物品(5010009) + "#k(永久)#l \r\n";
		selStr += " #L5#" + cm.显示物品(4000463) + " x 66 #b" + cm.显示物品(2040710) + "#k#l \r\n";
		selStr += " #L6#" + cm.显示物品(4000463) + " x 66 #b" + cm.显示物品(2040711) + "#k#l \r\n";
		
        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 6:
                if (cm.判断背包消耗栏().isFull()) {
                    cm.说明文字("消耗栏必须有一个空位。");
                    cm.dispose();
                    return;
                }
                if (cm.判断物品数量(4000463, 66)) {
                    cm.收物品(4000463, 66);
                    cm.给物品(2040711, 1)
                } else {
                    cm.说明文字("你没有足够的 " + cm.显示物品(4000463) + " 。");
                }
                cm.dispose();
                break;
			case 5:
                if (cm.判断背包消耗栏().isFull()) {
                    cm.说明文字("消耗栏必须有一个空位。");
                    cm.dispose();
                    return;
                }
                if (cm.判断物品数量(4000463, 66)) {
                    cm.收物品(4000463, 66);
                    cm.给物品(2040710, 1)
                } else {
                    cm.说明文字("你没有足够的 " + cm.显示物品(4000463) + " 。");
                }
                cm.dispose();
                break;
			case 4:
                if (cm.判断背包特殊栏().isFull()) {
                    cm.说明文字("特殊栏必须有一个空位。");
                    cm.dispose();
                    return;
                }
                if (cm.判断物品数量(4000463, 500)) {
                    cm.收物品(4000463, 500);
                    cm.给物品(5010009, 1)
                } else {
                    cm.说明文字("你没有足够的 " + cm.显示物品(4000463) + " 。");
                }
                cm.dispose();
                break;
			case 3:
                if (cm.判断背包装备栏().isFull()) {
                    cm.说明文字("装备栏必须有一个空位。");
                    cm.dispose();
                    return;
                }
                if (cm.判断物品数量(4000463, 70)) {
                    cm.收物品(4000463, 70);
                    cm.给物品(1302129, 1)
                } else {
                    cm.说明文字("你没有足够的 " + cm.显示物品(4000463) + " 。");
                }
                cm.dispose();
                break;
            case 2:
                if (cm.判断背包装备栏().isFull()) {
                    cm.说明文字("装备栏必须有一个空位。");
                    cm.dispose();
                    return;
                }
                if (cm.判断物品数量(4000463, 50)) {
                    cm.收物品(4000463, 50);
                    cm.给物品(1302084, 1)
                } else {
                    cm.说明文字("你没有足够的 " + cm.显示物品(4000463) + " 。");
                }
                cm.dispose();
                break;
            case 1:
                if (cm.判断背包装备栏().isFull()) {
                    cm.说明文字("装备栏必须有一个空位。");
                    cm.dispose();
                    return;
                }
                if (cm.判断物品数量(4000463, 50)) {
                    cm.收物品(4000463, 50);
                    cm.给物品(1302128, 1)
                } else {
                    cm.说明文字("你没有足够的 " + cm.显示物品(4000463) + " 。");
                }
                cm.dispose();
                break;
        }
    }
}