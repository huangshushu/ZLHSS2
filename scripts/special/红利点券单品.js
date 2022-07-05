var select = -1;
function start() {
    var Editing = false //false 开始
    if (Editing) {
        cm.sendOk("维修中");
        cm.dispose();
        return;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("#b你好，我是赞助奖励领取员#k\r\n" +
                "#L0##b我要花 20 点红利 兑换 #i2022669# #l#k\r\n" +
                "#L1##b我要花 20 点红利 兑换 #i2022670# #l#k\r\n" +
                "#L2##b我要花 30 点红利 兑换 #i2450000# #l#k\r\n" +
                "#L3##b我要花 50 点红利 兑换 #i2022530# #l#k\r\n" +
                "#L4##b我要花100 点红利 兑换 #i2450001# #l#k\r\n" +
                "#L5##b我要花100 点红利 兑换 #i2101120#*10 #l#k\r\n" +
                "#L6##b我要花500 点红利 兑换 #i5220010# #l#k\r\n" +
                "#L7##b我要花1000点红利 兑换 #i5062000# #l#k\r\n" +
                "\r\n");

    } else if (status == 1) {
        if (!cm.canHoldByType(2, 1)) {
            cm.sendOk("请确认背包是否已经满了。");
            cm.dispose();
            return;
        }
        if (!cm.canHoldByType(5, 1)) {
            cm.sendOk("请确认背包是否已经满了。");
            cm.dispose();
            return;
        }
        if (selection == 0) {
            if (cm.getPlayer().getCSPoints(3) < 20) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -20, true);
            cm.gainItem(2022669, 1);
            cm.sendOk("领取成功");
            cm.dispose();
            return;

        } else if (selection == 1) {
            if (cm.getPlayer().getCSPoints(3) < 20) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -20, true);
            cm.gainItem(2022670, 1);
            cm.sendOk("领取成功");
            cm.dispose();
            return;
        } else if (selection == 2) {
            if (cm.getPlayer().getCSPoints(3) < 30) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -30, true);
            cm.gainItem(2450000, 1);
            cm.sendOk("领取成功");
            cm.dispose();
            return;
        } else if (selection == 3) {
            if (cm.getPlayer().getCSPoints(3) < 50) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -50, true);
            cm.gainItem(2022530, 1);
            cm.sendOk("领取成功");
            cm.dispose();
            return;
        } else if (selection == 4) {
            if (cm.getPlayer().getCSPoints(3) < 100) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -100, true);
            cm.gainItem(2450001, 1);
            cm.sendOk("领取成功");
            cm.dispose();
            return;
        } else if (selection == 5) {
            if (cm.getPlayer().getCSPoints(3) < 100) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -100, true);
            cm.gainItem(2101120, 10);
            cm.sendOk("领取成功");
            cm.dispose();
            return;
        } else if (selection == 6) {
            if (cm.getPlayer().getCSPoints(3) < 500) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -500, true);
            cm.gainItem(5220010, 10);
            cm.sendOk("领取成功");
            cm.dispose();
            return;
        } else if (selection == 7) {
            if (cm.getPlayer().getCSPoints(3) < 1000) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -1000, true);
            cm.gainItem(5062000, 1);
            cm.sendOk("领取成功");
            cm.dispose();
            return;
        } else {
            cm.dispose();
            return;
        }

    }
}

function openNpc(npcid) {
    openNpc(npcid, null);
}

function openNpc(npcid, script) {
    var mapid = cm.getMapId();
    cm.dispose();
    if (cm.getPlayerStat("LVL") < 10) {
        cm.sendOk("你的等级不能小于10等.");
    } else if (
            cm.hasSquadByMap() ||
            cm.hasEventInstance() ||
            cm.hasEMByMap() ||
            mapid >= 990000000 ||
            (mapid >= 680000210 && mapid <= 680000502) ||
            (mapid / 1000 === 980000 && mapid !== 980000000) ||
            mapid / 100 === 1030008 ||
            mapid / 100 === 922010 ||
            mapid / 10 === 13003000
            ) {
        cm.sendOk("你不能在这里使用这个功能.");
    } else {
        if (script == null) {
            cm.openNpc(npcid);
        } else {
            cm.openNpc(npcid, script);
        }
    }
}
