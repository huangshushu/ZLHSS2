var status = -1;

function action(mode, type, selection) {
    if (cm.getMapId() == 926100600) {
        cm.removeAll(4001130);
        cm.removeAll(4001131);
        cm.removeAll(4001132);
        cm.removeAll(4001133);
        cm.removeAll(4001134);
        cm.removeAll(4001135);
        var em = cm.getEventManager("Romeo");
        if (em != null) {
            var itemid = 4001160;
            if (!cm.canHold(itemid, 1)) {
                cm.sendOk("请空出一些其他栏位。");
                cm.dispose();
                return;
            }
            cm.gainItem(itemid, 1);
            if (em.getProperty("stage").equals("2")) {
                //    		cm.gainNX(5000);
                cm.gainExpR(140000);
            } else {
                //		cm.gainNX(3500);
                cm.gainExpR(105000);
            }
        }
        cm.getPlayer().endPartyQuest(1205);
        cm.warp(926100700, 0);
        cm.dispose();
        return;
    }
    if (mode > 0) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.removeAll(4001130);
        cm.removeAll(4001131);
        cm.removeAll(4001132);
        cm.removeAll(4001133);
        cm.removeAll(4001134);
        cm.removeAll(4001135);
        cm.sendSimple("#b#L0#我要离开这里。#l\r\n#L1#我要兑换#t1122010#。#l\r\n#L2#我要用#t4001160# x10 或者 #t4001159# x10 兑换#t2041212##l#k");
    } else {
        if (selection == 0) {
            cm.warp(926100600, 0);
        } else if (selection == 1) {
            if (cm.canHold(1122010, 1) && cm.haveItem(4001160, 25) && cm.haveItem(4001159, 25)) {
                cm.gainItem(1122010, 1);
                cm.gainItem(4001160, -25);
                cm.gainItem(4001159, -25);
            } else {
                cm.sendOk("您需要#t4001160#和#t4001159#各25个才能兑换#t1122010#，还有检查一下您的空间是否足够。");
            }
        } else {
            if (cm.canHold(2041212, 1) && (cm.haveItem(4001160, 10) || cm.haveItem(4001159, 10))) {
                cm.gainItem(2041212, 1);
                if (cm.haveItem(4001160, 10)) {
                    cm.gainItem(4001160, -10);
                } else {
                    cm.gainItem(4001159, -10);
                }
            } else {
                cm.sendOk("您需要#t4001160# 10个或者 #t4001159# 10个 才能兑换#t2041212# ，还有检查一下您的空间是否足够。");
            }
        }
        cm.dispose();
    }
}
