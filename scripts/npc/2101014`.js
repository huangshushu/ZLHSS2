var points;

function start() {
    var record = cm.getQuestRecord(150001);
    points = record.getCustomData() == null ? "0": record.getCustomData();
    cm.sendSimple("Would you like to have a taste of a relentless boss battle?\n\r\n\r #b#L3#Current points#l#k \r\n\r\n #b#L0# #v03994115##l #L1# #v03994116##l #L2# #v03994117##l #L28# #v03994118##l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        switch (selection) {
        case 0:
            if (cm.getParty() != null) {
                if (cm.getDisconnected("BossQuestEASY") != null) {
                    cm.getDisconnected("BossQuestEASY").registerPlayer(cm.getPlayer());
                } else if (cm.isLeader()) {
                    var party = cm.getPlayer().getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                        if (ccPlayer == null || ccPlayer.getLevel() < 20) {
                            next = false;
                            break;
                        }
                    }
                    if (next) {
                        var q = cm.getEventManager("BossQuestEASY");
                        if (q == null) {
                            cm.sendOk("Unknown error occured");
                        } else {
                            q.startInstance(cm.getParty(), cm.getMap());
                        }
                    } else {
                        cm.sendOk("所有组员必须在当前地图,大于70级");
                    }
                } else {
                    cm.sendOk("你不是队长,请队长与我谈话.");
                }
            } else {
                cm.sendOk("请组队后与我谈话.");
            }
            break;
        case 1:
            if (cm.getParty() != null) {
                if (cm.getDisconnected("BossQuestMed") != null) {
                    cm.getDisconnected("BossQuestMed").registerPlayer(cm.getPlayer());
                } else if (cm.isLeader()) {
                    var party = cm.getPlayer().getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                        if (ccPlayer == null || ccPlayer.getLevel() < 100) {
                            next = false;
                            break;
                        }
                    }
                    if (next) {
                        var q = cm.getEventManager("BossQuestMed");
                        if (q == null) {
                            cm.sendOk("Unknown error occured");
                        } else {
                            q.startInstance(cm.getParty(), cm.getMap());
                        }
                    } else {
                        cm.sendOk("All players must be in map and above level 100.");
                    }
                } else {
                    cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                }
            } else {
                cm.sendOk("Please form a party first.");
            }
            break;
        case 2:
            if (cm.getParty() != null) {
                if (cm.getDisconnected("BossQuestHARD") != null) {
                    cm.getDisconnected("BossQuestHARD").registerPlayer(cm.getPlayer());
                } else if (cm.isLeader()) {
                    var party = cm.getPlayer().getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                        if (ccPlayer == null || ccPlayer.getLevel() < 120) {
                            next = false;
                            break;
                        }
                    }
                    if (next) {
                        var q = cm.getEventManager("BossQuestHARD");
                        if (q == null) {
                            cm.sendOk("Unknown error occured");
                        } else {
                            q.startInstance(cm.getParty(), cm.getMap());
                        }
                    } else {
                        cm.sendOk("All players must be in map and above level 120.");
                    }
                } else {
                    cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                }
            } else {
                cm.sendOk("Please form a party first.");
            }
            break;
        case 28:
            if (cm.getParty() != null) {
                if (cm.getDisconnected("BossQuestHELL") != null) {
                    cm.getDisconnected("BossQuestHELL").registerPlayer(cm.getPlayer());
                } else if (cm.isLeader()) {
                    var party = cm.getPlayer().getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                        if (ccPlayer == null || ccPlayer.getLevel() < 160) {
                            next = false;
                            break;
                        }
                    }
                    if (next) {
                        var q = cm.getEventManager("BossQuestHELL");
                        if (q == null) {
                            cm.sendOk("Unknown error occured");
                        } else {
                            q.startInstance(cm.getParty(), cm.getMap());
                        }
                    } else {
                        cm.sendOk("All players must be in map and above level 160.");
                    }
                } else {
                    cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                }
            } else {
                cm.sendOk("Please form a party first.");
            }
            break;
        case 3:
            cm.sendOk("#bCurrent Points : " + points);
            break;
        }
    }
    cm.dispose();
}