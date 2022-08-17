/*
 ZEVMS冒险岛(079)游戏服务端
 道具制作
 */

//说明文字
var 说明文字 = "   hi #b#h ##k 抱歉，该脚本尚未投入使用，如果您认为有必要，请联系管理员添加。";


var status = -1;
var sels;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.对话结束();
        return;
    }
    if (status == 0) {
        var 文本信息 = "";

        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else {
        cm.对话结束();
    }
}