/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
var status = 0;
var fbmc = "怪物嘉年华";//副本名称
var minLevel = 30;//最低等级,如设置错误,开赛等待会剔出
var maxLevel = 200;//最高等级,如设置错误,开赛等待会剔出
var minPartySize = 2;//几VS几人数
var eventname = "cpq";//副本配置文件

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0 && mode == 1) {
        var selStr = "请选择一种你想要参赛嘉年华战斗场地！\r\n#L100# 冒险岛纪念币物品兑换#l";
	var found = false;
        for (var i = 0; i < 6; i++){
            if (getCPQField(i+1) != "") {
                selStr += "\r\n#b#L" + i + "# " + getCPQField(i+1) + "#l#k";
		found = true;
            }
        }
        if (cm.getParty() == null) {
            cm.sendSimple("请组队再来找我。\r\n#L100#冒险岛纪念币兑换#l");
        } else {
            if (cm.isLeader()) {

		if (found) {
                    cm.sendSimple(selStr);
		} else {
		    cm.sendSimple("目前没有房间.\r\n#L100#冒险岛纪念币#l");
		}
            } else {
                cm.sendSimple("请叫你的队长来找我\r\n#L100#冒险岛纪念币#l");
            }
        }
    } else if (status == 1) {
	if (selection == 100) {
	    cm.sendSimple("#b#L0#50个#v4001129##z4001129#兑换#v1122007##z1122007##l\r\n\r\n");
	} else if (selection >= 0 && selection < 6) {
		
		if(selection > 3 ){
		minPartySize = 3;	
		}
		
	    var mapid = 980000000+((selection+1)*100);
            if (cm.getEventManager("cpq").getInstance("cpq"+mapid) == null) {
                if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 4 || selection == 5 || selection == 8 ? 4 : 3)) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap() ==false ) {
                        cm.sendOk("队伍里不符合");
                        cm.dispose();
                    } else {
                        cm.getEventManager("cpq").startInstance(""+mapid, cm.getPlayer());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("您的队伍人数不足,需要"+minPartySize+"人以上才可以嘉年华。");
					cm.dispose();
                }
            } else if (cm.getParty() != null && cm.getEventManager("cpq").getInstance("cpq"+mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
                if (checkLevelsAndMap() ==false ) {
                        cm.sendOk("队伍里不符合");
                        cm.dispose();
                } else {
					var pt = cm.getPlayer().getParty();
					if (pt.getMembers().size() < minPartySize) {
						cm.sendOk("需要"+minPartySize+"人以上才可以嘉年华！！");
						cm.dispose();
					} else {
                    //Send challenge packet here
                    var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq").getInstance("cpq"+mapid).getPlayers().get(0).getParty().getLeader().getName());
                    owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                    //if (owner.getConversation() != 1) {
                        cm.openNpc(owner.getClient(), 2042001);
                    //}
                    cm.sendOk("您的挑战已经发送。");
                    cm.dispose();
                }
				}
            } else {
                cm.sendOk("队伍人数不相符。");
                cm.dispose();
            }
	} else {
	    cm.dispose();
	}
	} else if (status == 2) {
	    if (selection == 0) {
		if (!cm.haveItem(4001129,50)) {
		    cm.sendOk("很抱歉您并没有#b50#k个#v4001129##z4001129#");
			cm.dispose();
		} else if (!cm.canHold(1122007,1)) {		
		    cm.sendOk("背包空间不足.");
			cm.dispose();
		} else {
		    cm.给属性装备(1122007, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 30, 30, 0, 0, 0, 0);//id, 力量, 敏捷, 运气, 智力, hp, mp, 物攻, 魔攻, 物防, 魔防, 回避, 命中, 跳跃, 移动速度
		    cm.gainItem(4001129,-50);
			cm.dispose();
		}
		cm.dispose();
	    } else if (selection == 1) {
		if (!cm.haveItem(4001129,30)) {
		    cm.sendOk("很抱歉您并没有#b30#k个#v4001129##z4001129#");
			cm.dispose();
		} else if (!cm.canHold(2041211,1)) {
		    cm.sendOk("背包空间不足.");
			cm.dispose();
		} else {
		    cm.gainItem(2041211,1);
		    cm.gainItem(4001129,-30);
			cm.dispose();
		}
	    }
        }
}

function checkLevelsAndMap() {
/*     var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
    var valid = 0;
    var inMap = 0;

    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel)) {
            valid = 1;
        }
        if (cPlayer.getMapid() != mapId) {
            valid = 2;
        }
    }
    return valid; */
//-----------------------------------------------------------------------------	
				var party = cm.getParty().getMembers();
			var inMap = cm.partyMembersInMap();
			var levelValid = 0;
			for (var i = 0; i < party.size(); i++) {
				if (party.get(i).getLevel() >= minLevel && party.get(i).getLevel() <= maxLevel)
					levelValid++;
			}
			if (inMap < minPartySize || inMap > minPartySize) {
				cm.sendOk("你的队伍人数不足" + minPartySize + "人.请把你的队伍人员召集在进入副本.");
				cm.dispose();
				return false;
			} else if (levelValid != inMap) {
				cm.sendOk("请确保你的队伍里所有人员("+minPartySize +") 位 都在本地图，且最小等级在 " + minLevel + " 和 " + maxLevel + "之间.");
				cm.dispose();
				return false;
			}
	//-------------------------------------------------------------------------------------
	
	return true;
	
	
}

function getCPQField(fieldnumber) {
    var status = "";
    var event1 = cm.getEventManager("cpq");
    if (event1 != null) {
        var event = event1.getInstance("cpq"+(980000000+(fieldnumber*100)));
        if (event == null && fieldnumber != 5 && fieldnumber != 6 && fieldnumber != 9) {
            status = "嘉年华对战场地 "+fieldnumber+"(2v2)";   // 2 3  4 7  8
        } else if (event == null) {
            status = "嘉年华对战场地 "+fieldnumber+"(3v3)";
        } else if (event != null && (event.getProperty("started").equals("false"))) {
            var averagelevel = 0;
            for (i = 0; i < event.getPlayerCount(); i++) {
                averagelevel += event.getPlayers().get(i).getLevel();
            }
            averagelevel /= event.getPlayerCount();
            status = event.getPlayers().get(0).getParty().getLeader().getName()+"/"+event.getPlayerCount()+"人/平均等级 "+averagelevel;
        }
    }
    return status;
}