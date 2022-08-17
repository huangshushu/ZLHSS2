/*
进化系统NPC 9075007

*/
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status == 2 && mode == 0) {
            cm.sendNext("。。。");
			cm.dispose();
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendYesNo("确定退出进化系统？");
        } else if (status == 1) {
            //cm.sendSimple("退出进化系统。");
		cm.warp(957000000);
		cm.dispose();
        }
	//cm.dispose();
    }
}
