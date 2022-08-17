/*
	创建终极冒险家
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (!cm.isQuestFinished(20616)) {
            cm.forceCompleteQuest(20616);
        }
        if (cm.isQuestFinished(20734)) {
            cm.sendNext("对不起，该角色已经创建过终极冒险家。");
            cm.dispose();
        } else if (cm.getJob() == 1112 || cm.getJob() == 1212 || cm.getJob() == 1312 || cm.getJob() == 1412 || cm.getJob() == 1512) {
            cm.sendNext("您好，骑士团长。现在冒险岛世界面临非常危险的情况。要想防止黑魔法师侵犯这里，需要更多的兵力。为了让士兵们变得更强，我决定和冒险家长老们合力，培养出了比冒险家更强的终极冒险家。");
        } else {
            cm.sendNext("对不起，只有四转的骑士团职业才能创建终极冒险家。");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.sendYesNo("终极冒险家一出生就是50级，并且拥有特殊的技能。怎么样？您将以终极冒险家的面貌获得重生吗？");
    } else if (status == 2) {
        if (!cm.getClient().canMakeCharacter(cm.getPlayer().getWorld())) {
            cm.sendOk("您的角色栏不足，无法创建更多的角色。");
        } else {
            cm.sendUltimateExplorer();
        }
        cm.dispose();
    }
}
