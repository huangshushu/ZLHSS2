/*
 游戏服务端
 脚本：扎昆退出
 */

function start() {
    cm.sendYesNo("如果你现在离开，你将不得不重新开始？");
}

function action(mode, type, selection) {
    if (mode == 1) {
		cm.Gaincharacterz("" + cm.getPlayer().id + "", 200, -cm.Getcharacterz("" + cm.getPlayer().id + "", 200));
		cm.warp(211042300);
 cm.收物品(5253004,1);   }
    cm.dispose();
}