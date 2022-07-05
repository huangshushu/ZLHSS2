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
        cm.sendSimple("#b你好，我是独眼巨人合成员#k\r\n" +
                "#L100##b我要用#i4001126#x2000#i4000313#x200枫币2500万合成#i1022189#100%成功合成#l#k\r\n" +
                "#L101##b我要用#i1022189#x2#i4001126#x5000#i4000313#x500枫币5000万亿合成#i1022190#70%成功合成#l#k\r\n" +
                "#L102##b我要用#i1022190#x2#i4001126#x7000#i4000313#x700枫币1亿合成#i1022191#50%成功合成#l#k\r\n" +
                "\r\n");
    } else if (status == 1) {
        if (selection == 100) {
            cm.sendSimple("#b你好，我是独眼巨人合成员#k\r\n" +
                    "#b我要用#i4001126#x2000#i4000313#x200枫币2500万合成#i1022189#100%成功合成#l#k\r\n" +
                    "#L0##b我要成功合成#l#k\r\n" +
                    "\r\n");
        } else if (selection == 101) {
            cm.sendSimple("#b你好，我是独眼巨人合成员#k\r\n" +
         
                "#b我要用#i1022189#x2#i4001126#x5000#i4000313#x500枫币5000万亿合成#i1022190#70%成功合成#l#k\r\n" +
                "#L1##b我要合成#l#k\r\n" +
                "\r\n");

        } else if (selection == 102) {
                 cm.sendSimple("#b你好，我是独眼巨人合成员#k\r\n" +
         
                "#b我要用#i1022190#x2#i4001126#x7000#i4000313#x700枫币1亿合成#i1022191#50%成功合成#l#k\r\n" +
                "#L2##b我要合成#l#k\r\n" +
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
            if (!cm.haveItem(4001126, 2000)) {
                cm.sendOk("#i4001126#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4000313, 200)) {
                cm.sendOk("#i4000313#数量不足");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMeso() < 25000000) {
                cm.sendOk("枫币不足");
                cm.dispose();
                return;
            }

            //cm.gainItem(1132004, -1);
            cm.gainItem(4001126, -2000);
            cm.gainItem(4000313, -200);
            cm.gainMeso(-25000000);
            cm.gainItem(1022189, 1, true);
            cm.sendOk("升级成功");
            cm.dispose();
            return;

        } else if (selection == 1) {
            if (!cm.haveItem(1022189, 2)) {
                cm.sendOk("#i1022189#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4001126, 5000)) {
                cm.sendOk("#i4001126#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4000313, 500)) {
                cm.sendOk("#i4000313#数量不足");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMeso() < 50000000) {
                cm.sendOk("枫币不足");
                cm.dispose();
                return;
            }

            cm.gainItem(1022189, -1);
            cm.gainItem(1022189, -1);
            cm.gainItem(4001126, -5000);
            cm.gainItem(4000313, -500);
            cm.gainMeso(-50000000);
            if (nextInt <= 70) {
                cm.gainItem(1022190, 1, true);
                cm.sendOk("升级成功");
                cm.dispose();
                return;
            }
            cm.sendOk("升级失败。");
            cm.dispose();
            return;
        } else if (selection == 2) {
            if (!cm.haveItem(1022190, 2)) {
                cm.sendOk("#i1022190#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4001126, 7000)) {
                cm.sendOk("#i4001126#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4000313, 700)) {
                cm.sendOk("#i4000313#数量不足");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMeso() < 100000000) {
                cm.sendOk("枫币不足");
                cm.dispose();
                return;
            }

            cm.gainItem(1022190, -1);
            cm.gainItem(1022190, -1);
            cm.gainItem(4001126, -7000);
            cm.gainItem(4000313, -700);
            cm.gainMeso(-100000000);
            if (nextInt <= 50) {
                cm.gainItem(1022191, 1, true);
                cm.sendOk("升级成功");
                cm.dispose();
                return;
            }
            cm.sendOk("升级失败。");
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
