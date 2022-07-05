/*
 NPC Name: 		Hera
 Map(s): 		Towns
 Description: 		Wedding Village Entrance
 */

var status = -1;

function start() {
    cm.sendSimple("您想回去#m680000000#了吗?? \n\r #b#L0# 我想回去结婚小镇.#l \r\n #L1#我已经结婚了我想要领恋爱之心~");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        switch (selection) {
            case 0:
                if (cm.haveItem(4213000) && cm.haveItem(4213001)) {
                    cm.gainItem(4213000, -1);
                    cm.gainItem(4213001, -1);
                    cm.warp(680000000, 0);
                    cm.dispose();
                } else {
                    cm.warp(680000000, 0);
                    cm.dispose();
                }
                break;
            case 1:
                var marr = cm.getQuestRecord(160001);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                if (cm.getPlayer().getMarriageId() <= 0 /*|| !data.equals("3")*/) {
                    cm.sendOk("我很抱歉如果您想要得到这个椅子的话请先结婚~~" + cm.getPlayer().getMarriageId() + "和" + data);
                } else if (cm.canHold(3012004, 1) && !cm.haveItem(3012004, 1) && !cm.isQuestFinished(52013)) {
                    cm.gainItem(3012004, 1);
                    cm.forceCompleteQuest(52013);
                    cm.sendOk("结婚后多一份喜悦送你吧，但机会只有一次!");
                } else {
                    cm.sendOk("请确定是否装备栏满了或者您已经有相同的椅子了... 或者你领过了....");
                }
                cm.dispose();
                break;
        }
    }
}
