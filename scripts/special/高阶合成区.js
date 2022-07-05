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
        cm.sendSimple("#b你好，我是高阶合成员#k\r\n" +
                "#L0##b我要用#i1022191#x1#i4032607#x10枫币5亿合成#i1022192#100%成功合成#l#k\r\n" +
                "#L1##b我要用#i1022192#x1#i4032607#x50枫币10亿合成#i1022193#100%成功合成#l#k\r\n" +
                "\r\n");
    } else if (status == 1) {
        if (selection == 100) {
            cm.sendSimple("#b你好，我是高阶合成员#k\r\n" +
                    "#b我要用#i1022191#x1#i4032607#x10枫币5亿合成#i1022192#100%成功合成#l#k\r\n" +
                    "#L0##b我要合成#l#k\r\n" +
                    "\r\n");

        } else if (selection == 101) {
            cm.sendSimple("#b你好，我是高阶合成员#k\r\n" +
                    "#b我要用#i1022192#x1#i4032607#x50枫币10亿合成#i1022193#100%成功合成#l#k\r\n" +
                    "#L1##b我要合成#l#k\r\n" +
                    "\r\n");
        }
    } else if (status == 2) {
        if (!cm.canHoldByType(1, 1)) {
            cm.sendOk("请确认背包是否已经满了。");
            cm.dispose();
            return;
        }
        var nextInt = Randomizer.nextInt(100);
        if (selection == 0) {
            if (!cm.haveItem(1022191, 1)) {
                cm.sendOk("#i1022191#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4032607, 10)) {
                cm.sendOk("#i4032607#数量不足");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMeso() < 500000000) {
                cm.sendOk("枫币不足");
                cm.dispose();
                return;
            }

            cm.gainItem(1022191, -1);
            cm.gainItem(4032607, -10);
            cm.gainMeso(-500000000);
            cm.gainItem(1022191, 1, true);
            cm.sendOk("升级成功");
            cm.dispose();
            return;

        } else if (selection == 1) {
            if (!cm.haveItem(1022192, 1)) {
                cm.sendOk("#i1022192#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4032607, 50)) {
                cm.sendOk("#i4032607#数量不足");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMeso() < 1000000000) {
                cm.sendOk("枫币不足");
                cm.dispose();
                return;
            }

            cm.gainItem(1022192, -1);
            cm.gainItem(4032607, -50);
            cm.gainMeso(-100000);
            cm.gainItem(1022193, 1, true);
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
