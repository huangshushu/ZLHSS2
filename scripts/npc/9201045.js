var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    var em = cm.getEventManager("Amoria");
    if (em == null) {
        cm.dispose();
        return;
    }
    switch (cm.getMapId()) {
        case 670010500:
            if (!cm.isLeader()) {
                cm.sendOk("请找队长来和我谈话。");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4031597, 50)) {
                cm.mapMessage(6, "跑，跑向前跑，绝对不要回头！");
                cm.warpParty(670010600);
                cm.gainItem(4031597, -50);

            } else {
                cm.sendOk("我希望你和你的队员们弄50个#t4031597#给我。");
            }
            cm.dispose();
            break;
        case 670010600:
            if (!cm.isLeader()) {
                cm.sendOk("请找队长来和我谈话。");
                cm.dispose();
                return;
            }
            cm.warpParty(670010700);
            cm.dispose();
            break;
        case 670010700:
            if (!cm.isLeader()) {
                cm.sendOk("请找队长来和我谈话。");
                cm.dispose();
                return;
            }
            if (em.getProperty("apq4").equals("0") || em.getProperty("apq4").equals("1")) {
                cm.warpParty(670010700, 18);
                cm.spawnMob(9400536, 1, 674, 511);
                em.setProperty("apq4", "2");
            } else {
                if (cm.haveItem(4031594, 1)) {
                    cm.gainItem(4031594, -1);
                    cm.warpParty(670010800, -1);
                } else {
                    cm.sendOk("我需要#t4031594#....");
                }
            }
            cm.dispose();
            break;
    }
}
