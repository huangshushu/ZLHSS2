/*
 暴君 
 */


var status = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getPlayer().getMapId() == 401060100 || cm.getPlayer().getMapId() == 401060200 || cm.getPlayer().getMapId() == 401060300) { //传送
            cm.sendSimple("#e<Boss - 暴君>#n\r\n你现在确定放弃任务,从这里出去?\r\n#L2##b是的,现在就出去#l");
        }
    } else if (status == 1) {
        if (selection == 2) {
            cm.warp(401060000, 0);
        }
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    }
}
