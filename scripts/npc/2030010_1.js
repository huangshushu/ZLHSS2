/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：扎昆重返
 */

var status = 0

function start() {
	if(cm.getPlayer().getClient().getChannel()!=cm.Getcharacterz("" + cm.getPlayer().id + "", 200)){
		cm.切换频道(cm.Getcharacterz("" + cm.getPlayer().id + "", 200));
	}else{
    cm.sendYesNo("你要继续挑战扎昆吗？");
	}
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0)
        cm.sendOk("好吧那就不去吧。");
		cm.Gaincharacterz("" + cm.getPlayer().id + "", 200, -cm.Getcharacterz("" + cm.getPlayer().id + "", 200));
        cm.dispose();
        return;
    }
    status++;
    if (status == 1) {
        cm.warp(280030000, 0);
        cm.dispose();
    }
}