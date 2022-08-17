function start() {
    cm.sendSlideMenu(0, "#87# Crack in the Dimensional Mirror");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (selection == 87) {
        cm.warp(cm.getSavedLocation("MULUNG_TC"), 0);
        cm.dispose();
    } else {
        cm.dispose();
    }
}