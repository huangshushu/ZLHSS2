var status = -1;

function start() {
    if (!cm.isQuestActive(58449)) {
        cm.sendNextSNew("驅逐出去...讓這個世界上...一隻...都不剩!!!!", 0x25, 1, 9137205);
        cm.dispose();
    } else {
        cm.updateInfoQuest(58507, "accuracy=0;fakeMobKillCount=0;score=0");
        cm.sendNextSNew("巨人唯一個弱點是頸部。", 0x25, 1, 9137205);
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOkSNew("如果是士兵就必須要帶在身上！", 0x24, 1, 9137205);
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNoSNew("所以驅除巨人需要熟悉使用立體機動。要跟我一起參加立體機動訓練嗎？", 0x25, 1, 9137205);
    } else if (status == 1) {
        cm.sendNextSNew("很好！ 確認訓練場是否有空位，請稍後。", 0x25, 1, 9137205);
    } else if (status == 2) {
        cm.updateInfoQuest(58466, "rMap=814000400");
        cm.updateInfoQuest(58449, "con=1");
        var em = cm.getEventManager("ATT_Hook_Shot");
        if (em == null || em.getInstance("ATT_Hook_Shot") != null) {
            cm.sendOkSNew("裡面已經有人了", 0x25, 1, 9137205);
            cm.dispose();
            return;
        } else {
            em.startInstance_Solo("814011100", cm.getPlayer());
        }
        if (!cm.isQuestFinished(58449)) {
            cm.forceCompleteQuest(58449);
        }
        cm.dispose();
    }
}