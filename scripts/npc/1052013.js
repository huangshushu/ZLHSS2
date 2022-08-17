/*
 ZEVMS冒险岛(079)游戏服务端
 */

var maps = Array(190000000, 191000000, 192000000, 195000000, 196000000, 197000000
);

function start() {
    var selStr = "选择一个你要去的世界吧？#b";
    for (var i = 0; i < maps.length; i++) {
	selStr += "\r\n#L" + i + "##m" + maps[i] + "##l";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(maps[selection], 0);
    }
    cm.dispose();
}