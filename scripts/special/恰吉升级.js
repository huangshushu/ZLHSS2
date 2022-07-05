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
        cm.sendSimple("#b你好，我是装备升级员#k\r\n" +
                "#L100##b我要用#i1012164#x2#i4001126#x1000#i4000313#x100枫币100万合成#i1012167#100%成功合成#l#k\r\n" +
                "#L101##b我要用#i1012167#x2#i4001126#x2000#i4000313#x200枫币1000万合成#i1012167#80%成功合成#l#k\r\n" +
                "#L102##b我要用#i1012168#x2#i4001126#x3000#i4000313#x300枫币2000万合成#i1012167#70%成功合成#l#k\r\n" +
                "#L103##b我要用#i1012169#x2#i4001126#x4000#i4000313#x400枫币5000万合成#i1012167#50%成功合成#l#k\r\n" +
                "#L104##b我要用#i1012170#x2#i4001126#x5000#i4000313#x500枫币1亿合成#i1012167#40%成功合成#l#k\r\n" +
                "#L105##b我要用#i1012171#x2#i4001126#x7000#i4000313#x700枫币1亿合成#i1012167#30%成功合成#l#k\r\n" +
                "\r\n");
    } else if (status == 1) {
        if (selection == 100) {
            cm.sendSimple("#b你好，我是装备升级员#k\r\n" +
                    "#b我要用#i1012164#x2#i4001126#x1000#i4000313#x100枫币100万合成#i1012167#100%成功合成#l#k\r\n" +
                    "#L0##b我要合成#l#k\r\n" +
                    "\r\n");
        } else if (selection == 101) {
            cm.sendSimple("#b你好，我是装备升级员#k\r\n" +
                    "#b我要用#i1012167#x2#i4001126#x2000#i4000313#x200枫币1000万合成#i1012167#80%成功合成#l#k\r\n" +
                    "#L1##b我要合成#l#k\r\n" +
                    "\r\n");
        } else if (selection == 102) {
            cm.sendSimple("#b你好，我是装备升级员#k\r\n" +
                    "#b我要用#i1012168#x2#i4001126#x3000#i4000313#x300枫币2000万合成#i1012167#70%成功合成#l#k\r\n" +
                    "#L2##b我要合成#l#k\r\n" +
                    "\r\n");
        } else if (selection == 103) {
            cm.sendSimple("#b你好，我是装备升级员#k\r\n" +
                    "#b我要用#i1012169#x2#i4001126#x4000#i4000313#x400枫币5000万合成#i1012167#50%成功合成#l#k\r\n" +
                    "#L3##b我要合成#l#k\r\n" +
                    "\r\n");

        } else if (selection == 104) {
            cm.sendSimple("#b你好，我是装备升级员#k\r\n" +
                    "#b我要用#i1012170#x2#i4001126#x5000#i4000313#x500枫币1亿合成#i1012167#40%成功合成#l#k\r\n" +
                    "#L4##b我要合成#l#k\r\n" +
                    "\r\n");

        } else if (selection == 105) {
            cm.sendSimple("#b你好，我是装备升级员#k\r\n" +
                    "#b我要用#i1012171#x2#i4001126#x7000#i4000313#x700枫币1亿合成#i1012167#30%成功合成#l#k\r\n" +
                    "#L5##b我要合成#l#k\r\n" +
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
            if (!cm.haveItem(1012164, 2)) {
                cm.sendOk("#i1012164#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4001126, 1000)) {
                cm.sendOk("#i4001126#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4000313, 100)) {
                cm.sendOk("#i4000313#数量不足");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMeso() < 1000000) {
                cm.sendOk("枫币不足");
                cm.dispose();
                return;
            }

            cm.gainItem(1012164, -1);
            cm.gainItem(1012164, -1);
            cm.gainItem(4001126, -1000);
            cm.gainItem(4000313, -100);
            cm.gainMeso(-1000000);
            cm.gainItem(1012167, 1, true);
            cm.sendOk("升级成功");
            cm.dispose();
            return;

        } else if (selection == 1) {
            if (!cm.haveItem(1012167, 2)) {
                cm.sendOk("#i1012167#数量不足");
                cm.dispose();
                return;
            }
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
            if (cm.getPlayer().getMeso() < 10000000) {
                cm.sendOk("枫币不足");
                cm.dispose();
                return;
            }

            cm.gainItem(1012167, -1);
            cm.gainItem(1012167, -1);
            cm.gainItem(4001126, -2000);
            cm.gainItem(4000313, -200);
            cm.gainMeso(-10000000);
            if (nextInt <= 80) {
                cm.gainItem(1012168, 1, true);
                cm.sendOk("升级成功");
                cm.dispose();
                return;
            }
            cm.sendOk("升级失败。");
            cm.dispose();
            return;
        } else if (selection == 2) {

            if (!cm.haveItem(1012168, 2)) {
                cm.sendOk("#i1012168#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4001126, 3000)) {
                cm.sendOk("#i4001126#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4000313, 300)) {
                cm.sendOk("#i4000313#数量不足");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMeso() < 20000000) {
                cm.sendOk("枫币不足");
                cm.dispose();
                return;
            }

            cm.gainItem(1012168, -1);
            cm.gainItem(1012168, -1);
            cm.gainItem(4001126, -3000);
            cm.gainItem(4000313, -300);
            cm.gainMeso(-20000000);
            if (nextInt <= 70) {
                cm.gainItem(1012169, 1, true);
                cm.sendOk("升级成功");
                cm.dispose();
                return;
            }
            cm.sendOk("升级失败。");
            cm.dispose();
            return;
        } else if (selection == 3) {
            if (!cm.haveItem(1012169, 2)) {
                cm.sendOk("#i1012169#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4001126, 4000)) {
                cm.sendOk("#i4001126#数量不足");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4000313, 400)) {
                cm.sendOk("#i4000313#数量不足");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMeso() < 50000000) {
                cm.sendOk("枫币不足");
                cm.dispose();
                return;
            }

            cm.gainItem(1012169, -1);
            cm.gainItem(1012169, -1);
            cm.gainItem(4001126, -4000);
            cm.gainItem(4000313, -400);
            cm.gainMeso(-50000000);
            if (nextInt <= 50) {
                cm.gainItem(1012170, 1, true);
                cm.sendOk("升级成功");
                cm.dispose();
                return;
            }
            cm.sendOk("升级失败。");
            cm.dispose();
            return;
        } else if (selection == 4) {
            if (!cm.haveItem(1012170, 2)) {
                cm.sendOk("#i1012170#数量不足");
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
            if (cm.getPlayer().getMeso() < 100000000) {
                cm.sendOk("枫币不足");
                cm.dispose();
                return;
            }

            cm.gainItem(1012170, -1);
            cm.gainItem(1012170, -1);
            cm.gainItem(4001126, -5000);
            cm.gainItem(4000313, -500);
            cm.gainMeso(-100000000);
            if (nextInt <= 40) {
                cm.gainItem(1012171, 1, true);
                cm.sendOk("升级成功");
                cm.dispose();
                return;
            }
            cm.sendOk("升级失败。");
            cm.dispose();
            return;
        } else if (selection == 5) {
            if (!cm.haveItem(1012171, 2)) {
                cm.sendOk("#i1012171#数量不足");
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

            cm.gainItem(1012171, -1);
            cm.gainItem(1012171, -1);
            cm.gainItem(4001126, -7000);
            cm.gainItem(4000313, -700);
            cm.gainMeso(-100000000);
            if (nextInt <= 30) {
                cm.gainItem(1012172, 1, true);
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
