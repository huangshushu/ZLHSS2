/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：空间传送
 */
var 魔法石 = 4006000;
//传送地点，消耗金币
var maps = Array(
		[910000000, 1],
		[104000000, 1],
		[101000000, 1],
        [120000000, 1],
        [102000000, 1],
        [100000000, 1],
        [103000000, 1],
		[222000000, 1],
		[105040300, 1],
		[220000000, 1],
		[230000000, 1],
		[240000000, 1],
		[541020000, 1],
		[251000000, 1],
		[221000000, 1],
		[200000000, 1],
		[211000000, 1],
		[260000000, 1],
		[261000000, 1],
		[250000000, 1],
		[551000000, 1],
		[801000000, 1]

        );
var status = 0;
var show;
var sCost;
var selectedMap = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.说明文字(" 等你想去哪里了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
        var selStr = "  #d#e请选择你要去的地方：#k#n#b";
        for (var i = 0; i < maps.length; i++) {
			 selStr += "\r\n#L" + i + "# #m" + maps[i] + "##l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        show = maps[selection][1];
        cm.sendYesNo("\t传送目标: #b#m" + maps[selection] + "##k\r\n\t需要 "+cm.显示物品(魔法石)+" x #b" + show + "#k");
        selectedMap = selection;
    } else if (status == 3) {
        if (!cm.判断物品数量(魔法石,0)) {
            cm.sendNext("你没有 "+cm.显示物品(魔法石)+" 无法启动空间传送阵。");
            cm.safeDispose();
        } else {
            cm.收物品(魔法石,0);
            cm.warp(maps[selectedMap][0]);
            cm.dispose();
        }
    }
}