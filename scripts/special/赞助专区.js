var eff3 = "#fUI/LogoMs/3#";

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
                "#b当月累积满额 3000 额外赠 #i2340000#*1张 #i5220010#*2张 #l#k\r\n" +
                "#b当月累积满额 6000 额外赠 #i2340000#*1张 #i5220010#*2张 #l#k\r\n" +
                "#b当月累积满额 10000 额外赠 #i2340000#*2张 #i5220010#*3张 #l#k\r\n" +
                "#b当月累积满额 15000 额外赠 #i2340000#*3张 #i5220010#*4张 #l#k\r\n" +
                "#b当月累积满额 20000 额外赠 #i2340000#*4张 #i5220010#*5张 #l#k\r\n" +
                "#b当月累积满额 25000 额外赠 #i2340000#*5张 #i5220010#*6张 #l#k\r\n" +
                "#b当月累积满额 30000 额外赠 #i2340000#*6张 #i5220010#*7张 #l#k\r\n" +
                "     " + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + eff3 + "\r\n" +
                "#L0##r红利超值组合包兑换#l#k\r\n" +
                "#L1##r红利点券单品项购买#l#k\r\n" +
                "#L2##r赞助详细说明及介绍#l#k\r\n");

    } else if (status == 1) {
        if (select === -1) {
            select = selection;
        }
        switch (select) {
            case 0:
            {
                openNpc(9010000, "红利组合包");

                break;
            }
            case 1:
            {
                openNpc(9010000, "红利点券单品");
                break;
            }
            case 2:
            {
                cm.sendOk("赞助详细说明及介绍");
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
