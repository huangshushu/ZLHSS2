/*
 NPC Name: 		The Forgotten Temple Manager
 Map(s): 		Deep in the Shrine - Forgotten Twilight
 Description: 		Pink Bean battle starter
 */
        var status = -1;

function start() {
    if (cm.getPlayer().getLevel() < 120) {
        cm.sendOk("你的等級不足120，無法挑戰。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 1) {
        cm.sendOk("只能在頻道1挑戰。");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("PinkBeanBattle");

    if (em == null) {
        cm.sendOk("腳本錯誤，請聯繫管理員。");
        cm.dispose();
        return;
    }
    var eim_status = em.getProperty("state");
    var marr = cm.getQuestRecord(160104);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (eim_status == null || eim_status.equals("0")) {

        var squadAvailability = cm.getSquadAvailability("PinkBean");
        if (squadAvailability == -1) {
            status = 0;
            cm.sendYesNo("你有興趣成為遠征隊隊長?");
        } else if (squadAvailability == 1) {
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("PinkBean");
            if (type == -1) {
                cm.sendOk("由於遠征隊時間流逝，所以必須重新再申請一次遠征隊.");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("PinkBean");
                if (memberType == 2) {
                    cm.sendOk("你已經被黑名單了。");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你要做什麼? \r\n#b#L0#加入遠征隊#l \r\n#b#L1#退出遠征隊#l \r\n#b#L2#查看遠征隊成員#l");
                } else if (memberType == -1) {
                    cm.sendOk("由於遠征隊時間流逝，所以必須重新再申請一次遠征隊。");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你要做什麼?\r\n#b#L0#加入遠征隊#l \r\n#b#L1#退出遠征隊#l \r\n#b#L2#查看遠征隊成員#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("你要做什麼? \r\n#b#L0#查看遠征隊成員#l \r\n#b#L1#移除遠征隊員#l \r\n#b#L2#編輯限制列表#l \r\n#r#L3#進入地圖#l");
                // TODO viewing!
            }
        } else {
            /*var eim = cm.getDisconnected("PinkBeanBattle");
             if (eim == null) {
             var squd = cm.getSquad("PinkBean");
             if (squd != null) {
             cm.sendYesNo("其它遠征隊，正在對戰中.\r\n" + squd.getNextPlayer());
             status = 3;
             } else {
             cm.sendOk("其它遠征隊，正在對戰中.");
             cm.safeDispose();
             }
             } else {
             cm.sendYesNo("你回來了阿，現在是否要重新返回遠征隊所在場地?");
             status = 2;
             }*/


            var props = em.getProperty("leader");
            if (props != null && props.equals("true")) {
                var eim = cm.getDisconnected("PinkBeanBattle");
                if (eim == null) {
                    cm.sendOk("其它遠征隊，正在對戰中。");
                    cm.safeDispose();
                } else {
                    cm.sendOk("其它遠征隊，正在對戰中。");
                    cm.safeDispose();
                }
            } else {
                cm.sendOk("很抱歉你的遠征隊隊長離開了現場，所以你不能再返回戰場。");
                cm.safeDispose();
            }
        }
    } else {



        var props = em.getProperty("leader");
        if (props != null && props.equals("true")) {
            var eimc = em.getInstance("PinkBeanBattle");
            var propsc = eimc.getProperty("isSquadPlayerID_" + cm.getPlayer().getId());
            var sayc = "\r\n" + (eimc == null ? "eimc is null" : propsc) + "\r\n";
            if ((eimc != null) && (propsc != null) && propsc.equals("1")) {
                status = 13;
                sayc += "#b現在是否要重新返回遠征隊所在場地？";
                sayc += "\r\n#r#L1#重新返回遠征隊所在場地#l";
                cm.sendSimple(sayc);
            } else {
                eim = cm.getDisconnected("PinkBeanBattle");
                if (eim == null) {
                    cm.sendOk("其它遠征隊，正在對戰中。" + sayc);
                    cm.safeDispose();
                } else {
                    cm.sendOk("其它遠征隊，正在對戰中。" + sayc);
                    cm.safeDispose();
                }
            }
        } else {
            var eimd = em.getInstance("PinkBeanBattle");
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

        /*var eim = cm.getDisconnected("PinkBeanBattle");
         if (eim == null) {
         var squd = cm.getSquad("PinkBean");
         if (squd != null) {
         cm.sendYesNo("其它遠征隊，正在對戰中.\r\n" + squd.getNextPlayer());
         status = 3;
         } else {
         cm.sendOk("其它遠征隊，正在對戰中.");
         cm.safeDispose();
         }
         } else {
         cm.sendYesNo("你回來了阿，現在是否要重新返回遠征隊所在場地?");
         status = 2;
         }*/
    }
}

function action(mode, type, selection) {
    switch (status) {
        case 0:
            if (mode == 1) {
                if (cm.getPlayer().getBossLogD("皮卡啾次數") == 3) {
                    cm.sendNext("很抱歉每天只能打3次..");
                    cm.dispose();
                    return;
                }
                if (cm.registerSquad("PinkBean", 5, " 已成為遠征隊長，想要參加遠征隊的玩家請開始進行申請。")) {
                    cm.sendOk("你成功申請了遠征隊隊長，你必須在接下來的五分鐘召集玩家申請遠征隊，然後開始戰鬥。");
                    //cm.getPlayer().setBossLog("皮卡啾次數");
                } else {
                    cm.sendOk("創建遠征隊出錯。");
                }
            }
            cm.dispose();
            break;
        case 2:
            if (!cm.reAdd("PinkBeanBattle", "PinkBean")) {
                cm.sendOk("發生未知錯誤，請稍後再試。");
            }
            cm.safeDispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad("PinkBean");
                if (cm.getPlayer().getBossLogD("皮卡啾次數") == 3) {
                    cm.sendNext("很抱歉每天只能打3次..");
                    cm.dispose();
                    return;
                }
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {

                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.sendOk("你已加入了遠征隊。");
                    //cm.getPlayer().setBossLog("皮卡啾次數");
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) { // join
                if (cm.getPlayer().getBossLogD("皮卡啾次數") == 3) {
                    cm.sendNext("很抱歉每天只能打3次..");
                    cm.dispose();
                    return;
                }
                var ba = cm.addMember("PinkBean", true);
                if (ba == 2) {
                    cm.sendOk("遠征隊人數已滿，請稍後再嘗試。");
                } else if (ba == 1) {

                    //cm.getPlayer().setBossLog("皮卡啾次數");
                    cm.sendOk("申請遠征隊成功。");
                } else {
                    cm.sendOk("你已經在遠征隊裡面了。");
                }
            } else if (selection == 1) {// withdraw
                var baa = cm.addMember("PinkBean", false);
                if (baa == 1) {
                    cm.sendOk("離開遠征隊成功。");
                } else {
                    cm.sendOk("你不再遠征隊裡面。");
                }
            } else if (selection == 2) {
                if (!cm.getSquadList("PinkBean", 0)) {
                    cm.sendOk("由於未知的錯誤，遠征隊的請求被拒絕了。");
                }
            }
            cm.dispose();
            break;
        case 10:
            if (mode == 1) {
                if (selection == 0) {
                    if (!cm.getSquadList("PinkBean", 0)) {
                        cm.sendOk("由於未知的錯誤，遠征隊的請求被拒絕了。");
                    }
                    cm.dispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("PinkBean", 1)) {
                        cm.sendOk("由於未知的錯誤，遠征隊的請求被拒絕了。");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("PinkBean", 2)) {
                        cm.sendOk("由於未知的錯誤，遠征隊的請求被拒絕了。");
                        cm.dispose();
                    }
                } else if (selection == 3) { // get insode
                    if (cm.getSquad("PinkBean") != null) {
                        var dd = cm.getEventManager("PinkBeanBattle");
						//记录重返
						重返记录("PinkBean", "品克缤掉线重返", "皮卡啾次數");
                        dd.startInstance(cm.getSquad("PinkBean"), cm.getMap(), 160104);
                    } else {
                        cm.sendOk("由於未知的錯誤，遠征隊的請求被拒絕了。");
                    }
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
            break;
        case 11:
            cm.banMember("PinkBean", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("PinkBean", selection);
            }
            cm.dispose();
            break;
        case 13:
            var em = cm.getEventManager("PinkBeanBattle");
            if ((selection == 1) && (em != null)) {
                var eim = em.getInstance("PinkBeanBattle");
                if ((eim != null) && (eim.getProperty("isSquadPlayerID_" + cm.getPlayer().getId()) != null)) {
                    eim.registerPlayer(cm.getPlayer());
                }
            }
            cm.dispose();
            break;
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