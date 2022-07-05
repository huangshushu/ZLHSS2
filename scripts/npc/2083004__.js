var dt = new Date();
var year = dt.getFullYear();
var month = (dt.getMonth() + 1);
var new_ = ((year == 2016 && month >= 7) || year >= 2017);
var status = -1;
var horntail = 2;

function start() {
    if (cm.getPlayer().getLevel() < 80) {
        cm.sendNext("必须80等以上才可以挑战#b闇黑龙王#k");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 13 && cm.getPlayer().getClient().getChannel() != 14 && cm.getPlayer().getClient().getChannel() != 15) {
        cm.sendNext("闇黑龙王只有在频道 13 、 14 或15才可以挑战");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("HorntailBattle");

    if (em == null) {
        cm.sendNext("找不到脚本，请联系GM！！");
        cm.dispose();
        return;
    }
    var prop = em.getProperty("state");
    if (prop == null || prop.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("Horntail");
        var check1 = cm.getMapFactory().getMap(240060100);
        var check2 = cm.getMapFactory().getMap(240060200);
        if (check1.playerCount() != 0 || check2.playerCount() != 0) {
            var props = em.getProperty("leader");
            if (props != null && props.equals("true")) {
                var eim = cm.getDisconnected("HorntailBattle");
                if (eim == null) {
                    cm.sendNext("其它远征队，正在对战中。0");
                    cm.safeDispose();
                } else {
                    cm.warp(240060000);
                    cm.getPlayer().dropMessage(5, "黑龙进场调试0。");
                    //cm.sendNext("其它远征队，正在对战中。4");
                    cm.safeDispose();
                }
            } else {
                cm.sendNext("其它远征队，正在对战中。");
                cm.safeDispose();
            }
        }
        if (squadAvailability == -1) {
            status = 0;
            cm.sendYesNo("你有兴趣成为远征队队长？？");
        } else if (squadAvailability == 1) {
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("Horntail");
            if (type == -1) {
                cm.sendNext("你被踢除所以不得再申请远征队。");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("Horntail");
                if (memberType == 2) {
                    cm.sendNext("你已经被黑名单了。");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你要做什么? \r\n#b#L0#查看远征队名单#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                } else if (memberType == -1) {
                    cm.sendNext("由于远征队时间流逝，所以必须重新再申请一次远征队。");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你要做什么? \r\n#b#L0#查看远征队名单#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#管理远征队成员。#l \r\n#b#L2#编辑限制列表。#l \r\n#r#L3#进入地图。#l");
                // TODO viewing!
            }
        } else {
            var props = em.getProperty("leader");
            if (props != null && props.equals("true")) {
                var eim = cm.getDisconnected("HorntailBattle");
                if (eim == null) {
                    cm.sendNext("其它远征队，正在对战中。1");
                    cm.safeDispose();
                } else {
                    cm.sendNext("其它远征队，正在对战中。2");
                    cm.safeDispose();
                }
            } else {
                cm.sendNext("很抱歉你的远征队队长离开了现场，所以你不能再返回战场1。");
                //cm.warp(240060000);
                //cm.getPlayer().dropMessage(5, "黑龙进场调试1。");
                cm.safeDispose();
            }
        }
    } else {
        var props = em.getProperty("leader");
        if (props != null && props.equals("true")) {
            var eim = cm.getDisconnected("HorntailBattle");
            if (eim == null) {
                cm.sendNext("其它远征队，正在对战中。3");
                cm.safeDispose();
            } else {
                cm.warp(240060000);
                cm.getPlayer().dropMessage(5, "黑龙进场调试2。");
                //cm.sendNext("其它远征队，正在对战中。4");
                cm.safeDispose();
            }
        } else {
            //cm.warp(240060000);
            //cm.getPlayer().dropMessage(5, "黑龙进场调试2。");
            cm.sendNext("很抱歉你的远征队队长离开了现场，所以你不能再返回战场2。");
            cm.safeDispose();
        }
    }
}


function action(mode, type, selection) {
    switch (status) {
        case 0:
            if (mode == 1) {
                if (new_) {
                    if (cm.getBossLog("new龙王次数1") >= 1 && cm.getBossLog("new龙王次数2") >= 1) {
                        cm.sendNext("很抱歉每天只能打两次..");
                        cm.dispose();
                        return;
                    }
                } else {
                    if (cm.getBossLog("龙王次数") == horntail) {
                        cm.sendNext("很抱歉每天只能打两次..");
                        cm.dispose();
                        return;
                    }
                }
                if (cm.registerSquad("Horntail", 5, "已成为闇黑龙王远征队长，想要参加远征队的玩家请开始进行申请。")) {
                    cm.sendNext("你成功申请了远征队队长，你必须在接下来的五分钟召集玩家申请远征队，然后开始战斗。");
                    if (new_) {
                        if (cm.getBossLog("new龙王次数1") == 0 && cm.getBossLog("new龙王次数2") == 0) {
                            cm.setBossLog("new龙王次数1");
                        } else if (cm.getBossLog("new龙王次数1") >= 1 && cm.getBossLog("new龙王次数2") == 0) {
                            cm.setBossLog("new龙王次数2");
                        } else {
                            cm.sendNext("龙王挑战次数(1) : " + cm.getBossLog("new龙王次数1") + " 龙王挑战次数(2) : " + cm.getBossLog("new龙王次数2"));
                            cm.dispose();
                            return;
                        }
                    } else {
                        cm.setBossLog("龙王次数");
                    }
                } else {
                    cm.sendNext("申请远征队失败，发生了未知错误。");
                }
            }
            cm.dispose();
            break;
        case 1:
            if (!cm.reAdd("HorntailBattle", "Horntail")) {
                cm.sendNext("错误.... 请重新在试一次。");
            }
            cm.safeDispose();
            break;
        case 5:
            if (selection == 0) {
                if (!cm.getSquadList("Horntail", 0)) {
                    cm.sendNext("错误.... 请重新在试一次。");
                }
            } else if (selection == 1) { // join
                var ba = cm.addMember("Horntail", true);
                if (ba == 2) {
                    cm.sendNext("远征队人数已满，请稍后再尝试。");
                } else if (ba == 1) {
                    if (new_) {
                        if (cm.getBossLog("new龙王次数1") >= 1 && cm.getBossLog("new龙王次数2") >= 1) {
                            cm.sendNext("很抱歉每天只能打两次..");
                            cm.dispose();
                            return;
                        }
                    } else {
                        if (cm.getBossLog("龙王次数") == horntail) {
                            cm.sendNext("很抱歉每天只能打两次..");
                            cm.dispose();
                            return;
                        }
                    }
                    if (new_) {
                        if (cm.getBossLog("new龙王次数1") == 0 && cm.getBossLog("new龙王次数2") == 0) {
                            cm.setBossLog("new龙王次数1");
                        } else if (cm.getBossLog("new龙王次数1") >= 1 && cm.getBossLog("new龙王次数2") == 0) {
                            cm.setBossLog("new龙王次数2");
                        } else {
                            cm.sendNext("龙王挑战次数(1) : " + cm.getBossLog("new龙王次数1") + " 龙王挑战次数(2) : " + cm.getBossLog("new龙王次数2"));
                            cm.dispose();
                            return;
                        }
                    } else {
                        cm.setBossLog("龙王次数");
                    }
                    cm.sendNext("申请远征队成功。");
                } else {
                    cm.sendNext("你已经在远征队里面了。");
                }
            } else { // withdraw
                var baa = cm.addMember("Horntail", false);
                if (baa == 1) {
                    cm.sendNext("离开远征队成功。");
                } else {
                    cm.sendNext("你不再远征队里面。");
                }
            }
            cm.dispose();
            break;
        case 10:
            if (mode == 1) {
                if (selection == 0) {
                    if (!cm.getSquadList("Horntail", 0)) {
                        cm.sendNext("由于未知的错误，远征队的请求被拒绝了。");
                    }
                    cm.dispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("Horntail", 1)) {
                        cm.sendNext("由于未知的错误，远征队的请求被拒绝了。");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("Horntail", 2)) {
                        cm.sendNext("由于未知的错误，远征队的请求被拒绝了。");
                        cm.dispose();
                    }
                } else if (selection == 3) { // get insode
                    if (cm.getSquad("Horntail") != null) {
                        var dd = cm.getEventManager("HorntailBattle");
                        dd.startInstance(cm.getSquad("Horntail"), cm.getMap(), 160100);
                    } else {
                        cm.sendNext("由于未知的错误，远征队的请求被拒绝了。");
                    }
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
            break;
        case 11:
            cm.banMember("Horntail", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("Horntail", selection);
            }
            cm.dispose();
            break;
        default:
            cm.dispose();
            break;
    }
}
