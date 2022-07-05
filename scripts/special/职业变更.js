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
        cm.sendSimple("#b你好，我是万能转职服务员#k\r\n" +
                "#L0##b免费自由转职（200等以上）#l#k\r\n" +
                "#L1##b花费500红利自由转职（120等以上）#l#k\r\n" +
                "#L2##b花费1000红利满当前职业技能#l#k\r\n" +
                "\r\n");

    } else if (status == 1) {

        if (selection == 0) {
            cm.sendSimple("#b你好，我是万能转职服务员#k\r\n" +
                    "#L10##b冒险家#l#k\r\n" +
                    "#L11##b皇家骑士团#l#k\r\n" +
                    "\r\n");


        } else if (selection == 1) {
            cm.sendSimple("#b你好，我是万能转职服务员#k\r\n" +
                    "#L20##b冒险家#l#k\r\n" +
                    "#L21##b皇家骑士团#l#k\r\n" +
                    "\r\n");

        } else if (selection == 2) {
            if (cm.getPlayer().getCSPoints(3) < 1000) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -1000, true);
            cm.getPlayer().maxSkillsByJob();
            cm.sendOk("完成。");
            cm.dispose();
            return;

        } else {
            cm.dispose();
            return;
        }

    } else if (status == 2) {
        if (selection == 0) {
            if (cm.getPlayer().getLevel() < 200) {
                cm.sendOk("您的等级不足200等。");
                cm.dispose();
                return;
            }
            cm.changeJob(0);
            cm.StatsZs();
            cm.getPlayer().setExp(0);
            cm.sendOk("职业初始完成。");
            cm.dispose();
            return;


        } else if (selection == 1) {
            if (cm.getPlayer().getLevel() < 120) {
                cm.sendOk("您的等级不足120等。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getCSPoints(3) < 500) {
                cm.sendOk("红利点数不足");
                cm.dispose();
                return;
            }
            cm.getPlayer().modifyCSPoints(3, -500, true);
            cm.changeJob(0);
            cm.StatsZs();
            cm.getPlayer().setExp(0);
            cm.sendOk("职业初始完成。");
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
