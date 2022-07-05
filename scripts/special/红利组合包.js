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
                "#L0##b【组合包A】勋章礼包 需要 : 3000红利 #l#k\r\n" +
                "#L1##b【组合包B】帽子礼包 需要 : 2000红利 #l#k\r\n" +
                "#L2##b【组合包C】套服礼包 需要 : 2000红利 #l#k\r\n" +
                "#L3##b【组合包D】坠饰礼包 需要 : 2000红利 #l#k\r\n" +
                "#L4##b【组合包E】耳环礼包 需要 : 2000红利 #l#k\r\n" +
                "#L5##b【组合包F】血盟礼包 需要 : 1000红利 #l#k\r\n" +
                "\r\n");

    } else if (status == 1) {
        if (selection == 0) {
            cm.sendSimple("#r组合包A内容物为 #i1143097#*1 #i2450000#*3 #i2022530#*3 #i2022179#*5 #i5220010#*6 #i2340000#*1 #l#k \r\n\r\n" +
                    "#L100##b确认兑换（3000红利）#l#k\r\n");
        } else if (selection == 1) {
            cm.sendSimple("#r组合包B内容物为 #i1005123#*1 #i2450000#*3 #i2022530#*3 #i2022179#*5 #i5220010#*4 #l#k \r\n\r\n" +
                    "#L101##b确认兑换（2000红利）#l#k\r\n");
        } else if (selection == 2) {
            cm.sendSimple("#r组合包C内容物为 #i1053296#*1 #i2450000#*3 #i2022530#*3 #i2022179#*5 #i5220010#*4 #l#k \r\n\r\n" +
                    "#L102##b确认兑换（2000红利）#l#k\r\n");
        } else if (selection == 3) {
            cm.sendSimple("#r组合包D内容物为 #i1122017#*1 #i2450000#*3 #i2022530#*3 #i2022179#*5 #i5220010#*4 #l#k \r\n\r\n" +
                    "#L103##b确认兑换（2000红利）#l#k\r\n");
        } else if (selection == 4) {
            cm.sendSimple("#r组合包E内容物为 #i1032259#*1 #i2450000#*3 #i2022530#*3 #i2022179#*5 #i5220010#*4 #l#k \r\n\r\n" +
                    "#L104##b确认兑换（2000红利）#l#k\r\n");
        } else if (selection == 5) {
            cm.sendSimple("#r组合包F内容物为 #i1114000#*1 #i2450000#*1 #i2022530#*1 #i2022179#*2 #i5220010#*2 #l#k \r\n\r\n" +
                    "#L105##b确认兑换（1000红利）#l#k\r\n");
        } else {
            cm.dispose();
            return;
        }

    } else if (status == 2) {
        if (!cm.canHoldByType(1, 1)) {
            cm.sendOk("请确认背包是否已经满了。");
            cm.dispose();
            return;
        }

        if (!cm.canHoldByType(2, 4)) {
            cm.sendOk("请确认背包是否已经满了。");
            cm.dispose();
            return;
        }
        if (!cm.canHoldByType(5, 1)) {
            cm.sendOk("请确认背包是否已经满了。");
            cm.dispose();
            return;
        }

        if (selection == 100) {
            if (cm.getPlayer().getCSPoints(3) < 3000) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -3000, true);
            cm.gainItem(1143097, 1);
            cm.gainItem(2450000, 3);
            cm.gainItem(2022530, 3);
            cm.gainItem(2022179, 5);
            cm.gainItem(5220010, 6);
            cm.gainItem(2340000, 1);
            cm.sendOk("领取成功");
            cm.dispose();
            return;

        } else if (selection == 101) {
            if (cm.getPlayer().getCSPoints(3) < 2000) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -2000, true);
            cm.gainItem(1005123, 1);
            cm.gainItem(2450000, 3);
            cm.gainItem(2022530, 3);
            cm.gainItem(2022179, 5);
            cm.gainItem(5220010, 4);
            cm.sendOk("领取成功");
            cm.dispose();
            return;

        } else if (selection == 102) {
            if (cm.getPlayer().getCSPoints(3) < 2000) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -2000, true);
            cm.gainItem(1053296, 1);
            cm.gainItem(2450000, 3);
            cm.gainItem(2022530, 3);
            cm.gainItem(2022179, 5);
            cm.gainItem(5220010, 4);
            cm.sendOk("领取成功");
            cm.dispose();
            return;
        } else if (selection == 103) {
            if (cm.getPlayer().getCSPoints(3) < 2000) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -2000, true);
            cm.gainItem(1122017, 1);
            cm.gainItem(2450000, 3);
            cm.gainItem(2022530, 3);
            cm.gainItem(2022179, 5);
            cm.gainItem(5220010, 4);
            cm.sendOk("领取成功");
            cm.dispose();
            return;
        } else if (selection == 104) {
            if (cm.getPlayer().getCSPoints(3) < 2000) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -2000, true);
            cm.gainItem(1032259, 1);
            cm.gainItem(2450000, 3);
            cm.gainItem(2022530, 3);
            cm.gainItem(2022179, 5);
            cm.gainItem(5220010, 4);
            cm.sendOk("领取成功");
            cm.dispose();
            return;

        } else if (selection == 105) {
            if (cm.getPlayer().getCSPoints(3) < 1000) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -1000, true);
            cm.gainItem(1114000, 1);
            cm.gainItem(2450000, 1);
            cm.gainItem(2022530, 1);
            cm.gainItem(2022179, 2);
            cm.gainItem(5220010, 2);
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
