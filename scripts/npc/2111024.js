var status = -1;

function start() {
    if (cm.getQuestStatus(3360) == 2) {
        if (cm.getMapId() == 261010000) {
            cm.playerMessage("您的名字已经在名单上，现在您可以随时进出。");
            cm.warp(261030000, "sp_jenu");
        } else {
            cm.playerMessage("您的名字已经在名单上，现在您可以随时进出。");
            cm.warp(261030000, "sp_alca");
        }
        cm.dispose();
    } else if (cm.getQuestStatus(3360) == 1) {
        cm.sendGetText("请输入密码。");
    } else {
        cm.dispose();
    }
}

function action(mode, type, selection) {
    var pw = cm.getText();
    if (cm.getQuestRecord(3360).getCustomData().equals(pw)) {
        cm.forceCompleteQuest(3360);
        cm.playerMessage("密码正确设备已经开启。");
    } else {
        cm.sendOk("密码错误。");
    }
    cm.dispose();
}
