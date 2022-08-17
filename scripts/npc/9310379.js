/*
* 联系QQ : 2023995613 ( Hs、) 
* 支持各式脚本、开区策划、脚本优化
*/

var status = -1;
var PQLog = "远征BOSS";
var EventName = "BossSiwu_HARD";
var minLevel = 200;
var maxLevel = 275;


function start() {
    if (cm.getPlayer().getLevel() < 200) {
        cm.dropMessage(1,"\r\n远征队需要 200 等以上")
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 1) {
        cm.dropMessage(1,"\r\n远征队只能在 频道 1 进行")
        cm.dispose();
        return;
    }
    var em = cm.getEventManager(EventName);

    if (em == null) {
        cm.dropMessage(1,"\r\n副本异常 , 请联繫技术人员")
        cm.dispose();
        return;
    }
    var eim_status = em.getProperty("state");
    var marr = cm.getQuestRecord(160108);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (eim_status == null || eim_status.equals("0")) {
        var squadAvailability = cm.getSquadAvailability(EventName);
        if (squadAvailability == -1) {
            status = 0;
			if (time + (1) >= cm.getCurrentTime() ) {
				cm.dropMessage(1,"\r\n下次参与时间为 : " + cm.getReadableMillis(cm.getCurrentTime(), time + (1)));
				cm.dispose();
				return;
			}
			if (cm.getPlayer().isGM()) {
            cm.sendSimple("\r\n\r\n#fs14##b你想成为远征队队长 ?");
			} else {
			cm.dispose();
			cm.sendOk("#fs14##b只有管理员能够开启远征队活动。")
			return;
			}
        } else if (squadAvailability == 1) {
			if (time + (1) >= cm.getCurrentTime() ) {
				cm.dropMessage(1,"\r\n下次参与时间为 : " + cm.getReadableMillis(cm.getCurrentTime(), time + (1)));
				cm.dispose();
				return;
			}

            var type = cm.isSquadLeader(EventName);
            if (type == -1) {
                cm.dropMessage(1,"\r\n远征队已经结束了 , 请重新申请");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember(EventName);
                if (memberType == 2) {
                    cm.dropMessage(1,"\r\n你被禁止参加远征队");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
					txt = "#fs14##b开始请集中火力对抗BOSS , 并小心随机脚下召唤物\r\n\r\n"
					txt+= "计算方式 :个人输出 < 前 6 名最高输出额外奖励 >\r\n\r\n"
					txt+= "#r     请自行创建一个组队 < 否则无法加入计算 >\r\n\r\n"
					txt+= "#r     一天只能领取一次奖励 , 但可重複入场\r\n"
					txt+= "    #L2##b查看远征队伍#l   #g#L1#退出本次远征#l\r\n\r\n"
                    cm.sendSimple(txt);
                } else if (memberType == -1) {
                    cm.dropMessage(1,"\r\n远征队已经结束了 , 请重新申请");
                    cm.dispose();
                } else {
                    status = 5;
					txt = "#fs14##b开始请集中火力对抗BOSS , 并小心随机脚下召唤物\r\n\r\n"
					txt+= "计算方式 :个人输出 < 前 6 名最高输出额外奖励 >\r\n\r\n"
					txt+= "#r     请自行创建一个组队 < 否则无法加入计算 >\r\n\r\n"
					txt+= "#r     一天只能领取一次奖励 , 但可重複入场\r\n"
					txt+= "    #L0##b加入远征队#l   #g#L2#查看远征队伍#l\r\n\r\n"
					cm.sendSimple(txt);
                }
            } else { 
                status = 10;
                cm.sendSimple("#fs14#\r\n#b#r#L3#开始远征队#l  #b#L0#查看远征队#l #L1#踢出远征队员#l \r\n\r\n#l");/*#L2#管理黑名单#l*/
            }
        } else {
            var eim = cm.getDisconnected(EventName);
            if (eim == null) {
                var squd = cm.getSquad(EventName);
                if (squd != null) {
                    if (time + (1) >= cm.getCurrentTime() ) {
                        cm.dropMessage(1,"\r\n下次参与时间为 : " + cm.getReadableMillis(cm.getCurrentTime(), time + (1)));
                        cm.dispose();
                        return;
                    }
                cm.dropMessage(1,"\r\n远征队已经开始了")
				cm.dispose();
                    status = 3;
                } else {
                    cm.dropMessage(1,"\r\n远征队已经开始了")
                    cm.dispose();
                }
            } else {
                cm.sendYesNo("你回来了?. 你想再次回到远征队的战场吗？\r\n#b#L0#是的,我想再次回到战场#l\r\n#b#L1#让我考虑一下#l");
                status = 2;
            }
        }
    } else {
        var eim = cm.getDisconnected(EventName);
        if (eim == null) {
            var squd = cm.getSquad(EventName);
            if (squd != null) {
                    if (time + (1) >= cm.getCurrentTime() ) {
                        cm.dropMessage(1,"\r\n下次参与时间为 : " + cm.getReadableMillis(cm.getCurrentTime(), time + (1)));
                        cm.dispose();
                        return;
                    }
                cm.dropMessage(1,"\r\n远征队已经开始了")
				cm.dispose();
                status = 3;
            } else {
                cm.dropMessage(1,"\r\n远征队已经开始了")
                cm.dispose();
            }
        } else {
            cm.sendSimple("#fs18##L0#请帮我传回战场#l    #L1#不回去了 ..#l");
            status = 2;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
        case 0:
            if (mode == 1) {
                if (cm.registerSquad(EventName, 10, " 成为了远征队长 , 请要挑战的玩家尽速加入")) {
                    cm.sendSimple("\r\n\r\n#fs14##b你已成为远征队队长 , 请抓紧时间召集你的队员 .");
                } else {
                    cm.dropMessage(1,"\r\n创建远征队出现异常")
                }
            }
            cm.dispose();
            break;
        case 1:
            if (mode == 1) {
                cm.warp(910000000, 0);
            }
            cm.dispose();
            break;
        case 2:
            if (selection == 0 && !cm.reAdd(EventName, EventName)) {
                cm.dropMessage(1,"\r\n创建远征队出现异常")
            }
            cm.dispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad(EventName);
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.dropMessage(1,"\r\n出现异常")
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) {
                var ba = cm.addMember(EventName, true);
                if (ba == 2) {
                    cm.dropMessage(1,"\r\n远征队人数已满 , 请等待下场次")
                } else if (ba == 1) {
                    cm.dropMessage(1,"\r\n成功加入远征队")
                } else {
                    cm.dropMessage(1,"\r\n你已经是远征队的一员")
                }
            } else if (selection == 1) {
                var baa = cm.addMember(EventName, false);
                if (baa == 1) {
                    cm.dropMessage(1,"\r\n已成功脱离远征队")
                } else {
                    cm.dropMessage(1,"\r\n你不是远征队的一员")
                }
            } else if (selection == 2) {
                if (!cm.getSquadList(EventName, 0)) {
                    cm.dropMessage(1,"\r\n加入远征队出现异常")
                }
            }
            cm.dispose();
            break;
        case 10:
            if (mode == 1) {
                if (selection == 0) {
                    if (!cm.getSquadList(EventName, 0)) {
                        cm.dropMessage(1,"\r\n加入远征队出现异常")
                    }
                    cm.dispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList(EventName, 1)) {
                        cm.dropMessage(1,"\r\n加入远征队出现异常")
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList(EventName, 2)) {
                        cm.dropMessage(1,"\r\n加入远征队出现异常")
                        cm.dispose();
                    }
                } else if (selection == 3) { 
                    if (cm.getSquad(EventName) != null) {
                        var dd = cm.getEventManager(EventName);
                        dd.startInstance(cm.getSquad(EventName), cm.getMap(), 160108);
                    } else {
                        cm.dropMessage(1,"\r\n加入远征队出现异常")
                    }
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
            break;
        case 11:
            cm.banMember(EventName, selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember(EventName, selection);
            }
            cm.dispose();
            break;
    }
}