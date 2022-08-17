/*
 * 机械战车
 */

function start() {
    cm.sendSlideMenu(6, cm.getSlideMenuSelection(6));
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    cm.warp(cm.getSlideMenuDataIntegers(6, selection)[0], cm.getSlideMenuDataIntegers(6, selection)[1]);
    cm.dispose();
}
