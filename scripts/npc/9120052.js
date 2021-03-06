/*
	NPC Name: 		Dida
	Map(s): 		Neo Tokyo 2102 : Shibuya (802000710)
	Description: 		Dunas2 Battle starter
*/
var status = -1;

function start() {
    if (cm.getMapId() == 802000710) {
        if (cm.getPlayer().getClient().getChannel() != 2) {
            cm.sendOk("参加远征任务请到 2 频道.");
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("Dunas2");

        if (em == null) {
            cm.sendOk("脚本出错，请联系管理员.");
            cm.dispose();
            return;
        }
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var squadAvailability = cm.getSquadAvailability("dunas2");
            if (squadAvailability == -1) {
                status = 0;
                cm.sendYesNo("你想成为远征队长吗？");

            } else if (squadAvailability == 1) {
                // -1 = Cancelled, 0 = not, 1 = true
                var type = cm.isSquadLeader("dunas2");
                if (type == -1) {
                    cm.sendOk("远征队已经注销.请重新发起.");
                    cm.dispose();
                } else if (type == 0) {
                    var memberType = cm.isSquadMember("dunas2");
                    if (memberType == 2) {
                        cm.sendOk("你被加入制裁名单，不能进行远征任务.");
                        cm.dispose();
                    } else if (memberType == 1) {
                        status = 5;
                        cm.sendSimple("你想干什么? \r\n#b#L0#查看远征队#l \r\n#b#L1#加入远征队#l \r\n#b#L2#离开远征队#l");
                    } else if (memberType == -1) {
                        cm.sendOk("远征队已经注销，请重新发起。");
                        cm.dispose();
                    } else {
                        status = 5;
                        cm.sendSimple("你想干什么? \r\n#b#L0#查看远征队#l \r\n#b#L1#加入远征队#l \r\n#b#L2#离开远征队#l");
                    }
                } else { // Is leader
                    status = 10;
                    cm.sendSimple("你想做什么?远征队长。 \r\n#b#L0#查看远征队#l \r\n#b#L1#制裁远征队员#l \r\n#b#L2#查看制裁名单#l \r\n#r#L3#开始远征任务#l");
                    // TODO viewing!
                }
            } else {
                var eim = cm.getDisconnected("Dunas2");
                if (eim == null) {
                    var squd = cm.getSquad("Dunas2");
                    if (squd != null) {
                        cm.sendYesNo("远征任务已经开始.\r\n" + squd.getNextPlayer());
                        status = 3;
                    } else {
                        cm.sendOk("远征任务已经开始");
                        cm.safeDispose();
                    }
                } else {
                    cm.sendYesNo("你要继续远征任务吗?");
                    status = 2;
                }
            }
        } else {
            var eim = cm.getDisconnected("Dunas2");
            if (eim == null) {
                var squd = cm.getSquad("Dunas2");
                if (squd != null) {
                    cm.sendYesNo("远征任务已经开始\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("远征任务已经开始");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("你要继续进行远征任务吗?");
                status = 2;
            }
        }
    } else {
        status = 25;
        cm.sendNext("你想退出远征队吗?");
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("dunas2", 5, " 已经成为远征队长。如果你想参加远征任务请在5分钟内加入远征队。")) {
                cm.sendOk("你已经成为远征队长，请在5分钟内整理好你的远征队伍，并开始远征任务。");
            } else {
                cm.sendOk("未知错误。成为远征队长失败");
            }
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd("Dunas2", "dunas2")) {
            cm.sendOk("错误。。请再试一次");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Dunas2");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("你已经登记了下一组的远征队。");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("dunas2", 0)) {
                cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("dunas2", true);
            if (ba == 2) {
                cm.sendOk("远征队人数已经足够。请稍后再试");
            } else if (ba == 1) {
                cm.sendOk("加入远征队成功");
            } else {
                cm.sendOk("你已经加入远征队了.");
            }
        } else { // withdraw
            var baa = cm.addMember("dunas2", false);
            if (baa == 1) {
                cm.sendOk("退出远征队成功");
            } else {
                cm.sendOk("你还没有加入远征队.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("dunas2", 0)) {
                    cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("dunas2", 1)) {
                    cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("dunas2", 2)) {
                    cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("dunas2") != null) {
                    var dd = cm.getEventManager("Dunas2");
                    dd.startInstance(cm.getSquad("dunas2"), cm.getMap());
                } else {
                    cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("Dunas2", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Dunas2", selection);
        }
        cm.dispose();
        break;
    case 25:
        cm.warp(802000710, 0);
        cm.dispose();
        break;
    }
}
