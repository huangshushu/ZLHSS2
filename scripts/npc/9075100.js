/*
进化系统NPC 9075100

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
            cm.sendSimple("开始进化系统。\r\n#b#L0#连接进化系统。(剩余入场次数: 0 / 5 )#l\r\n#b#L1#听听关于进化系统的说明。#l");
        } else if (status == 1) {
            if (selection == 0) { 
                //status = -1;
                cm.sendESLab();
		cm.dispose();
            } else if (selection == 1) { // How do I take down the monsters?
                cm.sendNext("关于进化系统。。。。。");
		cm.dispose();
            } 
        } else if (status == 2) { 
	    cm.dispose();
        } 
    }
}
