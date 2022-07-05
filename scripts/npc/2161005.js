var status = -1;

function start() {
    if (cm.getPlayer().getMapId() == 211070100 || cm.getPlayer().getMapId() == 211070101 || cm.getPlayer().getMapId() == 211070110) {
        cm.sendYesNo("你想出去吗？");
        status = 1;
        return;
    }
    if (cm.getPlayer().getLevel() < 120) {
        cm.sendOk("挑战班·莱昂需要120级。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 1) {
        cm.sendOk("班·莱昂只能在1频道尝试");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("VonLeonBattle");

    if (em == null) {
        cm.sendOk("活动尚未开始，请联系管理员");
        cm.dispose();
        return;
    }
    var eim_status = em.getProperty("state");
    var marr = cm.getQuestRecord(160107);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (eim_status == null || eim_status.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("VonLeon");
        if (squadAvailability == -1) {
            status = 0;
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("在过去的12个小时里你已经去了 VonLeon 重置时间还剩: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            cm.sendYesNo("你有兴趣成为探险队的队长吗？");

        } else if (squadAvailability == 1) {
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("在过去的12个小时里你已经去了 VonLeon 重置时间还剩: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("VonLeon");
            if (type == -1) {
                cm.sendOk("队伍结束了，请重新登记。");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("VonLeon");
                if (memberType == 2) {
                    cm.sendOk("你被禁止入队。");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你想做什么？ \r\n#b#L0#加入队伍#l \r\n#b#L1#离开队伍#l \r\n#b#L2#查看队员名单#l");
                } else if (memberType == -1) {
                    cm.sendOk("队伍结束了，请重新登记。");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你想做什么？\r\n#b#L0#加入队伍#l \r\n#b#L1#离开队伍#l \r\n#b#L2#查看队员名单#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("你想做什么，队长？ \r\n#b#L0#查看远征名单#l \r\n#b#L1#踢出远征队#l \r\n#b#L2#从禁止列表中删除用户#l \r\n#r#L3#选择探险队并进入#l");
            // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("VonLeonBattle");
            if (eim == null) {
                var squd = cm.getSquad("VonLeon");
                if (squd != null) {
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("在过去的12个小时里你已经去了 VonLeon 重置时间还剩: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
                    }
                    cm.sendYesNo("远征队与班·莱昂的战斗已经开始.\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("远征队与班·莱昂的战斗已经开始.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("啊，你回来了。你想再加入你的队伍吗？");
                status = 2;
            }
        }
    } else {
        var eim = cm.getDisconnected("VonLeonBattle");
        if (eim == null) {
            var squd = cm.getSquad("VonLeon");
            if (squd != null) {
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("在过去的12个小时里你已经去了 VonLeon 重置时间还剩: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
                }
                cm.sendYesNo("远征队与班·莱昂的战斗已经开始.\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("远征队与班·莱昂的战斗已经开始.");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("啊，你回来了。你想再加入你的队伍吗？");
            status = 2;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
        case 0:
            if (mode == 1) {
                if (cm.registerSquad("VonLeon", 5, " 被任命为队长。如果你想加入探险队，请在规定时间内注册。")) {
                    cm.sendOk("你被任命为班长。在接下来的5分钟里，你可以加入探险队的成员.");
                } else {
                    cm.sendOk("添加您的团队时出错.");
                }
            }
            cm.dispose();
            break;
        case 1:
            if (mode == 1) {
                cm.warp(211061001, 0);
            }
            cm.dispose();
            break;
        case 2:
            if (!cm.reAdd("VonLeonBattle", "VonLeon")) {
                cm.sendOk("错误请再试一次。");
            }
            cm.safeDispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad("VonLeon");
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.sendOk("你已经预订了队列。");
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) { // join
                var ba = cm.addMember("VonLeon", true);
                if (ba == 2) {
                    cm.sendOk("队伍目前已满，请稍后再试。");
                } else if (ba == 1) {
                    cm.sendOk("你已经成功加入了队伍");
                } else {
                    cm.sendOk("你已经是队伍的一员了。");
                }
            } else if (selection == 1) {// withdraw
                var baa = cm.addMember("VonLeon", false);
                if (baa == 1) {
                    cm.sendOk("你成功地退出了队伍");
                } else {
                    cm.sendOk("你不是队伍的一员.");
                }
            } else if (selection == 2) {
                if (!cm.getSquadList("VonLeon", 0)) {
                    cm.sendOk("由于一个未知的错误，队伍的请求被拒绝了。");
                }
            }
            cm.dispose();
            break;
        case 10:
            if (mode == 1) {
                if (selection == 0) {
                    if (!cm.getSquadList("VonLeon", 0)) {
                        cm.sendOk("由于一个未知的错误，队伍的请求被拒绝了.");
                    }
                    cm.dispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("VonLeon", 1)) {
                        cm.sendOk("由于一个未知的错误，队伍的请求被拒绝了.");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("VonLeon", 2)) {
                        cm.sendOk("由于一个未知的错误，队伍的请求被拒绝了.");
                        cm.dispose();
                    }
                } else if (selection == 3) { // get insode
                    if (cm.getSquad("VonLeon") != null) {
                        var dd = cm.getEventManager("VonLeonBattle");
                        dd.startInstance(cm.getSquad("VonLeon"), cm.getMap(), 160107);
                    } else {
                        cm.sendOk("由于一个未知的错误，队伍的请求被拒绝了。");
                    }
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
            break;
        case 11:
            cm.banMember("VonLeon", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("VonLeon", selection);
            }
            cm.dispose();
            break;
    }
}