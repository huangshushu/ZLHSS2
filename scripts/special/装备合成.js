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
                "#L0##b恰吉升级#l#k\r\n" +
                 "#L1##b独眼巨人合成#l#k\r\n" +
                "#L2##b高阶合成区#l#k\r\n" +
                "\r\n");

    } else if (status == 1) {
        select = selection;
        switch (select) {
            case 0:
            {
                openNpc(9010000, "恰吉升级");

                break;
            }
            case 1:
            {
                openNpc(9010000, "独眼巨人合成");
                break;
            }
            case 2:
            {
                openNpc(9010000, "高阶合成区");
                break;
            }
            
            default :
            {
                cm.sendOk("此功能未完成");
                cm.dispose();
            }
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
