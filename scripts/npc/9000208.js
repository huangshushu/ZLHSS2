var points;
var count = 5;
var PQLog = "BOSS竞技";
function start() {
    var record = cm.getEventManager("bossQuest");
    points = record == null ? "0" : record;
    var pqtry = count - cm.getPQLog(PQLog);
    cm.sendSimple("这里可以进行BOSS对抗!当前还能进行：#r" + pqtry + "#k次，请选择难度: \r\n\r\n #b#L0# #v03994115##l #L1# #v03994116##l #L2# #v03994117##l #L28# #v03994118##l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        switch (selection) {
            case 0:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestEASY") != null) {
                        cm.getDisconnected("BossQuestEASY").registerPlayer(cm.getPlayer());
                    } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, 5)) {
                        cm.sendOk("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, count) + "\" #k#n次数已经达到上限了。");
                        cm.dispose();
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 70) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestEASY");
                            if (q == null) {
                                cm.sendOk("项目正在建设中!");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                                cm.gainMembersPQ(PQLog, 1);
                            }
                        } else {
                            cm.sendOk("所有队员必须在70级以上.");
                        }
                    } else {
                        cm.sendOk("我只跟队长对话!.");
                    }
                } else {
                    cm.sendOk("你并没有组队.");
                }
                break;
            case 1:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestMed") != null) {
                        cm.getDisconnected("BossQuestMed").registerPlayer(cm.getPlayer());
                    } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, 5)) {
                        cm.sendOk("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, count) + "\" #k#n次数已经达到上限了。");
                        cm.dispose();
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
                                cm.sendOk("项目正在建设中");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                                cm.gainMembersPQ(PQLog, 1);
                            }
                        } else {
                            cm.sendOk("所有队员必须在100级以上.");
                        }
                    } else {
                        cm.sendOk("我只跟队长对话.");
                    }
                } else {
                    cm.sendOk("请创建一个队伍.");
                }
                break;
            case 2:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestHARD") != null) {
                        cm.getDisconnected("BossQuestHARD").registerPlayer(cm.getPlayer());
                    } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, 5)) {
                        cm.sendOk("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, count) + "\" #k#n次数已经达到上限了。");
                        cm.dispose();
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
                                cm.sendOk("项目正在建设中");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                                cm.gainMembersPQ(PQLog, 1);
                            }
                        } else {
                            cm.sendOk("所有队员必须在120级以上.");
                        }
                    } else {
                        cm.sendOk("我只跟队长对话.");
                    }
                } else {
                    cm.sendOk("请创建一个队伍.");
                }
                break;
            case 28:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestHELL") != null) {
                        cm.getDisconnected("BossQuestHELL").registerPlayer(cm.getPlayer());
                    } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, 5)) {
                        cm.sendOk("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, count) + "\" #k#n次数已经达到上限了。");
                        cm.dispose();
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
                                cm.sendOk("项目正在建设中");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                                cm.gainMembersPQ(PQLog, 1);
                            }
                        } else {
                            cm.sendOk("所有队员必须在160级以上.");
                        }
                    } else {
                        cm.sendOk("我只跟队长对话.");
                    }
                } else {
                    cm.sendOk("请创建一个队伍.");
                }
                break;
            case 3:
                cm.sendOk("#b当前拥有的点数: " + points);
                break;
        }
    }
    cm.dispose();
}
