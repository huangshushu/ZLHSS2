var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.getDirectionStatus(true);
        cm.EnableUI(1);
        cm.DisableUI(true);
        cm.showEffect(false, "JPKanna/magicCircle1");
        cm.getDirectionInfo(1, 7000);
    } else if (status == 1) {
        cm.sendNextS("好像成功了，結界變弱了。", 3);
    } else if (status == 2) {
        cm.sendNextPrevS("剩下的就是破壞本堂地下祭壇， 阻止儀式。。。 快點吧。", 3);
    } else {
        cm.EnableUI(0);
        cm.dispose();
        cm.warp(807100112, 0);
    }
}