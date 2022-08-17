/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：蜈蚣
 */

 
var 羊毛数量 = 50;


function start() {
    status = -1;
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }

    if (status <= 0) {
		if(cm.getBossLog("蜈蚣") >= 20){
			cm.sendOk("今日蜈蚣次数已达到20次！");
			cm.dispose();
			return;
		}
        var selStr = "我需要 50 个 #v4000194# 才能让你通过！\r\n";
        selStr += "#b#L1#进入通道#l\r\n";
        selStr += "#L2#退出黑羊的领地#l";
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
            case 1:
                if (cm.haveItem(4000194, 羊毛数量)) {
                    cm.gainItem(4000194, -羊毛数量);
                    cm.warp(701010322, 0);
                    cm.dispose();
                } else {
                    cm.sendOk("请给我 #b"+羊毛数量+"#k 个 #v4000194#");
                    cm.dispose();

                }
                break;
            case 2:
				cm.warp(701010320,0);
                cm.dispose();
                break;

        }
    }
}