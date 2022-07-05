/*
 NPC Name: 		Adobis
 Map(s): 		El Nath : Entrance to Zakum Altar
 Description: 		Zakum battle starter
 */
var status = 0;

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 211042200) {
        if (selection == -1) {
            cm.dispose();
            return;
        }

        if (selection < 100) {
            cm.sendSimple("#r#L100#扎昆入口#l\r\n#L101#进阶扎昆入口#l");
        } else {
            if (selection == 100) {
                cm.warp(211042300, 0);
            } else if (selection == 101) {
                cm.warp(211042301, 0);
            }
            cm.dispose();
            return;
        }
        return;
    } else if (cm.getPlayer().getMapId() == 211042401) {
        switch (status) {
            case 0:
                if (cm.getPlayer().getLevel() < 100) {
                    cm.sendOk("你的等級尚未達到100等");
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getClient().getChannel() != 1 && cm.getPlayer().getClient().getChannel() != 2) {
                    cm.sendOk("只能在1頻或2頻打");
                    cm.dispose();
                    return;
                }
                var emm = cm.getEventManager("ChaosZakum");

                if (emm == null) {
                    cm.sendOk("腳本錯誤，請聯繫管理員.");
                    cm.safeDispose();
                    return;
                }
                var prop = emm.getProperty("state");
                var marr = cm.getQuestRecord(160102);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                var time = parseInt(data);
                if (prop == null || prop.equals("0")) {
                    var squadAvailability = cm.getSquadAvailability("ChaosZak");
                    if (squadAvailability == -1) {
                        status = 1;
                        cm.sendYesNo("你有興趣成為遠征隊長嗎?");

                    } else if (squadAvailability == 1) {
                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("ChaosZak");
                        if (type == -1) {
                            cm.sendOk("遠征隊已結束，請重新登記。");
                            cm.safeDispose();
                        } else if (type == 0) {
                            var memberType = cm.isSquadMember("ChaosZak");
                            if (memberType == 2) {
                                cm.sendOk("你已經被遠征隊長踢出.");
                                cm.safeDispose();
                            } else if (memberType == 1) {
                                status = 5;
                                cm.sendSimple("你想做什麼? \r\n#b#L0#查看成員#l \r\n#b#L1#加入遠征隊#l \r\n#b#L2#退出遠征隊#l");
                            } else if (memberType == -1) {
                                cm.sendOk("遠征隊已結束，請重新登記。");
                                cm.safeDispose();
                            } else {
                                status = 5;
                                cm.sendSimple("你想做什麼? \r\n#b#L0#查看成員#l \r\n#b#L1#加入遠征隊#l \r\n#b#L2#退出遠征隊#l");
                            }
                        } else { // Is leader
                            status = 10;
                            cm.sendSimple("你想做什麼? \r\n#b#L0#查看成員#l \r\n#b#L1#移除成員#l \r\n#b#L2#編輯限制列表#l \r\n#r#L3#進入地圖#l");
                            // TODO viewing!
                        }
                    } else {
                        var props = emm.getProperty("leader");
                        if (props != null && props.equals("true")) {
                            var eim = cm.getDisconnected("ChaosZakum");
                            if (eim == null) {
                                cm.sendOk("遠征隊與炎魔的戰鬥已經開始。");
                                cm.safeDispose();
                            } else {
                                cm.sendOk("遠征隊與炎魔的戰鬥已經開始。");
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendOk("很抱歉你的遠征隊隊長離開了現場，所以你不能再返回戰場。");
                            cm.safeDispose();
                        }
                    }
                } else {
                    var props = emm.getProperty("leader");
                    if (props != null && props.equals("true")) {
                        var eimc = emm.getInstance("ChaosZakum");
                        var propsc = eimc.getProperty("isSquadPlayerID_" + cm.getPlayer().getId());
                        var sayc = "\r\n" + (eimc == null ? "eimc is null" : propsc) + "\r\n";
                        if ((eimc != null) && (propsc != null) && propsc.equals("1")) {
                            status = 13;
                            sayc += "#b現在是否要重新返回遠征隊所在場地？";
                            sayc += "\r\n#r#L1#重新返回遠征隊所在場地#l";
                            cm.sendSimple(sayc);
                        } else {
                            eim = cm.getDisconnected("ChaosZakum");
                            if (eim == null) {
                                cm.sendOk("遠征隊與炎魔的戰鬥已經開始。" + sayc);
                                cm.safeDispose();
                            } else {
                                cm.sendOk("遠征隊與炎魔的戰鬥已經開始。" + sayc);
                                cm.safeDispose();
                            }
                        }
                    } else {
                        var eimd = emm.getInstance("ChaosZakum");
                        var propsd = eimd.getProperty("isSquadPlayerID_" + cm.getPlayer().getId());
                        var sayd = "\r\n" + (eimd == null ? "eimd is null" : propsd) + "\r\n";
                        if ((eimd != null) && (propsd != null) && propsd.equals("1")) {
                            status = 13;
                            sayd += "#b現在是否要重新返回遠征隊所在場地？";
                            sayd += "\r\n#r#L1#重新返回遠征隊所在場地#l";
                            cm.sendSimple(sayd);
                        } else {

                            cm.sendOk("很抱歉你的遠征隊隊長離開了現場，所以你不能再返回戰場。");
                            cm.safeDispose();
                        }
                    }
                }
                break;
            case 1:
                if (mode == 1) {
                    if (cm.getPlayer().getBossLogD("混沌炎魔次數") == 5) {
                        cm.sendOk("很抱歉每天只能打5次..");
                        cm.dispose();
                        return;
                    }
                    if (cm.registerSquad("ChaosZak", 5, " 被任命為遠征隊長，如果你想參加，請在規定時間內加入遠征隊。")) {
                        cm.sendOk("你被任命為遠征隊長，接下來的5分鐘你可以等待你的成員加入。");
                        //cm.getPlayer().setBossLog("混沌炎魔次數");
                    } else {
                        //cm.warp(280030000, 1);
                        cm.sendOk("添加遠征隊時發生錯誤。");
                    }
                } else {
                    cm.sendOk("如果你想成為遠征隊長，請和我談話.");
                }
                cm.safeDispose();
                break;
            case 2:
                if (!cm.reAdd("ChaosZakum", "ChaosZak")) {
                    cm.sendOk("錯誤，請稍後再試。.");
                }
                cm.dispose();
                break;
            case 3:
                if (mode == 1) {
                    var squd = cm.getSquad("ChaosZak");
                    if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                        if (cm.getPlayer().getBossLogD("混沌炎魔次數") == 5) {
                            cm.sendOk("很抱歉每天只能打5次..");
                            cm.dispose();
                            return;
                        }
                        squd.setNextPlayer(cm.getPlayer().getName());
                        cm.sendOk("你已經加入了遠征隊。");
                        //cm.getPlayer().setBossLog("混沌炎魔次數");
                    }
                }
                cm.dispose();
                break;
            case 5:
                if (selection == 0) {
                    if (!cm.getSquadList("ChaosZak", 0)) {
                        cm.sendOk("由於未知錯誤，你加入遠征隊的請求被拒絕。");
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
                    var ba = cm.addMember("ChaosZak", true);
                    if (ba == 2) {
                        cm.sendOk("遠征隊已滿員，請稍後再試。");
                        cm.safeDispose();
                    } else if (ba == 1) {
                        if (cm.getPlayer().getBossLogD("混沌炎魔次數") == 5) {
                            cm.sendOk("很抱歉每天只能打5次..");
                            cm.dispose();
                            return;
                        }
                        //cm.getPlayer().setBossLog("混沌炎魔次數");
                        cm.sendOk("你已成功加入遠征隊。");
                        cm.safeDispose();
                    } else {
                        cm.sendOk("你已加入遠征隊。");
                        cm.safeDispose();
                    }
                } else {// withdraw
                    var baa = cm.addMember("ChaosZak", false);
                    if (baa == 1) {
                        cm.sendOk("你已成功從遠征隊中退出。");
                        cm.safeDispose();
                    } else {
                        cm.sendOk("你不是遠征隊的一員。");
                        cm.safeDispose();
                    }
                }
                break;
            case 10:
                if (selection == 0) {
                    if (!cm.getSquadList("ChaosZak", 0)) {
                        cm.sendOk("由於未知錯誤，遠征隊請求被拒絕。");
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("ChaosZak", 1)) {
                        cm.sendOk("由於未知錯誤，遠征隊請求被拒絕。");
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("ChaosZak", 2)) {
                        cm.sendOk("由於未知錯誤，遠征隊請求被拒絕。");
                        cm.safeDispose();
                    }

                } else if (selection == 3) { // get insode
                    if (cm.getSquad("ChaosZak") != null) {
                        var dd = cm.getEventManager("ChaosZakum");
						//记录重返
						重返记录("ChaosZak", "进阶扎昆掉线重返", "混沌炎魔次數");
                        dd.startInstance(cm.getSquad("ChaosZak"), cm.getMap(), 160102);
                        cm.dispose();
                    } else {
                        cm.sendOk("由於未知錯誤，遠征隊請求被拒絕。");
                        cm.safeDispose();
                    }
                }
                break;
            case 11:
                cm.banMember("ChaosZak", selection);
                cm.dispose();
                break;
            case 12:
                if (selection != -1) {
                    cm.acceptMember("ChaosZak", selection);
                }
                cm.dispose();
                break;
            case 13:
                var emh = cm.getEventManager("ChaosZakum");
                if ((selection == 1) && (emh != null)) {
                    var eim = emh.getInstance("ChaosZakum");
                    if ((eim != null) && (eim.getProperty("isSquadPlayerID_" + cm.getPlayer().getId()) != null)) {
                        eim.registerPlayer(cm.getPlayer());
                    }
                }
                cm.dispose();
                break;
        }
    } else {
        switch (status) {
            case 0:
                if (cm.getPlayer().getLevel() < 50) {
                    cm.sendOk("你的等級未達到50等。");
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getClient().getChannel() != 1 && cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 4) {
                    cm.sendOk("只能在1頻或2頻或4頻打");
                    cm.dispose();
                    return;
                }
                var emz = cm.getEventManager("ZakumBattle");

                if (emz == null) {
                    cm.sendOk("腳本錯誤，請聯繫管理員。");
                    cm.safeDispose();
                    return;
                }
                var prop = emz.getProperty("state");
                var marr = cm.getQuestRecord(160101);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                var time = parseInt(data);
                if (prop == null || prop.equals("0")) {
                    var squadAvailability = cm.getSquadAvailability("ZAK");
                    if (squadAvailability == -1) {
                        status = 1;
                        cm.sendYesNo("你有興趣成為遠征隊長嗎?");

                    } else if (squadAvailability == 1) {
                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("ZAK");
                        if (type == -1) {
                            cm.sendOk("遠征隊已結束，請重新登記。");
                            cm.safeDispose();
                        } else if (type == 0) {
                            var memberType = cm.isSquadMember("ZAK");
                            if (memberType == 2) {
                                cm.sendOk("你被遠征隊踢出。");
                                cm.safeDispose();
                            } else if (memberType == 1) {
                                status = 5;
                                cm.sendSimple("你想做什麼? \r\n#b#L0#查看成員#l \r\n#b#L1#加入遠征隊#l \r\n#b#L2#退出遠征隊#l");
                            } else if (memberType == -1) {
                                cm.sendOk("遠征隊已結束，請重新登記。");
                                cm.safeDispose();
                            } else {
                                status = 5;
                                cm.sendSimple("你想做什麼? \r\n#b#L0#查看成員#l \r\n#b#L1#加入遠征隊#l \r\n#b#L2#退出遠征隊#l");
                            }
                        } else { // Is leader
                            status = 10;
                            cm.sendSimple("你想做什麼? \r\n#b#L0#查看成員#l \r\n#b#L1#移除成員#l \r\n#b#L2#編輯限制列表#l \r\n#r#L3#進入地圖#l");
                            // TODO viewing!
                        }
                    } else {
                        var propssa = emz.getProperty("leader");
                        if (propssa != null && propssa.equals("true")) {
                            var eim = cm.getDisconnected("ZakumBattle");
                            if (eim == null) {
                                cm.sendOk("遠征隊與炎魔的戰鬥已經開始。");
                                cm.safeDispose();
                            } else {
                                cm.sendOk("遠征隊與炎魔的戰鬥已經開始。");
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendOk("很抱歉你的遠征隊隊長離開了現場，所以你不能再返回戰場。");
                            cm.safeDispose();
                        }

                    }
                } else {

                    var propssb = emz.getProperty("leader");
                    if (propssb != null && propssb.equals("true")) {
                        var eima = emz.getInstance("ZakumBattle");
                        var propsa = eima.getProperty("isSquadPlayerID_" + cm.getPlayer().getId());
                        var saya = "\r\n" + (eima == null ? "eima is null" : propsa) + "\r\n";
                        if ((eima != null) && (propsa != null) && propsa.equals("1")) {
                            status = 13;
                            saya += "#b現在是否要重新返回遠征隊所在場地？";
                            saya += "\r\n#r#L1#重新返回遠征隊所在場地#l";
                            cm.sendSimple(saya);
                        } else {
                            eim = cm.getDisconnected("ZakumBattle");
                            if (eim == null) {
                                cm.sendOk("遠征隊與炎魔的戰鬥已經開始。" + saya);
                                cm.safeDispose();
                            } else {
                                cm.sendOk("遠征隊與炎魔的戰鬥已經開始。" + saya);
                                cm.safeDispose();
                            }
                        }
                    } else {
                        var eimb = emz.getInstance("ZakumBattle");
                        var propsb = eimb.getProperty("isSquadPlayerID_" + cm.getPlayer().getId());
                        var sayb = "\r\n" + (eimb == null ? "eimb is null" : propsb) + "\r\n";
                        if ((eimb != null) && (propsb != null) && propsb.equals("1")) {
                            status = 13;
                            sayb += "#b現在是否要重新返回遠征隊所在場地？";
                            sayb += "\r\n#r#L1#重新返回遠征隊所在場地#l";
                            cm.sendSimple(sayb);
                        } else {
                            cm.sendOk("很抱歉你的遠征隊隊長離開了現場，所以你不能再返回戰場。");
                            cm.safeDispose();
                        }
                    }
                }
                break;
            case 1:
                if (mode == 1) {
                    if (cm.getPlayer().getBossLogD("殘暴炎魔次數") == 5) {
                        cm.sendOk("很抱歉每天只能打5次..");
                        cm.dispose();
                        return;
                    }
                    if (cm.registerSquad("ZAK", 5, " 被任命為遠征隊長，如果你想參加，請在規定時間內加入遠征隊。")) {
                        cm.sendOk("你被任命為遠征隊長，接下來的5分鐘你可以等待你的成員加入。");
                        //cm.getPlayer().setBossLog("殘暴炎魔次數");
                    } else {
                        cm.sendOk("添加遠征隊時發生錯誤。");
                    }
                } else {
                    cm.sendOk("如果你想成為遠征隊長，請和我談話.");
                }
                cm.safeDispose();
                break;
            case 2:
                if (!cm.reAdd("ZakumBattle", "ZAK")) {
                    cm.sendOk("錯誤，請稍後再試。");
                }
                cm.safeDispose();
                break;
            case 3:
                if (mode == 1) {
                    var squd = cm.getSquad("ZAK");
                    if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                        if (cm.getPlayer().getBossLogD("殘暴炎魔次數") == 5) {
                            cm.sendOk("很抱歉每天只能打5次..");
                            cm.dispose();
                            return;
                        }
                        squd.setNextPlayer(cm.getPlayer().getName());
                        cm.sendOk("你已經加入了遠征隊。");
                        //cm.getPlayer().setBossLog("殘暴炎魔次數");
                    }
                }
                cm.dispose();
                break;
            case 5:
                if (selection == 0) {
                    if (!cm.getSquadList("ZAK", 0)) {
                        cm.sendOk("由於未知錯誤，你加入遠征隊的請求被拒絕。");
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
                    var ba = cm.addMember("ZAK", true);
                    if (ba == 2) {
                        cm.sendOk("遠征隊已滿員，請稍後再試。");
                        cm.safeDispose();
                    } else if (ba == 1) {
                        if (cm.getPlayer().getBossLogD("殘暴炎魔次數") == 5) {
                            cm.sendOk("很抱歉每天只能打5次..");
                            cm.dispose();
                            return;
                        }
                        //cm.getPlayer().setBossLog("殘暴炎魔次數");
                        cm.sendOk("你已成功加入遠征隊。");
                        cm.safeDispose();
                    } else {
                        cm.sendOk("你已加入遠征隊。");
                        cm.safeDispose();
                    }
                } else {// withdraw
                    var baa = cm.addMember("ZAK", false);
                    if (baa == 1) {
                        cm.sendOk("你已成功從遠征隊中退出。");
                        cm.safeDispose();
                    } else {
                        cm.sendOk("你不是遠征隊的一員。");
                        cm.safeDispose();
                    }
                }
                break;
            case 10:
                if (selection == 0) {
                    if (!cm.getSquadList("ZAK", 0)) {
                        cm.sendOk("由於未知錯誤，遠征隊請求被拒絕。");
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("ZAK", 1)) {
                        cm.sendOk("由於未知錯誤，遠征隊請求被拒絕。");
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("ZAK", 2)) {
                        cm.sendOk("由於未知錯誤，遠征隊請求被拒絕。");
                        cm.safeDispose();
                    }

                } else if (selection == 3) { // get insode
                    if (cm.getSquad("ZAK") != null) {
                        var dd = cm.getEventManager("ZakumBattle");
						//记录重返
						重返记录("ZAK", "扎昆掉线重返", "殘暴炎魔次數");
                        dd.startInstance(cm.getSquad("ZAK"), cm.getMap(), 160101);
                        cm.dispose();
                    } else {
                        cm.sendOk("由於未知錯誤，遠征隊請求被拒絕。");
                        cm.safeDispose();
                    }
                }
                break;
            case 11:
                cm.banMember("ZAK", selection);
                cm.dispose();
                break;
            case 12:
                if (selection != -1) {
                    cm.acceptMember("ZAK", selection);
                }
                cm.dispose();
                break;
            case 13:
                var emg = cm.getEventManager("ZakumBattle");
                if ((selection == 1) && (emg != null)) {
                    var eim = emg.getInstance("ZakumBattle");
                    if ((eim != null) && (eim.getProperty("isSquadPlayerID_" + cm.getPlayer().getId()) != null)) {
                        eim.registerPlayer(cm.getPlayer());
                    }
                }
                cm.dispose();
                break;
        }
    }
}

function 重返记录(type, name1, name2) {
	var sq = cm.getSquad(type);
	var members = sq.getMembers();
	var bosscopy = cm.getBosslogManager();
	for (var i in members) {
		var chr = cm.getMap().getCharacterByName(members[i]);
		if (chr != null) {
			
			bosscopy.setBossLog(name1, chr);
			bosscopy.setBossLog(name2, chr);
		}
	}
}