var status = 0;
var maps = Array(100000000,450002000);
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    } else if (status >= 2 && mode == 0) {
        cm.sendNext("看来你还在考虑。");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNext("怎么想离开这里了吗?");
    } else if (status == 1) {
        var selStr = "我可以送你回去,或者你想去的地方。#b";
        for (var i = 0; i < maps.length; i++) {
            if (maps[i] != cm.getMapId()) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "##l";
            }
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        cm.sendYesNo("看样子, 你好像已经没有什么事情需要在这里做了。确定要移动到#b#m" + maps[selection] + "##k村庄吗?");
        selectedMap = selection;
    } else if (status == 3) {
        cm.warp(maps[selectedMap]);
        cm.dispose();
    }
}
