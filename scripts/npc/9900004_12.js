/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：上线提醒
 */

importPackage(net.sf.odinms.client);
var status = 0;
var fee;
var chance = Math.floor(Math.random() * 1);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("想好了吗？");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendGetText("当前上线提醒:#r" + cm.角色ID取上线喇叭(cm.getPlayer().id) + "#k\r\n\r\n请输入你想设置的上线提醒语言:");
        } else if (status == 1) {
            fee = cm.getText();
            cm.修改上线提醒语言(cm.getPlayer().id, "" + fee + "");
            cm.说明文字("恭喜你修改成功。");
            cm.dispose();
        }
    }
}