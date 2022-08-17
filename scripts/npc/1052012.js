/*
 ZEVMS冒险岛(079)游戏服务端
 */
function start() {
    cm.sendYesNo("小朋友不要进去网吧。网吧不允许小朋友进入。");
}


function action(mode, type, selection) {
	
    if (mode == 0) {
	cm.sendNext("你一定是未成年，所谓我才不会让你进去的。");
    } else {
	    cm.warp(193000000, 0);
    }
    cm.dispose();
}