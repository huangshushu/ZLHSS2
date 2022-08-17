var status = -1;
var select = -1;

function start() {
    //#b#e遊戲硬幣#k#n取得後再來。
    cm.sendYesNoSNew("啊啊、#e遊戲硬幣#n帶來了嗎、#b#h0##k。那，來決勝負吧？", 0x25, 1, 9137201);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == -1) {
            cm.sendOkSNew("恩恩，有了自信再來。", 0x25, 1, 9137201);
            cm.dispose();
        }
        status--;
    }

    if (status == 0) {
        cm.dispose();
    } else {
        cm.dispose();
    }
}