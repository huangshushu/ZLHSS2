var select = -1;
importPackage(Packages.server);
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
        cm.sendSimple("#b你好，我是皮卡啾兑换区#k\r\n" +
                "#L0##b我要用#i4032606#x2兑换#i4032607#1#l#k\r\n" +
                "#L1##b我要用#i4032606#x5兑换#i4032177#1#l#k\r\n" +
                "#L2##b我要用#i4032606#x10兑换#i1113077#1#l#k\r\n" +
                "\r\n");

    } else if (status == 1) {
        if (!cm.canHoldByType(1, 1)) {
            cm.sendOk("请确认背包是否已经满了。");
            cm.dispose();
            return;
        }
        if (!cm.canHoldByType(2, 1)) {
            cm.sendOk("请确认背包是否已经满了。");
            cm.dispose();
            return;
        }
        if (!cm.canHoldByType(4, 1)) {
            cm.sendOk("请确认背包是否已经满了。");
            cm.dispose();
            return;
        }
        if (selection == 0) {
            if (!cm.haveItem(4032606, 2)) {
                cm.sendOk("#i4032606#数量不足");
                cm.dispose();
                return;
            }
            cm.gainItem(4032606, -2);
            cm.gainItem(4032607, 1);
            cm.sendOk("升级成功");
            cm.dispose();
            return;

        } else if (selection == 1) {
            if (!cm.haveItem(4032606, 20)) {
                cm.sendOk("#i4032606#数量不足");
                cm.dispose();
                return;
            }
            cm.gainItem(4032606, -5);
            cm.gainItem(4032177, 1);
            cm.sendOk("升级成功");
            cm.dispose();
            return;
        } else if (selection == 2) {
            if (!cm.haveItem(4032606, 10)) {
                cm.sendOk("#i4032606#数量不足");
                cm.dispose();
                return;
            }
            cm.gainItem(1113077, -10);
            cm.gainItem(1113077, 1);
            cm.sendOk("升级成功");
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
