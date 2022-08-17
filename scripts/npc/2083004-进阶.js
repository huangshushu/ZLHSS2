var status = -1;
var maxDragon = 3;

function start() {
    if (cm.getPlayer().getLevel() < 120) {
        cm.sendOk("您的等级小于120级，不能挑战进阶暗黑龙王。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 3) {
        cm.sendOk("进阶暗黑龙王只能在3频道召唤。");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("DragonBattle");
    if (em == null) {
        cm.sendOk("脚本错误，请联系管理员。");
        cm.dispose();
        return;
    }
    var prop = em.getProperty("state");
    var data = cm.getBossLog("进阶黑龙");
    if (prop == null || prop.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("Dragon");
		cm.全服喇叭(1,"在这里");
        if (squadAvailability == -1) {
            status = 0;
        if (data >= maxDragon && !cm.getPlayer().isGM()) {
                        cm.sendOk("您今天挑战进阶黑龙的次数已经用完，请明天在来挑战吧！");
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("现在可以申请远征队，你想成为远征队队长吗？");
                } else if (squadAvailability == 1) {
        if (data >= maxDragon && !cm.getPlayer().isGM()) {
                        cm.sendOk("您今天挑战进阶黑龙的次数已经用完，请明天在来挑战吧！");
                        cm.dispose();
                        return;
                    }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("Dragon");
            if (type == -1) {
                cm.sendOk("已经结束了申请。");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("Dragon");
                if (memberType == 2) {
                    cm.sendOk("在远征队的制裁名单。");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你现在想做什么？ \r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                } else if (memberType == -1) {
                    cm.sendOk("The squad has ended, please re-register.");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你现在想做什么？ \r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("进阶暗黑龙王远征队操作:  \r\n#b#L0#查看远征队成员#l \r\n#b#L1#逐出远征队成员#l \r\n#b#L2#查看申请名单#l \r\n#r#L3#开始远征任务#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("DragonBattle");
            if (eim == null) {
                var squd = cm.getSquad("Dragon");
                if (squd != null) {
                            if (data >= maxDragon && !cm.getPlayer().isGM()) {
                                cm.sendOk("您今天挑战进阶黑龙的次数已经用完，请明天在来挑战吧！");
                                cm.dispose();
                                return;
                            }
                            cm.sendYesNo("远征队的挑战已经开始.\r\n" + squd.getNextPlayer());
                            status = 3;
                        } else {
                            cm.sendOk("远征队的挑战已经开始.");
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNo("你要继续进行远征任务吗?");
                        status = 1;
                    }
                }
    } else {
        var eim = cm.getDisconnected("DragonBattle");
        if (eim == null) {
            var squd = cm.getSquad("Dragon");
            if (squd != null) {
            if (data >= maxDragon && !cm.getPlayer().isGM()) {
                    cm.sendOk("您今天挑战普通黑龙的次数已经用完，请明天在来挑战吧！");
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("远征队的挑战已经开始.\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("远征队的挑战已经开始.");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("你要继续进行远征任务吗？");
            status = 1;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("Dragon", 5, " 已被任命为暗黑龙王远征队队长（进阶）。请各位挑战者在5分钟内报名.")) {
                cm.sendOk("你已经被任命为暗黑龙王远征队队长。在接下来的5分钟内，您可以添加远征队成员.请尽快加好队员.超过5分钟后将会取消远征队队长.");
            } else {
                cm.sendOk("如果你想申请远征队的话，那么就来找我吧。");
            }
        }
        cm.dispose();
        break;
    case 1:
        if (!cm.reAdd("DragonBattle", "Dragon")) {
            cm.sendOk("由于未知的错误，操作失败。");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Dragon");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("副本已经有远征队在进行任务了...");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("Dragon", 0)) {
                cm.sendOk("由于未知的错误，操作失败。");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("Dragon", true);
            if (ba == 2) {
                cm.sendOk("远征队目前为满员状态.请稍后再试.");
            } else if (ba == 1) {
                cm.sendOk("你加入了远征队.");
            } else {
                cm.sendOk("你已经是远征队成员了.");
            }
        } else { // withdraw
            var baa = cm.addMember("Dragon", false);
            if (baa == 1) {
                cm.sendOk("你退出远征队成功.");
            } else {
                cm.sendOk("你还不是远征队成员.不能退出远征队.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("Dragon", 0)) {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("Dragon", 1)) {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("Dragon", 2)) {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("Dragon") != null) {
                    var dd = cm.getEventManager("DragonBattle");
                    dd.startInstance(cm.getSquad("Dragon"), cm.getMap(), "进阶黑龙",false);
                } else {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("Dragon", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Dragon", selection);
        }
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}