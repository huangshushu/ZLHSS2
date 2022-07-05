/*
	Red Sign - 101st Floor Eos Tower (221024500)
*/

var status = -1;
var minLevel = 35; // 35
var maxLevel = 200; // 65

var minPartySize = 3;
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
	cm.removeAll(4001022);
	cm.removeAll(4001023);
	if (cm.getParty() == null || !cm.isLeader()) { // No Party
	    cm.sendSimple("如果你想做任务，请 #b队长#k 跟我谈.\r\n\r\n#r要求: " + minPartySize + " 玩家成员, 每个人的等级必须在 " + minLevel + " 到 等级 " + maxLevel + ".#k\r\n您当前累计通关：#r"+cm.getBossRankCount('玩具城副本总次数')+"#k次\r\n您当前带新通关：#r"+cm.getBossRankCount('越级玩具城副本总次数')+
			"#k次\r\n您当前累计通关点数：#r" + cm.getBossRankPoints("玩具城副本总点数") + "#k点\r\n" +
			"#b\r\n#L0#我要兑换有裂痕的眼镜#l\r\n"
			// + "#b#L1#升级有裂痕的眼镜"
		);
	} else {
	    // Check if all party members are within PQ levels
	    var party = cm.getParty().getMembers();
	    var mapId = cm.getMapId();
	    var next = true;
	    var levelValid = 0;
	    var inMap = 0;
	    var it = party.iterator();

	    while (it.hasNext()) {
		var cPlayer = it.next();
		if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
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
	    if (next) {
		var em = cm.getEventManager("LudiPQ");
		if (em == null) {
		    cm.sendSimple("找不到脚本请联络GM#b\r\n#L0#我要兑换#z1022073##l");
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			cm.savePartyLocation("DUTY_JOIN");
			em.startInstance(cm.getParty(), cm.getMap());
			cm.removeAll(4001022);
			cm.removeAll(4001023);
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("其他队伍已经在里面做 #r组队任务了#k 请尝试换频道或者等其他队伍完成。#b\r\n#L0#我要兑换#z1022073##l");
		    }
		}
	    } else {
		cm.sendSimple("你的队伍貌似没有达到要求...:\r\n\r\n#r要求: " + minPartySize + " 玩家成员, 每个人的等级必须在 " + minLevel + " 到 等级 " + maxLevel + ".#b\r\n#L0#我要兑换#z1022073##l");
	    }
	}
    } else { //broken glass
        sel_0 = selection;
        if (sel_0 == 1) {//升级有裂痕的眼镜
            cm.dispose();
            cm.openNpc(2040034,1);
        }else {
            // var cmp = cm.getPlayer().getOneInfo(1202, "cmp");
            if (cm.haveItem(1022073,1)) {
                cm.sendOk("你已经拥有一个有裂痕的眼镜了");
            } else if (!cm.canHold(1022073,1)) {
                cm.sendOk("请空出一些装备拦空间。");
            } else if (cm.getBossRank("玩具城副本通关次数",2) >= 35) {
                //if (cm.getPlayer().getOneInfo(1202, "have") == null || cm.getPlayer().getOneInfo(1202, "have").equals("0")) {
                if (cm.getBossRank("玩具城副本通关次数",2) >= 35 && cm.canHold(1022073)) {
                    cm.gainItem(1022073, 1, true); //should handle automatically for "have"
                    cm.setBossRankCount("玩具城副本通关次数", -35);
                } else {
                    cm.sendOk("兑换错误.");
                }
            } else {
                cm.sendOk("你还没有做35次PQ 目前做了: "+ cm.getBossRank("玩具城副本通关次数",2)+"#k次");
            }
            cm.dispose();
		}
    }
}
