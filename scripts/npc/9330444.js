/*
 傑特副本傳送
 Made by Pungin
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendYesNo("要回到原來的地方嗎?");
    } else if (status == 1) {
        cm.warp(cm.getSavedLocation("MULUNG_TC"));
        cm.clearSavedLocation("MULUNG_TC");
        cm.dispose();
    } else {
        cm.dispose();
    }
}