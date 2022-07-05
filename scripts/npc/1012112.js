var status = -1;
var minLevel = 10; // 35
var maxLevel = 200; // 65
var minPartySize = 2;
var maxPartySize = 6;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        if (cm.getMapId() == 910010400) {
            cm.warp(100000200);
        } else if (cm.getMapId() == 910010100) {
            cm.sendNext("你的挑战好像很顺利嘛,继续加油吧!");
            cm.dispose();
            return;
        }
        cm.sendNext("#e<组队任务：迎月花保护月妙>#n \r\n只有在满月时在#b迎月花山丘#k出现的神秘的兔子月妙.要见到月妙的话,必须把迎月花种子种植到指定的位置,把满月召唤出来.保护月妙不受残暴的动物们的伤害,直到他做好#b10个年糕#k为止!\r\n请让你的#r组队队长#k与我对话.\r\n\r\n#您当前累计通关：#r"+cm.getBossRankCount('月妙副本总次数')+"#k次\r\n您当前带新通关：#r"+cm.getBossRankCount('越级月妙副本总次数')+"#k次\r\n");//" + minPartySize + " 队员 所有级别 " + minLevel + " ~ " + maxLevel + "
    } else if (status == 1) {
        if (cm.getParty() == null) { // No Party
            cm.sendOk("请遵守以下规定:" + minPartySize + "个队员以上,等级" + minLevel + "至" + maxLevel + "级,并且创建队伍!#b\r\n");
            cm.dispose();
            return;
        } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("如果你想尝试，请告诉 #b组队队长#k 跟我说话.#b#l");
            cm.dispose();
            return;
        }
        // Check if all party members are within PQ levels
        var party = cm.getParty().getMembers();
        var mapId = cm.getMapId();
        var next = true;
        var levelValid = 0;
        var inMap = 0;
        var it = party.iterator();
        while (it.hasNext()) {
            var cPlayer = it.next();
            if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel) && cm.allMembersHere() == true) {
                levelValid += 1;
            } else {
                next = false;
            }
            if (cPlayer.getMapid() == mapId) {
                inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
            }
        }
        if (party.size() > maxPartySize || inMap < minPartySize) {
            next = false;
        }
        if (!next) {
            cm.sendOk("申请进入失败。请遵守以下规定:\r\n\r\n#r要求: " + minPartySize + " 队员, 所有级别 " + minLevel + " ~ " + maxLevel + ".#b#l");
            cm.dispose();
            return;
        }

        var em = cm.getEventManager("HenesysPQ");
        if (em == null) {
            cm.sendOk("副本出现错误.#b#l");
            cm.dispose();
            return;
        }

        var prop = em.getProperty("state");
        if (prop.equals("0") || prop == null) {
            for (var i = 4001095; i < 4001099; i++) {
                cm.givePartyItems(i, 0, true);
            }
            for (var i = 4001100; i < 4001101; i++) {
                cm.givePartyItems(i, 0, true);
            }
			cm.removeAll(4001101);
			cm.savePartyLocation("DUTY_JOIN");
            em.startInstance(cm.getParty(), cm.getMap());
        } else {
            cm.sendOk("另一组队已进入 #r月妙副本#k 在这里。请尝试另一个频道，或者等待当前的任务完成.#b");
        }

        cm.dispose();
        return;
    }
}
