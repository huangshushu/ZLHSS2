var select = -1;
var em = null;
var useItemid = 5220004;
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
        if (!cm.isLeader()) {
            cm.sendOk("请组队前往，并且让队长跟我对话");
            cm.dispose();
            return;
        }
        var checks = cm.checkPartyItems(useItemid, 1);
        if (checks != null) {
            var ttxxt = "每次进入每个人都需要一张#v" + useItemid + "#，以下队员没有：\r\n";
            for (var i in checks) {
                ttxxt += "\t#r"+checks[i]+"#k\r\n";
            }
            cm.sendOk(ttxxt);
            cm.dispose();
            return;
        }
        if (cm.checkPartyBossLogCopy("进入无限塔", 1) > 0 && !cm.getPlayer().isGM()) {
            cm.sendOk("每天每个人只能进入一次");
            cm.dispose();
            return;
        }
        em = cm.getEventManager("无限塔");
        if (em == null) {
            cm.sendOk("副本出错，请联系管理员");
            cm.dispose();
            return;
        } else if (!("0").equals(em.getProperty("state"))) {
            cm.sendOk("里面已经有人了");
            cm.dispose();
            return;
        } else {
            cm.givePartyItems(useItemid, -1);
            cm.setPartyBossLogCopy("进入无限塔");
            em.startInstance_Party(cm.getPlayer().getMap(), cm.getPlayer());
            cm.dispose();
        }

    }
}